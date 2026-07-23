
// Task 1: Welcome Message
console.log("\n========== Task 1 ==========");
console.log("Welcome to the Student Record System");


// Task 2: Declare Variables

console.log("\n========== Task 2 ==========");

let systemName = "Student Record System";
let totalStudents = 4;

console.log("System Name:", systemName);
console.log("Total Students:", totalStudents);


// Task 3: Identify Datatypes

console.log("\n========== Task 3 ==========");

let studentName = "Rahul";
let marks = 85;
let isPassed = true;

console.log("Datatype of studentName:", typeof studentName);
console.log("Datatype of marks:", typeof marks);
console.log("Datatype of isPassed:", typeof isPassed);


// Task 4: Calculate Average Marks

console.log("\n========== Task 4 ==========");

let student1Marks = 80;
let student2Marks = 75;
let student3Marks = 90;

let averageMarks = (student1Marks + student2Marks + student3Marks) / 3;

console.log("Average Marks:", averageMarks);


// Task 5: if-else Condition

console.log("\n========== Task 5 ==========");

let studentMarks = 68;

if (studentMarks >= 40) {
    console.log("Student Passed");
} else {
    console.log("Student Failed");
}


// Task 6: Array of Student Objects

console.log("\n========== Task 6 ==========");

let students = [
    {
        id: 101,
        name: "Rahul",
        age: 20,
        course: "B.Tech",
        marks: 80
    },
    {
        id: 102,
        name: "Anjali",
        age: 21,
        course: "B.Tech",
        marks: 92
    },
    {
        id: 103,
        name: "Rohan",
        age: 20,
        course: "B.Tech",
        marks: 75
    },
    {
        id: 104,
        name: "Sneha",
        age: 19,
        course: "B.Tech",
        marks: 88
    }
];

for (let student of students) {
    console.log(student);
}
// Task 8: Add Student & Find Highest Marks

console.log("\n========== Task 8 ==========");

students.push({
    id: 105,
    name: "Kiran",
    age: 21,
    course: "B.Tech",
    marks: 95
});

console.log("New Student Added.");

let highest = students[0];

for (let student of students) {
    if (student.marks > highest.marks) {
        highest = student;
    }
}

console.log("Highest Marks Student:");
console.log(highest);


// Task 9: Remove & Sort

console.log("\n========== Task 9 ==========");

students.pop();

console.log("After Removing Last Student:");
console.log(students);

students.sort((a, b) => a.marks - b.marks);

console.log("Students Sorted by Marks:");

for (let student of students) {
    console.log(student.name + " - " + student.marks);
}


// Task 11: Function - Pass/Fail

console.log("\n========== Task 11 ==========");

function checkResult(name, marks) {
    if (marks >= 40) {
        return name + " : Pass";
    } else {
        return name + " : Fail";
    }
}

console.log(checkResult("Rahul", 85));
console.log(checkResult("Aman", 30));


// Task 13: Template Literals

console.log("\n========== Task 13 ==========");

let student = {
    name: "Anjali",
    age: 20,
    course: "B.Tech CSE",
    marks: 92
};

console.log(`
Student Details
----------------
Name   : ${student.name}
Age    : ${student.age}
Course : ${student.course}
Marks  : ${student.marks}
`);