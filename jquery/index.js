$(document).ready(function() {
    $(".navigation__link").click(function () {
        $("#navi-toggle").prop("checked", false);
    });

    $('#submit').click(function (e) {
        e.preventDefault();

        if ($('#email')[0].checkValidity() && $('#name')[0].checkValidity() && $('#description')[0].checkValidity()) {
            const email = $('#email').val();
            const name = $("#name").val();
            const description = $('#description').val();

            $.ajax({
                method: 'POST',
                url: 'nitsansoffair.herokuapp.com' + '/send-mail' + '?' +
                    'from=' + email +
                    '&subject=' + 'Project Order' +
                    '&html=' + '<h3>Project Order</h3><br>' + 'Full name: ' + name + '<br>Description: ' + description,
                success: function(response) {
                    console.log('Email has been sent successfully.');
                    $('.form__success-message').css('opacity', 1);
                },
                error: function(xhr) {
                    console.log('An error occurred.');
                }
            });
        }
    });
});
