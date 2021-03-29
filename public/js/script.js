document.addEventListener("DOMContentLoaded", function (event) {

    const inicio = async () =>{

    document.querySelector('#igual').addEventListener('click', consultar);
    document.querySelector('#borrar').addEventListener('click', borrar);
    document.querySelector('#siete').addEventListener('click', siete);
    document.querySelector('#ocho').addEventListener('click', ocho);
    document.querySelector('#nueve').addEventListener('click', nueve);
    document.querySelector('#cuatro').addEventListener('click', cuatro);
    document.querySelector('#cinco').addEventListener('click', cinco);
    document.querySelector('#seis').addEventListener('click', seis);
    document.querySelector('#uno').addEventListener('click', uno);
    document.querySelector('#dos').addEventListener('click', dos);
    document.querySelector('#tres').addEventListener('click', tres);
    document.querySelector('#cero').addEventListener('click', cero);
    document.querySelector('#suma').addEventListener('click', suma);
    document.querySelector('#resta').addEventListener('click', resta);
    document.querySelector('#multi').addEventListener('click', multi);
    document.querySelector('#divi').addEventListener('click', divi);
    document.querySelector('#open').addEventListener('click', open);
    document.querySelector('#close').addEventListener('click', close);
    document.querySelector('#punto').addEventListener('click', punto);

    function punto(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}.`;
    }

    function close(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada})`;
    }

    function open(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}(`;
    }

    function divi(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}÷`;
    }

    function multi(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}x`;
    }

    function resta(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}-`;
    }

    function suma(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}+`;
    }

    function cero(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}0`;
    }

    function tres(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}3`;
    }

    function dos(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}2`;
    }

    function uno(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}1`;
    }

    function seis(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}6`;
    }

    function cinco(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}5`;
    }

    function cuatro(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}4`;
    }

    function nueve(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}9`;
    }

    function ocho(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}8`;
    }

    function siete(e){
      e.preventDefault();
      let entrada = document.querySelector("#entrada").value;
      document.querySelector("#entrada").value = `${entrada}7`;
    }

    function borrar(e){
      e.preventDefault();
      document.querySelector("#entrada").value = "";
    }
       async function consultar(e){
        e.preventDefault();
        try {
            const param = document.querySelector("#entrada").value;
            let datos = {datos: param};
            const data = await fetch(`http://localhost:4000/calcular`, {
                method: "POST",
                body: JSON.stringify(datos),
                headers: {
                  'Content-Type': 'application/json'
                }
                })
                const json = await data.json();
              if(typeof json.respuesta === "object"){
             document.querySelector("#entrada").value = "Error";
              }else{
                document.querySelector("#entrada").value = json.respuesta;
              }
        } catch (error) {
            console.log(error);
        }
    }
    
    
    }
    
    inicio();
    });