// bot.js
var botBuilder = require('claudia-bot-builder');
var bot = botBuilder(function(message) {
  return 'Hello world! I am lil-intro-vert aka Bad Friend Bot';
}, { platforms: ['twilio'] });

module.exports = bot;
