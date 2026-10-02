import React from "react";

class StudentItem extends React.Component {
  render() {
    const { student, handleDeleteBtn } = this.props;
    return (
      <div className="student-item">
        <h2 className="name">{student.name}</h2>
        <h2>Subject: {student.subject}</h2>
        <h2 className={`grade ${student.grade >= 40 ? "Passed" : "failed"}`}>
          Grade: {student.grade}%
        </h2>
        <div className="student-status">
          <span
            className={`status ${student.passed ? "status-passed" : "status-failed"}`}
          >
            {student.passed ? "PASSED" : "FAILED"}
          </span>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={() => handleDeleteBtn(student.id)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default StudentItem;
