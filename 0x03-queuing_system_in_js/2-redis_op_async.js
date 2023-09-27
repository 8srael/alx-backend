/**
 * Task 3. Node Redis client and async operations
 */

import { createClient, print } from 'redis';
import { promisify } from 'util';

const redisClient = createClient({
  host: 'localhost',
  port: 6379,
});

redisClient.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

const setNewSchool = (schoolName, value) => {
  redisClient.set(schoolName, value, print);
};

const displaySchoolValue = async (schoolName) => {
  console.log(await promisify(redisClient.get).bind(redisClient)(schoolName));
};

async function main() {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}

redisClient.on('connect', async () => {
  console.log('Redis client connected to the server');
  await main();
});
