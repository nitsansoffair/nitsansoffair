$(document).ready(function() {
    $(".navigation__link").click(function() {
        $("#navi-toggle").prop("checked", false);
    });

    $('#submit').click(function (e) {
        e.preventDefault();
    });
});
