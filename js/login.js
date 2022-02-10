document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    

    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    

    if (userEmail == 'benten0603@gmail.com' && userPass =='kaium'){
        window.location.href = 'banking.html';
    }
})

//handle deposit button

