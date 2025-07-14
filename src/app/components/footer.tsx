'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <a href="https://pagedone.io/" className="flex justify-center">
            <svg
              className="w-40 h-8"
              viewBox="0 0 164 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths here */}
              <path d="M47 24.7231V7H54.4171C54.5916 7 ..." fill="#111827" />
              {/* For brevity, I've omitted the full SVG content. Paste your full paths here if needed. */}
            </svg>
          </a>

          {/* Nav links */}
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            <li><Link href="#"><span className="text-gray-800 hover:text-gray-900">Pagedone</span></Link></li>
            <li><Link href="#"><span className="text-gray-800 hover:text-gray-900">Products</span></Link></li>
            <li><Link href="#"><span className="text-gray-800 hover:text-gray-900">Resources</span></Link></li>
            <li><Link href="#"><span className="text-gray-800 hover:text-gray-900">Blogs</span></Link></li>
          </ul>

          {/* Social icons */}
          <div className="flex space-x-10 justify-center items-center mb-14 text-gray-900">
            <Link href="#"><svg className="w-[1.688rem] h-[1.688rem]" /* SVG */ /></Link>
            <Link href="#"><svg className="w-[1.688rem] h-[1.688rem]" /* SVG */ /></Link>
            <Link href="#"><svg className="w-[0.938rem] h-[1.625rem]" /* SVG */ /></Link>
            <Link href="#"><svg className="w-[1.875rem] h-[1.375rem]" /* SVG */ /></Link>
          </div>

          {/* Copyright */}
          <span className="text-lg text-gray-500 text-center block">
            © <Link href="https://pagedone.io/">pagedone</Link> 2024, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
