import postMap from 'postMap.json';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';

const postsDirPath = path.join(process.cwd(), '_posts');

export async function getStaticPaths(context) {
    return {
        paths: Object.keys(postMap).map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const { title } = postMap[id];
    const mdData = fs.readFileSync(`${postsDirPath}/${title}`);
    const { data: mdInfo, content: mdText } = matter(mdData);
    return {
        props: {
            id,
            mdInfo,
            mdText
        }
    }
}

const Post = (props) => {
    const { mdText, mdInfo } = props;
    return (
        <div>
            title: {mdInfo.title}
            <ReactMarkdown children={mdText} />
        </div>
    )
}

export default Post;