import React from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],

      newStudent: {
        name: "",
        subject: "",
        grade: "",
      },
    };
  }

  componentDidMount() {
    const mockStudents = [
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
      {
        id: 4,
        name: "jimmy carry",
        subject: "Mathematics",
        grade: 91,
        passed: true,
      },
    ];
    this.setState({
      student: mockStudents,
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    this.setState({
      newStudent: {
        ...this.state.newStudent,
        [name]: value,
      },
    });
  };

  handleAddChange = (e) => {
    e.preventDefault();

    const { name, subject, grade } = this.state.newStudent;

    if (!name.trim() || !subject || grade === "") {
      alert("Please enter all student details.");
      return;
    }

    const gradeNumber = Number(grade);

    if (!Number.isFinite(gradeNumber) || gradeNumber < 0 || gradeNumber > 100) {
      alert("Grade must be between 0 and 100.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      subject: subject,
      grade: gradeNumber,
      passed: gradeNumber >= 40,
    };

    this.setState({
      student: [...this.state.student, newStudent],

      newStudent: {
        name: "",
        subject: "",
        grade: "",
      },
    });
  };

  handleDeleteBtn = (id) => {
    this.setState({
      student: this.state.student.filter((student) => student.id !== id),
    });
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Student Grade Tracker</h1>
          <p>Class Component Design</p>
        </header>
        <section className="form">
          <StudentForm
            newStudent={this.state.newStudent} // for form
            handleChange={this.handleChange}
            handleAddChange={this.handleAddChange}
          />
        </section>
        <StudentList
          students={this.state.student}
          handleDeleteBtn={this.handleDeleteBtn}
        />
      </div>
    );
  }
}

export default App;
