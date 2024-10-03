import Character from '../Character.js';

test('Error in name', () => {
  expect(() => new Character('A', 'Bowerman')).toThrow('Name mistake. The name must be between 2 and 10 characters.');
})

test('Error in type', () => {
  expect(() => new Character('Alex', 'Bow')).toThrow('Type error. The type can be: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie.');
})

test('Error in create charecter', () => {
  const warrior = new Character('Alex', 'Bowerman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'Bowerman',
  }
  expect(warrior).toEqual(correct);
})