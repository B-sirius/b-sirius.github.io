import styled from "styled-components";

const MarkdownStyle = styled.div`
    padding: 20px 30px;

    & {
        a {
            color: var(--md-link-color);
        }
        img {
            width: 100%;
        }
    }
`;

export default MarkdownStyle;