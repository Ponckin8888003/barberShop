let form02 = document.querySelector('.registration_form');

form02.onsubmit = function(evt){
    evt.preventDefault();

    clearFormFields(form02);
};

function clearFormFields(form) {
    let formInputs = form.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        if (input.type === 'text' || input.type === 'email' || input.type === 'number' || input.type === 'radio' || input.type === 'checkbox' || input.nodeName === 'TEXTAREA') {
            if (input.type === 'radio' || input.type === 'checkbox') {
                input.checked = false;
            } else {
                input.value = '';
            }
        }
    });
}
