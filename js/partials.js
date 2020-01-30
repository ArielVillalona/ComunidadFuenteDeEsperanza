function loadHeader() {
    fetch("./header.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });
}
function loadfooter() {
    fetch("./footer.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
}
function loadHead() {
    fetch("./head.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector("head").innerHTML = data;
        });
}
function loadSectionUNO() {
    fetch("./SectionUNO.html")
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(".fisrtSecction").innerHTML = data;
        });
}
$(document).on("ready", function () {
    loadHeader();
    loadSectionUNO()
    loadfooter();
})