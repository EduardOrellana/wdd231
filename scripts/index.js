const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const hamButton = document.querySelector("#menu"); //Ham button propertie
const navigation = document.querySelector('nav'); //Nav tab
const ulNav = document.querySelector('#navMenu ul'); //nav ul
const currentYear = document.getElementById('currentyear'); //Footer
const lastModified = document.getElementById('modified'); //Footer

//Hambutton
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    ulNav.classList.toggle('open'); 
});

//Footer
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last modification: ${document.lastModified}`;


//Display Courses

const secCourses = document.querySelector(".container-courses");

function displayCourses(coursesObject){
    //This Function will be running through the courses

        coursesObject.forEach(element => {
            //Here we are creating the spots

            const slot = document.createElement("div");
            slot.setAttribute("class", "slot-courses");

            const coursesTitle = document.createElement("p");
            coursesTitle.textContent = `${element.subject} ${element.number}`;

            //Display
            slot.appendChild(coursesTitle);
            secCourses.appendChild(slot);

            if (element.completed === true)
            {
                coursesTitle.style.backgroundColor = "#008000";
            }else{
                coursesTitle.style.backgroundColor = "#66301d";
            }
        });
}


displayCourses(courses);


//Filter Courses

function filterCSE(){
    //This function will well ups to filter the courses according with the subject
    const fiCourses = courses.filter(course => course.subject == "CSE");
    secCourses.innerHTML = "";
    displayCourses(fiCourses);
}

function filterWDD(){
    //This function will well ups to filter the courses according with the subject
    const fiCourses = courses.filter(course => course.subject == "WDD");
    secCourses.innerHTML = "";
    displayCourses(fiCourses);
}

function displayAll(){
    //This function will well ups to filter the courses according with the subject
    secCourses.innerHTML = "";
    displayCourses(courses);
}

//Buttons Variables
const allCourses = document.getElementById("all-courses");
const cse = document.getElementById("cse");
const wdd = document.getElementById("wdd");


allCourses.addEventListener("click",displayAll);
cse.addEventListener("click", filterCSE)
wdd.addEventListener("click", filterWDD)