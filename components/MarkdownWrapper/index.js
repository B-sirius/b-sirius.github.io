// 定制markdown渲染样式
import styled from "styled-components";

const MarkdownWrapper = styled.div`
    --md-link-color: ${({ theme }) => theme.mdLinkColor};

    padding: 20px 20px;

    & {
        p {
            font-size: 18px;
            line-height: 2;
        }
        a {
            color: var(--md-link-color);
        }
        img {
            width: 100%;
        }
    }
`;

export default MarkdownWrapper;