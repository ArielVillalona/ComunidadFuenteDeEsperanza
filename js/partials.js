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
$(document).on("ready", function () {
    loadHeader();
    loadfooter()
})