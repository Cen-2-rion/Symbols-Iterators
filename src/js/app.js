// реализуем итератор в классе Team, который по одному выдаёт персонажей (объекты типа Character)
export default class Team {
  constructor(...args) {
    this.characters = args;
  }

  [Symbol.iterator]() {
    let index = 0;

    // обратить внимание, индекс первого персонажа при вызове next() равен 1, а не 0, как в массиве
    return {
      next: () => {
        if (index < this.characters.length) {
          return {
            value: this.characters[index++],
            done: false,
          };
        }

        return { done: true };
      },
    };
  }
}
