
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      let result = new Rocket();

      expect(result).toBeTruthy();
    });

    test("it should set the rocket's name if provided", () => {
      let name = 'Eden'
      let colour = 'Blue'
      let status = true
      
      let result = new Rocket({name, colour, status});

      expect(result.name).toEqual(name); 
      expect(result.colour).toEqual(colour);
      expect(result.flying).toEqual(true);
    });
  });

  describe('liftOff', () => {
    test('flying is equal to true', () => {
    
    
    let rocket = new Rocket();

    rocket.liftOff();

    expect(rocket.flying).toEqual(true);


    test('liftOff returns false when plane is flying' () => {
    let rocket2 = new Rocket();

    rocket2.liftOff();

    expect(rocket2.flying).toEqual(false);

    });

  });

    
    // ...
  });

  // ...

});
