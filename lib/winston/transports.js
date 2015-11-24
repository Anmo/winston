/*
 * transports.js: Set of all transports Winston knows about
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

module.exports = {
  Console: require('./transports/console').Console,
  DailyRotateFile: require('./transports/daily-rotate-file').DailyRotateFile,
  File: require('./transports/file').File,
  Http: require('./transports/http').Http,
  Memory: require('./transports/memory').Memory,
  Webhook: require('./transports/webhook').Webhook,
};
