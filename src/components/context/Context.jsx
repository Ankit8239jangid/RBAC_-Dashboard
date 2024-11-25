import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const ContactsContext = createContext();

// Create the provider component
export const ContactsProvider = ({ children }) => {
    // State management
    const [users, setUsers] = useState([
        {
            id: '1',
            name: "John Doe",
            email: "john@example.com",
            role: ["Admin", "Editor", "Viewer"],
            status: true
        },
        {
            id: '7',
            name: "Alex",
            email: "Alex@example.com",
            role: ["Editor", "Admin", "Viewer"],
            status: false
        },
        {
            id: '6',
            name: "Rok Doe",
            email: "rok@example.com",
            role: ["Viewer", "Editor", "Admin"],
            status: false
        },
    ]);

    // State for form open and close & search

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [userSearch, setUserSearch] = useState('');
    const [dropdownState, setDropdownState] = useState({ action: null, role: null });
    const [theme, setTheme] = useState('light');



    // New user state 
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        email: '',
        role: ['Viewer', 'Editor', 'Admin'],
        status: true
    });



    // Filter users based on search 
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
        user.email.toLowerCase().includes(userSearch.toLowerCase())
    );

    



    // Form handling when user is editing or adding a new user
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => ({
            ...prev, [name]: value
        }));
    };




    // Edit user handler 
    const handleEditUser = (userToEdit) => {
        // Set the form data with the user to edit
        setNewUser(userToEdit);
        // Open the form
        setIsFormOpen(true);

    };



    // Function to save users to local storage
    const saveUsersToLocalStorage = (users) => {
        localStorage.setItem('users', JSON.stringify(users));
    };



    // Load users from local storage on initial render
    useEffect(() => {
        const storedUsers = localStorage.getItem('users');

        // Only set users from local storage if the current users array is empty
        if (users.length === 0) {
            setUsers(JSON.parse(storedUsers) || []);
        }
    }, []);




    // Add user handler
    const handleAddUser = (e) => {
        e.preventDefault();
        if (newUser.id) {
            // Update existing user
            setUsers(prev => {
                const updatedUsers = prev.map(user =>
                    user.id === newUser.id ? { ...user, ...newUser } : user,
                );
                // No need to reorder, just save the updated users
                saveUsersToLocalStorage(updatedUsers);
                return updatedUsers;
            });
        } else {
            // Add new user
            setUsers(prev => {
                const updatedUsers = [{ ...newUser, id: Date.now().toString() }, ...prev]; // Ensure new user is at the top
                saveUsersToLocalStorage(updatedUsers);
                return updatedUsers;
            });
        }

        // Reset form and close
        setNewUser({ id: '', name: '', email: '', role: ['Viewer'], status: true });
        setIsFormOpen(false);
    };


    // Dropdown handler
    const toggleDropdown = (type, index) => {
        setDropdownState((prev) =>
            prev[type] === index ? { ...prev, [type]: null } : { ...prev, [type]: index }
        );
    };

    // Action handler with dropdown reset
    const handleActionWithDropdownReset = (actionType, user) => {
        handleAction(actionType, user);
        setDropdownState((prev) => ({ ...prev, action: null }));

    };


    // Action handlers 
    const handleAction = (type, user) => {
        switch (type) {
            case "Edit":
                handleEditUser(user);
                break;
            case "Delete":
                setUsers(prev => {
                    const updatedUsers = prev.filter(u => u.id !== user.id);
                    saveUsersToLocalStorage(updatedUsers);
                    return updatedUsers;
                });
                break;
            default:
                console.log(`${type} action for user:`, user);
        }
    };

    return (
        <ContactsContext.Provider value={{
            isFormOpen,
            setIsFormOpen,
            userSearch,
            setUserSearch,
            newUser,
            setNewUser,
            users,
            setUsers,
            filteredUsers,
            handleInputChange,
            handleAddUser,
            handleAction,
            toggleDropdown,
            handleActionWithDropdownReset,
            dropdownState,
            setDropdownState,
            theme,
            setTheme,

        }}>
            {children}
        </ContactsContext.Provider>
    );
};

// Custom hook to use the context
export const useContactsModel = () => {
    return useContext(ContactsContext);
};
