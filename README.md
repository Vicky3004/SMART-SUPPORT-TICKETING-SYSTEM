# 🚂 Smart Support Ticketing System

> A full-stack customer support ticket management system built with React + Spring Boot + MySQL.

<div align="center">

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)

**Developed by [Vignesh Mahendran](https://www.linkedin.com/in/-vignesh-mahendran-/)**

</div>

---

## 📸 Preview

| Feature | Description |
|---|---|
| 🏠 Home Dashboard | Hero section with animated train, floating tickets, live stats |
| 🎫 Ticket Management | Create, view, filter, and update support tickets |
| 🚂 Train Animation | Moving locomotive with carriages carrying tickets |
| 📊 Stats Bar | Real-time counts for Total, Open, In Progress, Closed, High Priority |
| 🔍 Search | Filter tickets by customer name or issue |
| 🔗 LinkedIn | Developer profile linked in sidebar and hero |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI Framework |
| Vite | 5.x | Build Tool & Dev Server |
| DM Sans / DM Mono | Google Fonts | Typography |
| CSS Animations | — | Train, float, pulse effects |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Spring Boot | 3.2.5 | REST API Framework |
| Spring Data JPA | — | Database ORM |
| Hibernate | 6.4.x | SQL Query Builder |
| MySQL Connector | 8.0.33 | Database Driver |
| Maven | — | Build & Dependency Manager |

### Database
| Technology | Version |
|---|---|
| MySQL | 8.x |

---

## 📁 Project Structure

```
SMART SUPPORT TICKETING SYSTEM/
│
├── BACKEND/                          # Spring Boot Application
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/support/
│   │       │   ├── SupportApplication.java
│   │       │   ├── controller/
│   │       │   │   └── TicketController.java
│   │       │   ├── model/
│   │       │   │   └── Ticket.java
│   │       │   └── repository/
│   │       │       └── TicketRepository.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
└── FRONTEND/                         # React + Vite Application
    ├── src/
    │   ├── App.jsx                   # Main React component
    │   ├── styles.css                # All styles + animations
    │   └── main.jsx                  # React entry point
    ├── index.html
    ├── vite.config.js
    └── package.json
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Java 17+
- Node.js 18+
- MySQL 8.x (via XAMPP or standalone)
- Maven

---

### 🗄️ Step 1 — Database Setup

Start MySQL and run:

```sql
CREATE DATABASE supportdb;
```

---

### 🔧 Step 2 — Backend Configuration

Open `BACKEND/src/main/resources/application.properties` and set your credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/supportdb
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

---

### 🚀 Step 3 — Run the Backend

```bash
cd BACKEND
mvn spring-boot:run
```

Backend starts at → `http://localhost:8080`

---

### 💻 Step 4 — Run the Frontend

```bash
cd FRONTEND
npm install
npm run dev
```

Frontend starts at → `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tickets` | Get all tickets |
| `POST` | `/api/tickets` | Create a new ticket |
| `PATCH` | `/api/tickets/{id}` | Update ticket status |
| `DELETE` | `/api/tickets/{id}` | Delete a ticket |

### Request Body — Create Ticket

```json
{
  "customerName": "Jane Smith",
  "issue": "Unable to login to the portal",
  "priority": "HIGH",
  "status": "OPEN"
}
```

### Ticket Status Values
- `OPEN` — New ticket, not yet assigned
- `IN_PROGRESS` — Being worked on
- `CLOSED` — Resolved

### Priority Values
- `LOW`
- `MEDIUM`
- `HIGH`

---

## ✨ Features

- ✅ Create support tickets with customer name, issue, and priority
- ✅ View all tickets in a responsive card grid
- ✅ Filter tickets by status (Open / In Progress / Closed)
- ✅ Search tickets by name or issue
- ✅ Update ticket status inline via dropdown
- ✅ Live stats dashboard (Total, Open, In Progress, Closed, High Priority)
- ✅ Animated train scene with floating ticket badges
- ✅ Toast notifications for create/update actions
- ✅ Responsive design (mobile-friendly)
- ✅ LinkedIn profile integration

---

## 🐛 Common Issues

### MySQL won't start (XAMPP)
```
Error: MySQL shutdown unexpectedly
```
**Fix:** Another process is using port 3306. Run in PowerShell (Admin):
```powershell
netstat -ano | findstr :3306
taskkill /PID <PID_NUMBER> /F
```
Then restart MySQL in XAMPP.

---

### Backend can't connect to MySQL
```
Communications link failure
```
**Fix:** Make sure MySQL is running before starting Spring Boot.

---

### Frontend shows blank page
**Fix:** Make sure `src/App.jsx` starts with:
```js
import { useEffect, useState } from "react";
import "./styles.css";
```
Not with `@import url(...)` — that belongs only in `styles.css`.

---

## 👨‍💻 Developer

<div align="center">

**Vignesh Mahendran**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-vignesh-mahendran-/)

*Smart Support Ticketing System — Every Ticket Finds Its Track. 🚂*

</div>

---

## 📄 License

This project is for educational and portfolio purposes.  
© 2026 Vignesh Mahendran. All rights reserved.