# 📝 Redux Toolkit Todo App

A simple yet powerful **Todo List** application built with **React**, **Redux Toolkit**, and **Redux Persist** to manage, filter, and persist tasks in the browser.


---

## 🧩 Features

- ✅ Add, toggle, and delete todos  
- 🔁 Filter by **All**, **Active**, and **Completed**  
- 💾 Persistent data via `localStorage` using **Redux Persist**  
- ⚛️ Built with **React** and **Redux Toolkit** for scalable state management

---

## 🛠 Tech Stack

| Layer      | Tools & Libraries                                  |
|------------|----------------------------------------------------|
| **Frontend** | React, Tailwind CSS |
| **State**    | Redux Toolkit (`createSlice`, `configureStore`) :contentReference[oaicite:1]{index=1} |
| **Persistence** | Redux Persist (`localStorage`)    


---
                        
                        ## 🧱 Core Structure

- `src/app/store.js` — configures Redux store using `configureStore`
- `src/features/todo/todoSlice.js` — defines todos slice via `createSlice`
- `src/features/todo/TodoApp.jsx` — Todo component with add, toggle, delete, and filter logic
- `src/App.js` — wraps the app with `<Provider>` and configured store

---

## 🙌 Contributing

Contributions are welcome! If you’d like to:

- Fix bugs or add features
- Improve styling or UX
- Add tests or CI workflows

…please open a PR or issue. I'll review it ASAP 🙂

