# 🚀 Express + PostgreSQL + Redis + Docker Backend

A production-style backend demonstrating a scalable architecture using
Express, PostgreSQL (Supabase), Redis caching, and Docker containers.

------------------------------------------------------------------------

## 🧠 Architecture

Client\
↓\
Express API (Docker)\
↓\
Redis (cache layer)\
↓\
Supabase PostgreSQL (cloud DB)

------------------------------------------------------------------------

## ⚡ Features

-   Create orders API
-   Dashboard stats API
-   Redis caching for faster responses
-   Dockerized backend
-   Connection pooling
-   Supabase cloud database integration

------------------------------------------------------------------------

## 📦 Tech Stack

-   Node.js
-   Express.js
-   PostgreSQL (Supabase)
-   Redis
-   Docker

------------------------------------------------------------------------

## 📁 Project Structure

. ├── config/ │ ├── db.js │ └── redis.js ├── routes/ ├── controllers/
├── server.js ├── Dockerfile ├── docker-compose.yml ├── .env └──
README.md

------------------------------------------------------------------------

## ⚙️ Setup

### 1. Clone repo

git clone `<your-repo-url>`{=html} cd express-pg-redis-demo

### 2. Install dependencies

npm install

### 3. Create .env

PORT=5000
DATABASE_URL=postgresql://USER:PASSWORD@pooler.supabase.com:6543/postgres
REDIS_URL=redis://redis:6379

------------------------------------------------------------------------

## 🐳 Run with Docker

docker compose up --build

Server will run at: http://localhost:5000

------------------------------------------------------------------------

## 🧪 Testing

### Create Order

POST /orders

{ "amount": 500 }

### Get Stats

GET /orders/stats

------------------------------------------------------------------------

## ⚡ Redis Caching Demo

First request: 🐢 FROM SUPABASE

Second request: ⚡ FROM REDIS

Performance: Without cache → \~300--500ms With cache → \~5--10ms

------------------------------------------------------------------------

## 🔥 Verify Redis manually

docker exec -it `<redis_container>`{=html} redis-cli KEYS \* GET stats

------------------------------------------------------------------------

## 🧠 Learnings

-   Redis caching strategies
-   Docker networking
-   Supabase connection pooler
-   Production-ready backend structure

------------------------------------------------------------------------

## 🚀 Future Improvements

-   JWT authentication
-   Redis sessions
-   Rate limiting
-   Background jobs
-   WebSockets

------------------------------------------------------------------------

Built with ❤️ while learning scalable backend systems.
