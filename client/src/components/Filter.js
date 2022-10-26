import { Divider, Form, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPokemonsStrongTo,
  getPokemonsWeakTo,
} from "../JS/actions/pokemonsActions";

const Filter = () => {
  const { Option } = Select;

  const dispatch = useDispatch();
  const [weakTo, setWeakTo] = useState("Select a weakness");
  const [strongTo, setStrongTo] = useState("Select a strength");

  const onChangeWeak = (value) => {
    setWeakTo(value);
    setStrongTo("Select a strength");
    dispatch(getPokemonsWeakTo(value));
  };
  const onSearchWeak = (value) => {
    setWeakTo(value);
    setStrongTo("Select a strength");
    dispatch(getPokemonsWeakTo(value));
  };
  const onChangeStrong = (value) => {
    setStrongTo(value);
    setWeakTo("Select a weakness");
    dispatch(getPokemonsStrongTo(value));
  };
  const onSearchStrong = (value) => {
    setStrongTo(value);
    setWeakTo("Select a weakness");
    dispatch(getPokemonsStrongTo(value));
  };
  return (
    <>
      <Divider orientation="left">Filters</Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Form.Item label="Weak To" style={{ marginRight: "20px" }}>
          <Select
            showSearch
            placeholder="Select a weakness"
            optionFilterProp="children"
            value={weakTo}
            onChange={onChangeWeak}
            onSearch={onSearchWeak}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {[
              "Fire",
              "Water",
              "Grass",
              "Normal",
              "Poison",
              "Flying",
              "Fighting",
              "Ground",
              "Rock",
              "Bug",
              "Ghost",
              "Steel",
              "Electric",
              "Psychic",
              "Ice",
              "Dragon",
              "Dark",
              "Fairy",
            ].map((el, i) => (
              <Option value={el}>{el}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Strong to">
          <Select
            showSearch
            placeholder="Select a strength"
            optionFilterProp="children"
            value={strongTo}
            onChange={onChangeStrong}
            onSearch={onSearchStrong}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {[
              "Fire",
              "Water",
              "Grass",
              "Normal",
              "Poison",
              "Flying",
              "Fighting",
              "Ground",
              "Rock",
              "Bug",
              "Ghost",
              "Steel",
              "Electric",
              "Psychic",
              "Ice",
              "Dragon",
              "Dark",
              "Fairy",
            ].map((el, i) => (
              <Option value={el}>{el}</Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </>
  );
};

export default Filter;
