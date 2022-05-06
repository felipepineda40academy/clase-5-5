//Repaso 
//1.Como hago un array que tenga tres frutas?
/*
var array_clase = ['fresas','mangos','carambola'];

var array_clase_mixto = ['fresas',123,44.5];

var sample = [ [  ['fresas','mangos','carambola'],[456,345,278],[1,5,'texto'] ] ];
*/

//console.log(sample[0][2][1]) //Par acceder al 5

//2. Como hago busquedas por indice en un arreglo

/*
            //    [       0       ]
            //       [ 0 ]  [ 1 ]
            //         
var numeros = [   [  [1,2],[3,4]  ]  ]

var rosado = numeros[0]

var celeste1y2 = numeros[0][0] //--> [1,2]

//console.log(celeste1y2)

var celeste3y4 = numeros[0][1] //-->[3,4]


var numero_uno = numeros[0][0][0]

//console.log(numero_uno)

var numero_cuatro = numeros[0][1][1]

console.log(numero_cuatro)
*/

//3. Switch
//Yo cumplo el 12 de este mes, mi hermano cumple el 25 de este mes

/*
var cumpleanos = 01;

switch (cumpleanos){

    case 12:
        alert ('hoy es mi cumpleaños');
        break;
    case 25:
        alert ('hoy es el cumpleaños de mi hermano');
        break;
    default:
        alert('la fecha ingresada no tiene cumpleanos registrados')
        break;
}
*/

//3.5 Usar un switch y convertir el tipo de dato de una variable para que el switch la pueda leer

/*
var cumpleanos = prompt ('Digite su cumpleanos');

//Metodo para revisar de que tipo de dato es la variable

//console.log(typeof(cumpleanos))

//parseInt --> hace que '23' se vuelva 23 string a int


switch (parseInt(cumpleanos)){
    case 19:
        console.log('Cumpleanos de Isaac');
        break;
    case 26:
        console.log('Cumpleanos de Alissa');
        break;
    case 24:
        console.log('Cumpleanos de Laura');
        break;
}
*/


//4.For in 
/*
var tren = ['papayas','bananos','mangos']

for (vagon in tren){
    console.log(tren[vagon]);
}

//el for in me extrae los indices
/* for indice en arreglo {
    arreglo [indice] --> lo que trae el vagon
}

*/

/*
var arreglo = [1,2,3,4,5]

for (vagon in arreglo){
    console.log(arreglo[vagon]);
}
*/

//4.5 nested for o for aninados
/*
var tren = ['papayas','bananos','mangos',[1,2,3]]

for (vagon in tren){
    //console.log(tren[vagon])
    if (typeof(tren[vagon]) == 'string'){
        console.log(tren[vagon])
    }
    if (typeof(tren[vagon])=='object'){
        for (indice_temporal in tren[vagon]){
            console.log(tren[vagon][indice_temporal])
        }
    }
}
*/
/*
var tren = [345,['fresas','papayas']]

for (vagon in tren){ //oliver entra al tren

    if (typeof(tren[vagon])=='number'){
        console.log(tren[vagon])
    }

    if (typeof(tren[vagon] == 'object')){ //si oliver encuentra un vagon que contiene otros vagones
        for (objetos in tren[vagon]){
            console.log(tren[vagon][objetos])
        }

    }


}
*/


//5.Index of-Map

/*
var tren = ['fresas','papayas','carambolas']
console.log (tren.indexOf('carambolas'))
*/
/*
var tren = ['fresas','papayas','carambolas',['pithaya','aguacate']]

console.log (tren.indexOf('fresas'))
*/

var numeros = [1,5,79,90]

//esto es el equivalente a 
numeros.forEach (function (numero,indice){
    console.log(numero+1)
})

//esto
for (vagon in tren){
    console.log(tren[vagon]+1)
}