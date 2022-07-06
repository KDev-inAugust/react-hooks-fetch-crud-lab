import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then(res=>res.json())
  .then(data=>setQuestions(data))

},[])

function onDeleteClick(deletedQuestion){
  const update = questions.filter((index)=>index.id !==deletedQuestion.id);
  setQuestions(update);
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((index)=>{
        return (<QuestionItem question={index} onDeleteItem={onDeleteClick}/>)
      })}</ul>
    </section>
  );
}

export default QuestionList;
