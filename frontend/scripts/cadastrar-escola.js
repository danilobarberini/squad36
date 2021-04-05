

const CNPJ = document.getElementById("CNPJ");
const razao = document.getElementById("razao");
const fantasia = document.getElementById("fantasia");
const address = document.getElementById("address");
const kit = document.getElementById("kit");
const qt = document.getElementById("qt");
const phone = document.getElementById("phone");



document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();

    axios.post("http://localhost:3333/schools", {
        "CNPJ": CNPJ.value,
        "razao": razao.value,
        "fantasia": fantasia.value,
        "address": address.value,
        "kit": kit.value,
        "qt": qt.value,
        "phone": phone.value
    })
        .then(() =>
            alert("Deu bom, meu brother."))
        .catch(() =>
            alert("Deu ruim, meu brother."))
})

