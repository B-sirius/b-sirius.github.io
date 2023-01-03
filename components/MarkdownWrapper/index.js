// 定制markdown渲染样式
import styled from "styled-components";

const MarkdownWrapper = styled.div`
    --md-link-color: ${({ theme }) => theme.mdLinkColor};
    --md-title-shadow: ${({ theme }) => theme.mdTitleShadow};
    --md-title-color: ${({ theme }) => theme.mdTitleColor};

    & {
        h1, h2, h3 {
            text-shadow: var(--md-title-shadow);
            color: var(--md-title-color);
        }
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

        @media only screen 
            and (max-width: 500px) {
                p {
                    font-size: 16px;
                    line-height: 1.5;
                }
            }
    }
`;

export default MarkdownWrapper;