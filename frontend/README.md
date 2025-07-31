# 🛍️ Full Stack - Gestor de Productos

Este es un proyecto Full Stack que permite gestionar productos a través de una aplicación con frontend en **React.js**, backend en **Node.js con Express**, y base de datos en **MongoDB**. Es parte de un examen práctico para evaluar habilidades de desarrollo completo (frontend, backend y base de datos).

---

## 📚 Contenidos

- [Demo](#-demo)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características](#-características)
- [API REST](#-api-rest)
- [Consultas en MongoDB](#-consultas-en-mongodb)
- [Autor](#-autor)

---

## 🚀 Demo

Próximamente disponible en Vercel/Render...

---

## 🛠️ Tecnologías

### Frontend:
- React.js
- Axios
- TailwindCSS (o Bootstrap/CSS)

### Backend:
- Node.js
- Express
- Mongoose

### Base de datos:
- MongoDB (local o MongoDB Atlas)

---

## 🧰 Instalación

### Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/fullstack-products.git
cd fullstack-products
```

### 🔷 Frontend
```bash
cd frontend
npm install
npm start
```

### 🔶 Backend
```bash
cd backend
npm install
# Crea un archivo .env con tu conexión a MongoDB:
# MONGODB_URI=mongodb://localhost:27017/productsdb
npm run start
```

---

## 📁 Estructura del Proyecto

```
fullstack-products/
├── frontend/      → App en React
└── backend/       → API REST con Express y MongoDB
```

---

## ✅ Características

- Listado de productos (nombre, precio y categoría)
- Filtro por categoría
- Vista de detalle al hacer clic
- API RESTful completa (CRUD)
- Validaciones en Mongoose
- Consultas básicas en MongoDB

---

## 🔌 API REST

| Método | Ruta              | Descripción                      |
|--------|-------------------|----------------------------------|
| GET    | `/products`        | Obtener todos los productos      |
| GET    | `/products/:id`    | Obtener un producto por ID       |
| POST   | `/products`        | Crear un nuevo producto          |
| PUT    | `/products/:id`    | Actualizar un producto existente |
| DELETE | `/products/:id`    | Eliminar un producto             |

---

## 🧠 Consultas en MongoDB

```js
// 1. Productos de Tecnología
db.products.find({ category: "Tecnología" })

// 2. Productos con precio > 500
db.products.find({ price: { $gt: 500 } })

// 3. Actualizar precio de "Silla" a 130
db.products.updateOne({ name: "Silla" }, { $set: { price: 130 } })

// 4. Eliminar producto "Mesa"
db.products.deleteOne({ name: "Mesa" })
```

---

## 👨‍💻 Autor

**Evan092003**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [linkedin.com/in/tu-usuario](https://linkedin.com/in/tu-usuario)

---

## 📌 Notas

- Recuerda configurar tu archivo `.env` para el backend con la URI de MongoDB.
- Puedes desplegar el frontend con [Vercel](https://vercel.com) y el backend con [Render](https://render.com) o [Railway](https://railway.app).

---
