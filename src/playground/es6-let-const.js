var nameVar = 'Andrew'
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
//const nameConst = 'Gunther';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

//const petName = getPetName();
//console.log(petName);
//getPetName();

var fullName = 'Rex Mead';

let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);


