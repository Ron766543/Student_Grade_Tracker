import React from "react";
import StudentForm from "./components/StudentForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [
        {
          id: 1,
          name: "Alice Johson",
          subject: "Mathematics",
          grade: 92,
          passed: true,
        },
        {
          id: 2,
          name: "Maria cumins",
          subject: "Mathematics",
          grade: 78,
          passed: true,
        },
        {
          id: 3,
          name: "Alia Liberat",
          subject: "Mathematics",
          grade: 38,
          passed: false,
        },
      ],
      newStudent: {
        name: "",
        subject: "",
        grade: "",
      },
    };
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Student Grade Tracker</h1>
          <p>Class Component Design</p>
        </header>
        <section className="form">
          <StudentForm
            students={this.state.student} // show all 
            newStudent={this.state.newStudent} // for form
          />
        </section>
      </div>
    );
  }
}

export default App;
