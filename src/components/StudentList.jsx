import React from "react";
import StudentItem from "./StudentItem";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "All",
      sort: "asc",
    };
  }

  componentDidMount() {
    console.log("StudentList screen par aa gaya");
  }

  componentDidUpdate(prevProps) {
    console.log("StudentList update hua");

    if (prevProps.students !== this.props.students) {
      console.log("Students data change hua");
    }
  }

  componentWillUnmount() {
    console.log("StudentList screen se remove ho raha hai");
  }

  handleFilterChange = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleSortChange = (e) => {
    this.setState({
      sort: e.target.value,
    });
  };

  render() {
    const { students, handleDeleteBtn } = this.props;
    let filteredStudent = students.filter((student) => {
      if (this.state.filter === "passed") {
        return student.passed === true;
      }
      if (this.state.filter === "failed") {
        return student.passed === false;
      }
      return true;
    });

    filteredStudent.sort((a, b) => {
      if (this.state.sort === "asc") {
        return a.grade - b.grade;
      }
      return b.grade - a.grade;
    });

    return (
      <div className="renderList">
        <header className="list-header">
          <h1 className="list-title">Student List</h1>
          <div className="filters">
            <label htmlFor="filter" className="lab">
              Filter
            </label>
            <select
              name="filter"
              id="filter"
              value={this.state.filter}
              onChange={this.handleFilterChange}
              className="selt"
            >
              <option value="All" className="opt">
                All
              </option>
              <option value="passed" className="opt">
                Only Passed
              </option>
              <option value="failed" className="opt">
                Only Failed
              </option>
            </select>

            <label htmlFor="sort" className="lab">
              Sort
            </label>
            <select
              name="sort"
              id="sort"
              value={this.state.sort}
              onChange={this.handleSortChange}
              className="selt"
            >
              <option value="asc" className="opt">
                Grades (0-100)
              </option>
              <option value="desc" className="opt">
                Grades (100-0)
              </option>
            </select>
          </div>
        </header>
        <div className="students-item">
          {filteredStudent.map((student) => (
            <StudentItem
              key={student.id}
              student={student}
              handleDeleteBtn={handleDeleteBtn}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
