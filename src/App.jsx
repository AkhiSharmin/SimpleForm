import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReuseableForm from "./components/ReuseableForm/ReuseableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("sing up data", data);
  // };

  // const handleUpdateProfile = (data) => {
  //   console.log(" update profile data", data);
  // };

  return (
    <>
      <h1>Form Form</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sing Up"} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>Please sing up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateProfile}
        submitBtnText={"Update"}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always Keep your profile update</p>
        </div>
      </ReuseableForm> */}
    </>
  );
}

export default App;
