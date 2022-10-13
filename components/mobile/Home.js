import Link from 'next/link';

const Home = () => (
    <div>
      <div>mobile home</div>
      <div>
        <Link href="/posts">posts</Link>
      </div>
    </div>
);

export default Home;