const menu = document.getElementById("menu-mobile")

const fecharMenu = document.getElementById("fechar-menu-mobile")

const linksQueIraoAparecer = document.getElementById("links-de-navegacao-celular")

menu.addEventListener("click", () => {

    if (linksQueIraoAparecer.style.display === "none" || linksQueIraoAparecer.style.display === "") {
        linksQueIraoAparecer.style.display = "flex"
    };
});

fecharMenu.addEventListener("click", () => {
    linksQueIraoAparecer.style.display = "none"
})