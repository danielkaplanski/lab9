import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav className="nav">
        <Link href="/lab7">Lab 7</Link>
        <Link href="/lab8">Lab 8</Link>
        <Link href="/lab9">Lab 9</Link>
      </nav>
      <div className="container">
        <h1>Witaj w aplikacji</h1>
        <p>Wybierz laboratorium z menu powyżej.</p>
      </div>
    </div>
  );
}
