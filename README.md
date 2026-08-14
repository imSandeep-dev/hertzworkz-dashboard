# Hertzworkz Dashboard

A full-stack web application implementing a Login → Dashboard → Products flow, built with React and Node.js as part of an internship task.

## Tech Stack

**Frontend:** React.js (Vite), React Router, CSS
**Backend:** Node.js, Express

## Features

- 🔐 **Login** — email/password form with client-side validation and backend credential check
- 📝 **Signup** — name, email, password, and confirm password form with validation
- 🔑 **Forgot Password** — email input form to request a password reset
- 📊 **Dashboard** — navbar, welcome message, and dashboard overview section
- 🔗 **Products** — button that opens the official [Hertzworkz Products](https://hertzworkz.com/product) page in a new tab
- 🚪 **Logout** — returns the user to the login screen

## Project Structure
```text
hertzworkz-dashboard/
├── frontend/
│   └── src/
│       └── pages/
│           ├── Login.jsx
│           ├── Signup.jsx
│           ├── ForgotPassword.jsx
│           └── Dashboard.jsx
├── backend/
│   └── server.js
└── README.md
```

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/imSandeep-dev/hertzworkz-dashboard.git
cd hertzworkz-dashboard
```

### 2. Run the backend
```bash
cd backend
npm install
node server.js
```
Backend runs at `http://localhost:5000`

### 3. Run the frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

## Login Credentials
```
Email: admin@gmail.com
Password: admin123
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/login` | Validates email/password and returns success or error |

## App Flow
1. Login (`/`)
2. On success, navigate to Dashboard (`/dashboard`)
3. Click **View Products** to open Hertzworkz Products in a new browser tab
4. Click **Logout** to return to Login (`/`)

## Pages

| Page | Route | Description |
|---|---|---|
| Login | `/` | Sign in with mock credentials |
| Signup | `/signup` | Create account form |
| Forgot Password | `/forgot-password` | Password reset request form |
| Dashboard | `/dashboard` | Main app screen after login |

