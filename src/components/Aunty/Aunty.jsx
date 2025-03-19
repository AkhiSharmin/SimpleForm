import Cousin from "../Cousin/Cousin";

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Siam"}></Cousin>
        <Cousin name={"Sabiha"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value
 */
