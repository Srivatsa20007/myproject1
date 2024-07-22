document.addEventListener('DOMContentLoaded', function () {
    const switchers = [...document.querySelectorAll('.switcher')];

    switchers.forEach(item => {
        item.addEventListener('click', function() {
            switchers.forEach(item => item.parentElement.classList.remove('is-active'));
            this.parentElement.classList.add('is-active');
        });
    });

    
    document.querySelector('.switcher-signup').parentElement.classList.add('is-active');
    document.querySelector('.switcher-login').parentElement.classList.remove('is-active');
    

    const signupForm = document.querySelector('.form-signup');
    
    
    signupForm.addEventListener('submit', async function(event) {
        
        event.preventDefault();
        
        





        document.getElementById('signup-form').addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent the form from submitting the default way


        //signup
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const isEmployee = document.getElementById('employee-checkbox').checked;
         console.log("username:"+username+"\nemail:"+email+"\npassword:"+password+"\nisemployee:"+isEmployee)
        
        try {
            const response = await fetch('http://127.0.0.1:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password, isEmployee })
            });

            const result = await response.text();
            console.log(result);
            
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
