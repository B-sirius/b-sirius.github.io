import postMap from 'postMap.json';
import fse from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import styled, { ThemeProvider } from 'styled-components';
import FitDialogBox from 'components/FitDialogBox';
import Root from 'components/Root';
import RootContainer from 'components/RootContainer';
import Nav from 'components/Nav';
import theme from 'theme';

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

const ContentBox = styled(FitDialogBox)`
    margin-bottom: 0;
`

const TitleWrapper = styled.div`
    font-size: 40px;
    color: var(--font-highlight-color)
`;

const Title = ({ children }) => (
    <TitleWrapper>
        {children}
    </TitleWrapper>
)

const Post = (props) => {
    const { mdText, date, title } = props;
    return (
        <ThemeProvider theme={theme}>
            <Root>
                <RootContainer>
                    <Nav />
                    <ContentBox>
                        <Title>
                            {title}
                        </Title>
                        <div>
                            Posted on {date}
                        </div>
                    </ContentBox>
                    <ContentBox>
                        <ReactMarkdown>
                            {mdText}
                        </ReactMarkdown>
                    </ContentBox>
                </RootContainer>
            </Root>
        </ThemeProvider>
    )
}

export default Post;