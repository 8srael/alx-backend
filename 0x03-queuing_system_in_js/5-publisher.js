/**
 *
 * Task 5. Node Redis client publisher and subscriber
 * publish a message to a channel
 *
 */

import { createClient } from 'redis';

const redisClientPublisher = createClient({
  port: 6379,
  host: 'localhost',
});

const channel = 'holberton school channel';

redisClientPublisher.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

redisClientPublisher.on('connect', () => {
  console.log('Redis client connected to the server');
});

const publishMessage = (message, time) => {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    redisClientPublisher.publish(channel, message);
  }, time);
};

publishMessage('Holberton Student #1 starts course', 1000);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
