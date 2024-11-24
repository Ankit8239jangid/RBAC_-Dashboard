import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser, FaCog, FaBars } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // handle the resize of the window to close the sidebar when the window is less than 768px 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);





    const sidebarVariants = {
        open: { width: "16rem", transition: { duration: 0.5 } },
        closed: { width: "4rem", transition: { duration: 0.5 } },
    };

    return (
        <div className="flex">
            <motion.div
                className={`${isOpen ? 'bg-purple-700' : 'bg-transparent'} text-white h-screen fixed md:relative z-50 flex flex-col `}
                variants={sidebarVariants}
                animate={isOpen ? "open" : "closed"}
                initial={false}
            >
                <div className="p-4 flex items-center justify-between md:justify-end">
                    <button
                        className="text-white text-2xl focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 0 : 180 }}
                            transition={{ duration: 0.4 }}
                        >
                            {isOpen ? <IoCloseSharp className={`${isOpen ? 'md:hidden' : ' block text-gray-900'}`} /> : <FaBars className={`${isOpen ? 'md:hidden' : ' block text-gray-900'}`} />}
                        </motion.div>
                    </button>
                </div>

                <nav className={`flex flex-col space-y-4 mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    {[
                        { name: "Dashboard", icon: <MdDashboard/> , link: "/" },
                        { name: "Users", icon: <FaUser />, link: "/users" },
                        { name: "Settings", icon: <FaCog />, link: "/settings" },
                    ].map((item, index) => (
                        <Link
                            onClick={() => window.innerWidth > 768 ? setIsOpen(true) : setIsOpen(false)}
                            key={index}
                            to={item.link}
                            className="flex items-center gap-4 p-3 mx-2 rounded-md hover:bg-purple-600 transition-all"
                        >
                            <span className="text-xl">{item.icon}</span>
                            {isOpen && <span className="font-medium">{item.name}</span>}

                        </Link>
                    ))}
                </nav>

                <div className={`mt-auto p-4 border-t border-gray-700 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Link
                        to="#"
                        className="flex items-center gap-2 hover:bg-purple-600 p-2 rounded-md"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        {isOpen && (
                            <div>
                                <p className="font-medium">Eric Frusciante</p>
                                <p className="text-sm text-gray-300">eric@frusciante.com</p>
                            </div>
                        )}
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Sidebar;
