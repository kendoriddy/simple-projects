import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";
const axios = require("axios").default;
import Router, { useRouter } from "next/router";
import { useState } from "react";

const AddNewHero = () => {
  const [form, setForm] = useState({
    superhero: "",
    realName: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    if (form.superhero === "" || form.realName === "") {
      alert("Fill all fields please");
    } else {
      try {
        const res = await axios.post("http://localhost:3000/api/hero", form);
        Router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="diplay-3">Add a New Hero Identity</h1>
      <form>
        <MDBInput type="text" label="Superhero Name" name="superhero" onChange={handleChange} />
        <MDBInput
          type="text"
          label="Real Name"
          name="realName"
          onChange={handleChange}
          className="my-2"
        />
        <MDBBtn type="submit" onClick={handleForm} className="mb-2">
          Add New Hero
        </MDBBtn>
      </form>
    </div>
  );
};

export default AddNewHero;
