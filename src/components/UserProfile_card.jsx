import React from "react";
import { useContactsModel } from "./context/Context";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

function UserProfile() {
  const { filteredUsers, toggleDropdown, handleActionWithDropdownReset, dropdownState } = useContactsModel();

  return (

    // If no users are found, display a message and an image
    filteredUsers.length === 0 ? (
      <div className="flex flex-col justify-center items-center h-full">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-not-found-illustration-download-in-svg-png-gif-file-formats--no-absence-search-failure-empty-states-pack-science-technology-illustrations-7882965.png?f=webp" alt="" />
        <p className="text-gray-500">No users found</p>
      </div>
    ) : (

      // If users are found, display them in cards
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        {filteredUsers.map((user, index) => (
          <div
            key={index}
            className=" relative bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 rounded-2xl p-5 flex flex-col"
          >
            {/* User Header */}
            <div className="flex items-center gap-4">
              <img
                className="w-16 h-16 rounded-full border-2 border-blue-500"
                src="https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0="
                alt="User Avatar"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {user.email.length > 22 ? user.email.substring(0, 22) + "..." : user.email}
                </p>
              </div>
            </div>

            {/* Status Section */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</span>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${user.status ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
              >
                {user.status ? "Active" : "Inactive"}
              </span>
            </div>

            {/* Role Section */}
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Role</span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{user.role[0]}</span>
            </div>

            {/* Action Dropdown */}
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Action</span>
              <div className="">
                <button
                  onClick={() => toggleDropdown("action", index)}
                  className="text-xl text-gray-800 dark:text-gray-100 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                >
                  <FaAngleDown />
                </button>
                {dropdownState.action === index && (
                  <div className="absolute  right-20 top-36  bg-white dark:bg-gray-700 shadow-lg rounded-xl w-40 z-50">
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-t-xl w-full text-left"
                      onClick={() => handleActionWithDropdownReset("Edit", user)}
                    >
                      <MdEdit /> Edit
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-xl w-full text-left"
                      onClick={() => handleActionWithDropdownReset("Delete", user)}
                    >
                      <MdOutlineDeleteOutline /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default UserProfile;
