describe("Parliament", function() {
  var Parliament = require('../../lib/Parliament');
  console.log(Parliament);
  var parliament;

  beforeEach(function() {
    parliamentMockData = {
        seatsNum : 7,
        count : [
          { name   : "A",
            votes  : 340000,
            divider: 1,
            seats  : 0
          },
          { name   : "B",
            votes  : 280000,
            divider: 1,
            seats  : 0
          },
          { name   : "C",
            votes  : 160000,
            divider: 1,
            seats  : 0
          },
          { name   : "D",
            votes  : 60000,
            divider: 1,
            seats  : 0
          },
          { name   : "E",
            votes  : 15000,
            divider: 1,
            seats  : 0
          }
        ],
        lists : [
          { name   : "A",
            type   : null,
            persons  : null
          },
          { name   : "B",
            type   : null,
            persons  : null
          },
          { name   : "C",
            type   : null,
            persons  : null
          },
          { name   : "D",
            type   : null,
            persons  : null
          },
          { name   : "E",
            type   : null,
            persons  : null
          }
        ]
    }
    parliament = new Parliament(parliamentMockData.seatsNum, parliamentMockData.count, parliamentMockData.lists);
  });

  it("'seats' sea igual a lo recibido", function(){
    expect(parliament.seatsNum).toEqual(parliamentMockData.seatsNum);
  });

  // A diferencia de las validaciones de parliament.asientos (ya comentadas) esto valida que no hayan sobreescrito la function
  // y que el objeto guardado en el atributo parliament.count sea el mismo que nos han pasado, de donde sea.
  // En definitiva, valida que la construcción del objeto se haya realizado correctamente.
  it("'count' sea igual a lo recibido", function(){
    expect(parliament.count).toEqual(parliamentMockData.count);
  });

  it("'lists' sea igual a lo recibido", function(){
    expect(parliament.lists).toEqual(parliamentMockData.lists);
  });


  describe("Cuando se reparten los escaños con seatsDistribution() ", function(){

    beforeEach(function(){

      parliament.seatsDistribution();
    });

    it("'assigned' sea igual a los 'seats'", function(){
      expect(parliament.assigned).toEqual(parliamentMockData.seatsNum);
    });


    it("'_getMostVotes()' devuelva lo esperado", function(){
      expect(parliament._getMostVotes(parliamentMockData.count)).toContain("A");
    });

    it("'_arrayObjectClone()' devuelva un clon", function(){
      expect(parliament._arrayObjectsClone(parliamentMockData.count)).toEqual(parliamentMockData.count)
    });

  });



  /*
  it("asientos debería de ser un number", function() {
    expect(parliament.asientos).not.toBeUndefined();
    expect(parliament.asientos).not.toBeNull();
    expect(parliament.asientos).toBeGreaterThan(0);
    //expect(parliament.asientos).isNumber();

    //demonstrates use of custom matcher
    //expect(player).toBePlaying(song);
  });

  it("recuento debería de ser un array", function() {
    expect(parliament.recuento).not.toBeUndefined();
    expect(parliament.recuento).not.toBeNull();
    expect(parliament.recuento).toBeDefined();

    //demonstrates use of custom matcher
    //expect(player).toBePlaying(song);
  });
  */

});
