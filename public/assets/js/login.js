document.addEventListener('DOMContentLoaded', () => {
    const loginDialog = document.getElementById('loginDialog');
    const loginBtn = document.getElementById('loginBtn');
    const closeLoginDialog = document.getElementById('closeLoginDialog');

    loginBtn.addEventListener('click', () => {
        loginDialog.showModal();
    });

    closeLoginDialog.addEventListener('click', () => {
        loginDialog.close();
    });

    // Aquí puedes agregar lógica para enviar el formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Implementa la lógica para el inicio de sesión
        console.log('Login', email, password);
    });
});
