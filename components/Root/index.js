// 根容器，覆盖全屏
import styled from 'styled-components';

const RootWrapper = styled.div`
    background-color: ${({ theme }) => theme.rootBgColor};
    overflow: scroll;
`
const Root = ({ children }) => (
    <RootWrapper>
        {children}
    </RootWrapper>
)

export default Root;