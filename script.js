$('body').ready(function () {
    $('button').click(function() {
        if ($('input').val() !== '') {
            var item = $('input').val();
            $('ul').append('<li>' + item + '<a href="">x</a></li>');
        }
        $('input').val('');
        return false;
    });
});
    
        
$(document).on('click', 'a', function (event) {
    event.preventDefault();
    $(this).parent().remove();
});