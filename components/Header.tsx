export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">
          Shayan Portfolio
        </h1>

        <nav className="space-x-6 text-sm">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/works" className="hover:text-gray-300">Works</a>
        </nav>
      </div>
    </header>
  );
}
