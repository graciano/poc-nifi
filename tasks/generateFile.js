import faker from 'faker';
import { v4 as uuid } from 'uuid';
import { promises as fs } from 'fs';

const users = [];
const FILE_PATH = `files/users-${uuid()}.csv`;

const csvUserParse = ({ name, city }) => [name, city].join(',');

[...Array(50)].forEach(() => {
  users.push({
    name: faker.name.firstName(),
    city: faker.address.city()
  })
});

(async () => {
  const csvHead = Object.keys(users[0]).join(',');
  const csvString = users.map(csvUserParse).join('\r\n');
  await fs.writeFile(FILE_PATH, `${csvHead}\r\n${csvString}`);
  console.log(`${users.length} users in file ${FILE_PATH}`);
})();
