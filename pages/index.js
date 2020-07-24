import styled from "styled-components";
import Test from "components/Test";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Title>
      <Test></Test>
    </Title>
  );
}
