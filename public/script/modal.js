fbButton = document.querySelector(".fb-button")
fbModal = document.querySelector("#fb-modal")
fbFechar = document.querySelector(".button-close")

botaoAbrir = fbButton.addEventListener("click", () => {
    fbModal.classList.remove("hide")
})

botaoFechar = fbFechar.addEventListener("click", () => {
    fbModal.classList.add("hide")
})