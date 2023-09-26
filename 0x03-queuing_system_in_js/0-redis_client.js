/**
 * Task 1. Write a script that connects to the local Redis server.
 */

import redis from 'redis';

const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});
