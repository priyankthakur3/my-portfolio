import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/80">
      <small className="mb-2 block text-xs">
        &copy; {year} Priyank Thakur. All Rights reserved
      </small>
      <p className="font-semibold text-xs">
        <span>About this website:</span> Built with React.js, Next.js,
        TypeScript, Tailwind CSS, Framer Motion. Hosted on Vercel
      </p>
    </footer>
  );
}
