
const name = document.getElementById("userName");
const address = document.getElementById("userAddress");
const phone = document.getElementById("userPhone");
const registration = document.getElementById("userReg");
const school = document.getElementById("userSchool");


document.getElementById("enviar").addEventListener("click", function (event) {
    event.preventDefault();
    axios.post("http://localhost:3333/users", {
        "name": name.value,
        "phone": phone.value,
        "registration": registration.value,
        "school_name": school.value
    })
        .then(() =>
            alert("Deu bom, meu brother."))
        .catch(() =>
            alert("Deu ruim, meu brother."))
})
