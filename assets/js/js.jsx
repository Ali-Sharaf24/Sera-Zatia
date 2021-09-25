window.onscroll = function scrollFunction() {
    if (document.getElementById("body").scrollTop > 20) {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("navbar").style.backgroundColor = "#343b43";
        document.getElementById("act").style.borderBottom = "1px solid #1ed5b7";

    } else {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("navbar").style.borderBottom = "0px solid #1ed5b7";
        document.getElementById("act").style.borderBottom = "1px solid #fff";

    }
};


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}