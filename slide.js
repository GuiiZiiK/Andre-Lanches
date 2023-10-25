
    var radio = document.querySelector('.manual-btn')
    var cont = 1

    document.getElementById('radio1').checked = true

    setInterval(() => {
        proximaImg()
}, 5000)

    function proximaImg(){
        cont++ 

        if(cont > 3){
            cont = 1
        }

        document.getElementById('radio'+cont).checked = true
    }


    /* É UM PEQUENO CÓDIGO PARA FAZER COM QUE FIQUE AUTOMÁTICA A ROTAÇÃO DE IMAGENS DE PROMOÇÃO */