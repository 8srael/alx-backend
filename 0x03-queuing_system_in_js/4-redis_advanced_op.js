/**
 *
 * Task 4. Node Redis client and advanced operations
 *
 */

import { createClient, print } from 'redis';

const redisClient = createClient({
  host: 'localhost',
  port: 6379,
});

redisClient.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

const hashKey = 'HolbertonSchools';

const keys = ['Portland', 'Seattle', 'New York', 'Bogota', 'Cali', 'Paris'];

const values = [50, 80, 20, 20, 40, 2];

keys.forEach((key, index) => {
  redisClient.hset(hashKey, key, values[index], print);
});

redisClient.hgetall((hashKey), (_error, value) => {
  console.log(value);
});
