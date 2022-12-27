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
    border: 1px solid #9d701d;
    background-color: #262427;
    padding: 1px;
    
    & > div {
        display: flex;
        flex-direction: column;
        height: 100%;
        border: 1px solid #9d701d;
        color: #fff;
        padding: 10px;
    }
`

export default StyledDialogBox;