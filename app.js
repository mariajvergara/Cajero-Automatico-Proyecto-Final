// 1. Variables

var cuentas = [
{   nombre: 'Mali', 
    password: 'mali1234',
    saldo: 200,
    userpage: 'mali.html'
},
{   nombre: 'Gera', 
    password: 'gera1234',
    saldo: 290,
    userpage: 'gera.html'
},
{   nombre: 'Maui', 
    password: 'maui1234',
    saldo: 67,
    userpage: 'maui.html'
}
];

const buttonLogin = document.getElementById('botones');
const bienvenida = document.getElementById('bienvenida');

// 2. Funciones
function passLogin(e) {
    cuentas.forEach(function (item){
        if (item.nombre == e.target.textContent){
            var pswd = prompt('¡Hola ' + item.nombre + '! Ingresa tu password por favor:')
            if (item.password == pswd) {
                window.location=item.userpage;
            }
            else{
                alert('Tu password es incorrecto, intenta nuevamente')
            }
        }        
    })
}     

// bienvenidaMali.innerText == 'Bienvenido a tu cuenta ' + item.nombre + '. ¿Que deseas hacer?';

        // if (bienvenida.innerHTML = cuentas[0].nombre) {
        //     console.log('funcionó')
        // }
        
        
// A. Userpage Mali
function ingresarMontoMali() {
    var monto = Number(prompt('¿Qué monto deseas ingresar?'))
    if (Number(monto)) {
        if((monto + cuentas[0].saldo) <= 990) {
            alert('Ingresaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[0].saldo)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser mayor a $990.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((monto + cuentas[0].saldo) <= 990) {
        (cuentas[0].saldo) += monto
    }
}

function retirarMontoMali() {
    var retiro = Number(prompt('¿Qué monto deseas retirar?'))
    if (Number(retiro)) {
        if ((cuentas[0].saldo - retiro >= 10)) {
            alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[0].saldo - retiro)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser menos a $10.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((retiro + cuentas[0].saldo) <= 990) {
        (cuentas[0].saldo) -= retiro
    }
}    

function saldoMali() {
    alert('Tu saldo es de $' + (cuentas[0].saldo)+'.00 MXN')
}

// A. Userpage Gera
function ingresarMontoGera() {
    var monto = Number(prompt('¿Qué monto deseas ingresar?'))
    if (Number(monto)) {
        if((monto + cuentas[1].saldo) <= 990) {
            alert('Ingresaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[1].saldo)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser mayor a $990.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((monto + cuentas[1].saldo) <= 990) {
        (cuentas[1].saldo) += monto
    }
}

function retirarMontoGera() {
    var retiro = Number(prompt('¿Qué monto deseas retirar?'))
    if (Number(retiro)) {
        if ((cuentas[1].saldo - retiro >= 10)) {
            alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[1].saldo - retiro)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser menos a $10.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((retiro + cuentas[1].saldo) <= 990) {
        (cuentas[1].saldo) -= retiro
    }
}    

function saldoGera() {
    alert('Tu saldo es de $' + (cuentas[1].saldo)+'.00 MXN')
}

// A. Userpage Maui
function ingresarMontoMaui() {
    var monto = Number(prompt('¿Qué monto deseas ingresar?'))
    if (Number(monto)) {
        if((monto + cuentas[2].saldo) <= 990) {
            alert('Ingresaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[2].saldo)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser mayor a $990.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((monto + cuentas[2].saldo) <= 990) {
        (cuentas[2].saldo) += monto
    }
}

function retirarMontoMaui() {
    var retiro = Number(prompt('¿Qué monto deseas retirar?'))
    if (Number(retiro)) {
        if ((cuentas[2].saldo - retiro >= 10)) {
            alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[2].saldo - retiro)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser menos a $10.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((retiro + cuentas[2].saldo) <= 990) {
        (cuentas[2].saldo) -= retiro
    }
}    

function saldoMaui() {
    alert('Tu saldo es de $' + (cuentas[2].saldo)+'.00 MXN')
}


// 3. Eventos
buttonLogin.addEventListener('click', passLogin)



// CON ONCLICK ----
// function passMali() {
//     var pswd = prompt('¡Hola Mali! Ingresa tu password por favor:')
//     if (pswd == "mali1234") {
//         window.location='userpage.html';
//     }else{
//         alert('Tu password es incorrecto, intenta nuevamente')
//     }
// }

// function passGera() {
//     var password = prompt('¡Hola Gera! Ingresa tu password por favor:')
//     if (password == "gera1234") {
//         window.location='userpage.html';
//     }else{
//         alert('Tu password es incorrecto, intenta nuevamente')
//     }
// }

// function passMaui() {
//     var password = prompt('¡Hola Maui! Ingresa tu password por favor:')
//     if (password == "maui1234") {
//         window.location='userpage.html';
//     }else{
//         alert('Tu password es incorrecto, intenta nuevamente')
//     }
// }

// ---- USER PAGE ----