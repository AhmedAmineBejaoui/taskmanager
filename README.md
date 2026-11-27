# Task Manager

A small Express REST API for managing tasks. Tasks are stored in memory and are lost when the server restarts.

## Run locally

Install Node.js and npm, then from the repository root:

```sh
npm install
node backend/server.js
```

The API listens on port 5000. The direct Node command works independently of the npm startup script.

## API

| Method | Path | Behavior |
| --- | --- | --- |
| GET | `/tasks` | List tasks |
| POST | `/tasks` | Create a task (201) |
| PUT | `/tasks/:id` | Update a task (404 if missing) |
| DELETE | `/tasks/:id` | Delete a task (204, or 404 if missing) |

Example local request:

```sh
curl -X POST http://localhost:5000/tasks -H 'Content-Type: application/json' -d '{"title":"Example","description":"Demo task","status":"pending"}'
curl http://localhost:5000/tasks
```

## Architecture and limitations

- `backend/server.js`: Express routes, JSON parsing and in-memory storage.
- No authentication or authorization is implemented; CORS is unrestricted. Use only in a trusted local development environment, not as a public service.
- Request validation and persistent storage are not implemented.
- The npm test script is a placeholder, not an automated test suite.
