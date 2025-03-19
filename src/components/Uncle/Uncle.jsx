import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Aynan"} asset={asset}></Cousin>
        <Cousin name={"Aaniya"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
