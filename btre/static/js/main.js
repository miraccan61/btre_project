const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeOut(function ()
{
    $('#message').fadeOut('slow');

},3000);