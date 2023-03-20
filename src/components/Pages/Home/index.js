import React from "react";
import "./style.css";
import Input from "../../Input";
import Hero from "../../Hero";

function Home() {
  return (
    <div>
      <h1 className="pageTitle">Cocktail Soulmate</h1>
      <Hero />
      <Input />
    </div>
  );
}
export default Home;
