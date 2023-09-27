/**
 *
 * Task 5. Node Redis client publisher and subscriber
 * subscribe to a channel and listen for a message
 *
 */

import { createClient } from 'redis';

const redisClientSubscriber = createClient({
  port: 6379,
  host: 'localhost',
});

const channel = 'holberton school channel';

redisClientSubscriber.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

redisClientSubscriber.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClientSubscriber.subscribe(channel);

redisClientSubscriber.on('message', (channel, msg) => {
  console.log(msg);
  if (msg === 'KILL_SERVER') {
    redisClientSubscriber.unsubscribe(channel);
    redisClientSubscriber.quit();
  }
});
