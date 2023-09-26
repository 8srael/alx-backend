/**
 * Task 1. Write a script that connects to the local Redis server
 */

import redis from 'redis';

const redis_client = redis.createClient({
  host: 'localhost',
  port: 6379
});

redis_client.on('connect', () => {
  console.log('Redis client connected to the server');
});

redis_client.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});