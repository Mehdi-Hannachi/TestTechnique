import { Empty } from "antd";
import React from "react";
const EmptyData = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    style={{ marginBottom: "50px" }}
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        No <a href="#API">Pokemons Availabel</a>
      </span>
    }
  ></Empty>
);
export default EmptyData;
