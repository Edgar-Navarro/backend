var tool = require('../function/tools');
var formidable = require('formidable');

exports.index = async (req, res, next) =>{

    res.render("index");
}

exports.calcular = async (req, res, next) =>{
let form = new formidable.IncomingForm();
form.parse(req, function(err, rq, files) {
let datos = rq.datos;
datos = datos.replace(/ /g, "");
let count = datos.length;
let respuesta = "";
try {
    if(count > 20){
        throw("Maxima 20 caracteres");
    }else{
    let sub = datos.replace(/-/g, "R");
    sub1 = sub.replace(/[+]/g, "S");
    sub2 = sub1.replace(/[÷]/g, "V");
    sub = sub2.replace(/[x]/g, "X");
    let cadena = sub, suma = 0, resta = 0, divi = 0, multi = 0, open = "", close = "";
    const iterador = (cadena) =>{
    let array = Array.from(cadena);
    
    array.forEach(element => {
    if(element === 'S'){
        suma++;
    }
    if(element === 'R'){
        resta++;
    }
    if(element === 'V'){
        divi++;
    }
    if(element === 'X'){
        multi++;
    }
    if(element === '('){
        open++;
    }
    if(element === ')'){
        close++;
    }
    });
    }
    iterador(cadena);
    let cont = open;
    
    let expr = /([(]+)*[A-Za-z0-9]*([)]+)/;
    let mat = "";
    let opend = Number(open);
    let closed = Number(close);
    
    if(open && open){
    if(opend != closed){
        throw("Falta paréntesis ");
    }
    
    for (let i = 0; i < Number(cont); i++){
        mat = cadena.match(expr);
        suma = 0; resta = 0; divi = 0; multi = 0; open = ""; close = "";
        iterador(mat[0]);
        let result = tool.cal(mat[0],multi,divi,resta,suma); 
        let resultado = result.replace("(", "");
        let resultado2 = resultado.replace(")", "");
        cadena = cadena.replace(mat[0],resultado2);
        
    }
    suma = 0;resta = 0;divi = 0;multi = 0;open = "";close = "";
    iterador(cadena);
    respuesta = tool.cal(cadena,multi,divi,resta,suma);
    }else{
    respuesta = tool.cal(cadena,multi,divi,resta,suma);
    }
}
    
} catch (error) {
    respuesta = error;
}

    res.json({
        respuesta
    })
});
}