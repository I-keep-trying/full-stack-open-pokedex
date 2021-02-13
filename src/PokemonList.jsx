import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      <h1>PokemonList </h1>
      <br />

      {pokemonList.map(({ id, name }) => {
        const imgUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
          <Link
            key={id}
            to={`/pokemon/${name}`}
            className="list-item"
            style={{
              backgroundImage: `url(${imgUri})`,
            }}
          >
            <div className="list-item-name">{name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default PokemonList
