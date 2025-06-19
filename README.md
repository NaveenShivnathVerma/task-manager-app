
# ✅ Task Manager App

A full-stack task management web application built with **MERN Stack (MongoDB, Express, React, Node.js)**.  
It allows users to register, log in, and manage their tasks — add, edit, delete, and mark as complete/incomplete.

---

## 📸 Screenshots

> 🖼️ (Add screenshots of Login, Dashboard, Add Task, Mobile View if you have)

---

## 🚀 Features

- 🔐 User Authentication (Register & Login with JWT)
- 🧾 Create, Read, Update, Delete (CRUD) tasks
- ✅ Mark tasks as complete/incomplete
- 📝 Inline task editing
- 🗑️ Task deletion
- 📱 Responsive UI (Mobile-friendly)
- 🌈 Styled with Tailwind CSS
- 🔒 Protected dashboard route using Context API

---

## 🛠️ Tech Stack

| Frontend            | Backend                  | Database         |
|---------------------|--------------------------|------------------|
| React, Vite         | Node.js, Express         | MongoDB (Atlas)  |
| React Router DOM    | JWT, bcrypt              | Mongoose ODM     |
| Axios, Tailwind CSS | dotenv, cors             |                  |

---

## 📁 Folder Structure

```
task-manager-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
```

---

## ⚙️ Setup Instructions (Local Development)

### 1️⃣ Backend Setup

```bash
cd backend
npm install
# Create a .env file:
# MONGO_URI = your_mongodb_uri
# PORT = 5000
node server.js
```

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Deployment (Optional)

### Frontend (Vercel)
- Push to GitHub
- Import to [https://vercel.com](https://vercel.com)
- Set build command: `npm run build`
- Set output directory: `dist`

### Backend (Render)
- Create new Web Service on [https://render.com](https://render.com)
- Connect GitHub or upload backend
- Set `MONGO_URI` and `PORT` as env variables
- Enable auto-deploy

---

## 👨‍💻 Author

- Name:Naveen Shivnath Verma
- Project:Internship Assignment — Task Manager App
- 

---

## 📃 License

This project is part of an internship assignment and open for learning purposes.
