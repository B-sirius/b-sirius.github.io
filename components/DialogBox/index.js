// 对话框盒，仿照了RPG游戏中的对话框样式
import styled from 'styled-components';

const DialogBox = ({ className, children }) => (
    <div className={className}>
        <div>
            {children}
        </div>
    </div>
)

const StyledDialogBox = styled(DialogBox)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border: 1px solid ${({ theme }) => theme.dialogBorderColor};
    background-color: ${({ theme }) => theme.dialogBgColor};
    padding: 1px;
    
    & > div {
        display: flex;
        flex-direction: column;
        height: 100%;
        border: 1px solid ${({ theme }) => theme.dialogBorderColor};
        color: ${({ theme }) => theme.fontColor};
        padding: 10px;
    }
`

export default StyledDialogBox;