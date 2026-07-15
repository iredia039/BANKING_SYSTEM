let studentDB = [
    {name: 'yonko', level: '200l', studentID: 12345, email: 'crew@gmail.com', password: '0123'},
    {name: 'shanks', level: '200l', studentID: 13345, email: 'crew@gmail.com', password: '0123'},
    {name: 'ace', level: '200l', studentID: 14345, email: 'crew@gmail.com', password: '0123'}
]

class students {
    constructor(name, level, studentID, email, password, grade) {
        this.name = name
        this.class = level
        this.studentID = studentID
        this.email = email
        this.password = password
        this.grade = grade
        this.isLoggedIn = true
        this.isExistingStudent = true

    }

    register(){

    }


    addStudent(id){

        for (let i = 0; i < studentDB.length; i++) {
      
            if (studentDB[i].studentID !== id) {
                studentDB.push(this)
                // break
            } else {
                return `you're already a student`
            }
        }
        return studentDB
    }
     logIn(password){
        if (this.isExistingStudent === true && this.password === password) {
            this.isLoggedIn = true
            return `you are logged in`
        }
     }

    viewProfile(){
        if (this.isLoggedIn === true) {
            return `name ${this.name} class:${this.class} email: ${this.email}`
        } else {
            return 'you are not logged in'
        }
    }


    editProfile(name, password){
        if (this.isLoggedIn === true) {
          this.name = name
          this.password = password
        } else {
            console.log(`you aren't logged in`);
            
        }
    }

    logOut(){
        if (this.isLoggedIn === true) {
            this.isLoggedIn = false
            return `you've been logged out`
        } else {
            return `you aren't logged in`
        }
    }


    viewGrades(){
        if (this.isLoggedIn === true) {
            return this.grade
        } else {
            return 'no'
        }
    }
}


class teachers {
    constructor(name, staffID, password, level) {
        this.name = name
        this.staffID = staffID
        this.password = password
        this.level = level
        // this.assignedGrade = grade
        this.isLoggedIn = false
    }

         logIn(password){
        if (this.password === password) {
            this.isLoggedIn = true
            return `you are logged in`
        }
     }

    viewList(id){
        if (this.staffID === id) {
            let list = [student1]
            return list
        } else  {
            return 'non existent'
        }
    }


    editGrades(teach, grade, changed){

        if (this.staffID === teach && grade === this.level) {
        let shii = [student1, student2, student3, student4]
            
        let reset = shii.filter(year => year.class === '100l').map(changesGrade => {
            changesGrade.class = changed;
        return changesGrade})
        return reset
        } else {
            return `detail doesn't match`
        }
            
        

    }

    block(teacher, grade){
     
        if (this.staffID === teacher && this.level === grade) {
                let list = [student1, student2, student3, student4];
        return list.filter(student => student.class === grade);
        } else {
            return `you are not assigned to that grade`
        }
    }


        logOut(id){
        if (id === staffID) {
            this.isLoggedIn = false
            return `you've been logged out`
        } else {
            return `you aren't logged in`
        }
    }

        loggedOut(){
        if (this.isLoggedIn === true) {
            this.isLoggedIn = false
            return `you've been logged out`
        } else {
            return `you aren't logged in`
        }
    }
}

let student1 = new students('yuji', '100l', 2468, 'yo@gmail', 'yokoso', ['eng', 'maths', 'phy', 'chem', 'bio'])
let student2 = new students('sukuna', '200l', 3468, 'yo@gmail', 'yokoso', ['eng', 'maths', 'phy', 'chem', 'bio'])
let student3 = new students('zoro', '300l', 4468, 'yo@gmail', 'yokoso', ['eng', 'maths', 'phy', 'chem', 'bio'])
let student4 = new students('restia', '100l', 5468, 'yo@gmail', 'yokoso', ['eng', 'maths', 'phy', 'chem', 'bio'])

// console.log(student1.viewProfile());

// console.log(student1.editProfile('gojo', 987654321));
// student1.editProfile('gojo', 987654321)
// console.log(student1.isLoggedIn);

// console.log(student1.logOut());
// console.log(student1.isLoggedIn);

// console.log(student1.viewGrades());

let teacher1 = new teachers('gojo', 78910, 'oi', '100l')
let teacher2 = new teachers('gojo', 68910, 'oi', '200l')
let teacher3 = new teachers('gojo', 58910, 'oi', '300l')
let teacher4 = new teachers('gojo', 78910, 'oi', '100l')

// console.log(teacher1.viewList(78910));

console.log(teacher1.editGrades(88910, '100l', '600l'));

// console.log(teacher2.block(68910, '200l'));

// console.log(teacher1.logIn('oi'));





// console.log(student1);








// console.log(studentDB);

// console.log(student1.addStudent());


let obj = {name: 'json', sub: 'english'};

let hold = JSON.stringify(obj)

console.log(hold);

