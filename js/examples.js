function validarUsuario(){
    pnom= $('#nom').val(); 
    ppass= $('#pass').val(); 
    $.ajax({
     type: 'POST', 
     url: './consulta.php',  
     data: { nom: pnom, pass: ppass } 
     }).done(function( msg ) {  
      $("#consola").html(msg); 
     }).fail(function (jqXHR, textStatus, errorThrown){ 
     $("#consola").html("The following error occured: "+ textStatus +" "+ errorThrown); 
    });
  }