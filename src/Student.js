import "./Student.css";

function Student({studentName,fruit}){          
    return(
        <div className="student-container">
            <h2>Hello {studentName}</h2>         
            <h5>You like {fruit}</h5>

            </div>
    )
}

export default Student
