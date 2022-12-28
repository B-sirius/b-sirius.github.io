import { useEffect, useState } from 'react';
import postMap from 'postMap.json';
import fse from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import styled, { ThemeProvider } from 'styled-components';
import StyledDialogBox from 'components/DialogBox';
import FitDialogBox from 'components/FitDialogBox';
import Root from 'components/Root';
import RootContainer from 'components/RootContainer';
import Nav from 'components/Nav';
import MarkdownStyle from 'components/MarkdownStyle';
import theme from 'theme';
import rehypeRaw from 'rehype-raw';

const postsDirPath = path.join(process.cwd(), '_posts');

export async function getStaticPaths() {
    return {
        paths: Object.keys(postMap).map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const { name, title, date } = postMap[id];
    const mdData = await fse.readFile(`${postsDirPath}/${name}`);
    const { content: mdText } = matter(mdData);
    return {
        props: {
            id,
            title,
            date,
            mdText,
        }
    }
}

const TitleWrapper = styled.div`
    font-size: 40px;
    color: var(--font-highlight-color);
    margin-bottom: 5px;
`;

const Title = ({ children }) => (
    <TitleWrapper>
        {children}
    </TitleWrapper>
)

const TimeWrapper = styled.div`
    font-family: monospace;
    font-size: 14px;
`;

const Time = ({ children }) => (
    <TimeWrapper>
        {children}
    </TimeWrapper>
);

const Post = (props) => {
    const { mdText, date, title } = props;
    const [renderedMd, setRenderedMd] = useState(null);

    useEffect(() => {
        setRenderedMd(
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {mdText}
            </ReactMarkdown>
        )
    }, [mdText]);

    return (
        <ThemeProvider theme={theme}>
            <Root>
                <RootContainer>
                    <Nav />
                    <FitDialogBox>
                        <Title>
                            {title}
                        </Title>
                        <Time>
                            Posted on {date}
                        </Time>
                    </FitDialogBox>
                    <StyledDialogBox>
                        <MarkdownStyle>
                            {renderedMd}
                        </MarkdownStyle>
                    </StyledDialogBox>
                </RootContainer>
            </Root>
        </ThemeProvider>
    )
}

export default Post;