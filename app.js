const express = require('express');
const runAuction = require('./crawlingAuction');
const runForsale = require('./crawlingForSale');
const schedule = require('node-schedule');

const { connectDB } = require('.//db');
require('dotenv').config();

connectDB();
const app = express();

(function () {
  const crawlingAuction = schedule.scheduleJob(
    '0 0 */1 0 0 0',
    async function () {
      await runAuction();
    }
  );
  const crawlingForSale = schedule.scheduleJob(
    '0 0 */2 0 0 0',
    async function () {
      await runForsale();
    }
  );
})();

module.exports = app;
