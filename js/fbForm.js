console.log("✅ fbForm.js loaded!");

function sendMail(event) {
    event.preventDefault();
    var params = {
        name : document.getElementById('name').value,
        uid : document.getElementById('uid').value,
        message : document.getElementById('message').value
    }
    emailjs.send("service_6jnx5eh", "template_4t80hmk", params).then(function (res) {
        alert("✅ mail sent successfully!" + res.status);
        document.querySelector("form").reset();
    });
}