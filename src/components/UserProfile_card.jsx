import React from 'react';
import { useContactsModel } from "./context/Context";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";

function UserProfile() {

    const { filteredUsers, toggleDropdown, handleActionWithDropdownReset, dropdownState } = useContactsModel();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-1 w-full  rounded-xl max-w-5xl'>
            {filteredUsers.map((user, index) => (
                <div key={index} className=" shadow-md shadow-gray-400 relative flex flex-col md:p-2 p-2 border border-gray-300 rounded-xl w-full mx-auto">
                    <div className="flex mb-5">
                        <img className=" rounded-full w-16 h-14  px-1 mr-4" src="https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0=" alt="User Avatar" />
                        <div>
                            <div className="font-bold">{user.name}</div>
                            <div className="text-gray-600">{user.email.length > 22 ? user.email.substring(0, 22) + '...' : user.email}</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="font-bold">Status</div>
                        <span className={`px-2 rounded-full ${user.status ? "text-green-600" : "text-red-500"}`}>
                            {user.status ? "Active" : "Inactive"}
                        </span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                        <div className=" font-bold">Role</div>
                        <div className="font-bold">{user.role[0]}</div>

                    </div>
                    <div className="flex items-center justify-between mb-2">
                        <div className="font-bold">Action</div>
                        <span className="py-3 px-6 ">
                            <button
                                onClick={() => toggleDropdown("action", index)}
                                className="text-gray-900 text-2xl font-bold hover:bg-gray-200 ml-5 rounded-full p-2"
                            >
                                ⋮
                            </button>
                            {dropdownState.action === index && (
                                <div className="absolute  right-20 top-36  w-36 bg-gray-200 rounded-2xl">
                                    <button
                                        className="rounded-2xl flex items-center gap-2 w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-300"
                                        onClick={() => handleActionWithDropdownReset("Edit", user)}
                                    >
                                        <MdEdit /> Edit
                                    </button>
                                    <button
                                        className="flex items-center rounded-2xl gap-2 w-full text-left px-4 py-2 text-red-600  hover:bg-gray-300"
                                        onClick={() => handleActionWithDropdownReset("Delete", user)}
                                    >
                                        <MdOutlineDeleteOutline /> Delete
                                    </button>
                                </div>
                            )}
                        </span>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default UserProfile;
