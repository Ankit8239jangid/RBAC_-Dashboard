import React from "react";

function Settings() {
    return (
        <div className="h-auto w-full items-center  bg-zinc-100">
            {/* Main Container */}
            <div className="max-w-6xl mx-auto bg-zinc-100 mt-6 rounded-lg shadow-lg p-4 md:p-8">
                {/* User Information */}
                <section className="mb-5">
                    <h2 className="text-2xl font-semibold md:p-0 pl-16 m-4 text-gray-800">Admin Information</h2>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                alt="Admin Avatar"
                                className="w-24 h-20 md:w-28 md:h-28 rounded-full border-4 border-purple-600 shadow-md"
                            />
                        </div>
                        {/* User Details */}
                        <div className="text-center md:text-left">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                Name: Ankit Jangid
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base">
                                Email: ankitjangid2232@gmail.com
                            </p>
                            <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 shadow">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </section>

                {/* Settings Options */}
                <section>
                    <div className="flex md:gap-0 gap-5 flex-col md:flex-row justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
                        <button className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-red-500 text-white py-2 px-6    hover:bg-red-600 shadow-lg">
                            Logout
                        </button>
                    </div>

                    {/* Option 1: Enable Notifications */}
                    <div className=" rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row items-center justify-between py-4 px-4 border-b border-gray-300">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-medium text-gray-800">Enable Notifications</h3>
                            <p className="text-sm text-gray-600">
                                Get email notifications for account updates and new features.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center mt-4 md:mt-0 cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer-checked:bg-purple-500 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                    </div>

                    {/* Option 2: Privacy Settings */}
                    <div className=" rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row items-center justify-between py-4 px-4 border-b border-gray-300">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-medium text-gray-800">Privacy Mode</h3>
                            <p className="text-sm text-gray-600">
                                Turn on privacy mode to hide your personal details.
                            </p>
                        </div>
                        <label className="relative inline-flex items-center mt-4 md:mt-0 cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer-checked:bg-green-500 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                    </div>

                    {/* Option 3: Theme Settings */}
                    <div className=" rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row items-center justify-between py-4 px-4 border-b border-gray-300">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-medium text-gray-800">Theme</h3>
                            <p className="text-sm text-gray-600">Switch between Light and Dark modes.</p>
                        </div>
                        <select className="mt-4 md:mt-0 border rounded-lg p-2 text-gray-800 bg-gray-50 hover:border-gray-400 transition">
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
