import { useContext } from "react";
import Friend from "../Friend/Friend";
import Special from "../Special/Special";
import { AssetContext } from "../Grandpa/Grandpa";

const Cousin = ({ name, asset }) => {
  const gold = useContext(AssetContext);
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>
        {asset && <Special asset={asset}></Special>}
        {name === "Siam" && <Friend></Friend>}
        {name === "Sabiha" && <p>Has: {gold}</p>}
      </section>
    </div>
  );
};

export default Cousin;
