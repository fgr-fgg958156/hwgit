function Student(name, lastName, yearOfBirth, score){
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.score = score;
    this.attendance = new Array(25);
}


Student.prototype.userName = function(){
    return this.name;
}

Student.prototype.userLastName = function(){
    return this.lastName;
}

Student.prototype.userAge = function(){
    return new Date().getFullYear() - this.yearOfBirth;
}

Student.prototype.userAverageScore = function(){
    let allScore = 0;
    this.score.forEach(function(item){
        allScore += item;
    })
    return allScore/this.score.length;
}

Student.prototype.present = function(){
    for(let i = 0; i < this.attendance.length; i++){
        if(!(i in this.attendance)){
            this.attendance[i] = true;
            return this.attendance;
        }
    }
    return "Цей елемент повінстю заповнений!";
}

Student.prototype.absent = function(){
    for(let i = 0; i < this.attendance.length; i++){
        if(!(i in this.attendance)){
            this.attendance[i] = false;
            return this.attendance;
        }
    }
    return "Цей елемент повінстю заповнений!";
}

Student.prototype.summary = function(){
    const averageScore = this.userAverageScore();
    let allAttendance= 0;
    this.attendance.forEach(function(item){
        if(item)
            allAttendance += 1;
    });
    const averageAttendance = allAttendance / this.attendance.length;
    if(averageScore > 90 && averageAttendance > 0.9){
        return 'Молодець';
    }
    else if(averageScore < 90 && averageAttendance < 0.9){
        return 'Редиска';
    }
    else{
        return 'Добре, але можна краще';
    }
}

export default Student;