import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg font-bold">AddCard</div>
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-400">Home</a></li>
                <li><a href="#" className="hover:text-gray-400">About</a></li>
                <li><a href="#" className="hover:text-gray-400">Services</a></li>
                <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-700`}>
        <nav>
          <ul className="flex flex-col space-y-2 p-4">
            <li><a href="#" className="block hover:text-gray-400">Home</a></li>
            <li><a href="#" className="block hover:text-gray-400">About</a></li>
            <li><a href="#" className="block hover:text-gray-400">Services</a></li>
            <li><a href="#" className="block hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
