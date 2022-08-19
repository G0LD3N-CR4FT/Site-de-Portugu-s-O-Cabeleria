
// Botão começar

$(document).ready(function(){
    $('#button').click(function(){
        $('div').removeClass('bloqueio');
        $('#button').addClass('bloqueio');
        var duration = 60 * (1/3+1/3); // Converter para segundos
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
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#1alternativa-2').click(function(event){
        $('#1alternativa-2').addClass('certa');
        $('#1alternativa-1').addClass('bloqueio');
        $('#1alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#1alternativa-3').click(function(event){
        $('#1alternativa-3').addClass('errada');
        $('#1alternativa-1').addClass('bloqueio');
        $('#1alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#2alternativa-1').click(function(event){
        $('#2alternativa-1').addClass('certa');
        $('#2alternativa-2').addClass('bloqueio');
        $('#2alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#2alternativa-2').click(function(event){
        $('#2alternativa-2').addClass('errada');
        $('#2alternativa-1').addClass('bloqueio');
        $('#2alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#2alternativa-3').click(function(event){
        $('#2alternativa-3').addClass('errada');
        $('#2alternativa-1').addClass('bloqueio');
        $('#2alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#3alternativa-1').click(function(event){
        $('#3alternativa-1').addClass('errada');
        $('#3alternativa-2').addClass('bloqueio');
        $('#3alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#3alternativa-2').click(function(event){
        $('#3alternativa-2').addClass('certa');
        $('#3alternativa-1').addClass('bloqueio');
        $('#3alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#3alternativa-3').click(function(event){
        $('#3alternativa-3').addClass('errada');
        $('#3alternativa-1').addClass('bloqueio');
        $('#3alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#4alternativa-1').click(function(event){
        $('#4alternativa-1').addClass('errada');
        $('#4alternativa-2').addClass('bloqueio');
        $('#4alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#4alternativa-2').click(function(event){
        $('#4alternativa-2').addClass('errada');
        $('#4alternativa-1').addClass('bloqueio');
        $('#4alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#4alternativa-3').click(function(event){
        $('#4alternativa-3').addClass('certa');
        $('#4alternativa-1').addClass('bloqueio');
        $('#4alternativa-2').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#5alternativa-1').click(function(event){
        $('#5alternativa-1').addClass('errada');
        $('#5alternativa-2').addClass('bloqueio');
        $('#5alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#5alternativa-2').click(function(event){
        $('#5alternativa-2').addClass('certa');
        $('#5alternativa-1').addClass('bloqueio');
        $('#5alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#5alternativa-3').click(function(event){
        $('#5alternativa-3').addClass('errada');
        $('#5alternativa-1').addClass('bloqueio');
        $('#5alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });

    $('#6alternativa-1').click(function(event){
        $('#6alternativa-1').addClass('errada');
        $('#6alternativa-2').addClass('bloqueio');
        $('#6alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#6alternativa-2').click(function(event){
        $('#6alternativa-2').addClass('errada');
        $('#6alternativa-1').addClass('bloqueio');
        $('#6alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#6alternativa-3').click(function(event){
        $('#6alternativa-3').addClass('certa');
        $('#6alternativa-1').addClass('bloqueio');
        $('#6alternativa-2').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    
    $('#7alternativa-1').click(function(event){
        $('#7alternativa-1').addClass('errada');
        $('#7alternativa-2').addClass('bloqueio');
        $('#7alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#7alternativa-2').click(function(event){
        $('#7alternativa-2').addClass('errada');
        $('#7alternativa-1').addClass('bloqueio');
        $('#7alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#7alternativa-3').click(function(event){
        $('#7alternativa-3').addClass('certa');
        $('#7alternativa-1').addClass('bloqueio');
        $('#7alternativa-2').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });

    
    $('#8alternativa-1').click(function(event){
        $('#8alternativa-1').addClass('errada');
        $('#8alternativa-2').addClass('bloqueio');
        $('#8alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#8alternativa-2').click(function(event){
        $('#8alternativa-2').addClass('certa');
        $('#8alternativa-1').addClass('bloqueio');
        $('#8alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#8alternativa-3').click(function(event){
        $('#8alternativa-3').addClass('errada');
        $('#8alternativa-1').addClass('bloqueio');
        $('#8alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });

    
    $('#9alternativa-1').click(function(event){
        $('#9alternativa-1').addClass('certa');
        $('#9alternativa-2').addClass('bloqueio');
        $('#9alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#9alternativa-2').click(function(event){
        $('#9alternativa-2').addClass('errada');
        $('#9alternativa-1').addClass('bloqueio');
        $('#9alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#9alternativa-3').click(function(event){
        $('#9alternativa-3').addClass('errada');
        $('#9alternativa-1').addClass('bloqueio');
        $('#9alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });

    
    $('#10alternativa-1').click(function(event){
        $('#10alternativa-1').addClass('certa');
        $('#10alternativa-2').addClass('bloqueio');
        $('#10alternativa-3').addClass('bloqueio');
        soma = soma+1;
        certo = certo+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#10alternativa-2').click(function(event){
        $('#10alternativa-2').addClass('errada');
        $('#10alternativa-1').addClass('bloqueio');
        $('#10alternativa-3').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });
    $('#10alternativa-3').click(function(event){
        $('#10alternativa-3').addClass('errada');
        $('#10alternativa-1').addClass('bloqueio');
        $('#10alternativa-2').addClass('bloqueio');
        soma = soma+1;
        errado = errado+1;
        if(soma == 10){
            $('#acabar').removeClass('bloqueio');
        }
    });

    var mensagem3 = 'Erros:';
    var mensagem2 = 'Acertos:';

    $('#acabar').click(function(event){
        if(certo > errado && errado == 0){
            var mensagem1 ='Caraca Machado de Assis você acertou tudo';
            }
            if(certo == 9 || certo == 8){
                var mensagem1 ='Quase gabaritou, mas a matemática não perdoa';
                }
            if(certo < 8 && certo >=6 ){
                var mensagem1 ='Média eu diria';
                }
            if(certo == 5){
                var mensagem1 ='Tudo em perfeito equilíbrio como diria Thanos';
                }
            if(certo < 5 && certo >= 3){
                var mensagem1 ='Podia ser melhor em, vai estudar';
                }
            if(certo < 3){
                var mensagem1 ='Tava dormindo na apresentação né?';
                }
            if(errado == 10){
                var mensagem1 ='Como você teve a capacidade de errar tudo, surpreendente';
                }
        $('.fechar').addClass('bloqueio');
        $('#total').append(mensagem1);
        $('#erros').append(mensagem3, errado);
        $('#acertos').append(mensagem2, certo);
    })
})

