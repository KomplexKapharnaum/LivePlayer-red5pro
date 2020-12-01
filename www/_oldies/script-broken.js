var FULLSCREEN = false
var allowUnload = true

var isElectron = navigator.userAgent.toLowerCase().indexOf('electron/') > -1
var noSleep = new NoSleep()

var namesCount = 0


// URL PARAMS
var urlParams;
(window.onpopstate = function() {
    var match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function(s) { return decodeURIComponent(s.replace(pl, " ")); },
        query = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
})();


/* View in fullscreen */
function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
}

function hideKeyboard() {
    document.activeElement.blur();
    $("input").blur();
};

function hideCursor() {
    // $('html').css("cursor", "none")
}

function showCursor() {
    // $('html').css("cursor", "pointer")
}

//
//  Run
//
$(function() {

    if ('ctrl' in urlParams) $(".controls").show()

    var timeout = null;
    $('#red5pro-subscriber').on('mousemove touchend', function() {
        showCursor()
            // $('.red5pro-media-control-bar').css("bottom","0px");
            // timeout = setTimeout(function() {
            //     $('.red5pro-media-control-bar').css("bottom","-65px");
            //     hideCursor()
            // }, 4000);
    });

    $('#red5pro-subscriber').on('click touchend', function() {
        var video = document.getElementById('red5pro-subscriber');
        video.muted = false;
        video.volume = 0.99
        video.play()
        console.log('unmute')
    })

    $('.red5pro-minisub').on('click touchend', function() {
        console.log('selected', $(this).attr("data-stream-id"))
            // var v = document.getElementById($(this).attr('id'));
            // var canvas = document.getElementById('bigVideo');
            // var context = canvas.getContext('2d');
            // var cw = Math.floor(canvas.clientWidth);
            // var ch = Math.floor(canvas.clientHeight);
            // canvas.width = cw;
            // canvas.height = ch;

        // updateBigVideo(v, context, cw, ch);
        $('.red5pro-sub').hide()
        $('#player-' + $(this).attr("data-stream-id")).show()
        console.log('show ', '#player-' + $(this).attr("data-stream-id"))
    })

    $('video').on('touchend', function() {
        goFullscreen()
    })

    // Devmode
    document.onkeyup = function(e) {
        if (e.ctrlKey && e.altKey && e.key == 'K' /*&& myName.startsWith('Dick Cheney')*/ )
            $(".controls").show()
    };


    // Set FULLSCREEN
    function goFullscreen() {
        // Prevent Closing (Alt+F4)
        //window.onbeforeunload = (e) => { if (!allowUnload) e.returnValue = false; };
        noSleep.enable();
        openFullscreen()
        window.addEventListener("orientationchange", function() {
            openFullscreen()
        }, false);

        if (isElectron) ipcRenderer.sendSync('fullscreen')

        $('.fs').hide()
        $('.exit').show()
    }


    // $(document).on('touchend', ()=>{
    //     $("#red5pro-subscriber").play()
    //     //goFullscreen()
    // })

    // Init Kontroller
    //
    var kontroller = {

        // Intro
        //
        intro: () => {
            // $("#red5pro-subscriber").prop('muted', true)

            // Show
            $('.widget').hide()
            $('.widget-intro').show()
            $('.widget-exit').show()
            $('.widget-fs').show()

            showCursor()
            $('.fs').hide()
            $('.exit').show()
        },

        // Live
        //
        live: () => {
            $("#red5pro-subscriber").prop('muted', false)

            // Show
            $('.widget').hide()
            $('.widget-live').show()
            $('.widget-exit').show()
            $('.widget-fs').show()

        },

        // Test
        //
        test: () => {
            if (!$(".controls").is(":visible")) return;

            // Show
            $('.widget').hide()
            $('.widget-live').show()
            $('.widget-exit').show()
            $('.widget-fs').show()
            $("#red5pro-subscriber").prop('muted', false)
        },

        // Quit
        //
        end: () => {
            console.log('end')
                // $("#red5pro-subscriber").prop('muted', true)

            $('.widget').hide()
            $('.widget-end').show()

            allowUnload = true

            if (isElectron) setTimeout(() => { ipcRenderer.sendSync('quit') }, 4000)
            else closeFullscreen()

            showCursor()
        },

        // Reload
        //
        reload: () => {
            console.log('reload')
            allowUnload = true
            if (isElectron) ipcRenderer.sendSync('reload')
            else location.reload()
        },

        // Clear
        //
        clear: () => {
            console.log('clear')
            Cookies.remove(cookfield)
            kontroller['reload']()
        }

    }



    // SocketIO
    //
    var socket = io();

    socket.on('connect', () => {
        console.log('connected to socketio')
        socket.emit('iam', 'nobody')
    });

    // Receive Cmd => call action
    //
    socket.on('cmd', (data) => {
        console.log('cmd received: ', data)
        if (data['action'] == 'phase') kontroller[data['arg']](data['from'])
        else kontroller[data['action']](data['arg'], data['from']);
    });

    // Receive Cmd => call action
    //
    socket.on('show-name', (data) => {
        console.log('show name: ', data)
        $('#show-name').html(data)
    });

    // Bind Controls BTNS -> Send cmd to server in order to broadcast
    //
    $(".ctrlBtn").on('click', function(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();

        let cmd = {
            'action': $(this).data('action'),
            'arg': $(this).data('arg'),
            'from': 'nobody'
        }
        socket.emit('cmd', cmd)
    });

    $('#showname-send').on('click', () => {
        socket.emit('show-name', $('#show-newname').val())
        console.log('send new name', $('#show-newname').val())
    });






});