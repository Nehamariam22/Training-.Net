const students = [];

function add() {
    const studentname = document.getElementById('studentname').value;
    const studentgrade = parseFloat(document.getElementById('studentgrade').value);

    if ( studentgrade < 0 || studentgrade > 100) {
        alert("Please enter a valid name and grade (between 0 and 100).");
        return;
    }

    students.push({ name: studentname, grade: studentgrade });
    
    document.getElementById('studentname').value = '';
    document.getElementById('studentgrade').value = '';
}

function grade() {
    const list = document.getElementById('list');
    list.innerHTML = '';  
   
    
    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${index + 1}. ${student.name} -  ${student.grade}`;
        list.appendChild(li);
    });
}

function average(){

       if (students.length === 0) {
            alert("No students to calculate the average grade.");
            return;
        }
        const totalgrade = students.reduce((total, student) => total + student.grade, 0);
        const average = totalgrade / students.length;
        
        document.getElementById('averagegrade').innerHTML = average.toFixed(2) ;
    }
