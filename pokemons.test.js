// const {filterBySpeed, starterPokemons} = require('./pokemons');

// test('Pokémons acima de 50 de velocidade', () => {
//   expect.assertions(1);
//    return filterBySpeed(50).then((data) => {
//     expect(data).toEqual(['Charmander', 'Pikachu']);
//   });
// });

let starterPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Electric', speed: 90 },
];

const filterBySpeed = (minimumSpeed) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const bySpeed = starterPokemons
      .filter((pokemons) => pokemons.speed >= minimumSpeed)
      .map((pokemon) => pokemon.name);
    if (bySpeed.length > 0) resolve(bySpeed);
    return reject('Nenhum Pokemon encontrado.');
  }, 1500);
});

describe('Verifica velocidade dos pokemons.', () => {
  beforeEach(() => {
    starterPokemons = [
      { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
      { name: 'Charmander', type: 'Fire', speed: 65 },
      { name: 'Squirtle', type: 'Water', speed: 43 },
      { name: 'Pikachu', type: 'Electric', speed: 90 },
    ];
  });

  it('Pokémons acima de 50 de velocidade', () => {
    starterPokemons.push({ name: 'Mewtwo', type: 'Psychic', speed: 100 })
    expect.assertions(1);
    return filterBySpeed(50).then((data) => {
      expect(data).toEqual(['Charmander', 'Pikachu', 'Mewtwo']);
    });
  });

  it('Pokémons acima de 99 de velocidade', () => {
    expect.assertions(1);
    return filterBySpeed(99).catch((data) => {
      expect(data).toBe('Nenhum Pokemon encontrado.');
    });
  });

  it('Pokémons acima de 50 de velocidade (Async/Await)', async () => {
    starterPokemons.push({ name: 'Mewtwo', type: 'Psychic', speed: 100 });
    const data = await filterBySpeed(50);
    expect.assertions(1);
    expect(data).toEqual(['Charmander', 'Pikachu', 'Mewtwo']);
  });

  it('Pokémons acima de 99 de velocidade (Async/Awayt)', async () => {
    expect.assertions(1);
    try {
      await filterBySpeed(99);
    }
    catch (error) {
      expect(error).toBe('Nenhum Pokemon encontrado.');
    }
  });

});
