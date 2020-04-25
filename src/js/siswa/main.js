const form = document.querySelector("form");
const updateBtn = document.querySelector("#update");
const deleteBtn = document.querySelector("#delete");

updateBtn.addEventListener("click", () => {
    form.action = `${location.href}/update`;
})

deleteBtn.addEventListener("click", () => {
    form.action = `${location.href}/delete`;
})