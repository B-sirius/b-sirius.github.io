import postMap from 'postMap.json';
import fse from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import styled, { ThemeProvider } from 'styled-components';
import FitDialogBox from 'components/FitDialogBox';
import Root from 'components/Root';
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
    margin: 40px;
`

const TitleWrapper = styled.div`
    font-size: 40px;
`

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
            </Root>
        </ThemeProvider>
    )
}

export default Post;