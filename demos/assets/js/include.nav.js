$(document).ready(function () {
    $.get("../../nav.html", function (data) {
        $("#top-nav").html(data);
    });
});