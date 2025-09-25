import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Meu Blog
        </Link>
      </div>
    </header>
  );
}