# Student registration and application tracker

this was a small project in whic students can register with their email id and fill appliction forms and track their application status.

- students can apply and track their applications
- admin can change the status of any application and can manage all students applications

## plan for the control flow of the app

- [sketch link](https://excalidraw.com/#json=IqEqvhlG3CFe_nCQRK09l,tuBNrkLmRN-kEwRgEErTAQ)

that was the paln i initially done to build the application

# dependencies backend

- "express": "^4.21.2"

- "jsonwebtoken": "^9.0.2"

- "mongoose": "^8.10.0"

- "bcryptjs": "^2.4.3",

- "cors": "^2.8.5",

- "dotenv": "^16.4.7",

#

<br>
<br>

# env variables

- ##### refer to the .env.sample files in backend, forntend, admin folders

### Backend

- MONGO_URL = "your mongo url"
- PORT = 3000
- ADMIN_MAIL = "admin@123"
- ADMIN_PASS = "1234"
- JWT_SECRET = "YOUR SECERT"

### Frontend and Admin

- VITE_BACKEND_URL = http://localhost:3000

# Getting Started

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone the repository :
   ```bash
   git clone https://github.com/your-repo-name.git
   ```
2. navigate to project directory :<br>
   #### for server
   ```
   cd backend
   ```
   #### for app
   ```
   cd frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. ## Running the Server
   After installation, you can run the app locally with the following command:
   ```
   npm start
   ```
5. ## Running the App
   After installation, you can run the app locally with the following command:
   ```
   npm run dev
   ```

<br>
<br>

# Development Process of the Student Applications Tracker Website

The student applications tracker website was developed as a simple, functional solution to help students submit and track their applications, while also providing the admin with tools to manage and update the status of each application. The project consists of two main interfaces: one for the users (students) and one for the admin.

## 1. Application Architecture

The website was built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), a robust and popular technology stack for developing full-stack web applications. The choice of MERN allowed for smooth integration between the frontend and backend, along with the ability to easily manage data using MongoDB.

The user interface was kept minimal and clean using Tailwind CSS for styling, with a focus on creating a user-friendly experience without unnecessary design complexity. Tailwind’s utility-first approach helped in efficiently building the layout and styling with minimal CSS.

## 2. User Interface and Functionality

For the user interface, students can access an application form where they can input and submit their personal details. Once the form is submitted, they can track the progress of their application via a dashboard. The status of each application is updated by the admin and can be viewed by the users in real time.

The dashboard was kept simple and intuitive, displaying key information about the student’s application, including the current status (pending, accepted, or rejected). This straightforward functionality was implemented to avoid overwhelming the users with excessive features.

## 3. Admin Interface and Functionality

The admin interface was designed to streamline the management of applications. Admins can view a list of all applications submitted by students and have the authority to change the status of any application. This feature provides the admin with the ability to update each student’s application status based on certain criteria or decisions, making the platform highly responsive to changes.

The admin interface also included basic sorting and filtering options, allowing for easier navigation of student data.

## 4. Backend Development

A large portion of the project’s focus was on the backend, as it was the core element of the application’s functionality. Node.js and Express.js were used to handle server-side logic and route requests, while MongoDB was employed for database management.

The database schema was designed to store user information, application data, and status updates efficiently. The server-side code was structured to handle application submissions, store data, and update application status seamlessly.

## 5. Minimal Styling and Tailwind CSS

While the project focused more on the backend, Tailwind CSS was used to provide a minimal and responsive design. Tailwind’s utility classes made it easier to create clean and consistent styling without the need to write custom CSS from scratch. The aim was to deliver a functional interface with a lightweight, modern look that enhances user experience.

## Conclusion

The development of the student applications tracker website provided a simple yet effective platform for students to apply and track their applications and for admins to manage the data. The MERN stack enabled smooth development across the frontend and backend, with Tailwind CSS ensuring the design remained minimal but responsive. The project focused on delivering core functionality, particularly on the backend, to create a reliable and user-friendly system.
