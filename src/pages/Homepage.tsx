import { useState } from "react";

type Batch = {
  name: string;
  courses: string[];
};

const batches: Batch[] = [
  {
    name: "4th Sem",
    courses: [
      "S&T",
      "DSA",
      "DE",
      "NMLA",
      "IM",
      "E-I (EMT)",
      "S&T Lab",
      "DSA Lab",
      "DE Lab",
      "GDS Lab",
    ],
  },
  {
    name: "6th Sem",
    courses: ["PC", "DCN", "IE", "CTT", "E-III (ES)", "PC Lab", "CTT Lab"],
  },
  {
    name: "8th Sem",
    courses: ["E-5 (VLSI)", "E-6 (OT)", "E-7 (NC)", "E-7 (NNFL)"],
  },
];

const lecturers = [
  "Dr. Jayanta Kumar Rakshit",
  "Dr. Subir Das",
  "Dr. Debanjan Acharjee",
  "Yogesh Kumar Sariya",
  "Dr. Rupam Gupta Roy",
  "Dr. Priyanka Dey",
  "Mrs. Priyanka Roy Goswami",
  "Dr. Aparupa Kar",
  "Mr. Nabendu Debnath",
  "Dr. Kaju Nath",
  "Anjan Das",
  "Dilip Biswasarma",
  "Kailash P Phukan",
  "Suraj Das",
  "Samir Rajuyar",
  "Dhiraj Kumar",
  "Prashanta Bhardwaj",
];

const HomePage = () => {
  const [schedule, setSchedule] = useState<
    { batch: string; course: string; lecturers: string[] }[]
  >([]);
  const [currentBatch, setCurrentBatch] = useState<string | null>(null);
  const [currentCourse, setCurrentCourse] = useState<string | null>(null);
  const [currentLecturers, setCurrentLecturers] = useState<string[]>([]);

  const handleAddBatch = () => {
    if (currentBatch && currentCourse && currentLecturers.length > 0) {
      setSchedule((prev) => [
        ...prev,
        {
          batch: currentBatch,
          course: currentCourse,
          lecturers: currentLecturers,
        },
      ]);
      setCurrentBatch(null);
      setCurrentCourse(null);
      setCurrentLecturers([]);
    }
  };

  const handleBatchChange = (batch: string) => {
    setCurrentBatch(batch);
    setCurrentCourse(null);
    setCurrentLecturers([]);
  };

  const handleCourseChange = (course: string) => {
    setCurrentCourse(course);
    setCurrentLecturers([]);
  };

  const availableCourses = currentBatch
    ? batches
        .find((b) => b.name === currentBatch)
        ?.courses.filter(
          (course) => !schedule.some((item) => item.course === course)
        ) || []
    : [];

  return (
    <div className="p-6 justify-center max-w-full sm:max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">Course Routine Scheduler</h1>

      {/* Select Batch */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Select Batch
        </label>
        <select
          value={currentBatch || ""}
          onChange={(e) => handleBatchChange(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select a Batch</option>
          {batches.map((batch) => (
            <option key={batch.name} value={batch.name}>
              {batch.name}
            </option>
          ))}
        </select>
      </div>

      {/* Select Course */}
      {currentBatch && (
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select Course for {currentBatch}
          </label>
          <select
            value={currentCourse || ""}
            onChange={(e) => handleCourseChange(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a Course</option>
            {availableCourses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Select Lecturers */}
      {currentCourse && (
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select Lecturers for {currentCourse}
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {lecturers.map((lecturer) => (
              <label
                key={lecturer}
                className="flex items-center space-x-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  value={lecturer}
                  checked={currentLecturers.includes(lecturer)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCurrentLecturers([...currentLecturers, lecturer]);
                    } else {
                      setCurrentLecturers(
                        currentLecturers.filter((l) => l !== lecturer)
                      );
                    }
                  }}
                  className="rounded border-gray-300 focus:ring-blue-400"
                />
                <span>{lecturer}</span>
              </label>
            ))}
          </div>
          <small className="text-gray-500 block mt-2">
            You can select multiple lecturers by checking their names.
          </small>
        </div>
      )}

      {/* Add Button */}
      {currentBatch && currentCourse && currentLecturers.length > 0 && (
        <button
          onClick={handleAddBatch}
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 mb-4"
        >
          Add to Schedule
        </button>
      )}

      {/* Schedule Preview */}
      {schedule.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-4">Schedule</h2>
          <ul className="list-disc list-inside">
            {schedule.map((item, index) => (
              <li key={index}>
                <strong>Batch:</strong> {item.batch}, <strong>Course:</strong>{" "}
                {item.course}, <strong>Lecturers:</strong>{" "}
                {item.lecturers.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { HomePage };
