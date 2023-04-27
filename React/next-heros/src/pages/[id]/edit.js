import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";
const axios = require("axios").default;
import Router, { useRouter } from "next/router";
import { useState } from "react";

const EditHero = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superhero: hero.superhero,
    realName: hero.realName,
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
        const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(form),
        });
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
        <MDBInput
          type="text"
          label="Superhero Name"
          name="superhero"
          onChange={handleChange}
          value={form.superhero}
        />
        <MDBInput
          type="text"
          label="Real Name"
          name="realName"
          onChange={handleChange}
          value={form.realName}
          className="my-2"
        />
        <MDBBtn type="submit" onClick={handleForm} className="mb-2">
          Edit Hero
        </MDBBtn>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  console.log(res.data);
  const hero = res.data.data;

  return {
    props: { hero: hero },
  };
}

export default EditHero;
