const myFirstName = "Hayat";
console.log("FirstName : " + myFirstName);
const myLastName = "Salawdeh";
console.log("LastName : " + myLastName);
const myFullName = myFirstName + ' ' + myLastName;
console.log("FullName : " + myFullName);

const myHobbies = ["photography", "reading", "travel"];
console.log("My Hobbies :");
for (let i = 0; i < myHobbies.length; i++) {
  console.log((i + 1) + " )" + myHobbies[i]);
}
console.log("********************");
const currentStudent = false;
console.log("Is Student ? " + currentStudent);
const myDream = "to be an international photographer";
console.log("My Dream is " + myDream);
const bestFriend = "Raghad";
console.log("My Best Friend Name is  " + bestFriend);
const phoneNumber = "0567-894-956";
console.log("My phone Number is " + phoneNumber);
const favoriteMeal = "shawerma";
console.log("My Favorite Meal is " + favoriteMeal);
const myBirthYear = 1999;
const currentYear = 2022;

const myAge = currentYear - myBirthYear;
console.log("I am  " + myAge + " years old, born on " + myBirthYear);