# Node.js JWT Authentication API

A REST API built with **Node.js, Express.js, MongoDB, Mongoose, JWT and bcrypt**.

## 🚀 Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing with bcrypt
* Get All Users
* Delete User
* Protected Logout
* Error Handling

## 🛠️ Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Postman

## 📁 Project Structure

```text
project/
├── config/
├── controller/
├── middleware/
├── model/
├── router/
├── images/
├── .env
├── package.json
└── server.js
```

## ⚙️ Installation

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_NAME
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
```

Run:

```bash
node server.js
```

Server:

```text
http://localhost:5000
```

## 📌 API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/user/add`        | Create User   |
| GET    | `/user/AllUser`    | Get All Users |
| POST   | `/user/Login`      | Login         |
| DELETE | `/user/Delete/:id` | Delete User   |
| POST   | `/user/logout`     | Logout        |

## 🔐 Authentication

After login, JWT token is generated.

```text
Login
 ↓
Email + Password
 ↓
bcrypt Verification
 ↓
JWT Token
 ↓
Authorization: Bearer Token
 ↓
Protected Route
```

## 📸 CRUD Screenshots

### Create User

<img width="1620" height="1070" alt="image" src="https://github.com/user-attachments/assets/c1780134-9fb1-42a5-85d8-bd94ed24adff" />


### GetAll User

<img width="1665" height="1100" alt="image" src="https://github.com/user-attachments/assets/eb9374c9-85f4-43d2-be22-3b1424f0174c" />


### Login User

<img width="1545" height="1097" alt="image" src="https://github.com/user-attachments/assets/481d4531-6a37-4279-8a34-7faf0d97f3be" />


### Delete User

<img width="1442" height="1100" alt="image" src="https://github.com/user-attachments/assets/98aac2e7-8a4e-41d5-b6f2-0a3bdad8bf7c" />


### Logout User
<img width="1493" height="1082" alt="image" src="https://github.com/user-attachments/assets/e4dd94aa-fe5e-4bbf-96ef-5d7a4b32cd1a" />


## 🧪 Postman

All APIs can be tested using **Postman**.

## 👨‍💻 Author

**Amit Chavda**
Full Stack Developer
Bhavnagar, Gujarat, India

⭐ If you like this project, give it a star on GitHub.


