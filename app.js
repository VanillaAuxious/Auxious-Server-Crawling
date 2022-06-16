const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const runAuction = require('./crawlingAuction');
const runForsale = require('./crawlingForSale');
const schedule = require('node-schedule');

const { connectDB } = require('.//db');
require('dotenv').config();

connectDB();
const app = express();
(async function () {
  await runAuction();
})();
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
