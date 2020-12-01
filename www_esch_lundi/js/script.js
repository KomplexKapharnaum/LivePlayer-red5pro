var noSleep = new NoSleep()


// LOAD PAGE
//
$('.widget').hide()
$('.widget-load').show()

// TOOLS 
//

/* View in fullscreen */
function openFullscreen() {
    var elem = document.documentElement;
    try {
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch((error) => {
                console.warn('Fullscreen error', error);
            })
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    } catch (error) {
        console.warn('Fullscreen error', error);
    }

}

// Set FULLSCREEN
function goFullscreen() {
    // Prevent Closing (Alt+F4)
    //window.onbeforeunload = (e) => { if (!allowUnload) e.returnValue = false; };
    noSleep.enable();
    openFullscreen()
    window.addEventListener("orientationchange", function() {
        openFullscreen()
    }, false);

}

// Devmode
document.onkeyup = function(e) {
    if (e.ctrlKey && e.altKey && e.key == 'K' /*&& myName.startsWith('Dick Cheney')*/ )
        $(".controls").show()
};


// Init Kontroller
//
var kontroller = {

    // Intro
    //
    intro: () => {
        $('video').prop('muted', true)
        $('.widget').hide()
        $('.widget-intro').show()
    },

    // Live
    //
    live: () => {
        // Show
        $('.widget').hide()
        $('.widget-live').show()
    },

    // Test
    //
    test: () => {
        if (!$(".controls").is(":visible")) kontroller['intro']()
            // Show
        $('.widget').hide()
        $('.widget-live').show()
    },

    // Quit
    //
    end: () => {
        $('video').prop('muted', true)
        $('.widget').hide()
        $('.widget-end').show()
    },

    // Reload
    //
    reload: () => {
        location.reload()
    },

    // Clear
    //
    clear: () => {
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