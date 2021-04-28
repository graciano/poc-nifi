import faker from 'faker';

const users = [];

[...Array(50)].forEach(() => {
  users.push({
    name: faker.name.firstName(),
    city: faker.address.city()
  })
});

console.log(users);

export default {}
