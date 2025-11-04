import React from "react";
import CustomButton from "../../Share/CustomButton";

const squad = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Omar Faruk",
    roll: "101",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Nusrat Jahan",
    roll: "102",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    name: "Rakib Hasan",
    roll: "103",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    name: "Mim Akter",
    roll: "104",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "Sakib Alamin",
    roll: "105",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    name: "Jannat Ara",
    roll: "106",
  },
  {
    id: 7,
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    name: "Mahmudul Hasan",
    roll: "107",
  },
  {
    id: 8,
    image: "https://randomuser.me/api/portraits/women/81.jpg",
    name: "Rima Khatun",
    roll: "108",
  },
];

export default function Squad() {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* top div */}
        <div className="flex justify-between items-center">
          <h1 className="text-primary text-3xl lg:text-5xl font-bold mb-10">
            BoostFixter Squad
          </h1>
          <CustomButton text={"Meet The Team"} link={"#"}></CustomButton>
        </div>

        {/* content div */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {squad.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">Roll: {member.roll}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
