let studentData = {
  Alice: { age: 18, grade: "A" },
  Bob: { age: 20, grade: "B" },
  Carol: { age: 19, grade: "C" },
  Dave: { age: 21, grade: "B" },
};

const studentNames = Object.keys(studentData);
console.log(studentNames);

const studentGrades = Object.values(studentData).map(
  (student) => student.grade
);
console.log(studentGrades);

const studentInfo = Object.entries(studentData).map(
  ([name, data]) => `${name}: ${data.grade}`
);
console.log(studentInfo);

// 2

function calculateAverageAge(students) {
  let totalAge = 0;
  let studentCount = 0;
  for (let student in students) {
    totalAge += students[student];
    studentCount++;
  }
  if (studentCount === 0) {
    return 0; // Vermeide Division durch 0
  }
  return totalAge / studentCount;
}
let students = {
  Alice: 18,
  Bob: 20,
  Carol: 19,
  Dave: 21,
};

let averageAge = calculateAverageAge(students);
console.log("Der Durchschnitt des Alters der Schüler beträgt:", averageAge);
