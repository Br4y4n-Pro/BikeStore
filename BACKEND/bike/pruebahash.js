const bcrypt = require('bcrypt');


const plaintextPassword = 'lisimaco';

bcrypt.hash(plaintextPassword, 11, (err, hash) => {
  if (err) {
    console.error('Error al generar el hash de la contraseña:', err);
    return;
  }

  // `hash` contiene el hash seguro que puedes almacenar en tu base de datos
  console.log('Hash de la contraseña:', hash);
});

