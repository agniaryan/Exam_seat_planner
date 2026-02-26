# College Exam Seat Planner

## 📌 Objective
This project is developed as part of Round-2 Assignment.

The application allocates classrooms for exams using:
- Minimum number of rooms
- Preference to lower floor classrooms

---

## 🚀 Features

### 1️⃣ Add Classroom
- Room ID
- Capacity
- Floor Number
- Near Washroom (true/false)

### 2️⃣ View All Classrooms
Displays all added classrooms in a structured table format.

### 3️⃣ Allocate Exam Seats
- Takes total number of students as input
- Allocates minimum number of classrooms
- Prioritizes lower floors
- Displays selected rooms
- Shows error if seats are insufficient

---

## 🧠 Greedy Allocation Logic

1. Sort classrooms by:
   - Floor number (Ascending)
   - Capacity (Descending for same floor)
2. Select classrooms one by one
3. Stop when total capacity >= total students
4. If capacity is insufficient → display error message

---

## 🛠 Tech Stack
- React JS
- CSS
- Deployed on Vercel

---

## 🌐 Live Deployment URL
https://quiet-cassata-8d13e2.netlify.app/

---

## 📂 GitHub Repository
https://github.com/agniaryan/Exam_seat_planner

---

## 📸 Demo
2-minute demo video submitted separately.

---

## ✅ Evaluation Criteria Covered
✔ Functionality  
✔ Greedy Logic  
✔ UI Implementation  
✔ Error Handling  
✔ Clean Code Structure  
✔ Public Deployment  

---

## 👨‍💻 Author
Aryan Agnihotri
B.Tech CSE | Full Stack Developer (Aspiring)
