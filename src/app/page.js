import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800">
      {/* Header */}
      <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-gray-700">NCERT Reader</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="#features">
                <span className="hover:text-blue-600 cursor-pointer">Features</span>
              </Link>
            </li>
            <li>
              <Link href="#testimonials">
                <span className="hover:text-blue-600 cursor-pointer">Testimonials</span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="hover:text-blue-600 cursor-pointer">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-16 px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-6">
          Welcome to NCERT Reader
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Your one-stop solution to access NCERT books by Class, Subject, and Medium.
        </p>
        <Link href="/search">
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center text-gray-700 mb-12">
          Why Choose NCERT Reader?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-4">
              <img
                src="https://img.icons8.com/color-glass/48/class.png"
                alt="Search by Class"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h4 className="text-lg font-bold text-gray-700 text-center mb-2">
              Search by Class
            </h4>
            <p className="text-sm text-gray-600 text-center">
              Quickly find books tailored for your specific class level.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-4">
              <img
                src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-students-elearning-smashingstocks-flat-smashing-stocks.png"
                alt="Explore Subjects"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h4 className="text-lg font-bold text-gray-700 text-center mb-2">
              Explore Subjects
            </h4>
            <p className="text-sm text-gray-600 text-center">
              Access an organized collection of books by subject.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="mb-4">
              <img
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-languages-science-flaticons-lineal-color-flat-icons.png"
                alt="Multiple Languages"
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h4 className="text-lg font-bold text-gray-700 text-center mb-2">
              Multiple Languages
            </h4>
            <p className="text-sm text-gray-600 text-center">
              Easily read books in your preferred language.
            </p>
          </div>
        </div>
      </section>

    {/* How It Works Section */}
    {/* <section id="how-it-works" className="py-16 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold text-center text-gray-700 mb-12">
          How It Works
        </h3>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-bold text-gray-700 mb-4">Step 1: Select Your Class</h4>
            <p className="text-sm text-gray-600">
              Navigate to the "Search" page and choose the class you want to find books for.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-bold text-gray-700 mb-4">Step 2: Pick a Subject</h4>
            <p className="text-sm text-gray-600">
              Filter the available books by the subject of your choice for easy browsing.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h4 className="text-lg font-bold text-gray-700 mb-4">Step 3: Choose a Language</h4>
            <p className="text-sm text-gray-600">
              Access books in multiple languages, ensuring a personalized experience.
            </p>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer id="contact" className="bg-gray-100 text-center text-gray-600 py-6 border-t">
        <p className="mb-2">© 2025 NCERT Reader. All Rights Reserved.</p>
        <p>
          Built with ❤️ by{" "}
          <Link href="https://github.com/yourgithub">
            <span className="text-blue-600 underline hover:text-blue-800">
              Ajeet
            </span>
          </Link>
        </p>
      </footer>
    </div>
  );
}
