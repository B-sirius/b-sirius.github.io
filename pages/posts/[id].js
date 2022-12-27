import postMap from 'postMap.json';
import fse from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import StyledDialogBox from 'components/DialogBox';

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

// 根容器，覆盖全屏
const RootWrapper = styled.div`
    background-color: #000;
    overflow: scroll;
`
const Root = ({ children }) => (
    <RootWrapper>
        {children}
    </RootWrapper>
)

const ContentBox = styled(StyledDialogBox)`
    margin: 40px;
`

const Post = (props) => {
    const { mdText, date, title } = props;
    return (
        <Root>
            <ContentBox>
                <div>
                    title: {title}
                </div>
                <div>
                    date: {date}
                </div>
            </ContentBox>
            <ContentBox>
                <ReactMarkdown>
                    {mdText}
                </ReactMarkdown>
            </ContentBox>
        </Root>
    )
}

export default Post;