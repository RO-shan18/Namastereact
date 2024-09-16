const Contact = () => {
  return (
    <div className="Contactus">
      <h1 className="text-2xl m-4 p-4 font-semibold">Contact Us page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 mx-4 rounded-lg font-semibold"
          placeholder="Name..."
        />
        <input
          type="text"
          className="border border-black p-2 mx-4 rounded-lg font-semibold"
          placeholder="Email..."
        />
        <button className=" bg-cyan-200 font-semibold py-2 px-4 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
