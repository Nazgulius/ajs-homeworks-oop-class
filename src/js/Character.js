export default class Character (name, type) {
  this.name = createCharacter(name);
  this.type = createCharacter(type);
  this.health = 100;
  this.level = 1;  

  function createCharacter(name) {
    try {
      if (name.length > 1 && name.length < 11) {
            return {
              name: name,
            }
      } else {
        throw new Error('error in else name');
      }      
    } catch (error) {
      throw new Error(error);
    }
  }
  function createCharacter(type) {
    try {
      if (type == Bowman || type == Swordsman || type == Magician
           || type == Undead || type == Zombie || type == Daemon) {
            return {              
              type: type,
            }
      } else {
        throw new Error('error in else type');
      }      
    } catch (error) {
      throw new Error(error);
    }
  }
/*
  default   
  Атака/защита:
    Bowman: 25/25
    Swordsman: 40/10
    Magician: 10/40
    Undead: 25/25
    Zombie: 40/10
    Daemon: 10/40
  */
}