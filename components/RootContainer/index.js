import styled from 'styled-components';

// 固定宽度的主体容器
const ContainerWrapper = styled.div`
    width: 960px;
    margin: auto;
    overflow: hidden;
    padding: 40px 0;
    min-height: 100vh;
    color: var(--font-color)
`

const Container = ({ children }) => (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
)

export default Container;