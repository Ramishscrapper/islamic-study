function sendmail() {
  var name = $("#Name").val();
  var email = $("#Sender").val();
  var subject = $("#Subject").val();
  var message = $("#Message").val();

  var Body = `
            ${name}
          <br />
            ${email}
          <br />
            ${subject}
          <br />
            ${message}
    `;

  Email.send({
    SecureToken: "fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    To: "ramishscrapper@gmail.com",
    From: `${email}`,
    Subject: `New message on contact from: ${name}`,
    Body: Body,
  }).then((message) => {
    if (message == "OK") {
      alert("Your mail has been send. Thank you for connecting.");
    } else {
      alert("There is error at sending message. ");
    }
  });
}
