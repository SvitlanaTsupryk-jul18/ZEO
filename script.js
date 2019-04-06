let buttonOpen = document.querySelector(".js-open-popup");
let container = document.querySelector(".popup");
let buttonCancel = document.querySelector(".popup__btn--cancel");
let buttonUninstall = document.querySelector(".popup__btn--uninstall");

buttonOpen.addEventListener("click", showPopup);

function showPopup() {

    container.classList.replace("hide", "show");
    container.addEventListener("click", closePopup);

    function closePopup(e) {

        if (!e.target.closest(".popup__inner") || e.target.closest(".popup__close") || e.target === buttonCancel) {
            this.classList.replace("show", "hide");
        } else if (e.target === buttonUninstall) {
            container.classList.replace("show", "hide");
            setTimeout(function () {
                alert("done!")
            }, 500);
        }
        container.removeEventListener("click", closePopup);
    }
}