import React from "react";
import list from "../Data";
import Card from "./Card";
import "../styles/MainBody.css";

const MainBody = () => {
  return (
    <section>
      {list.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          price={item.price}
          img={item.img}
          amount={item.amount}
        />
      ))}
    </section>
  );
};

export default MainBody;
