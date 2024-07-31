// Lista de usuarios y contraseñas permitidos
const users = [
    { username: 'mmatamorosc', password: '74648575', role: 'admin' },
    { username: 'alumno', password: '12345678', role: 'guest' },
    { username: 'egaviño', password: '75373215', role: 'admin' },
    { username: 'bllamoca', password: '76943806', role: 'admin' },
    { username: 'vdelacruz', password: '72213690', role: 'admin' }
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
  
      // Ejemplo de enlaces predefinidos (puedes reemplazar con tu lógica para obtener enlaces)
      const courseList = [
        { title: 'CALCULANDO-ANDO', link: 'https://calculandoando.com/' },
        { title: 'PRIMARIA'},
        { title: 'Curso de Algebra', link: 'https://example.com/matematicas' },
        { title: 'Curso de Aritmetica', link: 'https://example.com/fisica' },
        { title: 'Curso de Geometria', link: 'https://example.com/fisica' },
        { title: 'Curso de Trigonometria', link: 'https://example.com/fisica' },
        { title: 'SECUNDARIA'},
        { title: 'Curso de Algebra', link: 'https://example.com/fisica' },
        { title: 'Curso de Aritmetica', link: 'https://example.com/fisica' },
        { title: 'Curso de Geometria', link: 'https://example.com/fisica' },
        { title: 'Curso de Trigonometria', link: 'https://example.com/quimica' }
      ];
  
      const ul = document.getElementById('courseList');
      ul.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos
  
      courseList.forEach(course => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = course.link;
        anchor.textContent = course.title;
        anchor.target = '_blank'; // Abrir enlace en nueva pestaña
  
        li.appendChild(anchor);
        ul.appendChild(li);
      });
  
    } else {
      document.getElementById('loginErrorMessage').textContent = 'Invalid username or password';
    }
  });
  