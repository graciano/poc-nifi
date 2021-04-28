import faker from 'faker';
import { promises as fs } from 'fs';

const users = [];
const FILE_NAME = 'users.csv';

const csvUserParse = ({ name, city }) => [name, city].join(',');

[...Array(50)].forEach(() => {
  users.push({
    name: faker.name.firstName(),
    city: faker.address.city()
  })
});

(async () => {
  const csvString = users.map(csvUserParse).join('\r\n');
  await fs.writeFile(FILE_NAME, csvString);
  console.log(`${users.length} users in file ${FILE_NAME}`);
})();
