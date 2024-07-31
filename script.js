// Lista de usuarios y contraseñas permitidos
const users = [
    { username: 'mmatamoros', password: '74648575' },
    { username: 'egaviño', password: '75373215' },
    { username: 'bllamoca', password: '76943806' }
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
    const category = prompt('Enter the category for this link:', 'Default');
    let categoryElement = document.querySelector(`.category[data-category="${category}"]`);

    if (!categoryElement) {
        categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.dataset.category = category;

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryElement.appendChild(categoryTitle);

        courseList.appendChild(categoryElement);
    }

    const li = document.createElement('li');

    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = name;
    anchor.target = '_blank';
    anchor.classList.add('course-link');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        categoryElement.removeChild(li);
        if (categoryElement.querySelectorAll('li').length === 0) {
            courseList.removeChild(categoryElement);
        }
    });

    li.appendChild(anchor);
    li.appendChild(deleteButton);
    categoryElement.appendChild(li);
}
