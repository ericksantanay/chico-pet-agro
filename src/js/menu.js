const menu = document.getElementById("menu-mobile")

const linksQueIraoAparecer = document.getElementById("links-de-navegacao-celular")

menu.addEventListener("click", () => {

    if (linksQueIraoAparecer.style.display === "none" || linksQueIraoAparecer.style.display === "") {
        linksQueIraoAparecer.style.display = "block"
        menu.innerText = "close"
    }else {
        linksQueIraoAparecer.style.display = "none"
        menu.innerText = "menu"
    }
})