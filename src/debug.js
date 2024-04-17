//Question 10
const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};
//Question 11
const sortUsersBy = (users, sortingFunction) => {
  return [...users].sort(sortingFunction);
};

//Question 12
const logEachName = (names) => {
  names.forEach((value, index, array) => {
    console.log(value, index, array);
  });
};


const logEachUserBio = (users) => {
  users.forEach((users) => {
    ;
    console.log(users.bio)
  })
}

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
