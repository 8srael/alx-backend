/**
 * Task 9. Track progress and errors with Kue: Create the Job processor
 */

import { createQueue } from 'kue';

const blackNumbers = ['4153518780', '4153518781'];

const queue = createQueue();

/**
 *
 * @param {String} phoneNumber
 * @param {String} message
 * @param {Job} job
 * @param {*} done
 *
 */

const sendNotification = (phoneNumber, message, job, done) => {
  job.progress(0, 100);

  if (blackNumbers.includes(phoneNumber)) {
    done(Error(`Phone number ${phoneNumber} is blacklisted`));
    return;
  }
  job.progress(50, 100);
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
  done();
};

queue.process('push_notification_code_2', 2, (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});
