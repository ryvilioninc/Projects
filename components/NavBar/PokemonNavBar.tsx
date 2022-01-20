import React from "react";
import Link from "next/link";

const PokemonNavBar = ({ setPokemonSearched }) => {
  return (
    <div className="ui pointing menu">
      <Link href="/">
        <a className="item">SpaceX</a>
      </Link>
      <Link href="/videoBrowser">
        <a className="item">videoBrowser</a>
      </Link>
      <Link href="wikipedia">
        <a className="item">Wikipedia</a>
      </Link>
      <Link href="pokemon">
        <a className="item">Pokemon</a>
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setPokemonSearched(e.target.value)}
            />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PokemonNavBar;
