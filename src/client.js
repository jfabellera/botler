const Discord = require('discord.js');
class Client extends Discord.Client {
  /**
   * Create a new client
   */
  constructor(options = {}) {
    super(options);
  }

  /**
   * Loads all available events
   * @param {string} path
   */
  loadEvents(path) {}

  /**
   * Loads all available commands
   * @param {string} path
   */
  loadCommands(path) {}
}

module.exports = { Client };
