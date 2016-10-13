describe("Dhont", function() {
  //var Dhont = require('../../lib/Dhont/Dhont');
  //var Parliament = require('../../lib/Parliament/Parliament');
  var dhont;
  var parliament = {};

  beforeEach(function() {
    parliament.asientos = 70;
    parliament.recuento = [
      340000, 280000, 160000, 60000, 15000
    ];
  });

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

});
