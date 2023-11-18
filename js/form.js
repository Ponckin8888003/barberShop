let closeFormButton = document.querySelector('.close_button');
let closeMobFormButton = document.querySelector('.close_login_button')
let loginBlock = document.querySelector('.section_login_form');
let loginButton = document.querySelector('.login_li_section');
let sixHeaderLiButton = document.querySelector('.header_li_item_06')
let form = document.querySelector('.form_login_form');
let inputText = document.querySelector('.icon_text');
let inputPassword = document.querySelector('.icon_password');
let rememberMeCheckbox = document.getElementById('rememberMeCheckbox');

loginBlock.classList.add('hide');
closeFormButton.classList.add('hide');
loginButton.onclick = function(){
    loginBlock.classList.add('show');
    loginBlock.classList.remove('hide');
    closeFormButton.classList.add('show');
    closeFormButton.classList.remove('hide');
}
closeFormButton.onclick = function(){
    loginBlock.classList.add('hide');
    closeFormButton.classList.add('hide');
    loginBlock.classList.remove('show');
    closeFormButton.classList.remove('show');
}
closeMobFormButton.onclick = function(){
    loginBlock.classList.add('hide');
    closeFormButton.classList.add('hide');
}

sixHeaderLiButton.onsubmit = function(evt){
    evt.preventDefault();
}
form.onsubmit = function(evt){
    evt.preventDefault();
    inputText.value = '';
    inputPassword.value = '';

    if(rememberMeCheckbox.checked) {
        rememberMeCheckbox.checked = false;
    }
};
