import Team from '../app';

// проверочный тест
test('should iterate objects', () => {
  const team = new Team();
  const iterator = team[Symbol.iterator]();

  team.characters = [
    {
      name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
    },
    {
      name: 'Мечник', type: 'Swordsman', health: 50, level: 1, attack: 40, defence: 10,
    },
    {
      name: 'Зомби', type: 'Zombie', health: 50, level: 1, attack: 40, defence: 10,
    },
  ];

  expect(iterator.next().value).toEqual({
    name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
  });
  expect(iterator.next().value).toEqual({
    name: 'Мечник', type: 'Swordsman', health: 50, level: 1, attack: 40, defence: 10,
  });
  expect(iterator.next().value).toEqual({
    name: 'Зомби', type: 'Zombie', health: 50, level: 1, attack: 40, defence: 10,
  });
  expect(iterator.next().done).toBe(true);
});
