# SkillSwap – A Local Skill Exchange Platform



SkillSwap is a modern, clean, and user-friendly skill-exchange platform where individuals can offer, learn, and trade skills within their local community. Users can browse skill listings, view provider details, book sessions, manage their profiles, and securely authenticate using Firebase.



This project maintains SPA behavior, uses protected routes, supports Google login, includes responsive design, and is deployed on Netlify.



---



## 🚀 Live Demo

🔗 Live Website: https://assignment-9auth.web.app/ 

🔗 GitHub Repository: https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-9.git  



---



## 📌 Project Overview

SkillSwap connects learners with local skill providers offering lessons such as guitar training, spoken English practice, coding help, yoga, and more.  

Includes Firebase authentication, secure environment variables, smooth routing, modern UI, and animations.



---



## ✨ Core Features



### 1. Skill Listings

- Minimum 6 skill objects stored in JSON

- Each skill card displays image, name, price, rating

- "View Details" button

- Fully responsive grid



### 2. Authentication

- Email & Password Login

- Signup with Name, Email, Photo URL, Password

- Google Login (Social Login)

- Password validation:

  - At least 6 characters  

  - At least 1 uppercase  

  - At least 1 lowercase  

- Eye toggle button for password visibility

- Error messages using react-hot-toast



### 3. Protected Routes

- Skill Details page is protected

- If user not logged in → redirected to login

- After login → redirected back to intended page



### 4. Skill Details Page

- Shows all info from JSON:

  - Skill name, provider, price, rating, description, category, slots, image

- Booking form:

  - Name  

  - Email  

  - Submit → success toast  

- Form resets afterwards



### 5. My Profile Page

- Shows:

  - User Name  

  - User Email  

  - User Image  

- Update Profile feature using updateProfile()

- User can update Name & Photo



### 6. Forgot Password

- Separate forgot password route

- Email auto-fills if entered on login page

- Reset button → redirects user to Gmail



### 7. Homepage Sections

- Hero Slider (Swiper)

- Popular Skills section

- Top Rated Providers

- How It Works

- Extra relevant section included



### 8. Fully Responsive

- Mobile, tablet, desktop optimized

- Clean minimalist UI

- Smooth animations using AOS & Swiper.js



---



## 🛠️ Tech Stack



### Frontend

- React 19

- React Router 7

- Tailwind CSS 4

- Swiper.js

- AOS Animation

- React Icons

- React Hot Toast



### Authentication

- Firebase Authentication



### Hosting

- Netlify



### Environment Variables

- Firebase configuration stored in `.env`



---



## 📦 Dependencies Used

```json

{  

  "@tailwindcss/vite": "^4.1.15",  

  "aos": "^2.3.4",  

  "firebase": "^12.4.0",  

  "react": "^19.1.1",  

  "react-dom": "^19.1.1",  

  "react-hot-toast": "^2.6.0",  

  "react-icons": "^5.5.0",  

  "react-router": "^7.9.4",  

  "swiper": "^12.0.3",  

  "tailwindcss": "^4.1.15"  

}

```

---



## 🧪 Run This Project Locally



### 1. Clone Repository

```bash

git clone https://github.com/mohammad-aftab-hossain-mozumder/ASSIGNMENT-9.git  

cd ASSIGNMENT-9  

npm install

```



### 2. Create `.env` File

```env

VITE_apiKey= 

VITE_authDomain=  

VITE_projectId= 

VITE_storageBucket=

VITE_messagingSenderId=  

VITE_appId=

```



### 3. Start Development Server



```bash

npm run dev

```



---



## 📄 Requirements Completed

✔ SPA with no reload errors  

✔ Firebase Auth (login, signup, Google login)  

✔ Protected routes  

✔ Profile update feature  

✔ Forgot password system  

✔ 6+ JSON skill data  

✔ Responsive UI  

✔ Animations added  

✔ 10+ meaningful GitHub commits  

✔ Hosted on Netlify  



---



## ⭐ Thank You!

If you find this project helpful, feel free to star the repository.