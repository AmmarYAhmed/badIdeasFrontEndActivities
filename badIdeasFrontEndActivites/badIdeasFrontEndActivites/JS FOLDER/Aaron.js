function showHIde() {
    var x = document.getElementByID("vision");
    if (x.style !== "none") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}