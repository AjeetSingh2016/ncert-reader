export default function ClassSidebar({ classes, onSelectClass }) {
    return (
      <aside className="w-full sm:w-1/4 bg-gradient-to-b from-blue-50 to-blue-200 p-6 shadow-lg rounded-lg sm:rounded-none">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Select a Class
        </h2>
        <ul className="space-y-3">
          {classes.map((classItem) => (
            <li
              key={classItem.id}
              className="cursor-pointer p-3 rounded-lg bg-white hover:bg-blue-600 hover:text-white shadow transition-transform duration-300 transform hover:scale-105"
              onClick={() => onSelectClass(classItem.class)}
              aria-label={`Select Class ${classItem.class}`}
            >
              Class {classItem.class}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
  