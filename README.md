# API Development Essentials

This README covers key backend and API development topics including file uploads, cookie/session management, request validation, RESTful design, versioning, response formatting, and documentation practices.

---

## 1. File Uploads (Multer)

Multer is middleware for handling `multipart/form-data`, commonly used for uploading files in Express.

### Installation

```bash
npm install multer
```

### Example Usage

```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded', file: req.file });
});
```

---

## 2. Cookie and Session Management

### Cookies

Cookies store small client-side data.

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('token', 'abc123');
  res.send('Cookie set');
});
```

### Sessions

Sessions store user-specific data server-side.

```js
const session = require('express-session');
app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: false
}));

app.get('/session', (req, res) => {
  req.session.username = 'john';
  res.send('Session stored');
});
```

---

## 3. Request Validation

Validation ensures correct and secure user inputs.

### Using express-validator

```bash
npm install express-validator
```

```js
const { body, validationResult } = require('express-validator');

app.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.send('Valid data');
});
```

---

## 4. RESTful API Design

RESTful API design follows consistent, scalable architectural principles.

Key features:

* Use standard HTTP methods
* Use nouns in endpoints
* Stateless operations
* Resource-based design

Example endpoints:

* `GET /users`
* `POST /users`
* `PUT /users/:id`
* `DELETE /users/:id`

---

## 5. REST Principles

* **Stateless** — No server-side session stored
* **Uniform Interface** — Standardized communication
* **Cacheable** — Responses should indicate cacheability
* **Client-Server Separation** — Separation of UI and API
* **Layered System** — APIs can operate through multiple layers

---

## 6. API Versioning

Allows updates without breaking existing clients.

### Common Strategies

* **URI Versioning**: `/api/v1/users`
* **Query Parameter Versioning**: `/users?version=2`
* **Header Versioning**: `Accept: application/vnd.api.v2+json`

---

## 7. Response Formatting

Consistent formatting improves usability.

### Standard Response Example

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John"
  },
  "message": "User fetched successfully"
}
```

---

## 8. Status Code Best Practices

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

Use them consistently and appropriately for clarity.

---

