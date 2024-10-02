export default class Character {
  constructor(name, type){      
    this.health = 100;
    this.level = 1;  

    this.attack = undefined;
    this.defebce = undefined;

    if (name.length > 1 && name.length < 11) {
      this.name = name;
    } else {
      throw new Error('Name mistake. The name must be between 2 and 10 characters.');
    }    
    
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (!types.includes(type)) {  
      throw new Error('Type error. The type can be: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.');
    } else {
      this.type = type;
    }
  }
}