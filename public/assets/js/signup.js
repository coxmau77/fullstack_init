document.addEventListener('DOMContentLoaded', () => {
    const signupDialog = document.getElementById('signupDialog');
    const signupBtn = document.getElementById('signupBtn');
    const closeSignupDialog = document.getElementById('closeSignupDialog');

    signupBtn.addEventListener('click', () => {
        signupDialog.showModal();
    });

    closeSignupDialog.addEventListener('click', () => {
        signupDialog.close();
    });

    // Aquí puedes agregar lógica para enviar el formulario de registro
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const dob = document.getElementById('signupDob').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Implementa la lógica para el registro
        console.log('Signup', name, email, dob, password);
    });
});
