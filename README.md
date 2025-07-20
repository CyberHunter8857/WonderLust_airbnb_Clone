# WONDERLUST_AIRBNB_CLONE

**Transforming Travel Dreams into Reality Effortlessly**

![last-commit](https://img.shields.io/github/last-commit/CyberHunter8857/WonderLust_airbnb_Clone?style=flat&logo=git&logoColor=white&color=0080ff)
![repo-top-language](https://img.shields.io/github/languages/top/CyberHunter8857/WonderLust_airbnb_Clone?style=flat&color=0080ff)
![repo-language-count](https://img.shields.io/github/languages/count/CyberHunter8857/WonderLust_airbnb_Clone?style=flat&color=0080ff)

---

### Built with the tools and technologies:

![Express](https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat&logo=Mongoose&logoColor=white)
![.ENV](https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat&logo=dotenv&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-B4CA65.svg?style=flat&logo=EJS&logoColor=black)
![Passport](https://img.shields.io/badge/Passport-34E27A.svg?style=flat&logo=Passport&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5.svg?style=flat&logo=Cloudinary&logoColor=white)

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

WonderLust is a full-stack clone of Airbnb focused on creating, displaying, and managing rental property listings with integrated user authentication, image upload, and reviews.

---

## ✨ Features

- 🔐 User authentication (Passport.js)
- 📝 CRUD for property listings
- 📸 Image uploads with Cloudinary
- ⭐ Review system
- 🧰 Robust error handling
- 🗂️ Modular MVC architecture
- 🌐 EJS templates for frontend

---

## 💻 Tech Stack

**Frontend:** HTML, CSS, Bootstrap, EJS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Authentication:** Passport.js  
**Cloud Storage:** Cloudinary  
**Others:** dotenv, multer, method-override


---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v14 or above)
- npm
- MongoDB Atlas or local MongoDB
- Cloudinary account

### ⚙️ Environment Variables

Create a `.env` file in the root with the following variables:

```bash
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
DB_URL=mongodb://localhost:27017/wonderlust
SECRET=sessionsecretkey
```

### 📦 Installation

```bash
git clone https://github.com/CyberHunter8857/WonderLust_airbnb_Clone.git
cd WonderLust_airbnb_Clone
npm install
```

### ▶️ Usage

```bash
npm start
```

Visit `http://localhost:8080` to view the app.

### 🧪 Testing

This app supports manual testing. Automated tests can be added using Jest or Mocha.

---

## 📡 API Endpoints

| Method | Route                        | Description              |
|--------|------------------------------|--------------------------|
| GET    | /listings                    | View all listings        |
| POST   | /listings                    | Create new listing       |
| GET    | /listings/:id                | View listing details     |
| PUT    | /listings/:id                | Update listing           |
| DELETE | /listings/:id                | Delete listing           |
| POST   | /listings/:id/reviews        | Add review               |
| DELETE | /listings/:id/reviews/:rid   | Delete review            |
| GET    | /register /login /logout     | Auth routes              |

---

## 🗂️ Project Structure

```bash
WonderLust_airbnb_Clone/
│
├── models/               # Mongoose schemas
├── routes/               # Express routes
├── controllers/          # Route logic
├── views/                # EJS templates
├── public/               # Static assets
├── utils/                # Error handling, helper funcs
├── middleware/           # Auth & validation
├── .env.example          # Sample env vars
├── app.js                # Main app entry
└── package.json
```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check [issues](https://github.com/CyberHunter8857/WonderLust_airbnb_Clone/issues) page.

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

**Made with 💙 by Mayur Tamanke**
