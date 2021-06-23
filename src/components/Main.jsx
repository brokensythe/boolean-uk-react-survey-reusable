import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList"

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} />
      </section>
      <section className="main__form">
        <Form answers={answers} setAnswers={setAnswers} />
      </section>
    </main>
  );
}

export default Main;
