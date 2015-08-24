var irc = require('irc');
var client = new irc.Client('irc.freenode.net', 'SirRaspy', {
    channels: ['#digislackers'],
});


client.addListener('join', function(channel, who) {
    console.log('%s has joined %s', who, channel);
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

client.addListener('message', function (from, to, message) {
    console.log('%s => %s: %s', from, to, message);

    if ( to.match(/^[#&]/) ) {
        // channel message
        if ( message.match(/hello/i) ) {
            client.say(to, 'Hello there ' + from);
        }
        if ( message.match(/dance/) ) {
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D\\-<\u0001") }, 1000);
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D|-<\u0001")  }, 2000);
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D/-<\u0001")  }, 3000);
            setTimeout(function () { client.say(to, "\u0001ACTION dances: :D|-<\u0001")  }, 4000);
        }
	if ( message.match(/can haz op\?/) ){
	    client.send('MODE', '#digislackers', '+o', from);
	}
    }
    else {
        // private message
    }
});
