# 🚀 QuickNest Service Booking API

A complete RESTful Service Booking Backend API built with **Node.js, Express.js, MongoDB, and Mongoose** featuring authentication, role-based access control, service management, provider management, booking system, dashboard analytics, Cloudinary uploads, email notifications, WhatsApp notifications, and Redis integration.

This backend supports **Admin, Provider, and User roles** with secure JWT authentication and complete API testing using Postman.

---

## 🚀 Features

### Authentication & Authorization
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Access Control (Admin / Provider / User)

### Service Management
- Create Service
- Get All Services
- Get Single Service
- Update Service
- Delete Service
- Upload Service Images using Cloudinary

### Provider Management
- Add Provider
- Get All Providers
- Update Provider
- Delete Provider
- Provider Dashboard

### Booking Management
- Book Service
- Cancel Booking
- Get My Bookings
- Booking Status Management
- Booking History

### Admin Dashboard
- Total Users
- Total Providers
- Total Services
- Total Bookings
- Revenue Statistics
- Booking Analytics

### Notifications
- Email Notifications using Nodemailer
- WhatsApp Notifications using Twilio

### Performance & Security
- Redis Integration
- JWT Authentication
- Rate Limiting
- Validation Middleware
- Role-Based Middleware
- Centralized Error Handling

---

## 🧰 Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Image Upload
- Cloudinary
- Multer

### Notifications
- Nodemailer
- Twilio WhatsApp API

### Caching
- Redis

### Validation & Security
- Express Validator
- Helmet
- Rate Limiting
- CORS

### Testing
- Postman

### Deployment
- Render

---

## 📁 Project Structure

```bash
12-QUICKNEST/
│
├── config/
│   ├── cloudinary.js
│   ├── db.js
│   ├── email.js
│   ├── redis.js
│   └── twilio.js
│
├── controllers/
│   ├── adminDashboardController.js
│   ├── bookingController.js
│   ├── categoryController.js
│   ├── providerController.js
│   ├── serviceController.js
│   └── userController.js
│
├── middleware/
│   ├── auth.js
│   ├── checkRole.js
│   ├── HttpError.js
│   ├── rateLimit.js
│   ├── upload.js
│   └── validate.js
│
├── models/
│   ├── Booking.js
│   ├── Category.js
│   ├── Provider.js
│   ├── Service.js
│   └── User.js
│
├── routes/
│   ├── adminRoutes.js
│   ├── bookingRoutes.js
│   ├── providerRoutes.js
│   └── userRoutes.js
│
├── services/
│   └── emailTemplate.js
│
├── utils/
│   ├── sendEmail.js
│   └── sendWhatsAppMessage.js
│
├── validation/
│   ├── bookingSchema.js
│   ├── categorySchema.js
│   ├── passwordSchema.js
│   ├── providerSchema.js
│   ├── serviceSchema.js
│   └── UserSchema.js
│
├── .env
├── server.js
├── package.json
└── package-lock.json
```

---

## 🌐 Live API Base URL

```bash
https://your-render-link.onrender.com
```

Postman Environment Variable:

```bash
{{baseUrl}}
```

Example:

```bash
{{baseUrl}}/users/login
{{baseUrl}}/services
{{baseUrl}}/bookings
```

---

## 🔐 Authentication

Protected routes require JWT Token.

Add token in Postman:

```bash
Authorization: Bearer YOUR_TOKEN
```

---

## 📌 API Endpoints

### Authentication Routes

```bash
POST   /users/register
POST   /users/login
GET    /users/profile
```

### Service Routes

```bash
POST   /services
GET    /services
GET    /services/:id
PATCH  /services/:id
DELETE /services/:id
```

### Provider Routes

```bash
POST   /providers
GET    /providers
PATCH  /providers/:id
DELETE /providers/:id
```

### Booking Routes

```bash
POST   /bookings
GET    /bookings/my-bookings
PATCH  /bookings/:id
DELETE /bookings/:id
```

### Admin Routes

```bash
GET    /admin/dashboard
GET    /admin/bookings
GET    /admin/users
```

---

## 📸 Project Screenshots

### Postman API Collection
![API Collection](screenshots/postman-api-collection.png)

### Service Management APIs
![Service APIs](screenshots/service-management-api.png)

### Booking APIs
![Booking APIs](screenshots/booking-api.png)

### Admin Dashboard APIs
![Dashboard APIs](screenshots/admin-dashboard-api.png)

### Cloudinary Image Upload
![Cloudinary Upload](screenshots/cloudinary-upload.png)

---

## 📂 Additional API Testing Screenshots

More API testing screenshots are available in the `screenshots/` folder:

- Authentication APIs
- Service APIs
- Provider APIs
- Booking APIs
- Dashboard APIs
- Admin APIs

---

## ⚙️ Environment Variables

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password

TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_number

REDIS_URL=your_redis_url
```

---

## 🛠️ Installation

Clone repository:

```bash
git clone https://github.com/your-username/12-QUICKNEST.git
```

Move into project:

```bash
cd 12-QUICKNEST
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm run dev
```

---

## 🧪 API Testing

All APIs tested using **Postman**.

Postman Variables:

```bash
baseUrl = https://your-render-link.onrender.com
AuthToken = your_jwt_token
```

---

## 💡 Highlights

This project demonstrates:

- REST API Development
- JWT Authentication
- Role-Based Authorization
- MongoDB Relationships
- Cloudinary Integration
- File Upload Handling
- Redis Caching
- Email Notifications
- WhatsApp Notifications
- Dashboard Aggregation
- Backend Security
- Production Deployment
- API Testing with Postman

---

## ⭐ Portfolio Project

This project is built to showcase backend development skills including:

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Redis
- Cloudinary
- Twilio
- Nodemailer
- REST API Development
- Deployment