function showhide() {
    var x = document.getElementById("vision");
    if (x.style !== "none") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}