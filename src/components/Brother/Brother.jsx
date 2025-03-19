import { useContext } from "react";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const [money] = useContext(MoneyContext);
  const gold = useContext(AssetContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>Grandpa Money: {money}</p>
      <p>Has: {gold}</p>
    </div>
  );
};

export default Brother;
