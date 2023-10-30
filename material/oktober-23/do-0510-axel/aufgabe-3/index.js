const user1 = {
    firstName: 'Mark',
    lastName: 'Maxwell',
    age: 32,
    email: 'mark@email.com'
  };

    const user2 = { 
    firstName: 'Jenny',
    lastName: 'Jay',
    age: 38,
    email: 'jenny@email.com'
  }

  const user3 = {
    firstName: 'Sally',
    lastName: 'Samson',
    age: 24,
    email: 'sally@email.com'}; 


// task1.1

user1.city = "Hamburg";
user2.city = "Berlin";
user3.city = "München"

console.log(user1);
console.log(user2);
console.log(user3);

// task1.2

function describe(user){
    return `${user.firstName} ${user.lastName} is ${user.age} yeras old. email:${user.email}.lives in ${user.city}`
}

console.log(describe(user2));

// task1.3

user1.job = "Web E";
user2.job = "Teacher";

function showJob (user) {
    if (user.job){
        return `${user.firstName} ${user.lastName} is a ${user.job}.`
    }
    else {
        return `${user.firstName} ${user.lastName} is unemployed`
    }
    
}
console.log (showJob (user1))