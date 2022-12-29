import styled from "styled-components";

const MarkdownWrapper = styled.div`
    padding: 20px 30px;

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