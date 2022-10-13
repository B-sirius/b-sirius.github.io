import postMap from 'postMap.json';
import dayjs from 'dayjs';
import Link from 'next/link';

const list = Object
    .values(postMap)
    .sort((post1, post2) => {
        const date1 = dayjs(post1.date);
        const date2 = dayjs(post2.date);
        if (date1.isBefore(date2)) {
            return 1;
        }
        return -1;
    });

const PostList = () => (
    <ul>
        {list.map((post) => {
            const { date, title, id } = post;
            return (
                <div key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <div>{date}</div>
                </div>
            )
        })}
    </ul>
)

export default PostList;