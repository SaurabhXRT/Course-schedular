//import React, { useState } from "react";

const ScheduleTable = () => {
 
  const scheduleData = [
    { time: "9:00am - 10:00am", monday: "S&T Lab - Dr. Jayanta Kumar Rakshit - Sensors Lab - 4th Sem", tuesday: "DCN - Mrs. Priyanka Roy Goswami - Room 309 - 6th Sem", wednesday: "IE - Dr. Subir Das - Room 309 - 6th Sem", thursday: "E-7 (NNFL) - Yogesh Kumar Sariya - Room 309 - 8th Sem", friday: "NT - YKS - Room 309 - 3rd Sem" },
    { time: "10:00am - 11:00am", monday: "E-7 (NC) - Yogesh Kumar Sariya - Room 309 - 8th Sem", tuesday: "E-7 (NC) - Dr. Rupam Gupta Roy - Room 309 - 8th Sem", wednesday: "PC - Dr. Rupam Gupta Roy - Room 309 - 6th Sem", thursday: "E-I (EMT) - Dr. Jayanta Kumar Rakshit - Electronics Lab - 4th Sem", friday: "SS - PRG - Room 309 - 3rd Sem" },
    { time: "11:00am - 12:00pm", monday: "E-6 (OT) - Dr. Aparupa Kar - Room 309 - 8th Sem", tuesday: "E-6 (OT) - Dr. Aparupa Kar - Room 309 - 8th Sem", wednesday: "NMLA - Dr. Priyanka Dey - Electronics Lab - 4th Sem", thursday: "IM - Dr. Kaju Nath - Room 309 - 4th Sem", friday: "E-III (ES) - Dr. Subir Das - Room 309 - 6th Sem" },
    { time: "12:00pm - 1:00pm", monday: "E-5 (VLSI) - Dr. Debanjan Acharjee - Room 309 - 8th Sem", tuesday: "IE - Dr. Subir Das - Room 405 - 6th Sem", wednesday: "NMLA - Dr. Priyanka Dey - Room 309 - 4th Sem", thursday: "LUNCH", friday: "DE - Yogesh Kumar Sariya - Room 405 - 4th Sem" },
    { time: "1:00pm - 2:00pm", monday: "LUNCH", tuesday: "LUNCH", wednesday: "LUNCH", thursday: "LUNCH", friday: "LUNCH" },
    { time: "2:00pm - 3:00pm", monday: "GDS Lab - Yogesh Kumar Sariya - Process Control Lab - 4th Sem", tuesday: "PC - Dr. Rupam Gupta Roy - Room 309 - 6th Sem", wednesday: "DSP - PRG/YKS/AD/DB/DK - Room 329 - 7th Sem", thursday: "AELIC Lab - JKR/DA/AD/KPP - Room 418 - 5th Sem", friday: "MPMC Lab - AK/PD/DB/AD - Room 416 - 5th Sem" },
    { time: "3:00pm - 4:00pm", monday: "DE Lab - Yogesh Kumar Sariya - Electronics Lab - 4th Sem", tuesday: "DE - Yogesh Kumar Sariya - Room 405 - 4th Sem", wednesday: "MPMC - AK - Room 309 - 5th Sem", thursday: "DSP - PRG/YKS/AD/DB/DK - Room 329 - 7th Sem", friday: "II Lab - RGR/JKR/KPP/SUD - Room 406 - 5th Sem" },
    { time: "4:00pm - 5:00pm", monday: "DCN - Mrs. Priyanka Roy Goswami - Room 309 - 6th Sem", tuesday: "CTT - Mrs. Priyanka Roy Goswami - Room 405 - 6th Sem", wednesday: "CTT - Mrs. Priyanka Roy Goswami - Room 309 - 6th Sem", thursday: "APCA Lab - RGR/SD/SUD/KPP - Room 421 - 7th Sem", friday: "II Lab - RGR/JKR/KPP/SUD - Room 406 - 5th Sem" },
  ];

 

  return (
    <div className="p-6 justify-center max-w-lg mx-auto w-full">
      <h1 className="text-xl font-bold mb-4">Course Routine Scheduler</h1>

        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Monday</th>
              <th className="border px-4 py-2">Tuesday</th>
              <th className="border px-4 py-2">Wednesday</th>
              <th className="border px-4 py-2">Thursday</th>
              <th className="border px-4 py-2">Friday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.time}</td>
                <td className="border px-4 py-2">{item.monday}</td>
                <td className="border px-4 py-2">{item.tuesday}</td>
                <td className="border px-4 py-2">{item.wednesday}</td>
                <td className="border px-4 py-2">{item.thursday}</td>
                <td className="border px-4 py-2">{item.friday}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default ScheduleTable;
