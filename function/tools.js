module.exports = {
    cal: function (cadena,multi,divi,resta,suma) {
        let expresion = /([-]?[0-9]*\.?[0-9]+)X([-]?[0-9]*\.?[0-9]+)/;
        let match = "";
   
        for (let i = 0; i < Number(multi); i++){
            match = cadena.match(expresion);
    
            let mult = Number(match[1])*Number(match[2]);
            let newCadena = cadena.replace(match[0],mult);
            cadena = newCadena;
        }
        let cadena2 = "";
        let expresion2 = /([-]?[0-9]*\.?[0-9]+)V([-]?[0-9]*\.?[0-9]+)/;
        let match2 = "";
    
        for (let i = 0; i < Number(divi); i++){
            cadena2 = cadena;
            match2 = cadena2.match(expresion2);
            if(Number(match2[2]) === 0){
                throw("No se puede dividir entre cero");
            }
            let div = Number(match2[1])/Number(match2[2]);
            let newCadena2 = cadena2.replace(match2[0],div);
            cadena = newCadena2;
        }
    
        let cadena3 = "";
        let expresion3 = /([-]?[0-9]*\.?[0-9]+)R([-]?[0-9]*\.?[0-9]+)/;
        let match3 = "";
    
        for (let i = 0; i < Number(resta); i++){
            cadena3 = cadena;
            match3 = cadena3.match(expresion3);
            let rest = Number(match3[1])-Number(match3[2]);
            cadena = cadena3.replace(match3[0],rest);
        }   
    
        let cadena4 = "";
        let expresion4 = /([-]?[0-9]*\.?[0-9]+)S([-]?[0-9]*\.?[0-9]+)/;
        let match4 = "";
    
        for (let i = 0; i < Number(suma); i++){
            cadena4 = cadena;
            match4 = cadena4.match(expresion4);
            let sum = Number(match4[1])+Number(match4[2]);
            let newCadena4 = cadena4.replace(match4[0],sum);
            cadena = newCadena4;
        }
        return cadena;
    },
  };