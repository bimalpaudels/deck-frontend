export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <img className="h-4 mr-4" src={"/next.svg"} alt="Logo" /> */}
          <h1 className="text-lg font-bold">BMlDeck</h1>
        </div>
        <nav>
          <ul className="flex">
            <li className="mr-6">
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
