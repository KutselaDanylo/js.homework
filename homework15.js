const calculateTotalBalance = users =>
    users.reduce((total, { balance }) => total + balance, 0);
const getUsersWithFriend = (users, friendName) =>
    users
      .filter(({ friends }) => friends.includes(friendName))
      .map(({ name }) => name);
const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name);
const getSortedUniqueSkills = users =>
    [...new Set(users.flatMap(({ skills }) => skills))].sort();
console.log(calculateTotalBalance(users));
console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
console.log(getNamesSortedByFriendsCount(users));
console.log(getSortedUniqueSkills(users));