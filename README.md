# MyApp2 Project

**MyApp2** is a Dockerized web application deployed on **AWS App Runner**, demonstrating a complete workflow from local development to cloud deployment.

---

## Features

- Simple web application showcasing Docker containerization
- Hosted on AWS App Runner for easy cloud deployment
- Illustrates container-based deployment workflow
- Ready for further enhancements like CI/CD integration

---

## Project Structure---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Vicolat/apprunner-app.git
cd myapp2
docker build -t myapp2 .
docker run -p 8080:80 myapp2