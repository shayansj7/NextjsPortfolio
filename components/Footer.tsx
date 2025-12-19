import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Shayan Shimura
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/shayan-shimura-101618275/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/shayansj7"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.instagram.com/shayan_soccer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
