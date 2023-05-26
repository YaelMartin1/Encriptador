let input = document.getElementById("input");
let respuesta = document.getElementById("respuesta");

const btnEncriptar = document.getElementById("encriptar");
const btnDesencriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");

const warningMsj = document.getElementById("msjWarning");

function encriptar() {
  let arr = input.value.toLowerCase().split("");
  for (let indiceA = 0; indiceA < arr.length; indiceA++) {
    const letra = arr[indiceA];
    if (letra == "a") {
      arr[indiceA] = "ai";
    }
    if (letra == "e") {
      arr[indiceA] = "enter";
    }
    if (letra == "o") {
      arr[indiceA] = "ober";
    }
    if (letra == "i") {
      arr[indiceA] = "imes";
    }
    if (letra == "u") {
      arr[indiceA] = "ufat";
    }
  }
  const res = arr.join("");
  respuesta.innerHTML = res;
  respuesta.focus();
}

function desencriptar() {
  let arr = input.value.toLowerCase().split("");
  const arrA = [];
  for (let indiceB = 0; indiceB < arr.length; indiceB++) {
    const letra = arr[indiceB];
    switch (letra) {
      case "a":
        arrA.push("a");
        indiceB += 1;
        break;
      case "e":
        arrA.push("e");
        indiceB += 4;
        break;
      case "i":
        arrA.push("i");
        indiceB += 3;
        break;
      case "o":
        arrA.push("o");
        indiceB += 3;
        break;
      case "u":
        arrA.push("u");
        indiceB += 3;
        break;
      default:
        arrA.push(letra);
        break;
    }
  }
  const res = arrA.join("");
  respuesta.innerHTML = res;
}

btnEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  encriptar();
  if (respuesta.innerHTML) warningMsj.style.display = "none";
});

btnDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  desencriptar();
  if (respuesta.innerHTML) warningMsj.style.display = "none";
});

const copiarAlPortapapeles = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("The Clipboard API is not available.");
};

btnCopiar.addEventListener("click", function () {
  copiarAlPortapapeles(respuesta.innerHTML);
});
