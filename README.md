#  Ratings & Reviews System

A simple full-stack application that allows users to submit and view product ratings and reviews. Built with **React**, **Node.js**, **Express**, **PostgreSQL**, and **Prisma ORM**.

---

##  Live Links

- **Frontend**: [https://fitpage-zeta.vercel.app](https://fitpage-zeta.vercel.app)
- **Backend API**: [https://fitpage-uopt.onrender.com](https://fitpage-uopt.onrender.com)

---

##  Postman API Testing

The backend was thoroughly tested using **Postman**. Each endpoint was verified and screenshots of all successful requests and responses have been taken for validation.

![Screenshot From 2025-06-18 01-43-07](https://github.com/user-attachments/assets/242b94f1-4ae6-4997-a8b6-eff6dbfa39ab)
![Screenshot From 2025-06-18 01-46-07](https://github.com/user-attachments/assets/09c1679c-0650-4d0d-acf3-b58dd90600f1)
![Screenshot From 2025-06-18 01-45-42](https://github.com/user-attachments/assets/1fe797a5-d99d-4a32-bf3c-e4959b7e2e15)
![Screenshot From 2025-06-18 01-43-56](https://github.com/user-attachments/assets/3f8f2fdb-48f0-4a49-b0d9-6e6925197104)
![Screenshot From 2025-06-18 01-43-30](https://github.com/user-attachments/assets/b36c4fcd-7898-4cb2-ae64-1afc24dd967e)


---

##  Deployment Overview

- **Frontend** deployed on [**Vercel**](https://vercel.com)
- **Backend** deployed on [**Render**](https://render.com)
- **Database** used: [**PostgreSQL on Render**](https://render.com)
- **ORM**: Prisma for schema and migration management

---

##  Features Implemented

- Add and view **products**
- Submit and fetch **reviews**
- Connects to **PostgreSQL** database
- Proper **API response structure** and **error handling**
- **Responsive UI** built using React

---

##  Tech Stack

| Frontend        | Backend          | Database     | Deployment      |
|----------------|------------------|--------------|-----------------|
| React.js       | Node.js, Express | PostgreSQL   | Vercel (Frontend)<br>Render (Backend + DB) |
| Axios          | Prisma ORM       |              |                 |

---

##  Folder Structure
![image](https://github.com/user-attachments/assets/4485236b-fe58-4050-9c79-e845acec6639)



---

## 📄 Environment Variables

Add the following in Render (Backend):

```env
DATABASE_URL=postgresql://<your-database-url>?sslmode=require

```
- Prisma CLI was used to generate client and apply DB migrations:

   npx prisma generate

   npx prisma migrate deploy

- Backend is started using:
  
   node server.js



