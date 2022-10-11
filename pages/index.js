import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>home</div>
      <div>
        <Link href="/posts">posts</Link>
      </div>
    </div>
  )
}
