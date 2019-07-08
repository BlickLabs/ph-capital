//////////////////////////////////////////
// Formulario de contacto en español
//////////////////////////////////////////

$('form[name="contact-form"]').validate({
  name: 'required',
  email: 'required',
  message: 'required',
  messages: {
    name: "Por favor, introduce tu nombre",
    email: "Por favor introduce tu correo electrónico",
    message: "Por favor, introduce tu mensaje"
  },
  submitHandler: function(form) {
    var formData = new FormData(document.getElementById('contact-form'));

    $.ajax({
      type: 'POST',
      url: 'http://ph.capital/integracion-formularios/contacto-espanol.php',
      data: formData,
      processData: false,
      contentType: false,
      cache: false
    }).done(function() {
      document.getElementById('contact-form').reset();
      alertify.success('Se ha enviado el email. Gracias por contactarnos!');
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.error("Verifica la información. Tienes " + errors + " errores.");
  }
});

//////////////////////////////////////////
// Formulario de contacto en inglés
//////////////////////////////////////////

$('form[name="contact-form-en"]').validate({
  name: 'required',
  email: 'required',
  message: 'required',
  messages: {
    name: "Please, enter your name",
    email: "Please, enter your email",
    message: "Please, enter your message",
  },
  submitHandler: function(form) {
    var formData = new FormData(document.getElementById('contact-form-en'));

    $.ajax({
      type: 'POST',
      url: 'http://ph.capital/integracion-formularios/contacto-ingles.php',
      data: formData,
      processData: false,
      contentType: false,
      cache: false
    }).done(function() {
      document.getElementById('contact-form-en').reset();
      alertify.success('The email has been sent. Thanks for contact us!');
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.error("Verify yout information. You have " + errors + " errors.");
  }
});