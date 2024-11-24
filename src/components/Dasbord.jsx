import { useContactsModel } from "./context/Context";
function Dasbord() {
  const { filteredUsers } = useContactsModel();

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-800 via-purple-600 to-pink-800 p-4">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Card 1 */}
        <div className="h-auto md:h-48 w-full bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
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

        {/* Card 2 */}
        <div className="h-auto md:h-48 w-full bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between">
          <h2 className="text-2xl font-semibold">Active Users</h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Active Users</h3>
              <p className="text-4xl font-bold">{filteredUsers.filter(user => user.status).length}</p>
            </div>
            <div className="bg-white text-green-500 rounded-full p-4 shadow-md">
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

        {/* Card 3 */}
        <div className="h-auto md:h-48 w-full bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between">
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
      </div>
    </div>
  );
}

export default Dasbord;

