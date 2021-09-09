const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let max = 0;
  let maxInstructor = instructors[0];
  for (const instructor of instructors) {
    let len = instructor.name.length;
    if (len > max) {
      max = len;
      maxInstructor = instructor;
    }
  }
  return maxInstructor;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));