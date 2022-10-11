function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('#status').innerHTML = "* Please enter your name.";
        document.querySelector('.name-label').innerHTML = "Name *";
        document.querySelector('.name-label').style.color = "red";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('#status').innerHTML = "* Please enter your email.";
        document.querySelector('.email-label').innerHTML = "Email *";
        document.querySelector('.email-label').style.color = "red";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('#status').innerHTML = "* Please enter a valid email.";
            document.querySelector('.email-label').innerHTML = "Email *";
            document.querySelector('.email-label').style.color = "red";
            return false;
        }
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('#status').innerHTML = "* Please enter a message.";
        document.querySelector('.message-label').innerHTML = "Message *";
        document.querySelector('.message-label').style.color = "red";
        return false;
    }
  }