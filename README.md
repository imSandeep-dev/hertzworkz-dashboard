# Hertzworkz Dashboard

A full-stack web application implementing a Login → Dashboard → Products flow, built with React and Node.js.

## Tech Stack
```
**Frontend:** React.js (Vite), React Router, CSS
**Backend:** Node.js, Express
```

## Features

- 🔐 **Login** — email/password form with client-side validation and backend credential check
- 📝 **Signup** — name, email, password, and confirm password form with validation
- 🔑 **Forgot Password** — email input form to request a password reset
- 📊 **Dashboard** — navbar, welcome message, and dashboard overview section
- 🧩 **Product Cards** — dashboard preview of Hertzworkz products (Textura, Medi App, Vitayolkz, Safe Nest) with short summaries
- 🔗 **View All Products** — button that opens the official [Hertzworkz Products](https://hertzworkz.com/product) page in a new tab
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
3. Browse featured product cards, or click **View All Products** to open the full Hertzworkz catalog in a new tab
4. Click **Logout** to return to Login (`/`)

## Pages

| Page | Route | Description |
|---|---|---|
| Login | `/` | Sign in with mock credentials |
| Signup | `/signup` | Create account form |
| Forgot Password | `/forgot-password` | Password reset request form |
| Dashboard | `/dashboard` | Main app screen — welcome, product cards, and navigation |

## Notes

- No database is connected in this version — credentials are hardcoded in `backend/server.js` for demonstration only.
- Signup and Forgot Password forms are functional UI with client-side validation, but are not yet connected to a backend.
- Product cards show original short summaries, not scraped content — full product details are on the official Hertzworkz site.
