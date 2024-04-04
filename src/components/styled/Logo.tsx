import styled from "styled-components";

interface LogoProps {
  $image: string;
}

export const Logo = styled.image<LogoProps>`
  background-image: ${(props) => `url(${props.$image})`};
  background-size: cover;
  width: 200px;
  height: 200px;
`;
