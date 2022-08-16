var section = document.querySelector('section');
window.addEventListener('scroll', function(){
    var value = window.scrollY;
    section.style.clipPath = `circle(${value}px at center)`
})

// Botão começar

$(document).ready(function(){
    $('#button').click(function(){
        $('div').removeClass('bloqueio');
        $('#button').addClass('bloqueio');
        var duration = 60 * (1/3); // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
    })
})

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
        if(minutes == 0 && seconds == 0){
            $('#timer').addClass('bloqueio');
            $('#travar').addClass('bloqueio');
            document.getElementById('resultadoerros').value = errado;
        document.getElementById('resultadoacertos').value = certo;
        }
    }, 1000);
}

soma = 0;
certo = 0;
errado = 0;
$(document).ready(function(event){
    $('#1alternativa-1').click(function(event){
        $('#1alternativa-1').addClass('errada');
        $('#1alternativa-2').addClass('bloqueio');
        $('#1alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#1alternativa-2').click(function(event){
        $('#1alternativa-2').addClass('certa');
        $('#1alternativa-1').addClass('bloqueio');
        $('#1alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#1alternativa-3').click(function(event){
        $('#1alternativa-3').addClass('errada');
        $('#1alternativa-1').addClass('bloqueio');
        $('#1alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#2alternativa-1').click(function(event){
        $('#2alternativa-1').addClass('certa');
        $('#2alternativa-2').addClass('bloqueio');
        $('#2alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#2alternativa-2').click(function(event){
        $('#2alternativa-2').addClass('errada');
        $('#2alternativa-1').addClass('bloqueio');
        $('#2alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#2alternativa-3').click(function(event){
        $('#2alternativa-3').addClass('errada');
        $('#2alternativa-1').addClass('bloqueio');
        $('#2alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#3alternativa-1').click(function(event){
        $('#3alternativa-1').addClass('errada');
        $('#3alternativa-2').addClass('bloqueio');
        $('#3alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#3alternativa-2').click(function(event){
        $('#3alternativa-2').addClass('certa');
        $('#3alternativa-1').addClass('bloqueio');
        $('#3alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#3alternativa-3').click(function(event){
        $('#3alternativa-3').addClass('errada');
        $('#3alternativa-1').addClass('bloqueio');
        $('#3alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#4alternativa-1').click(function(event){
        $('#4alternativa-1').addClass('errada');
        $('#4alternativa-2').addClass('bloqueio');
        $('#4alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#4alternativa-2').click(function(event){
        $('#4alternativa-2').addClass('errada');
        $('#4alternativa-1').addClass('bloqueio');
        $('#4alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#4alternativa-3').click(function(event){
        $('#4alternativa-3').addClass('certa');
        $('#4alternativa-1').addClass('bloqueio');
        $('#4alternativa-2').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#5alternativa-1').click(function(event){
        $('#5alternativa-1').addClass('errada');
        $('#5alternativa-2').addClass('bloqueio');
        $('#5alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#5alternativa-2').click(function(event){
        $('#5alternativa-2').addClass('certa');
        $('#5alternativa-1').addClass('bloqueio');
        $('#5alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#5alternativa-3').click(function(event){
        $('#5alternativa-3').addClass('errada');
        $('#5alternativa-1').addClass('bloqueio');
        $('#5alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 5){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#acabar').click(function(event){
        $('.fechar').addClass('bloqueio');
        document.getElementById('resultadoerros').value = errado;
        document.getElementById('resultadoacertos').value = certo;
    })
})