'use strict';


class Student {
    constructor(name, lastname, yearOfBirth, score) {
        this.name = name;
        this.lastname = lastname;
        this.yearOfBirth = yearOfBirth;
        this.score = score;
        this.lessons = new Array(25).fill(undefined);
    }

    ageOfStudent() {
        return new Date().getFullYear() - this.yearOfBirth;
    }

    averageScore(){
        if(this.score.length === 0) return 0;
        let allScore = 0;
        this.score.forEach(sc => {
            allScore+=sc;
        })
        return allScore/this.score.length;
    }

    present(){
        for(let i = 0; i < this.lessons.length; i++){
            const lesson = this.lessons[i];
            if(lesson === undefined){
                this.lessons[i] = true;
                return this.lessons;
            }
        }
    }

    absent(){
        for(let i = 0; i < this.lessons.length; i++){
            const lesson = this.lessons[i];
            if(lesson === undefined){
                this.lessons[i] = false;
                return this.lessons;
            }
        }
    }

    summary(){
        let allLessons = 0;
        this.lessons.forEach(lesson => {
            if(lesson)
                allLessons += 1;
        })
        const averageLessons = allLessons/this.lessons.length;
        const averageScore = this.averageScore();
        if(averageLessons > 0.9 && averageScore > 90)
            return 'Молодець!';
        else if(averageLessons < 0.9 && averageScore < 90)
            return 'Редиска!';
        else
            return 'Добре, але можна краще';
    }
}

const student1 = new Student('Goose', 'Duke', 2005, [100,90,100,100,100,80,100,100]);
const student2 = new Student('Swan', 'Done', 2008, [50,60,50,100,100,10,100,100]);
const student3 = new Student('Duck', 'Pack', 2006, [20,60,50,0,50,0,50,80]);

function makeCharacteristicsForStudent(student, percentOfPresent, countOfLoop){
    for(let i = 0; i < countOfLoop; i++){
        if(Math.random() * 100 > percentOfPresent){
            student.absent();
        }
        else
        {
            student.present();
        }
    }
}

function allStudentsConsoleLog(studentsArray){
    studentsArray.forEach(student => {
        console.log(`name: ${student.name}\nlastname: ${student.lastname}\nage: ${student.ageOfStudent()}\nsummary: ${student.summary()}`);
    })
}

makeCharacteristicsForStudent(student1, 100, 25);
makeCharacteristicsForStudent(student2, 90, 25);
makeCharacteristicsForStudent(student3, 0, 25);
allStudentsConsoleLog([student1, student2, student3]);
