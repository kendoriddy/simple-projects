import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";
const axios = require("axios").default;

const index = ({ heroes }) => {
  return (
    <div>
      <h1 className="diplay-2 container">SuperHero Manager</h1>
      <div className="container" style={{display: 'flex', flexWrap: 'wrap', columnGap: '10px'}}>
        {heroes?.map((hero) => {
          return (
            <MDBCard
              className="border my-2"
              style={{ maxWidth: "22rem" }}
              key={hero.id}
            >
              <MDBCardBody>
                <MDBCardTitle>{hero.superhero}</MDBCardTitle>
                <MDBCardText>Reveal Identity</MDBCardText>
                <Link href={`/${hero._id}`}>
                  <MDBBtn className='mx-2'>View Hero</MDBBtn>
                </Link>
                <Link href={`/${hero._id}/edit`}>
                  <MDBBtn>Edit Hero</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  console.log(res.data.data);
  const { hero } = res.data.data;

  return {
    props: { heroes: res.data.data },
  };
}

export default index;
