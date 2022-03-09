function mapear(callback, i){
  var len = this.Array.length;
  while(i < len){
    i++;
    this.Array = callback.call(callback,i, this.Array[i]);

  }
}
