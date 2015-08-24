(function() {
  /**
   * Google module
   */
  module.exports = function(client) {
    client.addListener('message', function(from, to, message) {
      if(message.match(/^!google /)) {
        var queryString = encodeURIComponent(message.substring(8));
        client.say(to, 'http://google.com/?q=' + queryString);
      }
    });
  };
})();
