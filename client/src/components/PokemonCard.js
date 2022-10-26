import { Avatar, Card } from "antd";
import React from "react";
const { Meta } = Card;

const style = {
  padding: "8px 0",
  marginBottom: 10,
  width: 250,
};

const PokemonCard = ({ pokemon, open }) => {
  return (
    <Card style={style} hoverable size="small" onClick={open}>
      <Meta avatar={<Avatar src={pokemon.img} />} title={pokemon.name} />
    </Card>
  );
};
export default PokemonCard;
