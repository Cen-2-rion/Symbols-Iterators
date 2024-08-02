import Team from '../app';

// проверочные данные
Team.characters = [
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Мечник',
    type: 'Swordsman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Зомби',
    type: 'Zombie',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
];

// проверочный тест
test('should iterate objects', () => {
  const team = new Team();
  const teamIterator = team[Symbol.iterator]();

  expect(teamIterator.next().value).toEqual(team.characters[0]);
  expect(teamIterator.next().value).toEqual(team.characters[1]);
  expect(teamIterator.next().value).toEqual(team.characters[2]);
  expect(teamIterator.next().done).toBe(true);
});
