import React from "react";

const timeSlots = [
  "8:30 AM - 9:29 AM",
  "9:30 AM - 10:29 AM",
  "10:30 AM - 11:29 AM",
  "11:30 AM - 12:29 PM",
  "12:30 PM - 1:29 PM",
  "1:30 PM - 2:29 PM",
  "2:30 PM - 3:29 PM",
  "3:30 PM - 4:29 PM",
  "4:30 PM - 5:29 PM",
  "5:30 PM - 6:29 PM",
  "6:30 PM - 7:29 PM",
  "7:30 PM - 8:29 PM",
];

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

const scheduleData = [
  {
    day: "Saturday",
    time: "10:30 AM - 11:29 AM",
    title: "CSCI417: Machine Lab",
    instructor: "AlAmire Hassan Younis",
    type: "Lab - 02B",
  },
  {
    day: "Sunday",
    time: "10:30 AM - 11:29 AM",
    title: "CSCI102: Introduction",
    instructor: "Heba Kamal Aslan",
    type: "Lecture - 01",
  },
  {
    day: "Thursday",
    time: "2:30 PM - 3:29 PM",
    title: "SSCI201: Introduction",
    instructor: "Heba Kamal Aslan",
    type: "Lecture - 01",
  },
];

export default function WeeklySchedule() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Pending Schedule</h1>
        <p className="text-gray-500 mt-2">
          Your Schedule has 6 pending comments awaiting changes
        </p>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-7 border-t border-l">
        {/* Header Row */}
        <div className="bg-blue-900 text-white p-3 font-bold">Time</div>
        {days.map((day) => (
          <div
            key={day}
            className="bg-blue-900 text-white p-3 font-bold text-center"
          >
            {day}
          </div>
        ))}

        {/* Time and Schedule Cells */}
        {timeSlots.map((time) => (
          <React.Fragment key={time}>
            <div className="border-r border-b bg-gray-100 p-3 text-center font-semibold">
              {time}
            </div>

            {days.map((day) => {
              const event = scheduleData.find(
                (e) => e.day === day && e.time === time
              );
              return (
                <div
                  key={`${day}-${time}`}
                  className="border-r border-b relative"
                >
                  {event ? (
                    <div className="bg-blue-100 text-blue-900 p-2 rounded-lg shadow-md absolute inset-1">
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm">{event.instructor}</p>
                      <span className="text-xs bg-blue-900 text-white px-2 py-1 rounded-md mt-1 inline-block">
                        {event.type}
                      </span>
                    </div>
                  ) : (
                    <div className="h-full"></div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
