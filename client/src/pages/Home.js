import { Layout, Tabs } from "antd";
import Search from "antd/lib/input/Search";
import { Footer } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Figth from "../components/Figth";
import Filter from "../components/Filter";
import PokemonsList from "../components/PokemonsList";
const { Header } = Layout;

const Home = () => {
  const [filterText, setFilterText] = useState("");
  return (
    <Layout>
      <Header
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">
          <img src={"pok.png"} width="10%" />
        </div>
        <Search
          placeholder="Search for a pokemon"
          allowClear
          onChange={(e) => setFilterText(e.target.value)}
          // onSearch={onSearch}
          style={{ width: "30%" }}
        />
      </Header>
      <Tabs
        tabPosition={"left"}
        style={{
          padding: "20px",
        }}
        items={[
          "All",
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
        ].map((label, i) => {
          const id = String(i);
          return {
            label: `${label}`,
            key: id,
            children: (
              <>
                <Filter />
                <PokemonsList filterText={filterText} label={label} />
                <Figth />
              </>
            ),
          };
        })}
      />

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Pokemons ©2022 Created by Hannachi Mehdi
      </Footer>
    </Layout>
  );
};
export default Home;
