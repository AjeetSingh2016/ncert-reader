export default function BookGrid({ books }) {
    return (
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full"
          >
            {/* Book Spine */}
            <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-b from-blue-300 to-blue-500 rounded-l-xl cursor-pointer"></div>
  
            {/* Book Cover */}
            <div className="flex  flex-col justify-between cursor-pointer p-6">
              <img
                src={"poster.jpg"} // Ensure the correct image path is used
                alt={book.title}
                className="w-full h-64 object-fill rounded-md mb-4" // Consistent size for images
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-blue-600">{book.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-medium">Subject:</span> {book.subject}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Medium:</span> {book.medium}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  