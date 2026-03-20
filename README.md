# My Second Docker Web App

![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![AWS](https://img.shields.io/badge/AWS-App%20Runner-orange)
![Status](https://img.shields.io/badge/Status-Deployed-blue)

---

## 🔹 Project Overview

This is a **Dockerized Node.js web application** with a simple **HTML/CSS/JavaScript frontend**, deployed using **AWS App Runner**.  

It demonstrates a **real-world cloud workflow**:

1. Build the app with Docker  
2. Run it locally in a container  
3. Deploy it to AWS App Runner for a live demo  

---

## 🚀 Features

- Node.js server using Express  
- HTML, CSS, and inline JavaScript frontend  
- Dynamic content update: "Hello from JavaScript!"  
- Button interaction (alert)  
- Image rendering with styling  
- Docker containerization  
- AWS App Runner deployment  

---

## 📁 Project Structure

myapp2/
├── index.js           # Node server
├── index.html         # Frontend HTML + CSS + inline JS
├── package.json       # Node dependencies
├── package-lock.json  # Dependency lock
└── .gitignore         # Ignores node_modules/
---

## 🐳 Docker Setup

### 1. Build Docker Image
<img width="1460" height="753" alt="Screenshot 2026-03-17 164514" src="https://github.com/user-attachments/assets/9d0de3c5-7c3e-40d6-848d-f0e206548f06" />

```bash
docker build -t myapp2 .
<img width="1915" height="1012" alt="Screenshot 2026-03-17 175207" src="https://github.com/user-attachments/assets/e7f934b5-f51a-4b83-8d43-83bb19e10ab4" />

Run Docker Container
docker run -p 8080:3000 myapp2

Open in Browser
http://localhost:8080

⚠️ Note: Port mapping 8080:3000 because Node app runs on port 3000 inside container.

💻 Run Locally (without Docker)
npm install
node index.js

Open:
http://localhost:3000

•	Your Node app must listen on the correct port inside the container.

## ⚙️ Node Server Configuration

This project uses **Node.js with Express** to serve the frontend.  

- **Server file:** `index.js`  
- **Port configuration:**

```javascript
const PORT = process.env.PORT || 3000;

•	Static file serving:
app.use(express.static(__dirname));

This allows Express to serve:
	•	index.html
	•	CSS and JS files (if any)
	•	Route setup:
    app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
•	Start server:
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

☁️ Deployment (AWS App Runner)

This project is deployed using AWS App Runner (source code deployment).

Configuration:
	•	Runtime: Node.js 22
	•	Build command:
    npm install
    node index.js
    PORT=3000
App Runner automatically redeploys on GitHub push.
<img width="1895" height="920" alt="Screenshot 2026-03-20 185910" src="https://github.com/user-attachments/assets/ff1f47f2-b1a7-4377-b8fb-e42d3883db0b" />

    🌐 Live Application

    https://your-app-url.awsapprunner.com

⚠️ Note: Service may be temporarily unavailable if cloud resources are stopped to avoid costs.

<img width="1915" height="971" alt="Screenshot 2026-03-20 190249" src="https://github.com/user-attachments/assets/5392b1e2-47d5-4909-943c-a7a212b0b223" />


👨‍💻 Author

Victor Olatunji
GitHub: Vicolat
