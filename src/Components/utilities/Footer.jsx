import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Challenges", href: "/challenges" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About", href: "/about" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 text-lg font-medium">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-gray-900 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Developer Info */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <p className="font-semibold text-gray-900">Developed by A.Marjuk</p>
          <div className="flex gap-4 mt-1">
            <a
              href="https://github.com/swapnachari-marjuk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition text-lg"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ahmad-marjuk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/ahmad.marjuk.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition text-lg"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SkillSprint. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
