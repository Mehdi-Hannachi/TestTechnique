import { Col, Divider, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyData from "../helpers/Empty";
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";

const PokemonsList = ({ filterText }) => {
  const [open, setOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  const pokemons_list = useSelector(
    (state) => state.pokemonsReducer.pokemons_list
  );
  return (
    <>
      <Divider orientation="left">Pokemons</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {pokemons_list
          .filter((el) =>
            el.name.toUpperCase().includes(filterText.toUpperCase())
          )
          .map((pokemon, index) => (
            <Col
              className="gutter-row"
              onClick={() => setCurrentPokemon(pokemon)}
            >
              <PokemonCard
                pokemon={pokemon}
                key={pokemon._id}
                open={() => setOpen(true)}
              />
            </Col>
          ))}
        {open && (
          <PokemonModal
            open={open}
            close={() => setOpen(false)}
            currentPokemon={currentPokemon}
          />
        )}
      </Row>
      {pokemons_list.length == 0 && <EmptyData />}
    </>
  );
};

export default PokemonsList;
