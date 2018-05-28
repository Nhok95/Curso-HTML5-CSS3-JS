$(document).ready(function(){
  //Seleciona Username y lo limpia al recargar
  //la pagina
  $('#InputUsername').focus();
  $('#InputUsername').val(window.localStorage.getItem('remU'));
  $('#InputPassword').val(window.localStorage.getItem('remP'));
  if (window.localStorage.getItem('checked')== 'true') {
    $('#remCheck').prop('checked', 'true');
  }

  crearBD();
});


$('#btn1').click(function (){
  var usn = $('#InputUsername');
  var pss = $('#InputPassword');
  var check = $('#remCheck');
  var userV = true;
  var passV = true;
  
  // Validamos username
  if (usn.val().length < 3) {
    usn.val("");    
    $('#bll1').css('visibility','visible');
    $('#lg3').css("visibility","visible");
    userV = false;
  } else $('#lg3').css("visibility","hidden");
  if (window.localStorage.getItem(usn.val()) == null) {
    $('#bll1').css('visibility','visible');
    $('#wr1').css("visibility","visible");
    userV = false;
  } else {
    $('#wr1').css("visibility","hidden");
    var Info = JSON.parse(window.localStorage.getItem(usn.val()));
    var miPss = Info.password;
  }
  
  // Validamos password
  if (pss.val().length < 6) {
    $('#bll2').css('visibility','visible');
    $('#lg6').css("visibility","visible");
    passV = false;
  } else $('#lg6').css("visibility","hidden");

  if (pss.val() != miPss) {
    $('#bll2').css('visibility','visible');
    $('#wr2').css("visibility","visible");
    passV = false;
  } else if (pss.val() == miPss){

    $('#wr2').css("visibility","hidden");
  }

  //Si username correcto escondemos burbuja de error de username
  if (userV) {
    $('#bll1').css('visibility','hidden');
  }
  //Si password correcto escondemos burbuja de error de password
  if (passV) {
    $('#bll2').css('visibility','hidden');
  }
  
  
  if (!userV || !passV) {
    return false;
  } else if (userV && passV) {
    if (check.prop('checked')) {
      window.localStorage.setItem('remU',usn.val());
      window.localStorage.setItem('remP',pss.val());
      window.localStorage.setItem('checked','true');
    } else {
      window.localStorage.removeItem('remU');
      window.localStorage.removeItem('remP');
      window.localStorage.setItem('checked','false');
    }
    window.localStorage.setItem('actual',usn.val());
  }
});



//Base datos (cuentas creadas con anterioridad)
function crearBD() {
  var user1 = {password:"Firulais95", email:"Enrique@hotmail.com", fname:"Enrique", sname:"", dni:"95135644P"};
  window.localStorage.setItem('Nhoktis', JSON.stringify(user1));
  
  var user2 = {password:"qwerty123", email:"admin@admin.com", fname:"Admin", sname:"", dni:"94332720Z"};
  window.localStorage.setItem('Admin', JSON.stringify(user2));
}
