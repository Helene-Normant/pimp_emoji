

// Button take the action to clear the textarea 
var input = document.querySelector('#clear');
var textarea = document.querySelector('.text');

input.addEventListener('click', function () {
    textarea.value = '';
}, false);