const ReuseableForm = ({
  formTitle,
  handleSubmit,
  submitBtnText = "Submit",
}) => {
  return (
    <div>
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="text" name="phone" id="" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReuseableForm;
