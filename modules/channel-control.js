exports.ChannelController = ChannelController;

function ChannelController(client) {
  var commands = this.commands;
  var ccontrol_printHelp = this.ccontrol_printHelp;

  keyphrases = [
    ["Does the bear shit in the woods?", "yes"]
  ];

  client.addListener('message', function(from, to, message) {
    for (var i = 0; i < commands.length; i++) {
      if (message.match(commands[i][0])) {
        eval(commands[i][1]);
      }
    }
  });
};

ChannelController.prototype.commands = [
  ["can haz op?", 'client.send("MODE", to, "+o", from)', 'Get op on channel'],
  ["halp", 'ccontrol_printHelp(to,client,commands)', 'Print this help message']
];

ChannelController.prototype.ccontrol_printHelp = function(to, client, commands) {
  client.say(to, '[+] Channel control v1.0');
  for (var i = commands.length - 1; i >= 0; i--) {
    client.say(to, commands[i][0] + " : " + commands[i][2]);
  };
};
