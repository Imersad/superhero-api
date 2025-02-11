# 🛠️ Backend - Humble Superhero API (NestJS)

This is the backend service for the Humble Superhero API.

### 🚀 Setup Instructions

1️⃣ Install dependencies:

```
pnpm install
```

2️⃣ Run the server:

```
pnpm start
```

Runs on http://localhost:3000.

&nbsp;

### 📌 Endpoints

#### POST /superheroes

- Description: Add a new superhero.

- Body (JSON):

```
{
  "name": "Captain Kindness",
  "superpower": "Spreading Positivity",
  "humilityScore": 9
}
```

#### GET /superheroes

- Description: Get a sorted list of superheroes by humility.

- Response:

```
[
  {
    "name": "Captain Kindness",
    "superpower": "Spreading Positivity",
    "humilityScore": 9
  }
]
```

&nbsp;

### ✅ Testing

Run Jest tests:

```
pnpm run test
```

&nbsp;

### 🔄 Improvements

- Add database (PostgreSQL).

- Implement authentication.

- Deploy the app with CI/CD pipelines.
