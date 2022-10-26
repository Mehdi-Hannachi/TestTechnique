import { Button, Divider, Form, Result, Select } from "antd";
import React, { useState } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { pokemonFigth } from "../JS/actions/pokemonsActions";

const Figth = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [myPokemon, setMyPokemon] = useState("Choose your pokemon");
  const [myEnemy, setMyEnemy] = useState("Choose your enemy ");
  const [myPokemonImg, setMyPokemonImg] = useState("");
  const [myEnemyImg, setMyEnemyImg] = useState("");
  const pokemons = useSelector((state) => state.pokemonsReducer.pokemons);

  const onChangeWeak = (value) => {
    setMyPokemon(value);
    setMyPokemonImg(pokemons.find((el) => el.name == value).img);
  };
  const onSearchWeak = (value) => {
    setMyPokemon(value);
    setMyPokemonImg(pokemons.find((el) => el.name == value).img);
  };
  const onChangeStrong = (value) => {
    setMyEnemy(value);
    setMyEnemyImg(pokemons.find((el) => el.name == value).img);
  };
  const onSearchStrong = (value) => {
    setMyEnemy(value);
    setMyEnemyImg(pokemons.find((el) => el.name == value).img);
  };

  const figth = async (myPokemon, myEnemy) => {
    dispatch(pokemonFigth({ myPokemon: myPokemon, enemyPokemon: myEnemy }));
  };

  return (
    <>
      <Divider orientation="center">Figth</Divider>
      <Result
        icon={<MdCatchingPokemon size={90} />}
        extra={
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Form.Item style={{ marginRight: "20px" }}>
                <Select
                  showSearch
                  placeholder="Choose your pokemon"
                  optionFilterProp="children"
                  value={myPokemon}
                  onChange={onChangeWeak}
                  onSearch={onSearchWeak}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {pokemons &&
                    pokemons.length > 0 &&
                    pokemons.map((el, i) => (
                      <Option value={el.name}>{el.name}</Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Select
                  showSearch
                  placeholder="choose your enemy pokemon"
                  optionFilterProp="children"
                  value={myEnemy}
                  onChange={onChangeStrong}
                  onSearch={onSearchStrong}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {pokemons.map((el, i) => (
                    <Option
                      value={el.name}
                      onClick={() => setMyEnemyImg(el.img)}
                    >
                      {el.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {myPokemonImg && (
                <>
                  <img src={myPokemonImg} />
                  <span style={{ fontWeight: "bold", fontSize: "50px" }}>
                    Vs
                  </span>
                </>
              )}

              {myEnemyImg && <img src={myEnemyImg} />}
            </div>

            <Button
              type="danger"
              size="large"
              onClick={() => figth(myPokemon, myEnemy)}
            >
              Start
            </Button>
          </>
        }
      />
    </>
  );
};

export default Figth;
