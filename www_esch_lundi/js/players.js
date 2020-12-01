var streams = [];
var currentStream = 0;

// Debug
// function showError(error, fileline) {
//     if (error.includes('addIceCandidate')) console.error(error, fileline)
//     else alert("ERROR: " + error + "\n " + fileline + " \n\n Please report to DEV Team !");
// }

// window.onerror = function(message, file, line, col, error) {
//     showError(error.message, file + ":" + line)
//     return false;
// };

// var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
// var is_android = navigator.platform.toLowerCase().indexOf("android") > -1;
// var is_ios = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13

// if (is_firefox && (is_android || is_ios)) alert("Firefox mobile not supported yet.. Sorry")

// if (typeof window.addEventListener === 'function') {
//     window.addEventListener("error", function(e) {
//         showError(e.error.message)
//         return false;
//     })
//     window.addEventListener('unhandledrejection', function(e) {
//         //if (e.reason.stack.includes('fullscreen error')) return
//         var msg = e.reason.message
//             // var stack = e.reason.stack.replace(e.reason.message, '');
//         showError(msg, e.reason)
//     })
// }


// Start RED5
//    
(function(red5prosdk) {

    class StreamCli {
        constructor(id) {
            var that = this
            this.id = id
            this.elem_id = "player" + id
            this.streamName = "stream" + id

            this.targetSubscriber = null
            this.retryTimeout
            this.connected = false
            this.ratio = 1.778
            this.refreshPreviewTimer = null

            // DETECT FEATURE
            this.canCapture = (typeof $('#testvid').get(0).captureStream === 'function') || (typeof $('#testvid').get(0).mozCaptureStream === 'function');
            console.warn("Can capture:", this.canCapture)

            // PLAYER
            this.videoElement = $('<video id="' + this.elem_id + '" class="player" data-stream-id="' + id + '" autoplay loop muted playsinline>')
            $('<div class="mainplayer">').append(this.videoElement).appendTo($('.container'))

            // PREV CONTAINER
            this.prevcontainerElement = $('<div id="prevplayer' + id + '" class="prevplayer">').appendTo($('.previewrow'))

            // PREVIEW
            if (this.canCapture) {
                this.previewElement = $('<video id="preview' + id + '" class="preview" data-stream-id="' + id + '" autoplay loop muted playsinline>').appendTo(this.prevcontainerElement)
            } else {
                this.previewElement = $('<canvas id="preview' + id + '" class="preview" data-stream-id="' + id + '">').appendTo(this.prevcontainerElement)
                this.refreshPreviewTimer = setInterval(() => { that.refreshPreview() }, 70)
            }

            // PREVIEW SELECT
            this.previewElement.on('click', () => {
                $('.player').hide().prop('muted', true)
                $('#' + that.elem_id).show().prop('muted', false)
                    // console.warn(that.elem_id, "show")
            })

            // ON RESIZE
            $(window).resize(function() {
                that.resizePreview()
            });

            // DELAYED start
            setTimeout(() => {
                that.connect()
            }, (id - 1) * 200)

        }

        kill() {
            clearInterval(this.refreshPreviewTimer)
            clearTimeout(this.retryTimeout)
            this.videoElement.remove()
            this.prevcontainerElement.remove()
        }

        // Resize preview to fit bar and ratio
        resizePreview() {
            var w = this.prevcontainerElement.width()
            var h = this.prevcontainerElement.height()
            if (w / h > this.ratio) w = Math.floor(this.ratio * h)
            else if (w / h < this.ratio) h = Math.floor(w / this.ratio)
            var oW = Math.floor((this.prevcontainerElement.width() - w) / 2)
            var oH = 0 // var oH = Math.floor((this.prevcontainerElement.height() - h) / 2)
            this.previewElement.get(0).width = w
            this.previewElement.get(0).style.marginLeft = oW
            this.previewElement.get(0).height = h
            this.previewElement.get(0).style.marginTop = oH
        }

        // Refresh canvas preview
        refreshPreview() {

            if (this.videoElement.get(0).paused) {
                console.log("Not Playing")
                return false;
            }
            if (this.videoElement.get(0).ended) {
                console.log("Not Playing")
                return false;
            } // TODO: Blackout !

            var w = this.prevcontainerElement.width()
            var h = this.prevcontainerElement.height()

            if (w / h > this.ratio) w = Math.floor(this.ratio * h)
            else if (w / h < this.ratio) h = Math.floor(w / this.ratio)

            var oW = Math.floor((this.prevcontainerElement.width() - w) / 2)
            var oH = 0
                // var oH = Math.floor((this.prevcontainerElement.height() - h) / 2)

            this.previewElement.get(0).width = w + oW
            this.previewElement.get(0).height = h + oH

            // console.log('draw', oL, oR, w, h)
            var ctx = this.previewElement.get(0).getContext('2d')

            if (this.connected) ctx.fillStyle = "#222";
            else ctx.fillStyle = "#111";
            ctx.fillRect(oW, oH, w, h);

            if (this.connected)
                ctx.drawImage($('#' + this.elem_id).get(0), oW, oH, w, h);
        }

        retryConnect() {
            clearTimeout(this.retryTimeout);
            if (!this.connected) this.retryTimeout = setTimeout(this.connect.bind(this), 5000)
        }

        setConnected(value) {
            this.connected = value;
            if (!this.connected) {
                this.retryConnect();
                this.resizePreview()
                this.previewElement.get(0).style.backgroundColor = '#200'
            } else {
                this.resizePreview()
                this.previewElement.get(0).style.backgroundColor = '#111'
                clearTimeout(this.retryTimeout);
                this.retryTimeout = setTimeout(this.connect.bind(this), 20000)
            }
        }

        // Local lifecycle notifications.
        onSubscriberEvent(event) {
            if (event.type !== 'Subscribe.Time.Update') {
                console.log(this.elem_id, '[Red5ProSubscriber] ' + event.type + '.');
            }
            if (event.type === red5prosdk.SubscriberEventTypes.CONNECTION_CLOSED) {
                this.setConnected(false);
            }
            if (event.type === 'Subscribe.VideoDimensions.Change') {
                clearTimeout(this.retryTimeout);

                console.log(this.elem_id, '[Red5ProSubscriber] resolution: ', event.data.width, event.data.height);
                if (event.data.width > 0 && event.data.height > 0)
                    this.ratio = event.data.width / event.data.height
                $('.waiting').hide()

                // RESIZE PREVIEW
                this.resizePreview()
                this.previewElement.get(0).style.backgroundColor = '#222'

                // COPY VIDEO into PREVIEW
                var vidz = $('#' + this.elem_id).get(0)

                // console.warn(typeof vidz.captureStream === 'function')
                if (typeof vidz.captureStream === 'function') this.previewElement.get(0).srcObject = vidz.captureStream()
                else if (typeof vidz.mozCaptureStream === 'function') this.previewElement.get(0).srcObject = vidz.mozCaptureStream()
                    // else alert("can't capture")

            }
            // if (event.type === 'Subscribe.Play.Unpublish') {
            //     console.warn(this.elem_id, 'UNPUBLISH');
            //     startStream(this.id)
            // }
        }
        onSubscribeFail(message) {
            console.error(this.elem_id, '[Red5ProSubsriber] Subscribe Error :: ' + message);
        }
        onSubscribeSuccess(subscriber) {
            console.log(this.elem_id, '[Red5ProSubsriber] Subscribe Complete.');

        }

        // CONNECT
        connect() {
            var streamCli = this

            clearTimeout(streamCli.retryTimeout);

            var subscriber = new red5prosdk.Red5ProSubscriber()
            subscriber.on(red5prosdk.SubscriberEventTypes.CONNECT_FAILURE, function() {
                streamCli.setConnected(false);
            });
            console.log(streamCli.streamName)
            subscriber.init({
                    protocol: 'wss',
                    port: 443,
                    host: 'red5.kxkm.net',
                    app: 'live',
                    streamName: streamCli.streamName,
                    rtcConfiguration: {
                        iceServers: [{ urls: 'stun:stun2.l.google.com:19302' }],
                        iceCandidatePoolSize: 2,
                        bundlePolicy: 'max-bundle'
                    }, // See https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#RTCConfiguration_dictionary
                    mediaElementId: streamCli.elem_id,
                    subscriptionId: Math.floor(Math.random() * 0x10000).toString(16),
                    videoEncoding: 'NONE',
                    audioEncoding: 'NONE'
                })
                .then(function(subscriberImpl) {
                    streamCli.targetSubscriber = subscriberImpl
                    streamCli.targetSubscriber.on('*', streamCli.onSubscriberEvent.bind(streamCli));
                    return streamCli.targetSubscriber.subscribe()
                })
                .then(function() {
                    streamCli.onSubscribeSuccess(streamCli.targetSubscriber);
                    streamCli.setConnected(true);
                })
                .catch(function(error) {
                    // var jsonError = typeof error === 'string' ? error : JSON.stringify(error, null, 2)
                    streamCli.onSubscribeFail(error)
                    streamCli.setConnected(false)
                });
        }


    }

    for (let k = 2; k <= 5; k++)
        streams[k] = new StreamCli(k);

    $('.container').on('touchstart', () => {
        $('.player').trigger('play');
        goFullscreen()
    })

})(window.red5prosdk);





$(document).keydown(function(e) {
    if (e.which == 37) {
        currentStream -= 1
        if (currentStream <= 0) currentStream = streams.length - 1
        if (currentStream < 0) currentStream = 0
        console.log('select stream', currentStream)
        if (currentStream < streams.length) streams[currentStream].previewElement.click()
        return false;
    } else if (e.which == 39) {
        currentStream += 1
        if (currentStream >= streams.length) currentStream = 1
        if (streams.length == 0) currentStream = 0
        console.log('select stream', currentStream)
        if (currentStream < streams.length) streams[currentStream].previewElement.click()
        return false;
    }

});