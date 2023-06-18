import styled from "styled-components";

export default function HotelsComponent({ hotelsAvail }) {
  console.log(hotelsAvail);

  if (!hotelsAvail[0]) return <>loading</>;

  return (
    <Hotels>
      <h1>Alguns de nossos hoteis parceiros</h1>

      <Hotel>
        <img src={hotelsAvail[0].image} alt=""></img>
        <Infos>
          <h2>{hotelsAvail[0].name}</h2>
          <p>
            {hotelsAvail[0].Rooms.map((a) => (
              <> - {a.name} </>
            ))}
          </p>
          <button>Consulte a Disponibilidade</button>
        </Infos>
      </Hotel>
      <Hotel>
        <Infos>
          <h2>{hotelsAvail[1].name}</h2>
          <p>
            {hotelsAvail[1].Rooms.map((a) => (
              <>- {a.name}</>
            ))}
          </p>
          <button>Consulte a Disponibilidade</button>
        </Infos>
        <img src={hotelsAvail[1].image} alt=""></img>
      </Hotel>
    </Hotels>
  );
}

const Hotels = styled.div`
  h1 {
    color: white;
    font-size: 35px;
    margin-bottom: 70px;
  }

  text-align: center;
  font-family: "Geologica", sans-serif;
  margin-top: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  img,
  div {
    width: 300px;
    transition: transform 0.5s ease;
  }
  img:hover {
    transform: scale(1.2);
  }
`;

const Hotel = styled.section`
  margin: auto;
  height: 200px;
  width: 700px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  text-align: center;
  overflow: hidden;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  h2 {
    font-size: 25px;
  }
  button {
    font-family: "Geologica", sans-serif;
    border: none;
    height: 40px;
    width: 180px;
    font-size: 15px;
    text-decoration: underline;
    :hover {
      background-color: rgba(115, 10, 253, 1);
      cursor: pointer;
      border-radius: 10px;
      color: white;
      transition: 1s;
    }
  }
`;
