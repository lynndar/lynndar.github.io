function myFunction() {
    var x = document.getElementById("primaryNavigation");
    if (x.className === "show") {
        x.className = "hide";
    } else {
        x.className = "show";
    }
}