// 主页，一些介绍
import styled, { ThemeProvider } from "styled-components";
import Root from "components/Root";
import RootContainer from "components/RootContainer";
import Nav from 'components/Nav';
import theme from "theme";

const Introduce = styled.p`
  font-size: 20px;
`

const Home = () => (
  <ThemeProvider theme={theme}>
    <Root>
      <RootContainer>
        <Nav activeIndex={0} />
        <Introduce>
          我是周易，欢迎！👋我是一名程序员，目前在中国上海生活工作。
        </Introduce>
        <Introduce>
          I am  Yi Zhou, Welcome! 👋 I currently live in Shanghai, China and work as a Software Developer.
        </Introduce>
      </RootContainer>
    </Root>
  </ThemeProvider>
)

export default Home;