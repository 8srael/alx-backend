/**
 * Task 10. Writing the job creation function
 */

const createPushNotificationsJobs = (jobs, queue) => {
  if (!Array.isArray(jobs)) {
    throw Error('Jobs is not an array');
  }

  for (const jobData of jobs) {
    const job = queue.create('push_notification_code_3', jobData);

    job
      .on('enqueue', () => {
        console.log(`Notification job created: ${job.id}`);
      })
      .on('complete', () => {
        console.log(`Notification job ${job.id} completed`);
      })
      .on('progress', (progress) => {
        console.log(`Notification job ${job.id} ${progress}% complete`);
      })
      .on('failed', (erorMsg) => {
        console.log(`Notification job ${job.id} failed: ${erorMsg}`);
      });

    job.save();
  }
};

export default createPushNotificationsJobs;
