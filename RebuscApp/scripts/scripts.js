document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegisterForm');
    const showLoginLink = document.getElementById('showLoginForm');

    // Mostrar formulario de registro al hacer clic en "Regístrate aquí"
    showRegisterLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    // Mostrar formulario de inicio de sesión al hacer clic en "Inicia sesión aquí"
    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Evento de envío para el formulario de inicio de sesión (simulado)
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío real del formulario
        // Aquí puedes agregar la lógica para el inicio de sesión, como validar y mostrar SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Bienvenido de vuelta a RebuscApp',
            showConfirmButton: false,
            timer: 1500
        });
    });

    // Evento de envío para el formulario de registro (simulado)
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío real del formulario
        // Aquí puedes agregar la lógica para el registro, como validar y mostrar SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            text: 'Bienvenido/a a RebuscApp',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            // Una vez cerrado el SweetAlert, se puede redirigir o realizar alguna acción adicional
            registerForm.reset(); // Resetear el formulario de registro
            registerForm.style.display = 'none'; // Ocultar formulario de registro
            loginForm.style.display = 'block'; // Mostrar formulario de inicio de sesión
        });
    });
});
