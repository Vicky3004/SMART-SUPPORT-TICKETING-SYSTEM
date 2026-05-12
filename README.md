# 🚂 Smart Support Ticketing System

> A full-stack customer support ticket management system built with React + Spring Boot + MySQL + Docker.

<div align="center">

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Developed by [Vignesh Mahendran](https://www.linkedin.com/in/-vignesh-mahendran-/)**

*Every Ticket Finds Its Track. 🚂*

</div>

---

## 📸 Preview

| Feature | Description |
|---|---|
| 🏠 Home Dashboard | Hero section with animated train, floating tickets, live stats |
| 🎫 Ticket Management | Create, view, filter, search and update support tickets |
| 🚂 Train Animation | Moving locomotive with carriages carrying tickets |
| 📊 Stats Bar | Real-time counts — Total, Open, In Progress, Closed, High Priority |
| 🔍 Search | Filter tickets by customer name or issue description |
| 🐳 Docker | One command to run entire app — Frontend + Backend + MySQL |
| 🔗 LinkedIn | Developer profile linked in sidebar and hero section |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI Framework |
| Vite | 8.x | Build Tool & Dev Server |
| Nginx | Alpine | Production Web Server (Docker) |
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
| MySQL | 8.0 |

### DevOps
| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Docker Compose | Multi-container orchestration |
| Git | Version Control |

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
│   │           ├── application.properties           # Local / XAMPP config
│   │           └── application-docker.properties    # Docker config
│   ├── Dockerfile
│   └── pom.xml
│
├── FRONTEND/                         # React + Vite Application
│   ├── src/
│   │   ├── App.jsx                   # Main React component
│   │   ├── styles.css                # All styles + animations
│   │   └── main.jsx                  # React entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml                # Runs all 3 services together
└── README.md
```

---

## 🚀 Running the Project

There are **two ways** to run this project:

---

### 🐳 Option 1 — Docker (Recommended)

> Runs everything with one command. No need to install MySQL, Java, or Node separately.

**Prerequisites:**
- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running

**Step 1 — Build the Backend JAR**
```bash
cd BACKEND
mvn clean package -DskipTests
cd ..
```

**Step 2 — Start all services**
```bash
docker-compose up --build
```

**Step 3 — Open browser**
```
http://localhost:3000
```

That's it! Docker starts MySQL + Backend + Frontend automatically. ✅

---

### 💻 Option 2 — Local Development (XAMPP)

**Prerequisites:**
- Java 17+
- Node.js 18+
- XAMPP (MySQL)
- Maven

**Step 1 — Start MySQL in XAMPP**

Open XAMPP Control Panel → Start MySQL

**Step 2 — Create Database**
```sql
CREATE DATABASE supportdb;
```

**Step 3 — Start Backend**
```bash
cd BACKEND
mvn spring-boot:run
```

Backend starts at → `http://localhost:8080`

**Step 4 — Start Frontend**
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

### Sample Request — Create Ticket

```json
{
  "customerName": "Jane Smith",
  "issue": "Unable to login to the portal",
  "priority": "HIGH",
  "status": "OPEN"
}
```

### Ticket Status Values
| Value | Meaning |
|---|---|
| `OPEN` | New ticket, not yet assigned |
| `IN_PROGRESS` | Currently being worked on |
| `CLOSED` | Issue resolved |

### Priority Values
| Value | Meaning |
|---|---|
| `LOW` | Non-urgent issue |
| `MEDIUM` | Normal priority |
| `HIGH` | Urgent, needs immediate attention |

---

## 🐳 Docker Details

### Services

| Service | Image | Port |
|---|---|---|
| `support-mysql` | mysql:8.0 | 3306 |
| `support-backend` | eclipse-temurin:17-jdk-alpine | 8080 |
| `support-frontend` | node:18-alpine + nginx:alpine | 3000 |

### Useful Docker Commands

```bash
# Start all services (first time)
docker-compose up --build

# Start all services (after first time)
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# Stop and delete all data
docker-compose down -v

# View all logs
docker-compose logs

# View backend logs only
docker-compose logs backend

# View running containers
docker ps
```

---

## ✨ Features

- ✅ Create support tickets with customer name, issue and priority
- ✅ View all tickets in a responsive card grid
- ✅ Filter tickets by status (Open / In Progress / Closed)
- ✅ Search tickets by customer name or issue
- ✅ Update ticket status inline via dropdown
- ✅ Live stats dashboard (Total, Open, In Progress, Closed, High Priority)
- ✅ Animated train scene with floating ticket badges in hero section
- ✅ Toast notifications for create and update actions
- ✅ Responsive design (mobile-friendly)
- ✅ LinkedIn profile integration
- ✅ Dockerized with docker-compose for one-command deployment
- ✅ Separate configs for local and Docker environments

---

## 🐛 Common Issues & Fixes

### Docker Desktop not running
```
error during connect: open //./pipe/dockerDesktopLinuxEngine
```
**Fix:** Open Docker Desktop app and wait for the green whale 🐳 in taskbar.

---

### MySQL won't start (XAMPP)
```
Error: MySQL shutdown unexpectedly
```
**Fix:** Another process is using port 3306. Run in PowerShell (Admin):
```powershell
netstat -ano | findstr :3306
taskkill /PID <PID_NUMBER> /F
```

---

### Backend can't connect to MySQL
```
Communications link failure
```
**Fix:** Make sure MySQL is running before starting Spring Boot.

---

### Vite not recognized
```
'vite' is not recognized as an internal or external command
```
**Fix:** Run `npm install` first inside the FRONTEND folder.

---

### Frontend blank page
**Fix:** Make sure `src/App.jsx` starts with:
```js
import { useEffect, useState } from "react";
import "./styles.css";
```

---

## 👨‍💻 Developer

<div align="center">

**Vignesh Mahendran R**

Java Backend / Full Stack Developer (Fresher)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/-vignesh-mahendran-/)
[![GitHub](https://img.shields.io/badge/GitHub-vicky3004-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vicky3004)

*Smart Support Ticketing System — Every Ticket Finds Its Track. 🚂*

</div>

---

## 📄 License

This project is for educational and portfolio purposes.
© 2026 Vignesh Mahendran. All rights reserved.