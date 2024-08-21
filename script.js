/* ERIC BELTRAME - 19/08/2024 */
/*Challenge - Decodificador de Texto*/

const textArea = document.querySelector(".text__area");
const mensagem = document.querySelector(".mensagem");
const paragrafo = document.querySelector(".containerparagrafo");
const subtitulo = document.querySelector(".mensagemsubtitulo");

function btnEncriptar() {
    const texto = textArea.value;

    if (isTextoValido(texto)) {
        const textoEncriptado = encriptar(texto);
        mensagem.value = textoEncriptado;
        textArea.value = "";
        ocultarImagem();
        ocultarMensagem();
    } else {
        alert("Utilize apenas letras minúsculas e sem acentos.");
    }
}

function isTextoValido(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar(texto) {
    var RetTexto = "";

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    RetTexto = texto;

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (RetTexto.includes(matrizCodigo[i][0])) {
            RetTexto = RetTexto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return RetTexto;
}

function btnDesencriptar() {
    const texto = desencriptar(textArea.value);

    mensagem.value = texto;
    textArea.value = "";

    ocultarImagem();
}

function desencriptar(texto) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    var RetTexto = "";

    RetTexto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (RetTexto.includes(matrizCodigo[i][1])) {
            RetTexto = RetTexto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return RetTexto;
}

function btnCopiar() {
    mensagem.select();              
    document.execCommand("copy");   
}

function ocultarImagem() {
    const imagem = document.getElementById("imagem");
    imagem.style.display = "none";
}

function ocultarImagem() {
    mensagem.style.backgroundImage = "none"; 
}

function mostrarImagem() {
    mensagem.style.backgroundImage = "url('/assets/boneco.png')"; 
}

function ocultarMensagem() {
    const mensagem = document.querySelector('.mensagemsubtitulo');
    const paragrafo = document.querySelector('.containerparagrafo');

    if (mensagem) {
        mensagem.style.display = 'none';
    }

    if (paragrafo) {
        paragrafo.style.display = 'none';
    }
}
