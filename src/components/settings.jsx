import React from "react";
import { Link } from "react-router-dom";

import { useContactsModel } from "./context/Context";

function Settings() {
    const { theme, setTheme } = useContactsModel();

    return (
        <div className={`h-full w-full items-center  ${theme === 'dark' ? 'bg-black' : 'bg-zinc-100'}`}>
            {/* Main Container */}
            <div className={`max-w-6xl mx-autobg-gradient-to-r from-purple-500 to-indigo-500 mt-14 rounded-lg shadow-lg p-4 md:p-8 ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}>

                {/* User Information */}
                <section className="mb-5">
                    <h2 className={`text-2xl font-semibold md:p-0 pl-16 m-4 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Admin Information</h2>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Admin Avatar"
                                className={`w-24 h-20 md:w-28 md:h-28 rounded-full border-4 border-purple-600 shadow-md ${theme === 'dark' ? 'border-gray-700' : 'border-purple-600'}`}
                            />
                        </div>


                        {/* User Details */}
                        <div className="text-center md:text-left">
                            <h3 className={`text-lg md:text-xl font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
                                Name: Ankit Jangid
                            </h3>
                            <p className={`text-gray-700 text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                                Email: ankitjangid2232@gmail.com
                            </p>
                            <button className={`mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-purple-500'}`}>
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </section>



                {/* Settings Options */}
                <section className="flex flex-col gap-3">
                    <div className={`flex md:gap-0 gap-6  md:flex-row justify-between items-center mb-3 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
                        <h2 className="text-2xl font-semibold">Settings</h2>
                        <Link to={'/'} className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-red-500 text-white py-2 px-6    hover:bg-red-600 shadow-lg">
                            Logout
                        </Link>
                    </div>


                    {/* Option 1: Enable Notifications */}
                    <div className={`rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-row md:flex-row items-center justify-between px-3  py-4   border-b border-gray-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div className="text-center md:text-left">
                            <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Enable Notifications</h3>

                        </div>
                        <label className="relative inline-flex items-center mt-4 md:mt-0 cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className={`w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-100 rounded-full peer-checked:bg-purple-500 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                        </label>
                    </div>


                    {/* option 2:  Privace Mood< */}

                    <div className={`rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-row md:flex-row items-center justify-between px-3  py-4  border-b border-gray-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div className="text-center md:text-left">
                            <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Privace Mood</h3>

                        </div>
                        <label className="relative inline-flex items-center mt-4 md:mt-0 cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className={`w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-100 rounded-full peer-checked:bg-green-600 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                        </label>
                    </div>


                    {/* Option 3: Theme Settings */}
                    <div className={`rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-row md:flex-row items-center justify-between px-3  py-4  border-b border-gray-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <div className="text-center md:text-left">
                            <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Theme</h3>

                        </div>
                        <select className="mt-4 md:mt-0 border rounded-lg p-2 text-gray-800 bg-gray-50 hover:border-gray-400 transition" value={theme} onChange={(e) => setTheme(e.target.value)}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Settings;
