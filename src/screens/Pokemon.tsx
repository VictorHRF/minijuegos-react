import { useState } from "react";

const POKEMONS = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate" ].map((p) => p.toLowerCase());

  const MATCH = Math.floor(Math.random() * POKEMONS.length);

  type Form = HTMLFormElement & {
    pokemon: HTMLInputElement;
  }

export const Pokemon = () => {
  const [hasWon, sethasWon] = useState(false);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();
    const {pokemon} = event.currentTarget;
    if ( pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      sethasWon(true);
      alert("You won!");
    } else {
      alert("Wrong answer!");
    }
  }

  return (
    <div>
      <img
      height={512}
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${MATCH + 1}.png`} alt="pokemon sprite"
      style={{imageRendering: "pixelated", filter: hasWon ? "" : "brightness(0) invert(1)"}}
      width={512}/>
      { hasWon ? (
        <button style={{width: "100%"}} onClick={() => location.reload()}>
          Play again
        </button>
        ) : (
          <form onSubmit={handleSubmit}>
          <input name="pokemon" type="text" />
          <button type="submit">Submit</button>
        </form>
        )
      }
    </div>
  )
}
