const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// sort array first by the name ascending alphabetically
  // this means sorting the values of students.name
// if names are equal, sort by descending age


students.sort((a,b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  else if (nameA > nameB) {
    return 1
  }
  else {
    return b.age - a.age;
  }
});
console.log(students);