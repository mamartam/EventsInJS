const students = [
    { name: 'John Doe', course: 1, gpa: 3.5 },
    { name: 'Alice Smith', course: 2, gpa: 4.0 },
    { name: 'Bob Johnson', course: 3, gpa: 2.8 },
    { name: 'Charlie Brown', course: 4, gpa: 3.2 },
    { name: 'Emily White', course: 1, gpa: 3.9 }
];

function displayDataAboutStudents(putYourArray) {
    const studentsTable = document.getElementById("studentsTable");
    studentsTable.innerHTML = "";

    let headOfTheTAble = document.createElement('tr');
    studentsTable.appendChild(headOfTheTAble);

    let nameOfTheStudent = document.createElement("th");
    nameOfTheStudent.innerText = "Student's name";
    headOfTheTAble.appendChild(nameOfTheStudent);

    let studentsCourse = document.createElement("th");
    studentsCourse.innerText = "Course";
    headOfTheTAble.appendChild(studentsCourse);

    let studentGpa = document.createElement("th");
    studentGpa.innerText = "GPA";
    headOfTheTAble.appendChild(studentGpa);

    putYourArray.forEach(function (element) {

        let studentData = document.createElement("tr");
        studentsTable.appendChild(studentData);
        // -----------------------------------
        let studentsName = document.createElement("td");
        studentsName.innerText = element.name;
        studentData.appendChild(studentsName);
        // -----------------------------------
        let stCourse = document.createElement("td");
        stCourse.innerText = element.course;
        studentData.appendChild(stCourse);
        // -----------------------------------
        let stGpa = document.createElement("td");
        stGpa.innerText = element.gpa;
        studentData.appendChild(stGpa);
    });
};
displayDataAboutStudents(students);


const inputField = document.getElementById("inputField");
const filterButton = document.getElementById("filterButton");

filterButton.addEventListener("click", function () {
    let filterFunctionByGpa = students.filter(function (elem) {
        return elem.gpa >= inputField.value;
    });
    displayDataAboutStudents(filterFunctionByGpa);

});