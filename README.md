
# **Role-Based Access Control (RBAC) UI**

## **Project Overview**

The dashboard provides an intuitive interface with user cards, a search bar, and options for CRUD operations on users and roles. It is built using **React** and styled with **Tailwind CSS** for responsiveness and modern aesthetics.

---

## **Key Features**
- **User Management**
  - View a list of users with details like name, email, status, and role.
  - Add, edit, and delete users.
  - Manage user statuses (e.g., Active/Inactive).
  
- **Role Management**
  - Assign predefined roles (e.g., Admin, Editor, Viewer) to users.
  - Edit roles and assign permissions dynamically.
  
- **Dynamic Permissions**
  - Define role-based permissions (e.g., Read, Write, Delete).
  - Modify permissions for specific roles.
  
- **Responsive Design**
  - Fully responsive layout for desktop, tablet, and mobile devices.
  - User-friendly design with a clean and consistent interface.

- **Search and Filtering**
  - Search users by name or email.
  - Filter users based on roles or statuses.

- **Local Storage**
  - User information is saved in the browser's local storage to persist data across sessions.


---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v16 or later)
- npm or yarn package manager

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Ankit8239jangid/RBAC_-Dashboard.git
   cd rbac-dashboard
   ```

2. Install dependencies:
   ```bash
    npm install ,
    react-router-dom ,
    framer-motion  ,
    react-icons
   ```
   or
   ```bash
   yarn add react-router-dom framer-motion react-icons
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```


---

## **Known Issues/Limitations**
1. **Role Management:**
   - Currently supports only predefined roles. Adding custom roles dynamically is under development.

2. **Backend Integration:**
   - Mock API calls simulate server interactions. Real backend integration is not implemented.

3. **Advanced Filtering:**
   - Filtering users based on multiple criteria is a planned feature but not implemented yet.

4. **Validation:**
   - Basic form validation is implemented. Advanced validation (e.g., email format check) can be improved.

--- 

## **Technologies Used**
- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Mock API:** json-server or Mock Service Worker (MSW)
- **State Management:** Context API 

---

## **License**
This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

## **Author**
Created by [Your Name](https://github.com/your-username) for VRV Security's Frontend Developer Internship assignment.  
