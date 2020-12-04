var noSleep = new NoSleep()


// LOAD PAGE
//
$('.widget').hide()
$('.widget-load').show()

// TOOLS 
//

// isMobile
function isMobile() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

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
    $('.instructionContainer').hide()
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

// Chat
function scrollDownChat() {
    $('#chatmessages').animate({ scrollTop: $('#chatmessages')[0].scrollHeight }, 200);
}

function addMsgChat(msg) {
    $('<li>').append($('<span class="nick">').text(msg['nick']))
        .append($('<span class="msg">').text(msg['msg']))
        .appendTo('#chatmessages')
}
$('#chatform').submit(function() {
    var msg = $('#chatmsg').val().trim()
    if (msg == '') return false
    socket.emit('chat-msg', { nick: $('#chatnick').val(), msg: msg });
    $('#chatmsg').val('');
    Cookies.set('nick', $('#chatnick').val())
    return false;
});
socket.on('chat-msg', function(msg) {
    addMsgChat(msg)
    scrollDownChat()
});
socket.on('chat-all', function(allmsg) {
    $('#chatmessages').empty();
    for (msg of allmsg) addMsgChat(msg)
    scrollDownChat()
});
socket.on('chat-clear', function(msg) {
    $('#chatmessages').empty();
    scrollDownChat()
});
$(window).on("resize", () => {
    scrollDownChat()
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


// Instructions
$('.instructionContainer').on('click touchstart', () => {
    $('.instructionContainer').hide()
})
setTimeout(() => {
    $('.instructionContainer').hide()
}, 15000)

// Nick
$('#chatnick').val(Cookies.get('nick'))

// Mobile: full width chat
if (isMobile()) {
    // $('#chatboard').css('maxWidth', '90%')
}