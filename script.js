// Lista de usuarios y contraseñas permitidos
const users = [
    { username: 'mmatamorosc', password: '74648575', role: 'admin' },
    { username: 'alumno', password: '12345678', role: 'guest' },
    { username: 'egaviño', password: '75373215', role: 'admin' },
    { username: 'bllamoca', password: '76943806', role: 'admin' },
    { username: 'vdelacruz', password: '123456789', role: 'admin' }
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
        } else {
            document.getElementById('linkForm').classList.remove('hidden');
        }
    } else {
        document.getElementById('loginErrorMessage').textContent = 'Invalid username or password';
    }
});

document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const courseName = document.getElementById('courseName').value;
    const courseLink = document.getElementById('courseLink').value;
    const courseCategory = document.getElementById('courseCategory').value;

    if (courseName && courseLink && courseCategory) {
        addCourseToList(courseName, courseLink, courseCategory);
        document.getElementById('courseName').value = '';
        document.getElementById('courseLink').value = '';
        document.getElementById('courseCategory').value = '';
    }
});

function addCourseToList(name, link, category) {
    const courseList = document.getElementById('courseList');
    const categoryHeader = document.querySelector(`h2[data-category="${category}"]`);

    let categoryList;
    if (categoryHeader) {
        categoryList = categoryHeader.nextElementSibling;
    } else {
        const newCategoryHeader = document.createElement('h2');
        newCategoryHeader.textContent = category;
        newCategoryHeader.setAttribute('data-category', category);
        courseList.appendChild(newCategoryHeader);

        categoryList = document.createElement('ul');
        courseList.appendChild(categoryList);
    }

    const li = document.createElement('li');

    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = name;
    anchor.target = '_blank';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        categoryList.removeChild(li);
        if (!categoryList.hasChildNodes()) {
            courseList.removeChild(categoryHeader);
            courseList.removeChild(categoryList);
        }
    });

    li.appendChild(anchor);
    li.appendChild(deleteButton);
    categoryList.appendChild(li);
}

// Ejemplo de enlaces predefinidos para visualización inicial
const preDefinedLinks = [
    { name: 'Curso de Algebra', link: 'https://example.com/matematicas', category: 'Algebra' },
    { name: 'Curso de Trigonometria', link: 'https://example.com/matematicas', category: 'Trigonometria' },
    { name: 'Curso de Aritmetica', link: 'https://example.com/fisica', category: 'Aritmetica' },
    { name: 'Curso de Geometria', link: 'https://example.com/quimica', category: 'Geometria' }
];

// Agregar enlaces predefinidos a la lista al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    preDefinedLinks.forEach(course => {
        addCourseToList(course.name, course.link, course.category);
    });
});

function addCourseToList(name, link, category) {
    const courseList = document.getElementById('courseList');
    const categoryHeader = document.querySelector(`h2[data-category="${category}"]`);

    let categoryList;
    if (categoryHeader) {
        categoryList = categoryHeader.nextElementSibling;
    } else {
        const newCategoryHeader = document.createElement('h2');
        newCategoryHeader.textContent = category;
        newCategoryHeader.setAttribute('data-category', category);
        courseList.appendChild(newCategoryHeader);

        categoryList = document.createElement('ul');
        courseList.appendChild(categoryList);
    }

    const li = document.createElement('li');

    const anchor = document.createElement('a');
    anchor.href = link;
    anchor.textContent = name;
    anchor.target = '_blank';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        categoryList.removeChild(li);
        if (!categoryList.hasChildNodes()) {
            courseList.removeChild(categoryHeader);
            courseList.removeChild(categoryList);
        }
    });

    li.appendChild(anchor);
    li.appendChild(deleteButton);
    categoryList.appendChild(li);
}
