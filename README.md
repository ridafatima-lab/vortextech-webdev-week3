# Task Manager — Week 3 (VortexTech Internship)

A React task manager built with `useState`, split into three components: `TaskInput`, `TaskList`, and `TaskItem`.

## Setup

1. Scaffold a new Vite project (skip if you already have one running):
   ```
   npm create vite@latest task-manager -- --template react
   cd task-manager
   npm install
   ```
2. Copy these files into your project, overwriting the defaults:
   - `src/App.jsx`
   - `src/App.css`
   - `src/main.jsx`
   - `src/index.css`
   - `src/components/TaskInput.jsx`
   - `src/components/TaskList.jsx`
   - `src/components/TaskItem.jsx`
3. Run it:
   ```
   npm run dev
   ```

## How it works

- **App.jsx** holds the single source of truth: `const [tasks, setTasks] = useState([])`. It owns `addTask`, `toggleTask`, and `deleteTask`, and passes them down as props.
- **TaskInput.jsx** is a controlled input (`value` tied to state via `onChange`). On submit it builds a new task object `{ id, text, completed: false }` and calls `onAddTask`.
- **TaskList.jsx** maps over `tasks` and renders a `TaskItem` for each, or an empty-state message if there are none.
- **TaskItem.jsx** renders one task with a checkbox (toggles `completed` immutably via `.map`) and a delete button (removes via `.filter`).
- Completed tasks get a `completed` class → CSS applies `text-decoration: line-through` — the task stays visible, it's just marked, per the spec.

## Before pushing to GitHub

Add a `.gitignore` in your project root (Vite's default scaffold already includes one, but if you started from scratch):
```
node_modules
dist
.env
```
Then:
```
git init
git add .
git commit -m "Week 3: React Task Manager"
git remote add origin <your-repo-url>
git push -u origin main
```
