var Ext = new Array(
  ".com",
  ".es",
  ".net",
  // mas extensiones validas
);

$('#btn1').click(function (){
  var usn = $('#usn'),
      mail = $('#email'),
      pwd = $('#pwd'),
      pwd2 = $('#pwd2'),
      dni = $('#dni');
  
  var uvalid = true,  //user valid
      evalid = false, //email valid
      pvalid = true,  //pasword valid
      dvalid = true;  //dni valid
  
  var uex = false;    //user no existeix
      
  
  
  //comprobamos que el username es valido
  if (usn.val().length < 3) {
    $('#bll1').css("visibility","visible");
    $('#lg3').css("visibility","visible");
    // usn.val("");
    uvalid = false;
  } else {
    if (window.localStorage.getItem(usn.val()) == null) {
      $('#bll1').css("visibility","hidden");
      $('#lg3').css("visibility","hidden");
    }
    else uex = true;
  }
  
  //comprobamos que el mail es valido 
  for (var i = 0; i < Ext.length && !evalid; i++) {
    evalid = mail.val().endsWith(Ext[i]);
  }
  if (!evalid) {
    $('#bll2').css("visibility","visible");
    $('#wem').css("visibility","visible");
    // mail.val("");
  } else {
    $('#bll2').css("visibility","hidden");
    $('#wem').css("visibility","hidden");
  }
  
  //comprobamos que el password es valido
  if (pwd.val().length < 6) {
    $('#bll3').css("visibility","visible");
    $('#lg6').css("visibility","visible");
    // pwd.val("");
    // pwd2.val("");
    pvalid = false;
  } else {
    $('#bll3').css("visibility","hidden");
    $('#lg6').css("visibility","hidden");
  }
  
  //comprobamos que los passwords coinciden
  if (pwd.val() != pwd2.val()) {
    $('#bll4').css("visibility","visible");
    $('#diffp').css("visibility","visible");
    // pwd.val("");
    // pwd2.val("");
    pvalid = false;
  } else {
    $('#bll4').css("visibility","hidden");
    $('#diffp').css("visibility","hidden");
  }
  
  //comprobamos que el dni es valido
  var numero = dni.val().substr(0,dni.val().length-1);
  numero = numero % 23;
  var l1 = dni.val().substr(dni.val().length-1,1);
  var l2 ='TRWAGMYFPDXBNJZSQVHLCKET';
  l2 = l2.substring(numero,numero+1);
  
  if(!(/^\d{8}[A-Z]$/.test(dni.val())) ) {
    $('#bll5').css("visibility","visible");
    $('#wdni').css("visibility","visible");
    var dvalid = false;
    
  } else if (l2!=l1.toUpperCase()) {
    $('#bll5').css("visibility","visible");
    $('#wdni').css("visibility","visible");
    var dvalid = false;
  } else {
    $('#bll5').css("visibility","hidden");
    $('#wdni').css("visibility","hidden");
  }
  
  if (!uvalid || !evalid || !pvalid || !dvalid || uex) {
    if (uex) alert("Username ya existeix");
    else alert("Error al rellenar el formulario");
    usn.val("");
    mail.val("");
    pwd.val("");
    pwd2.val("");
    dni.val("");
    return false;
  } else if (uvalid && evalid && pvalid && dvalid && !uex) {
    var new_user = {password:pwd.val(), email: mail.val(), fname:"", sname:"", dni:dni.val()};
    window.localStorage.setItem(usn.val(), JSON.stringify(new_user));
  }
});