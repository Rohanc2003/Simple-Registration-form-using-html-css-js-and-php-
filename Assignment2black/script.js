$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        $.ajax({
            type: 'POST',
            url: 'success.php',
            data: $(this).serialize(),
            success: function(response) {
                $('#result').html(response);
            },
            error: function() {
                $('#result').html('<p style="color: red;">An error occurred. Please try again.</p>');
            }
        });
    });
});