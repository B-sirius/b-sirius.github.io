// 根容器，覆盖全屏
import styled from 'styled-components';

const RootWrapper = styled.div`
    --root-bg-color: ${({ theme }) => theme.rootBgColor};
    --dialog-bg-color: ${({ theme }) => theme.dialogBgColor};
    --dialog-border-color: ${({ theme }) => theme.dialogBorderColor};
    --font-color: ${({ theme }) => theme.fontColor};
    --font-highlight-color: ${({ theme }) => theme.fontHighlightColor};

    background-color: var(--root-bg-color);
    overflow: scroll;
`
const Root = ({ children }) => (
    <RootWrapper>
        {children}
    </RootWrapper>
)

export default Root;