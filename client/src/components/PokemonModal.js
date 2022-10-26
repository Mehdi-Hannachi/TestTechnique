import { Modal } from "antd";
import React from "react";
import { Avatar, Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonModal = ({ open, close, currentPokemon }) => {
  return (
    <>
      <>
        <Modal
          title="Pokemon Details"
          open={open}
          onOk={close}
          onCancel={close}
        >
          <Card
            bordered={false}
            style={{
              width: "100%",
            }}
          >
            <Meta
              avatar={<Avatar src={currentPokemon.img} />}
              title={currentPokemon.name}
              description={`#${currentPokemon._id}`}
            />

            <div style={{ display: "flex" }}>
              <Card
                title="Pokemon Type"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                {currentPokemon.type.map((el) => (
                  <p>{el}</p>
                ))}
              </Card>
              <Card
                title="Weaknesses"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                {currentPokemon.weaknesses.map((el) => (
                  <p>{el}</p>
                ))}
              </Card>
            </div>
          </Card>
        </Modal>
      </>
    </>
  );
};
export default PokemonModal;
