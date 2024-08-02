// реализуем итератор в классе Team, который по одному выдаёт персонажей (объекты типа Character)
export default class Team {
  constructor(...args) {
    this.characters = args;
  }

  [Symbol.iterator]() {
    const index = 0;

    return {
      next: () => {
        if (index < this.characters.length) {
          return {
            value: this.characters[index + 1],
            done: false,
          };
        }

        return { done: true };
      },
    };
  }
}
