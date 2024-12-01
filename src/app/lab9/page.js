import Link from 'next/link';

export default function Lab9() {
  return (
    <div className="container">
      <h1>Laboratorium 9</h1>
      <ul>
        <li>
          <Link href="/lab9/about">O mnie</Link>
        </li>
        <li>
          <Link href="/lab9/interests">Moje zainteresowania</Link>
        </li>
        <li>
          <Link href="/lab9/favorite">Ulubiony film</Link>
        </li>
        <li>
          <Link href="/lab9/contact">Kontakt</Link>
        </li>
      </ul>
    </div>
  );
}
