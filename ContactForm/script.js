function sendEmail() {
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'username',
    Password: 'password',
    To: 'them@website.com',
    From: document.getElementById('email').value,
    Subject: 'New Contact Form Enquiry',
    Body:
      'Name: ' +
      document.getElementById('name').value +
      '<br> Email: ' +
      document.getElementById('email').value +
      '<br> Phone no: ' +
      document.getElementById('phone').value +
      '<br> Message: ' +
      document.getElementById('message').value,
  }).then((message) => alert(message));
}
