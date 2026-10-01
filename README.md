# MERN Stack Learning

A repository where I practice and learn the **MERN stack** (MongoDB, Express, React, Node.js). It currently contains a working backend REST API for managing student records, and the React frontend will be added as I learn.

## Technologies

| Layer     | Technology                  | Status       |
| --------- | --------------------------- | ------------ |
| Database  | MongoDB Atlas with Mongoose | In progress  |
| Backend   | Node.js and Express 5       | In progress  |
| Frontend  | React                       | Coming soon  |
| Tooling   | dotenv, nodemon, Git        | In use       |

## Project Structure

```
MERN  Full Stack/
├── backend/
│   ├── models/
│   │   └── student.js     # Mongoose schema and model
│   ├── .env               # Environment variables (not pushed to GitHub)
│   ├── package.json
│   └── server.js          # Express server and API routes
├── frontend/              # React app (to be added)
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) account and cluster

### Installation

```bash
git clone https://github.com/mohitvaishnav414-ops/Mern-Stack-Learning.git
cd "Mern-Stack-Learning/backend"
npm install
```

### Environment Variables

Create a file named `.env` inside the `backend` folder:

```env
MONGODB_URI="your_mongodb_connection_string"
```

In MongoDB Atlas, open **Network Access** and add your IP address, otherwise the database connection will fail.

### Run the Server

```bash
npm run dev
```

The server starts at `http://localhost:3000`. When everything works, the terminal shows:

```
Server is running on http://localhost:3000
mongodb.connect
```

## API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/`             | Test route        |
| GET    | `/api/students` | Get all students  |
| POST   | `/api/students` | Add a new student |

### Student Schema

| Field  | Type   | Required |
| ------ | ------ | -------- |
| name   | String | Yes      |
| age    | Number | Yes      |
| course | String | Yes      |

### Example Request

```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Mohit","age":20,"course":"MCA"}'
```

Example response:

```json
{
  "_id": "665f1c2e8b1e4a0012345678",
  "name": "Mohit",
  "age": 20,
  "course": "MCA",
  "__v": 0
}
```

## Learning Roadmap

- [x] Set up Node.js and Express server
- [x] Connect to MongoDB Atlas with Mongoose
- [x] Create a model and GET/POST routes
- [ ] Add PUT and DELETE routes
- [ ] Build the React frontend
- [ ] Connect frontend and backend
- [ ] Deploy the project

## Author

**Mohit Kumar**
GitHub: [@mohitvaishnav414-ops](https://github.com/mohitvaishnav414-ops)
