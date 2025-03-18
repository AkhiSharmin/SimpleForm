import "./App.css";
import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  const handleSingUpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Simple Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm
        formTitle={"Sing Up"}
        handleSubmit={handleSingUpSubmit}
      ></ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
      ></ReuseableForm>
    </>
  );
}

export default App;
