let usuario,
  USER,
  PASS,
  password,
  contador,
  maxIntentos,
  acceso,
  saldo,
  parrafo,
  titulo;


USER = "admin";
PASS = "12345";
maxIntentos = 3;
contador = 0;
acceso = false;
saldo = 10000;

while (contador < maxIntentos && acceso === false) {
  usuario = prompt("Usuario: ");
  password = prompt("Contraseña: ");

  if (usuario == USER && password == PASS) {
    acceso = true;

    titulo = document.getElementById("tituloPrincipal");
    titulo.insertAdjacentText("afterbegin", `Bienvenido al Cajero`);

    parrafo = document.getElementById("saldo");
    parrafo.insertAdjacentText("afterbegin", `Tu saldo es de $${saldo}`);
  } else {
    contador += 1;
    alert("Credenciales incorrectas");
  }

  if (contador == maxIntentos) {
    alert("Has bloqueado tu cuenta. Favor, acercarte al banco");
  }
}

console.log(contador);
