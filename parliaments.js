function Parliament(seatsNum, count, lists) {
    this.seatsNum = seatsNum;
    this.seats = [];
    this.count = count;
    this.lists = lists;
    this.assigned = 0 ;
}

Parliament.prototype.seatsDhontDistribution = function(){
  console.log("ejecutando seatsDistribution()!!!!!!!!!!!!!!!!");
  //console.log(this.seatsNum);
  var arrayLast = this._arrayObjectsClone(this.count);
  //console.log("arrayLast");
  //console.log(arrayLast);

  //iteracciones para el resparto de escaños
  for (var i = 0; i < this.seatsNum; i++) {
    //console.log(i);
    //divido los votos para esta iteracción usando una copia del array para no perder la cifra total de votes.
    for (var j = 0; j < this.count.length; j++) {
      console.log("Original sumando escaños y divisor:");
      console.log(this.count[j]);
      arrayLast[j].votes = this.count[j].votes / this.count[j].divider;
      console.log("Copia a reducir votos:");
      console.log(arrayLast[j]);
    }
    //console.log(this.count);

    //comparar que lista tiene más votos y
    //meto el nombre del partido en el escaño que me devuelve this._getMostVotes().
    this.seats.push(this._getMostVotes(arrayLast));


    //sumo uno al contador de escaños asignados.
    this.assigned++;

    console.log('Escaños asignados:'+this.seats);

  }
  console.log(this.count);
}

Parliament.prototype._getMostVotes = function(arrayObjects){
  //creo una copia para no desordenar arrayLast por que si no dividiría mal después.
  var arrayForMosVotes = this._arrayObjectsClone(arrayObjects);

  //TODO: poder pasar un array simple o con objetos y si es así que propiedad hay que evaluar y devolver.
  arrayForMosVotes.sort(function (a, b) {
    if (a.votes > b.votes) {
      return 1;
    }
    if (a.votes < b.votes) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  //le doy la vuelta por que .sort() devuelve de menos a mas.
  arrayForMosVotes.reverse();
  console.log("winner:"+arrayForMosVotes[0].name);

  //Busco en el this.count la lista ganadora del escaño para sumarle el divisor y el escaño.
  this.count.forEach(function(element, index, array){
    if(arrayForMosVotes[0].name === element.name){
      //sumo 1 al divisor.
      element.divider = element.divider +1;
      //Sumo un escaño ganado a count
      element.seats = element.seats +1;
    }
  });

  return arrayForMosVotes[0].name;
}


Parliament.prototype._arrayObjectsClone = function(arrayObjects){
  var arrayObjectsClone = [];
  arrayObjects.forEach(function(element, index, array){
    element = JSON.stringify(element);
    arrayObjectsClone.push(element);
    element = JSON.parse(element);
    arrayObjectsClone[index] = JSON.parse(arrayObjectsClone[index]);
  });
  return arrayObjectsClone;
};

module.exports = Parliament;
