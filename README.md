#  SignIn-SignUp API

A complete user authentication and authorization system built with **NestJS**, **MongoDB (Mongoose)**, **JWT**, and **bcrypt**.

---

##  Features

 User Registration (Sign Up)
 User Login (Sign In) with JWT token
 Protected Routes using `AuthGuard`
 Get Current Authenticated User
 Update and Delete Account (only by the logged-in user)
 Password hashing with `bcrypt`
 MongoDB integration with `mongoose`
 Unit and E2E testing support

---

##  Tech Stack

- **NestJS** - Node.js framework for scalable backend
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Token for authentication
- **bcrypt** - Password hashing
- **class-validator** - DTO validation
- **dotenv** - Environment configuration

---

##  Getting Started

### 1. Clone the project


git clone https://github.com/Bachidze/Sign-In-Sing-Up-NestJS-.git
npm i
MONGO_URI= here your mongo uri
JWT_SECRET=bachidze


npm run start:dev


Endpoint: POST /auth/sign-up


{
  "fullName": "giorgi bachidze",
  "email": "bachidze90@gmail.com",
  "password": "test123444"
}

it will response like that 

{
  "message": "user created successfully"
}


Endpoint: POST /auth/sign-in

follow same

{
  "email": "bachidze90@gmail.com",
  "password": "test123444"
}

it gives JTW Token

{
  "accessToken": "Jwtt"
}


Endpoint: GET /auth/current-user

dot forget follow generated token in Authorization

if you pass everything correct it returns:

{
  "_id": "user_id",
 "email": "bachidze90@gmail.com",
  "password": "hashedpass",
  "createdAt": "...",
  "updatedAt": "..."
}


## GEORGIAN

სრულყოფილი ავტორიზაციის და ავთენტიფიკაციის სისტემა, რომელიც აგებულია NestJS, MongoDB (Mongoose), JWT და bcrypt ტექნოლოგიებზე.


ფუნქციონალი

მომხმარებლის რეგისტრაცია (Sign Up)

ავტორიზაცია (Sign In) JWT ტოკენით

დაცული როუტები AuthGuard-ით

მიმდინარე ავტორიზებული მომხმარებლის მიღება

მხოლოდ ავტორიზებული მომხმარებლის მიერ ანგარიშის განახლება ან წაშლა

პაროლის დაჰეშვა bcrypt-ით

MongoDB ინტეგრაცია mongoose-ის გამოყენებით

ერთეულური და E2E ტესტირების მხარდაჭერა



ტექნოლოგიები

NestJS – მძლავრი Node.js ფრეიმვორკი

Mongoose – MongoDB-ისთვის ODM ბიბლიოთეკა

JWT – ავტორიზაციისთვის JSON Web Token

bcrypt – პაროლის დაცული ჰეშირება

class-validator – DTO ვალიდაციისთვის

dotenv – გარემოს ცვლადების კონფიგურაცია



დაწყება

git clone https://github.com/Bachidze/Sign-In-Sing-Up-NestJS-.git
npm i


MONGO_URI= აქ ჩაწერეთ თქვენი MongoDB ბმული
JWT_SECRET=bachidze


npm run start:dev


POST /auth/sign-up

{
  "fullName": "giorgi bachidze",
  "email": "bachidze90@gmail.com",
  "password": "test123444"
}


{
  "message": "user created successfully"
}



POST /auth/sign-in

{
  "email": "bachidze90@gmail.com",
  "password": "test123444"
}

{
  "accessToken": "Jwtt"
}


GET /auth/current-user

არ დაგავიწყდეთ თუ გინდათ რომ მიიღოთ ამჟამინდელი უზერი ავტორიზაციის ველში უნდა გაატანოთ ის JWT ტოკენი რომელიც დააგენერირეთ


{
  "_id": "user_id",
  "email": "bachidze90@gmail.com",
  "password": "hashedpass",
  "createdAt": "...",
  "updatedAt": "..."
}