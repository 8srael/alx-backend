/**
 * Task 2. Node Redis client and basic operations
 */

import { createClient, print } from 'redis';

const redisClient = createClient({
  host: 'localhost',
  port: 6379,
});

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

const setNewSchool = (schoolName, value) => {
  redisClient.set(schoolName, value, print);
};

const displaySchoolValue = (schoolName) => {
  redisClient.get(schoolName, (__, res) => {
    console.log(res);
  });
};

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
