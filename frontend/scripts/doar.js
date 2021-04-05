
const schools = document.getElementById("nearest");
const items = document.getElementById("items-kit");
const kit = document.getElementById("kit");



axios.get("/years").then((response) => {

    response.data.forEach((option) => {
        const docOption = document.createElement("option")
        docOption.innerHTML = option.name;
        docOption.value = option.items;
        kit.appendChild(docOption);

    })
})

kit.addEventListener("change", (event) => {
    items.innerHTML = event.target.value;
})

axios.get("/schools").then((response) => {

    response.data.forEach((option) => {
        const docOption = document.createElement("option")
        docOption.innerHTML = option.fantasia;
        schools.appendChild(docOption);
    })

})
