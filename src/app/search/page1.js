"use client"
import { useState } from "react";
import ClassSidebar from "../components/ClassSidebar";
import BookGrid from "../components/BookGrid";
import booksData from "../../data/books.json";

export default function SearchPage() {
  const [selectedClass, setSelectedClass] = useState("1");
  const [selectedMedium, setSelectedMedium] = useState("Hindi");
  const [selectedSubject, setSelectedSubject] = useState("");

  const currentClass = booksData.find((cls) => cls.class === selectedClass);
  const subjects =
    selectedMedium === "Hindi"
      ? currentClass.hindiMediumSubjects
      : currentClass.englishMediumSubjects;

  const filteredBooks = selectedSubject
    ? subjects.filter((book) => book.subject === selectedSubject)
    : subjects;

  return (
    <main className="flex min-h-screen bg-gray-50">
      <ClassSidebar
        classes={booksData}
        onSelectClass={(cls) => {
          setSelectedClass(cls);
          setSelectedSubject(""); // Reset subject when class changes
        }}
      />
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <select
            className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.subject}>
                {subject.subject}
              </option>
            ))}
          </select>
          <select
            className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary"
            value={selectedMedium}
            onChange={(e) => setSelectedMedium(e.target.value)}
          >
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
        </header>
        {/* Book Grid */}
        <BookGrid books={filteredBooks} />
      </div>
    </main>
  );
}
