

const school_name = document.getElementById("school_name")
const schoolAddress = document.getElementById("schoolAddress")


document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();

    axios.post("http://localhost:3333/schools", {
        "address": schoolAddress.value,
        "name": school_name.value
    })
        .then(() =>
            alert("Deu bom, meu brother."))
        .catch(() =>
            alert("Deu ruim, meu brother."))
})

