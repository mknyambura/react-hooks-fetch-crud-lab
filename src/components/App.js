import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  function questionUpdate(updateQuestions){
    setQuestions(updateQuestions)
  }

  function addQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(id){
    const updateQuestions = questions.filter(question => question.id !== id)
    setQuestions(updateQuestions)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
                            questions={questions} 
                            setQuestions={setQuestions} 
                            addQuestion={addQuestion}
                          /> : 
                          <QuestionList 
                            questions={questions} 
                            setQuestions={setQuestions} 
                            deleteQuestion={deleteQuestion} 
                            questionUpdate={questionUpdate}
                          />
      }
    </main>
  );
}

export default App;
