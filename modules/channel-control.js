(function() {

  module.exports = ChannelController;
  
  var ChannelController = function(client) {
    var commands = self.commands;
    keyphrases = [
      ["Does the bear shit in the woods?", "yes"]
    ];

    client.addListener('message', function(from, to, message) {
      for (var i = 0; i < commands.length; i++) {
        if (message.match(commands[i][0])) {
          console.log('Command matching: ' + commands[i][0])
          eval(commands[i][1]);
        } else {
          console.log("No match for: " + message)
        }
      }
    });
  };

  ChannelController.prototype.commands = [
    ["can haz op?", 'client.send("MODE", to, "+o", from)', 'Get op on channel']
    ["halp", 'ccontrol_printHelp(to, commands)', 'Print this help message']
  ];

  ChannelController.prototype.ccontrol_printHelp = function(to, commands) {
    client.say(to, '[+] Channel control v1.0');
    for (var i = commands.length - 1; i >= 0; i--) {
      client.say(to, commands[i][0] + " : " + commands[i][2]);
    };
  }
})();
