<template>
    <div class="container-home">
        <div class="container-banner">
            <div class="capa-foto">
                <img src="../assets/images/home/bartolome.jpg" alt="Bartolome Roca" class="image-responsive foto-bartolome">
            </div>
            <div class="capa-texto-bartolome">
                <div class="texto-nombre">
                    BARTOLOMÉ ROCA
                </div>
                <div class="texto-artista">
                    Artísta plástico
                </div>
            </div>
        </div>
        <div class="container-enter">
            <a href="#" class="button-home">ENTRAR</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
    };
</script>

<style>
    *, *::before, *::after, *:before, *:after {
        box-sizing: border-box;
    } 

    .container-home {
        width: 100%;
        margin: 0;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .image-responsive {
        max-width: 100%;
        height: auto;
    }

    .boton {
        border: none;
        color: white;
        margin: 4px 2px;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 2.2vh;
        font-family: Arial, Helvetica, sans-serif;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 6px;
    }

    .boton-entrar {
        background-color: #5E5E5E;
        color: white;
        border: 2px solid #5E5E5E;
    }

    .boton-entrar:hover {
        background-color: rgb(44, 42, 42);
        color: white;
    }

    .foto-bartolome {
        max-width: 100%;
        height: auto;
        transition: all 0.2s;
    }

    .container-banner {
        display: flex;
        background-color: #5E5E5E;
        justify-content: center;
        width: 100%;
        height: auto;
    }

    .capa-foto {
        display: flex;
    }

    .capa-texto-bartolome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        height: auto;
        color: white;
    }

    .texto-nombre {
        font-size: 5.2vw;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        margin: 0 0 20px 35px;
        transition: all 0.2s;
    }

    .texto-artista {
        font-size: 2vw;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 35px;
        transition: all 0.2s;
    }

    .container-enter {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 3vw;
        font-family: sans-serif;
        margin-top: 75px;
    }

    a.button-home{
        display: inline-block;
        padding: 0.35em 1.2em;
        background-color: #5E5E5E;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        border: 2px solid #5E5E5E;
        text-decoration: none;
        font-family: 'Roboto',sans-serif;
        font-weight: 300;
        color: #fff;
        text-align: center;
        transition: all 0.2s;
        font-size: 0.8em;
    }

        a.button-home:hover{
            color:#000000;
            background-color:#FFFFFF;
        }

    @media all and (max-width:30em){
         a.button-home{
            display: block;
            margin: 0.4em auto;
        }
    }

    @media screen and (max-width: 1020px) {
        .container-banner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px 0 30px 0;
        }

        .capa-foto, .capa-texto-bartolome {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .capa-foto {
            margin-bottom: 25px;
        }

        .texto-nombre {
            font-size: 7vw;
            text-align: center;
            margin: 0px;
        }

        .texto-artista {
            font-size: 3.3vw;
            margin: 0px;
        }
    }

    @media screen and (max-width: 800px) {
        .capa-texto-bartolome {
            width: 100%;
        }

        .container-enter {
            font-size: 5vw;
            margin-top: 15px;
        }
    }

    @media screen and (max-width: 675px) {
        .texto-nombre {
            font-size: 8vw;
        }

        .texto-artista {
            font-size: 5vw;
        }

        .container-enter {
            font-size: 7vw;
        }
    }

    @media screen and (max-width: 350px) {
        .container-enter {
            margin-top: 5px;
            font-size: 12vw;
        }
    }

    @media screen and (max-width: 250px) {
        .boton {
            font-size: 12vw;
            margin: 4px 2px;
            padding: 8px 16px;
        }
    }
</style>