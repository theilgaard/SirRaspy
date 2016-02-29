(function() {
  /**
   * IP module
   */
  module.exports = function(client) {
    client.addListener('message', function(from, to, message) {
      if(message.match(/^can haz ip?/)) {
          require('dns').lookup(require('os').hostname(), function (err, add, fam) {
            client.say(to, add);
        })
      }
    });
  };
})();
