import Student from "./Student.js";

const student1 = new Student('Nazar', 'Megazar', 2007, [100, 90, 80, 70, 60, 70, 60]);
const student2 = new Student('Ksenia', 'Hypernia', 2006, [100, 100, 100, 90, 100, 100, 100]);
const student3 = new Student('Vitaliy', 'Superliy', 2005, [90, 90, 80, 0, 100, 20, 100]);

function randomAttendance(student){
    for(let i = 0; i < 30; i++) {
        const random = Math.floor(Math.random() * 2);
        //console.log(random);
        if(random === 1){
            student.present();
        }
        else{
            student.absent();
        }
    }
}

function consoleLogUser(student){
    console.log(`Name: ${student.userName()}\nLast Name: ${student.userLastName()}\nAge: ${student.userAge()}\nAverage Score: ${student.userAverageScore()}\nSummary: ${student.summary()}`);
    console.table(student)
}

randomAttendance(student1);
randomAttendance(student2);
randomAttendance(student3);

consoleLogUser(student1);
consoleLogUser(student2);
consoleLogUser(student3);
