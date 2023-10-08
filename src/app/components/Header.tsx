import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 flex items-center justify-between bg-blue-600 text-white shadow-md">
      <h2 className="text-2xl">
        <Link href="/">LOGO</Link>
      </h2>
      <nav>
        <ul className="flex gap-4">
          <li className="text-xl">
            <Link href="/login">Login</Link>
          </li>
          <li className="text-xl">
            <Link href="/signup">Signup</Link>
          </li>
          <li className="text-xl">
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
