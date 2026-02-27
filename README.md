# 📝 ToDo List App

A clean and responsive **To-Do List Web Application** built using **HTML, CSS, and JavaScript**.  
Tasks are stored in the browser using **LocalStorage**, so they remain saved even after refreshing the page.

---

## 🚀 Features

- ✅ Add new tasks  
- ✅ Mark tasks as completed  
- ✅ Edit tasks (double-click to edit)  
- ✅ Delete tasks  
- ✅ Persistent storage using LocalStorage  
- ✅ Smooth animations  
- ✅ Responsive design  
- ✅ Modern glassmorphism UI  

---

## 🛠️ Built With

- HTML5  
- CSS3  
- JavaScript (ES6)    

---

## 📂 Project Structure

To-Do-List/
│
├── images
├── index.html
├── style.css
├── script.js
└── README.md

---

## 📸 Screenshots

<p align="center">
  <img src="images/HomePage.png" width="250" /><br/>
  <b>Home Page Interface</b>
</p>

<p align="center">
  <img src="images/TaskAdded.png" width="250" /><br/>
  <b>Add Task Interface</b>
</p>

<p align="center">
  <img src="images/TaskCompleted.png" width="250" /><br/>
  <b>Completed Task View</b>
</p>

---

## ⚙️ How It Works

### 1️⃣ Adding a Task
- User types a task into the input field.
- Clicks the **Add** button.
- The task is added to the `todos` array.
- The list re-renders.
- Data is saved to LocalStorage.

### 2️⃣ Completing a Task
- Clicking the checkbox updates the `completed` property.
- A strike-through style is applied.
- Changes are saved automatically.

### 3️⃣ Editing a Task
- Double-click on the task text.
- A prompt appears.
- Updated text is saved.

### 4️⃣ Deleting a Task
- Click the Delete button.
- Task is removed using `splice()`.
- List re-renders.
- LocalStorage updates.

---

👨‍💻 Author

Designed & Developed by:
**Sutanjoy Bhattacharjee**
