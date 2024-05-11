export function generarEmailAleatorio() {
    // Dominios de email disponibles
    var dominios = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
    
    // Cadena aleatoria para el nombre de usuario
    var nombreUsuario = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var longitud = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // longitud aleatoria entre 5 y 10 caracteres
    for (var i = 0; i < longitud; i++) {
      nombreUsuario += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    // Seleccionar un dominio aleatorio de la lista de dominios disponibles
    var dominio = dominios[Math.floor(Math.random() * dominios.length)];
    
    // Concatenar el nombre de usuario y el dominio para formar el correo electrónico completo
    var email = nombreUsuario + '@' + dominio;

    return email;
  }

  export function generarNumeroAleatorio() {
    var numero = Math.floor(Math.random() * 90000000) + 10000000;
    return numero;
  }