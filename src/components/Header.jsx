import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  header {
    background-color: #0077dd;
    color: #fff;
    padding: 20px;
  }
  img {
    width: 100px;
    height: 100px;
  }
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <div className="logo">
        <img src="logoAir.jpg" />
        <button
          onClick={() => {
            navigate("./registration");
          }}
        >
          Registrati
        </button>
      </div>
    </StyledHeader>
  );
}
