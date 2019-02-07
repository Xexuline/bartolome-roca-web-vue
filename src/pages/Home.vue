<template>
    <div class="container-home">
        <div class="container-home-author">
            <div class="container-home-author-photo">
            <img src="../assets/images/home/bartolome.jpg" alt="Bartolome Roca" class="image-responsive">
            </div>
            <div class="container-home-author-text">
            <div class="container-home-author-text-name">
                BARTOLOMÉ ROCA
            </div>
            <div class="container-home-author-text-artist">
                Artísta plástico
            </div>
            </div>
        </div>
        <div class="container-home-button">
            <a href="#" class="container-home-button-enter">ENTRAR</a>
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

    body, html {
        margin: 0;
        padding: 0;
    }

    .container-home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .container-home-author {
        background-color: #5E5E5E;
        width: 100%;
        display: flex;
        justify-content: center;
        height: auto;
        margin: 10px;
    }

    .container-home-author-photo {
        display: flex;
    }

    .container-home-author-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        height: auto;
        color: white;
    }

    .container-home-author-text-name {
        font-size: 5.2vw;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        margin: 0 0 20px 35px;
        transition: all 0.2s;
    }

    .container-home-author-text-artist {
        font-size: 2vw;
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 35px;
        transition: all 0.2s;
    }

    .container-home-button {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 10px;
        font-size: 3vw;
        font-family: sans-serif;
        margin-top: 75px;
    }

    a.container-home-button-enter {
        display: inline-block;
        padding: 0.35em 1.2em;
        background-color: #5E5E5E;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        border: 2px solid #5E5E5E;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: #fff;
        text-align: center;
        transition: all 0.2s;
        font-size: 0.8em;
    }

    a.container-home-button-enter:hover {
        color:#000000;
        background-color:#FFFFFF;      
    }

    /* IMAGES RESPONSIVE */
    .image-responsive {
        max-width: 100%;
        height: auto;
    }

    @media all and (max-width: 30em){
         a.container-home-button-enter{
            display: block;
            margin: 0.4em auto;
        }
    }

    @media screen and (max-width: 1020px) {
        .container-home-author {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px 0 30px 0;
        }

        .container-home-author-photo, .container-home-author-text {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container-home-author-photo {
            margin-bottom: 25px;
        }

        .container-home-author-text-name {
            font-size: 7vw;
            text-align: center;
            margin: 0px;
        }

        .container-home-author-text-artist {
            font-size: 3.3vw;
            margin: 0px;
        }
    }

    @media screen and (max-width: 800px) {
        .container-home-author-text {
            width: 100%;
        }

        .container-home-button {
            font-size: 5vw;
            margin-top: 15px;
        }
    }

    @media screen and (max-width: 675px) {
        .container-home-author-text-name {
            font-size: 8vw;
        }

        .container-home-author-text-artist {
            font-size: 5vw;
        }

        .container-home-button {
            font-size: 7vw;
        }
    }

    @media screen and (max-width: 350px) {
        .container-home-button {
            margin-top: 5px;
            font-size: 12vw;
        }
    }

    @media screen and (max-width: 250px) {
        .container-home-button {
            font-size: 12vw;
            margin: 4px 2px;
            padding: 8px 16px;
        }
    }  
</style>