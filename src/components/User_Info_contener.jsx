import React, { useState } from "react";
import "../index.css";

import { useContactsModel } from "./context/Context";
import UserProfile from "./UserProfile_card";
function User_Info_contener() {
    const {
        isFormOpen,
        setIsFormOpen,
        userSearch,
        setUserSearch,
        newUser,
        setNewUser,
        handleInputChange,
        handleAddUser,
        theme,  


    } = useContactsModel();

    return (
        <div className={`h-screen flex flex-col md:pt-0  justify-start py-5 px-1 w-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'} shadow-md rounded-md`}>
            <h1 className={`text-gray-900 text-2xl pl-5 font-bold pt-10 pb-5 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>User Management</h1>
            <h1></h1>

            {/* Search Bar */}
            <div className="flex rounded-full sm:flex-nowrap justify-between items-center gap-4 ml-4 mb-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="border shadow-md shadow-gray-400 bg-white border-gray-300 text-gray-900 rounded-full px-4 py-2 w-full sm:w-1/3"
                />
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="   shadow-inner shadow-zinc-500 bg-purple-600 text-white px-4 py-2 rounded-full md:mr-5 hover:bg-purple-700 w-1/2 text-nowrap sm:w-auto"
                >
                    + Add User
                </button>
            </div>

            {/* Modal for Adding New User */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-6 w-[90%] sm:w-[500px] relative">
                        <button
                            onClick={() => setIsFormOpen(false)}
                            className="absolute font-bold right-4 top-4 text-gray-500 hover:text-gray-700 text-3xl"
                        >
                            ×
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{newUser.id ? "Edit User" : "Add New User"}</h2>
                        <p className="text-gray-600 mb-6">
                            {newUser.id ? "Update the details of the user." : "Enter the details of the new user. Click save when you're done."}
                        </p>
                        <form onSubmit={handleAddUser} className="space-y-4">
                            <div className="flex flex-col">
                                <label className="text-gray-900 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                    className="border text-gray-900 border-gray-300 rounded-md px-3 py-2"
                                    placeholder="Enter name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                    className="border text-gray-900 border-gray-300 rounded-md px-3 py-2"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 mb-1">Role</label>
                                <select
                                    name="role"
                                    value={newUser.role[0]}
                                    onChange={(e) => setNewUser((prev) => ({ ...prev, role: [e.target.value] }))}
                                    className="border text-gray-900 border-gray-300 rounded-md px-3 py-2"
                                    required
                                >
                                    <option value="Viewer">Viewer</option>
                                    <option value="Editor">Editor</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-900 mb-1">Status</label>
                                <select
                                    name="status"
                                    value={newUser.status ? "true" : "false"}
                                    onChange={(e) => setNewUser((prev) => ({ ...prev, status: e.target.value === "true" }))}
                                    className="border text-gray-900 border-gray-300 rounded-md px-3 py-2"
                                    required
                                >
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 mt-4">
                                {newUser.id ? "Update User" : "Save User"}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* User Profile Container its rendered the UserProfile component */}
            <div className="overflow-x-auto overflow-y-auto min-h-[40vh]">
                <UserProfile />
            </div>
        </div>
    );
}

export default User_Info_contener;