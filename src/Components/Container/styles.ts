import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: -8px;
  overflow: hidden;
`;

const Title = styled.h1`
  color: #fff;
  width: max-content;
`;

interface ContentProps {
  url: string;
}

const Content = styled.div<ContentProps>`
  background-image: url(${(props) => props.url});
  width: 264px;
  height: 354px;
  margin: 5px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 400px;

  & > ${Content} {
    margin: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`;

const Button = styled.button`
  border: 0;
  color: #000000;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default {
  Container,
  Title,
  ContentWrapper,
  Content,
  ButtonWrapper,
  Button,
};
