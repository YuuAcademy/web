// Lista de usuarios y contraseñas permitidos
const users = [
    { username: 'mmatamorosc', password: '74648575', role: 'admin' },
    { username: 'egaviño', password: '75373215', role: 'admin' },
    { username: 'alumno', password: '12345678', role: 'guest' },
    { username: 'bllamoca', password: '76943806', role: 'admin' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Verifica si el usuario y la contraseña coinciden con algún elemento en la lista
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('appContainer').classList.remove('hidden');

        // Condicional basado en el rol del usuario
        if (user.role === 'guest') {
            document.getElementById('linkForm').classList.add('hidden');
        }
    } else {
        document.getElementById('loginErrorMessage').textContent = 'Invalid username or password';
    }
});

document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const courseName = document.getElementById('courseName').value;
    const courseLink = document.getElementById('courseLink').value;

    if (courseName && courseLink) {
        addCourseToList(courseName, courseLink);
        document.getElementById('courseName').value = '';
        document.getElementById('courseLink').value = '';
    }
});

function addCourseToList(name, link) {
    const courseList = document.getElementById('courseList');
    const li = document.createElement('li');

    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = name;
    anchor.target = '_blank';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        courseList.removeChild(li);
    });

    li.appendChild(anchor);
    li.appendChild(deleteButton);
    courseList.appendChild(li);
}

document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.createElement('input');
    filterInput.type = 'text';
    filterInput.id = 'filterCourses';
    filterInput.placeholder = 'Filtrar cursos...';
    document.getElementById('appContainer').insertBefore(filterInput, document.getElementById('courseList'));

    filterInput.addEventListener('input', function() {
        const filterValue = filterInput.value.toLowerCase();
        const courses = document.querySelectorAll('#courseList li');

        courses.forEach(course => {
            const courseName = course.querySelector('a').textContent.toLowerCase();
            if (courseName.includes(filterValue)) {
                course.style.display = '';
            } else {
                course.style.display = 'none';
            }
        });
    });
});
