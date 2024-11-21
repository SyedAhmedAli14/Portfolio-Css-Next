import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800 shadow-md">
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
