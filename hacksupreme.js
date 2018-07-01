function showAllInfo() {
    var x = document.getElementsByClassName("sold_out_tag");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "unset";
    }
}