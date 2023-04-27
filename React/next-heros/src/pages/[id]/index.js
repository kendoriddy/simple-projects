import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";
const axios = require("axios").default;
import { useRouter } from "next/router";

const EachHero = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const handleDelete = async () => {
    try {
      const deleteHero = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "DELETE",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h1 className="display-3">Hero Identity</h1>
      <MDBCard className="border my-2" style={{ maxWidth: "22rem" }} key={hero.id}>
        <MDBCardBody>
          <MDBCardTitle>{hero.superhero}</MDBCardTitle>
          <MDBCardText>{hero.realName}</MDBCardText>
          <MDBBtn onClick={handleDelete} className="btn btn-danger me-2">
            Delete Hero
          </MDBBtn>
          <Link href={`/${hero._id}/edit`}>
            <MDBBtn className="btn btn-primary">Edit Hero</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
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

export default EachHero;
