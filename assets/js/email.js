function sendMail(params){
    
    var tempParams={
        from_name:document.getElementById("name").value,
        from_email:document.getElementById("email").value,
        from_ph:document.getElementById("phone").value,
        message:document.getElementById("message").value,
    };
    emailjs.send('gmail','template',tempParams).then(function(res){
        alert("Message sent");
    })
}