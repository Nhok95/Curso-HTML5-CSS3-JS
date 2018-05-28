var actual = window.localStorage.getItem('actual');
var Info = JSON.parse(window.localStorage.getItem(actual));

var p1 = document.createElement('p');
var text1 = document.createTextNode('Username:  '+ actual);
var br11 = document.createElement('br');
var br12 = document.createElement('br');

var p2 = document.createElement('p');
var text2 = document.createTextNode('Email:  '+ Info.email);
var br21 = document.createElement('br');
var br22 = document.createElement('br');

var p3 = document.createElement('p');
var text3 = document.createTextNode('DNI:  '+ Info.dni);
var br31 = document.createElement('br');
var br32 = document.createElement('br');
var br33 = document.createElement('br');
var hr = document.createElement('hr');

var h3 = document.createElement('h3');
var text4 = document.createTextNode('Otros datos');
var br41 = document.createElement('br');
var br42 = document.createElement('br');

var p5 = document.createElement('p');
var text5 = document.createTextNode('First Name:  '+ Info.fname);
var br51 = document.createElement('br');
var br52 = document.createElement('br');

var p6 = document.createElement('p');
var text6 = document.createTextNode('Second Name:  '+ Info.sname);

$(document).ready(function(){  
  
  p1.appendChild(text1);
  p2.appendChild(text2);
  p3.appendChild(text3);
  h3.appendChild(text4);
  p5.appendChild(text5);
  p6.appendChild(text6);
  p1.classList.add('account_css');
  p2.classList.add('account_css');
  p3.classList.add('account_css');
  p5.classList.add('account_css');
  p6.classList.add('account_css');
  document.getElementById("dad").appendChild(p1);
  document.getElementById("dad").appendChild(br11);
  document.getElementById("dad").appendChild(br12);
  document.getElementById("dad").appendChild(p2);
  document.getElementById("dad").appendChild(br21);
  document.getElementById("dad").appendChild(br22);
  document.getElementById("dad").appendChild(p3);
  document.getElementById("dad").appendChild(br31);
  document.getElementById("dad").appendChild(br32);
  document.getElementById("dad").appendChild(br33);
  document.getElementById("dad").appendChild(hr);
  document.getElementById("dad").appendChild(h3);
  document.getElementById("dad").appendChild(p5);
  document.getElementById("dad").appendChild(br51);
  document.getElementById("dad").appendChild(br52);
  document.getElementById("dad").appendChild(p6);
  
  
  // $('#InputUsername').val(window.localStorage.getItem('remU'));
  // $('#InputPassword').val(window.localStorage.getItem('remP'));
  // if (window.localStorage.getItem('checked')== 'true') {
  //   $('#remCheck').prop('checked', 'true');
  // }
});

function getData() {
  var fname = $('#fname');
  var sname = $('#sname');
  var email = $('#email');
  var image = $('#foto');
  
  var profile = $('#im_profile');
  
  if (fname.val() != ""){
    n_fn = fname.val();
    p5.removeChild(text5);
    p5.appendChild(document.createTextNode('First Name:  '+ n_fn));
  } else n_fn = Info.fname;
  
  if (sname.val() != ""){
    n_sn = sname.val();
    p6.removeChild(text6);
    p6.appendChild(document.createTextNode('Second Name:  '+ n_sn));
  } else n_sn = Info.sname;
  
  if (email.val() != ""){
    n_mail = email.val();
    p2.removeChild(text2);
    p2.appendChild(document.createTextNode('Email:  '+ n_mail));
  } else n_mail = Info.email;
  
  if (image.val() != "") {
    var i_value = image.val().substring(12,image.val().length);
    profile.attr('src','./Images/Profile/'+i_value);
  }
  
  var new_user = {password: Info.password, email: n_mail, fname: n_fn, sname: n_sn, dni: Info.dni};
  window.localStorage.setItem(actual, JSON.stringify(new_user));
  
  
  
  // 
}