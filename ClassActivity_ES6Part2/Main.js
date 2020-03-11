let myimport = require('./student.js');

const readline = require('readline');

const input = readline.createInterface({

input: process.stdin,
output: process.stdout

});

input.question('Name: ', (name) => {

    input.question('Matric No.: ', (matricno) => {

        input.question('Major:', (major) => {

            let student = new myimport.Student(name, matricno, major);
            student.name = name;
            student.matricno = matricno;
            student.major = major;

            student.display(name, matricno, major);

            input.close();

        }); 

        });
});











