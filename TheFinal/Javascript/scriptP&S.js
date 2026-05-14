document.getElementById("searchBox").onkeyup = function () {

    let value = this.value.toLowerCase();

    document.getElementsByTagName("p")[0].style.display =
        "smart grid optimization".includes(value) ? "block" : "none";

    document.getElementsByTagName("p")[1].style.display =
        "carbon capture retrofitting".includes(value) ? "block" : "none";

    document.getElementsByTagName("p")[2].style.display =
        "solar-kinetic infrastructure".includes(value) ? "block" : "none";

    document.getElementsByTagName("p")[3].style.display =
        "circular economy consulting".includes(value) ? "block" : "none";
};