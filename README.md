# 🍝PastaQuest - Restaurant Website Project

![PastaQuest Banner](https://github.com/hendhamdi/PastaQuest/blob/main/src/Images/Home/homepage.png)

---
## 🧾Project Overview

**PastaQuest** is a full-stack web application for a pasta-specialized restaurant, designed and delivered following **DevOps best practices**.  
The project covers the **entire DevOps lifecycle**, from development to containerization, orchestration, CI/CD automation, and monitoring.

The application allows users to explore the restaurant menu, view upcoming events, and reserve tables online.


### 🔗Project Link:
[PastaQuest - Restaurant Website Project](https://pasta-quest-restaurant-website.vercel.app/)

---

## 🎯Objective


### Functional Objectives
- Display restaurant menu and events
- Allow users to reserve tables online
- Provide a modern and responsive UI

### DevOps Objectives
- Containerize the application using **Docker**
- Orchestrate services using **Kubernetes**
- Automate build & deployment using **CI/CD (GitHub Actions)**
- Monitor system performance using **Prometheus & Grafana**
- Ensure scalability, reliability, and maintainability

---

## 🛠️Technologies Used

### 🧩 Application Stack
- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API Communication**: Axios
- **Routing**: React Router

---


## 🔧 DevOps Stack & Phases

### 🐳 Phase 1 — Containerization (Docker)
- Dockerfiles created for:
  - Frontend
  - Backend
- Multi-container setup using **Docker Compose**
- Ensures consistent environments across development and deployment

### ☸️ Phase 2 — Orchestration (Kubernetes)
- Kubernetes manifests created for:
  - Deployments
  - Services (NodePort / ClusterIP)
- Features:
  - Pod replication & scaling
  - Rolling updates
  - Self-healing (restart on failure)

### 🔄 Phase 3 — CI/CD Pipeline (GitHub Actions)
- Automated pipeline includes:
  - Code checkout
  - Simple test execution
  - Docker image build
  - Image push to registry
  - Deployment to Kubernetes cluster
- Secure deployment via **GitHub Secrets** (KUBE_CONFIG, AZURE_CREDENTIALS)

---


### 📊 Phase 4 — Monitoring & Observability
- **Prometheus**:
  - Collects metrics from Kubernetes and application
- **Grafana**:
  - Visual dashboards for:
    - CPU & memory usage
    - Pod health
    - Application performance
- Enables proactive monitoring and alerting (via Prometheus AlertManager)

---

## ✨Features

- 🍝 **Menu Page**: Displays a list of available pasta dishes with photos and descriptions.
- 🎉 **Events Page**: Lists upcoming events with dates and brief descriptions (e.g., concerts, theme nights, promotions).
- 📝 **Reservation System**: Users can reserve a table online by filling out a simple form with details such as name, date, time, number of people, and any special requests.

---

## 🎨 Design and Layout

### Figma Design Link:
[View Figma Design](https://www.figma.com/design/ySRhTy3sH5Iro2oxMzZre5/Untitled?node-id=0-1&p=f&t=tunxeJMGBDpS6Jwr-0)

### Key Pages:
- **Homepage**: Introduces the restaurant and highlights pasta specialties.
- **Menu Page**: A list of pasta dishes with high-quality images and detailed descriptions.
- **Event Page**: A list of upcoming events with clear event details.
- **Reservation Form**: A simple form for users to reserve a table with necessary details.

 --- 
## 🚀Future Plan

While the website currently offers basic functionality for menu browsing and table reservations, a **back-office system** will be added in the future. The admin dashboard will allow restaurant managers to:
- **Manage Reservations**: View, update, or delete customer reservations.
- **Update Menu**: Add, modify, or delete dishes on the menu.
- **Event Management**: Add or update details of upcoming events like concerts, theme nights, etc.

This back-office system will be essential for streamlining restaurant management tasks.

---

## ✅ Conclusion

This project not only delivers a seamless user experience for PastaQuest customers but also demonstrates the integration of **end-to-end DevOps practices**. The website was developed, containerized, and deployed using **Docker**, orchestrated with **Kubernetes**, and automated through a **CI/CD pipeline (GitHub Actions)**.  

Monitoring and observability were implemented with **Prometheus and Grafana**, providing real-time metrics and alerts. Future phases will focus on expanding the **DevOps pipeline** to include automated scaling, improved reliability, and a back-office admin dashboard for efficient content and reservation management.

---
## ⚖️ License

This project is distributed under the **MIT License** — you are free to reuse it for **educational or personal purposes**, provided that the original author is credited.

---



🍝 Crafted with spaghetti, sauce, and React components.