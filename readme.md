## Arquitectura MVC

```plaintext
mi-proyecto/
├── node_modules/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── images/
│   │   │   └── logo.png
│   │   └── js/
│   │       ├── login.js
│   │       └── signup.js
│   ├── pages/
│   │   ├── login.html
│   │   └── signup.html
│   ├── utils/
│   │   └── helpers.js 
│   └── index.html
├── src/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── user.route.js
│   ├── services/
│   │   └── auth.service.js
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.ejs
│   │   ├── partials/
│   │   │   ├── loginDialog.ejs
│   │   │   ├── signupDialog.ejs
│   │   │   ├── header.ejs
│   │   │   └── signup.ejs
│   │   └── index.ejs
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

## Package.json inicial

```json
{
  "name": "my-proyect",
  "version": "0.0.0",
  "description": "Proyecto fullstack con Node.js, EJS, JavaScript, HTML y CSS",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "bcryptjs": "2.4.3",
    "body-parser": "1.19.0",
    "cors": "2.8.5",
    "dotenv": "16.0.3",
    "ejs": "3.1.8",
    "express": "4.18.2",
    "jsonwebtoken": "8.5.1",
    "mongoose": "6.7.0",
    "moment": "2.30.1",
    "moment-timezone": "0.5.45"
  },
  "author": "Mauricio Cox",
  "license": "MIT"
}
```