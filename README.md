# 🎓 Student Grade Tracker

A small **React** app built entirely with **Class-Based Components**. It lets you add students with a subject and grade, automatically marks them as **Passed** or **Failed**, and lets you filter, sort and remove students.

This project is a hands-on example for learning:

- React **Class Components** (`extends React.Component`)
- `this.state` and `this.setState()`
- **Props** and passing handler functions from parent to child
- The **Component Lifecycle** (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)

---

## ✨ Features

- ➕ Add a new student (name, subject, grade)
- ✅ Auto Pass/Fail result (grade **≥ 40** = Passed)
- 🔍 Filter the list: All / Only Passed / Only Failed
- ↕️ Sort by grade: low → high or high → low
- 🗑️ Remove a student
- 📱 Responsive layout (desktop, tablet, mobile)
- 🎨 Icons from [`lucide-react`](https://lucide.dev)

---

## 🛠️ Tech Stack

| Technology | Purpose |
| ---------- | ------- |
| React | UI library (class components) |
| Vite | Fast dev server and build tool |
| lucide-react | Icons |
| CSS3 | Styling (Flexbox, Grid, media queries) |

---

## 📁 Project Structure

```
students-grade-tracker
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── StudentForm.jsx    # Form to add a student
│   │   ├── StudentItem.jsx    # Single student card
│   │   └── StudentList.jsx    # List + filter + sort (uses lifecycle methods)
│   ├── App.css
│   ├── App.jsx                # Root class component (holds the main state)
│   ├── index.css              # All app styling
│   └── main.jsx               # Entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

### 1. Open the project folder

```bash
cd students-grade-tracker
```

### 2. Install dependencies

```bash
npm i
```

> If `lucide-react` is not installed automatically, run:
>
> ```bash
> npm i lucide-react
> ```

### 3. Run the development server

```bash
npm run dev
```

You will see something like this in the terminal:

```
  VITE v7.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

### 4. Open it in the browser

Hold **Ctrl** and click the link, or open **http://localhost:5173/** manually. 🎉

### Other useful commands

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🧩 Component Overview (Class-Based)

```
App  (state: student[], newStudent)
 ├── StudentForm   (props: newStudent, handleChange, handleAddChange)
 └── StudentList   (props: students, handleDeleteBtn | state: filter, sort)
      └── StudentItem  (props: student, handleDeleteBtn)
```

### `App.jsx` — Parent / Container

- Holds the **main state**:
  - `student` → array of all students
  - `newStudent` → current values typed in the form
- Contains the handlers:
  - `handleChange` → updates `newStudent` as you type
  - `handleAddChange` → validates the form, creates a student, adds to the list
  - `handleDeleteBtn` → removes a student by `id`
- Passes data and functions down to children using **props**.

### `StudentForm.jsx` — Controlled Form

- A **controlled component**: every input's `value` comes from `newStudent` and updates through `onChange`.
- Receives `newStudent`, `handleChange` and `handleAddChange` as props.

### `StudentList.jsx` — List with its own state

- Has its **own local state**: `filter` ("All" / "passed" / "failed") and `sort` ("asc" / "desc").
- Filters and sorts the students before rendering.
- Uses **lifecycle methods** (see below).

### `StudentItem.jsx` — Presentational Card

- Shows one student's name, subject, grade and Pass/Fail badge.
- Calls `handleDeleteBtn(student.id)` when **Remove** is clicked.

---

## 🔄 Class Component Lifecycle

Every class component goes through three main phases:

```
 MOUNTING            UPDATING                 UNMOUNTING
 ────────            ────────                 ──────────
 constructor()       (props or state change)  componentWillUnmount()
 render()            render()
 componentDidMount() componentDidUpdate()
```

| Phase | Method | When it runs | Common use |
| ----- | ------ | ------------ | ---------- |
| **Mounting** | `constructor()` | Once, when the component is created | Set initial `state`, bind methods |
| | `render()` | On mount and every update | Return the JSX to display |
| | `componentDidMount()` | Once, right after the first render | API calls, timers, subscriptions |
| **Updating** | `render()` | When `state` or `props` change | Re-draw the UI |
| | `componentDidUpdate(prevProps, prevState)` | After every update | React to changes by comparing previous and current values |
| **Unmounting** | `componentWillUnmount()` | Just before the component is removed | Clean up timers, listeners, subscriptions |

### Lifecycle used in this project (`StudentList.jsx`)

```jsx
componentDidMount() {
  console.log("StudentList screen par aa gaya");          // runs once on first display
}

componentDidUpdate(prevProps) {
  console.log("StudentList update hua");                  // runs after every update

  if (prevProps.students !== this.props.students) {
    console.log("Students data change hua");              // runs only when students list changes
  }
}

componentWillUnmount() {
  console.log("StudentList screen se remove ho raha hai"); // runs when removed from the screen
}
```

### 👀 See the lifecycle in action

1. Run `npm run dev` and open the app.
2. Open browser DevTools → **Console** (press `F12`).
3. Try these and watch the logs:

| Action | Console output |
| ------ | -------------- |
| Page loads | `StudentList screen par aa gaya` |
| Change the Filter or Sort dropdown | `StudentList update hua` |
| Add a student | `StudentList update hua` and `Students data change hua` |
| Click **Remove** on a student | `StudentList update hua` and `Students data change hua` |

> 💡 **Tip:** The app runs in React `<StrictMode>` (see `main.jsx`). In development, React intentionally mounts components twice to help find bugs, so you may see the *mount* log appear twice. This does **not** happen in production.

---

## 🧠 Key Concepts Demonstrated

### 1. State with `this.setState()`

```jsx
this.setState({
  student: [...this.state.student, newStudent],
});
```

State must never be changed directly (`this.state.x = ...`). Always use `setState`, which triggers a re-render.

### 2. Class property arrow functions (no manual binding)

```jsx
handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ newStudent: { ...this.state.newStudent, [name]: value } });
};
```

Arrow functions keep `this` pointing at the component, so there is no need for `this.handleChange = this.handleChange.bind(this)`.

### 3. Props (parent → child)

```jsx
<StudentList students={this.state.student} handleDeleteBtn={this.handleDeleteBtn} />
```

### 4. Lifting state up

The students array lives in `App`, so both the form (adds) and the list (shows/removes) work on the same data.

### 5. Controlled components

Form inputs get their value from state and update it on every change, so React is the single source of truth.

### 6. Conditional rendering and dynamic class names

```jsx
<span className={`status ${student.passed ? "status-passed" : "status-failed"}`}>
  {student.passed ? "PASSED" : "FAILED"}
</span>
```

### 7. Rendering lists with `key`

```jsx
{filteredStudent.map((student) => (
  <StudentItem key={student.id} student={student} handleDeleteBtn={handleDeleteBtn} />
))}
```

---

## 📝 How to Use the App

1. Enter the **student's name**.
2. Choose a **subject** from the dropdown.
3. Enter a **grade** between 0 and 100.
4. Click **Add Student**.
5. Use **Filter** to show All / Only Passed / Only Failed.
6. Use **Sort** to order by grade ascending or descending.
7. Click **Remove** to delete a student.

**Pass mark:** a grade of `40` or above is **Passed**, below 40 is **Failed**.

---

## 🐞 Known Issues and Improvement Ideas

These are good practice tasks for learners:

- [ ] Add an **edit** feature for students.
- [ ] Save data to **localStorage** using `componentDidMount` (load) and `componentDidUpdate` (save).
- [ ] Fetch initial data from an API inside `componentDidMount`.
- [ ] Add **PropTypes** for props validation.
- [ ] Convert the project to **functional components + hooks** and compare (`useState`, `useEffect`).

---

## 🔁 Class Lifecycle vs Hooks (Quick Comparison)

| Class Component | Functional Component (Hooks) |
| --------------- | ---------------------------- |
| `this.state` / `this.setState()` | `useState()` |
| `componentDidMount()` | `useEffect(() => {...}, [])` |
| `componentDidUpdate()` | `useEffect(() => {...}, [dependency])` |
| `componentWillUnmount()` | cleanup function returned from `useEffect` |

---

## 📚 Learn More

- [React Docs](https://react.dev)
- [React Class Component Reference](https://react.dev/reference/react/Component)
- [Vite Docs](https://vite.dev)
- [Lucide Icons](https://lucide.dev)

---

## 👨‍💻 Author

Built for learning **React Class-Based Components and Lifecycle Methods**.

Happy coding! 🚀
