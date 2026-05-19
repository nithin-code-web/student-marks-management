const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let students = [];

//adding student
let addStudent = () => {
    rl.question('Enter student name: ', (name) => {
        rl.question('Enter student marks: ', (marks) => { 
            students.push({ name : name.toLowerCase().trim(), marks: Number(marks) });
            rl.question('Do you want to add more students? (yes/no) ', (answer) => {
                if (answer.toLowerCase().trim() === 'yes') {
                    addStudent();
                } else if (answer.toLowerCase().trim() === 'no') {
                    userInput();
                } else {
                    console.log("Invalid input. Return to main menu.");
                    rl.question('Press Enter to continue...', () => {
                        userInput();
                    });
                }
            });
        });
    });
};

//view students
let viewStudents = () => {
    console.log("Students List:");
    students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name}: ${student.marks}`);
    });
    rl.question('Press Enter to continue...', () => {
         userInput();
    });
};

//search student
let searchStudent = () => {
    rl.question('Enter student name to search: ', (name) => {
        const student = students.find(s => s.name === name.toLowerCase().trim());
        if (student) {
            console.log(`Student found: ${student.name}: ${student.marks}`);
        } else {
            console.log("Student not found.");
        }
        rl.question('Press Enter to continue...', () => {
            userInput();
        });
    });
};

//calculate average marks
let calculateAverage = () => {
    if (students.length === 0) {
        console.log("No students available.");
    } else {
        const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
        const average = totalMarks / students.length;
        console.log(`Average Marks: ${average.toFixed(2)}`);
    }
    rl.question('Press Enter to continue...', () => {
        userInput();
    });
};

//find topper
let findTopper = () => {
    if (students.length === 0) {
        console.log("No students available.");
    } else {
        const topper = students.reduce((max, student) => student.marks > max.marks ? student : max);
        console.log(`Topper: ${topper.name}: ${topper.marks}`);
    }
    rl.question('Press Enter to continue...', () => {
        userInput();
    });
};

//find pass/fail
let findPassFail = () => {
    if (students.length === 0) {
        console.log("No students available.");
    } else {
        const passStudents = students.filter(student => student.marks >= 50);
        const failStudents = students.filter(student => student.marks < 50);
        console.log(`Pass Students: ${passStudents.length}`);
        console.log(`Fail Students: ${failStudents.length}`);
    }
    rl.question('Press Enter to continue...', () => {
        userInput();
    });
};


//main menu
let userInput = () => {
    rl.question("Welcome to Student Marks Manager! What would you like to do? \n1. Add Student\n2. View Students\n3.Search Student\n4.Calculate Average Marks\n5. Find Topper \n6.Pass/fail \n7. Exit : ", (answer) => {
        switch (answer) {
            case '1':
                addStudent();
                break;
            case '2':
                viewStudents();
                break;
            case '3':
                searchStudent();
                break;
            case '4':
                calculateAverage();
                break;
            case '5':
                findTopper();
                break;
            case '6':
                findPassFail();
                break;
            case '7':
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                userInput();
        }
    });
}

userInput();






