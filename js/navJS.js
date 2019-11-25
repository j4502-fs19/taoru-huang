function myFunction() {
    var x = document.getElementById("myTopnav");
    var homelink = document.getElementById("homelink");
    if (x.className === "topnav") {
        x.className += " responsive";
        homelink.innerHTML = "Home";
    } else {
        x.className = "topnav";
        homelink.innerHTML = "Taoru Huang";
    }
}

$(document).ready(function () {
    $(".selected").click(function () {
        $("#test1").text("Hello world!");
    });
});
