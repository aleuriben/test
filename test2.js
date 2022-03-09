// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.mapear) {

  Array.prototype.mapear = function(callback, thisArg) {

    var argumentos = undefined;
    var obj = Object(this);
    var len = obj.length;
    var arreglo = new Array(len);
    var i = 0;
    while (i < len) {
      var valoractual, valordesarrollo;
      if (i in obj) {
        valoractual = obj[i];
        valordesarrollo = callback.call(argumentos, valoractual, i, obj);
        arreglo[i] = valordesarrollo;
      }
      i++;
    }
    return arreglo;
  };
}

array=[1,2,3];
console.log(array.mapear( (item) => {return item * 2} ));
