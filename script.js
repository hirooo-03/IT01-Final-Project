function viewStudent(){
    document.getElementById('home-page').style.display = "none"
    document.getElementById('student-page').style.display = "block"
    document.getElementById('student-info-popup').style.display = "none"
    document.getElementById('about-page').style.display = "none"
}

function viewHome(){
    document.getElementById('home-page').style.display = "block"
    document.getElementById('student-page').style.display = "none"
    document.getElementById('student-info-popup').style.display = "none"
    document.getElementById('about-page').style.display = "none"
}

function showProfile(){
    document.getElementById('student-page').style.display = "none"
    document.getElementById('home-page').style.display = "none"
    document.getElementById('student-info-popup').style.display = "flex"
    document.getElementById('about-page').style.display = "none"
    
}

function hideProfile(){
    document.getElementById('student-page').style.display = "block"
    document.getElementById('home-page').style.display = "none"
    document.getElementById('student-info-popup').style.display = "none"
    document.getElementById('about-page').style.display = "none"
    
}

function viewAbout(){
    document.getElementById('about-page').style.display = "flex"
    document.getElementById('student-page').style.display = "none"
    document.getElementById('home-page').style.display = "none"
    document.getElementById('student-info-popup').style.display = "none"
    
}

const students = {
    student1: {
        name: "Yhuri Hannz A. Lopez",
        age: "19",
        address: "Sitio Payong Brgy. Dalig Antipolo City",
        birthday: "July 2 2006",
        birthplace: "Manila NCR",
        motto: "Believe in yourself",
        hobby: "Gaming and billiards",
        talent: "Drawing and sketching ",
        dreamCourse: "IT",
        why: "Because I am interested in programming",
        parents: "Analyn R. Abulencia",
        parentsWork: "Accountancy",
        crush: "Kendall Jenner"
    },
    student2: {
        name: "Jay Talingdan Jr.",
        age: "18",
        address: "Philippines",
        birthday: "October 13 2007",
        birthplace: "Pasig city",
        motto: "Progress not perfection",
        hobby: "Working out and playing basketball",
        talent: "I'm not sure what my talent is, but I've got hustle",
        dreamCourse: "IT",
        why: "I picked this course cause its in-demand ",
        parents: "Jay Talingdan Sr. , Gina Durana",
        parentsWork: "Contractor/Vendor",
        crush: "Wala"
    },
    student3: {
        name: "Jeru Franz Sabiña",
        age: "18",
        address: "Angono, Rizal",
        birthday: "April, 16, 2007",
        birthplace: "Antipolo city",
        motto: "There is no perfection, only life.",
        hobby: "Coding and building bikes",
        talent: "Jack of all trades",
        dreamCourse: "IT",
        why: "I'm interested in programming",
        parents: "N/A",
        parentsWork: "N/A",
        crush: "Mary Grace Bracero"
    },
    student4: {
        name: "Juan Miguel Pardilla",
        age: "18",
        address: "Philippines",
        birthday: "October 24 2008",
        birthplace: "Philippines",
        motto: "It is what it is",
        hobby: "Gaming",
        talent: "Singing",
        dreamCourse: "Aviation",
        why: "Because this is my second choice",
        parents: "Mom and dad",
        parentsWork: "Ofw dad / Stay at home mom",
        crush: "S"
    },
    student5: {
        name: "Kevin G. Barazar",
        age: "18",
        address: "Antipolo City",
        birthday: "April 11 2007",
        birthplace: "Antipolo City",
        motto: "Focus on your dream, kaya keep sleeping",
        hobby: "Gaming and procrastinating",
        talent: "Cooking",
        dreamCourse: "IT",
        why: "Because people say the salary is high here",
        parents: "N/A",
        parentsWork: "Business",
        crush: "Wala"
    },
}

function showInfo(name){
    const s = students[name];
    document.getElementById("student-name").innerHTML = s.name;
    document.getElementById("age").innerHTML = "<strong>Age:</strong> " + s.age;
    document.getElementById("address").innerHTML = "<strong>Address:</strong> " + s.address;
    document.getElementById("birthday").innerHTML = "<strong>Birthday:</strong> " + s.birthday;
    document.getElementById("birthplace").innerHTML = "<strong>Birth Place:</strong> " + s.birthplace;
    document.getElementById("motto").innerHTML = "<strong>Motto:</strong> " + s.motto;
    document.getElementById("hobby").innerHTML = "<strong>Hobby:</strong> " + s.hobby;
    document.getElementById("talent").innerHTML = "<strong>Talent:</strong> " + s.talent;
    document.getElementById("dream-course").innerHTML = "<strong>Dream Course:</strong> " + s.dreamCourse;
    document.getElementById("why").innerHTML = "<strong>Why this course:</strong> " + s.why;
    document.getElementById("parents").innerHTML = "<strong>Parents:</strong> " + s.parents;
    document.getElementById("parents-work").innerHTML = "<strong>Parents Work:</strong> " + s.parentsWork;
    document.getElementById("crush").innerHTML = "<strong>Crush:</strong> " + s.crush;
}


function showStudent(name){
    showInfo(name)
    showProfile()
}