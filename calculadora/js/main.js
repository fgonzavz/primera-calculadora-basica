
function sumar(){
    var numero1= parseFloat( document.getElementById('numero1').value );
    var numero2= parseFloat( document.getElementById('numero2').value) ;

     var resultado = numero1 + numero2;

     document.getElementById('resultado').value = resultado;
}


function restar(){

    
    var numero1= parseFloat( document.getElementById('numero1').value );
    var numero2= parseFloat( document.getElementById('numero2').value) ;4

        var resultado = numero1 - numero2;

     document.getElementById('resultado').value = resultado;
}


function multiplicar(){
    var numero1= parseFloat( document.getElementById('numero1').value );
    var numero2= parseFloat( document.getElementById('numero2').value) ;

     var resultado = numero1 * numero2;

     document.getElementById('resultado').value = resultado;
}

function dividir(){
    var numero1= parseFloat( document.getElementById('numero1').value );
    var numero2= parseFloat( document.getElementById('numero2').value) ;

     var resultado = numero1 / numero2;

     document.getElementById('resultado').value = resultado;
}

