//navbar
$(document).ready(function () {
    $('.nav-item').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
    })
});

// education
var coll = document.getElementsByClassName("collapsive");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var details = this.nextElementSibling;
        if (details.style.maxHeight) {
            details.style.maxHeight = null;
        } else {
            details.style.maxHeight = details.scrollHeight + "px";
        }
    });
}