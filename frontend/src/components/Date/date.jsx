import React from "react";


import "./data.css";
const App = () => {
  const currentDate = new Date();

  // Function to get weeks
  const getWeeksInMonth = (year, month) => {
    const weeks = [];
    let startDate = new Date(year, month, 1); // Start of the month
    let weekNumber = 1;

    while (startDate.getMonth() === month) {
      weeks.push(`Week ${weekNumber}`);

      // Move to the next week
      startDate.setDate(startDate.getDate() + 7);
      weekNumber++;
    }

    return weeks;
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-based index (0 = January)
  const weeks = getWeeksInMonth(year, month);

  return (
    <div className=" flex ml-5 mt-5 gap-2 ">
      {weeks.map((week, index) => (
        <p key={index} className="text-sm p-2 font-semibold text-gray-700 rounded-md bg-amber-300 ">
          {week}
        </p>
      ))}
    </div>
  );
};

export default App;
