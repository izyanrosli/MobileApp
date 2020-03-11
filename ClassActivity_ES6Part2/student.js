class Student {
    constructor (name, matricno, major) {
        this.name = name;
        this.matricno = matricno;
        this.major = major;
    }

    // get Name() {
    //     return this.name;
    // }

    // set Name(name) {
    //     this.name = name;
    // }

    // get MatricNo() {
    //     return this.matricno;
    // }

    // set MatricNo(matricno) {
    //     this.matricno = matricno;
    // }

    // get Major() {
    //     return this.major;
    // }

    // set Major(major) {
    //     this.major = major;
    // }

    display = (name, matricno, major) => {
        console.log(`Student's name is ${name}`);
        console.log(`His/her matric no. is ${matricno}`);
        console.log(`His/her major is ${major}`);
    }

}

module.exports = {Student};

