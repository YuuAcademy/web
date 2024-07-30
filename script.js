// Lista de usuarios y contraseñas permitidos
const users = [
    { username: 'mmatamoros', password: '74648575' },
    { username: 'bllamoca', password: 'contraseña' },
    { username: 'egaviño', password: 'contraseña' }
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

    li.appendChild(anchor);
    courseList.appendChild(li);
}
