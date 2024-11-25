import { useContactsModel } from "./context/Context";

function Dasbord() {
  const { filteredUsers, theme } = useContactsModel();
 

  return (
    <div className={`cursor-pointer h-screen w-full flex justify-center overflow-y-auto md:pt-10 pt-14 pb-20 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-800 via-purple-600 to-pink-800' : 'bg-gradient-to-r from-blue-200 via-purple-600 to-pink-200'} p-10`}>
      {/* Main Grid Container */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-6xl">
        {/* Card 1: Admin Dashboard */}
        <div className="h-auto md:h-48 w-full bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Welcome back, Ankit!</h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Total Users</h3>
              <p className="text-4xl font-bold">{filteredUsers.length}</p>
            </div>
            <div className="bg-white text-purple-500 rounded-full p-4 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 10-8 0v4M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2-2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: Active Users */}
        <div className="h-auto md:h-48 w-full bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
          {/* Background Image */}
          <img
            src="https://www.appsflyer.com/wp-content/uploads/2021/12/how-to-increase-monthly-active-users-min.jpg"
            alt="Active Users"
            className="absolute inset-0 w-full h-full object-cover opacity-30  "
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Header */}
            <h2 className="text-2xl font-bold drop-shadow-lg">Active Users</h2>

            {/* Details */}
            <div className="flex items-center justify-between mt-2">
              {/* Active User Info */}
              <div>
                <h3 className="text-lg font-medium drop-shadow-lg">Currently Active</h3>
                <p className="text-4xl font-bold drop-shadow-lg">
                  {filteredUsers.filter((user) => user.status).length}
                </p>
              </div>

              {/* Icon Container */}
              <div className="bg-white text-green-500 rounded-full p-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Decorative Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-500/20 via-transparent to-blue-600/30"></div>
        </div>


        {/* Card 3: Revenue */}
        <div className="h-32 md:h-48 w-full bg-gradient-to-r from-yellow-400 to-red-500 p-2 rounded-2xl shadow-xl text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold">Revenue</h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Monthly Revenue</h3>
              <p className="text-4xl font-bold">$5,000</p>
            </div>
            <div className="bg-white text-yellow-500 rounded-full p-4 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3m3 18l6-6-6-6"
                />
              </svg>
            </div>
          </div>
        </div>


        {/* Card 5: Analytics */}
        <div className="h-auto md:h-48 w-[95%] col-span-1 lg:col-span-2 bg-gradient-to-r from-teal-400 to-blue-600 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
          {/* Background Image */}
          <img
            src="https://img.freepik.com/premium-photo/financial-analytic-business-infographic-elements-screen-laptop_979520-4375.jpg"
            alt="Analytics"
            className="absolute inset-0 w-full h-full object-cover opacity-50 "
          />

          {/* Text Content with Overlay */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold drop-shadow-lg">Analytics</h2>
            <p className="mt-1 text-lg  sm:text-xl font-medium drop-shadow-lg">
              Coming soon: Interactive charts and graphs!
            </p>
          </div>

          {/* Decorative Corner Overlay */}
          <div className="absolute bottom-0 right-0 bg-gradient-to-tr from-blue-700 to-teal-500 rounded-tl-2xl h-20 w-20 opacity-70"></div>
        </div>
      </div>
    </div>
  );
}

export default Dasbord;
