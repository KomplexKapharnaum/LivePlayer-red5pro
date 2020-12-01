var streams = [];
var currentStream = 1;

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

            this.hideFSbtnTimer = null

            // PLAYER
            this.videoElement = $('<video id="' + this.elem_id + '" class="player" data-stream-id="' + id + '" autoplay loop muted playsinline>')
            this.videoDiv = $('<div id="container-' + this.elem_id + '" class="mainplayer">').append(this.videoElement).appendTo($('.container'))

            // FULLSCREEN
            this.fsBtn = $('<img src="/img/fs.png" id="fs-' + this.elem_id + '" class="fsBtn">').appendTo(this.videoDiv)
            this.fsBtn.on('click touchstart', () => {
                // console.warn('fs', that.elem_id)
                $('.fsContainer').show()
                $('#container-' + that.elem_id).find('.red5pro-media-container').first().detach().appendTo('.fsOverlay');
                $('.fsBtn').hide()
                $('.player').css('border-width', '0px')

                // EXIT FS
                setTimeout(() => {
                    $('.fsOverlay').on('click touchstart', () => {
                        var el = $('.fsOverlay').find(".red5pro-media-container").first()
                        var vid = el.find('video').first()
                        el.detach().appendTo('#container-' + vid.attr('id'));
                        $('.fsContainer').hide()
                        $('.fsOverlay').off('click touchstart')
                    })
                }, 1000)
            })

            // AUDIO FOCUS
            this.videoDiv.on('click touchstart', () => {
                clearTimeout(that.hideFSbtnTimer)
                that.hideFSbtnTimer = setTimeout(() => { $('#fs-' + that.elem_id).hide() }, 2000)

                // console.warn('mainplayer', that.elem_id)
                $('.player').prop('muted', true)
                $('#' + that.elem_id).prop('muted', false)

                $('.player').css('border-width', '0px')
                $('#' + that.elem_id).css('border-width', '1px')

                $('.fsBtn').hide()
                $('#fs-' + that.elem_id).show()

                currentStream = that.id
            })


            // DELAYED start
            setTimeout(() => {
                that.connect()
            }, (id - 1) * 400 + Math.floor(Math.random() * 200))

        }

        retryConnect() {
            clearTimeout(this.retryTimeout);
            if (!this.connected) this.retryTimeout = setTimeout(this.connect.bind(this), 5000)
        }

        setConnected(value) {
            this.connected = value;
            if (!this.connected) {
                this.retryConnect();
                // this.videoElement.get(0).style.backgroundColor = '#200'
            } else {
                // this.videoElement.get(0).style.backgroundColor = '#111'
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
                    // this.videoElement.css('background-image', 'none')
            }
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
        if (currentStream <= 1) currentStream = streams.length - 1
        if (currentStream < 1) currentStream = 0
        console.log('select stream', currentStream)
        if (currentStream < streams.length) streams[currentStream].videoDiv.click()
        return false;
    } else if (e.which == 39) {
        currentStream += 1
        if (currentStream >= streams.length) currentStream = 2
        if (streams.length == 0) currentStream = 0
        console.log('select stream', currentStream)
        if (currentStream < streams.length) streams[currentStream].videoDiv.click()
        return false;
    }
});