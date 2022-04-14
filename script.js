var modal = document.querySelector("#imageModal");
modal.close = function() {
    this.setAttribute("nodisplay", '');
}
document.querySelector("#imageModal > .close").onclick = function() {
    modal.close();
};
document.querySelectorAll('.imageContainer > div > img').forEach(function(element) {
    element.onclick = function() {
        modal.removeAttribute("nodisplay");
        document.querySelector("#imageModal .modal-content").src = element.src;
        document.querySelector("#imageModal .caption").textContent = element.getAttribute("caption") || "";
    }
});
document.onkeydown = function(event) {
    event = event || window.event;
    if(event.key == "Escape" && !modal.hasAttribute("nodisplay")) {
        modal.close();
    }
};
document.querySelector("#year").textContent = new Date().getFullYear();