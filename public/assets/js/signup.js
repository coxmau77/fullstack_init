// src/assets/js/signup.js

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

    const MIN_AGE = 18; // Definimos la edad mínima como una constante

    // Función para calcular la edad
    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const termsAccepted = document.getElementById('terms').checked;
        if (!termsAccepted) {
            alert('Debe aceptar los términos y condiciones para registrarse.');
            return;
        }

        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const dob = document.getElementById('signupDob').value;
        const age = calculateAge(dob);
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (age < MIN_AGE) {
            alert(`Debe ser mayor de ${MIN_AGE} años para registrarse.`);
            return;
        }

        const rememberMe = document.getElementById('rememberMe').checked;
        if (rememberMe) {
            const formData = new FormData(signupForm);
            localStorage.setItem('signupData', JSON.stringify(Object.fromEntries(formData)));
        } else {
            localStorage.removeItem('signupData');
        }

        try {
            const response = await axios.post('/api/auth/register', {
                name,
                email,
                dob,
                age,
                password
            });

            if (response.status === 201) {
                alert('Registro exitoso');
                signupForm.reset();
                signupDialog.close();
            } else {
                alert(response.data.message || 'Error en el registro');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error.response?.data?.message || 'Error en el registro');
        }
    });

    const savedData = localStorage.getItem('signupData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        for (const [key, value] of Object.entries(formData)) {
            const input = document.querySelector(`[name="${key}"]`);
            if (input) input.value = value;
        }
    }
});
