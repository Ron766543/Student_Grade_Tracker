import React from "react";
import { User, BookText, Plus } from "lucide-react";

class StudentForm extends React.Component {
  render() {
    const { newStudent, handleChange, handleAddChange } = this.props;
    return (
      <div className="student-form">
        <h2>Add New Student</h2>
        <form className="add-student-form" onSubmit={handleAddChange}>
          <div className="form-group">
            <label htmlFor="studentName">Student Name:</label>
            <div className="input">
              <User size={22} strokeWidth={1.75} />
              <input
                type="text"
                id="studentName"
                name="name"
                value={newStudent.name}
                onChange={handleChange}
                placeholder="Enter Student's full name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="studentSubject">Subject:</label>
            <div className="input">
              <BookText size={22} strokeWidth={1.75} />
              <select
                name="subject"
                id="studentSubject"
                value={newStudent.subject}
                onChange={handleChange}
              >
                <option value="subject">Select a subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="English">English</option>
                <option value="History">History</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="studentGrade">Grade (0-100):</label>
            <input
              type="text"
              id="studentGrade"
              name="grade"
              value={newStudent.grade}
              onChange={handleChange}
              placeholder="Enter grade (0-100)"
              min="0"
              max="100"
            />
          </div>

          <button type="submit" className="submit-btn">
            <span>
              <Plus size={24} strokeWidth={1.75} />
            </span>
            <span>Add Student</span>
          </button>
        </form>
      </div>
    );
  }
}

export default StudentForm;
