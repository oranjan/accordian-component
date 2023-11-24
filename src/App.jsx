import Question from "./Question.jsx"

function App() {
  const questions = [
    {
      id: 1,
      title: "what is this ?",
      info: "This is a accordian component in React ",
    },
    {
      id: 2,
      title: "What is your name ?",
      info: "My name is Ranjan Mehta",
    },
  ];

  return (
    <section>
      <h1> Accordian /Faq Component</h1>
      <h2>questions and answers</h2>

      <div className="main">
        {questions.map((question) => {
          return <Question question={question} key={question.id} />;
        })}
      </div>
      
      {/* <div className="accordian">
        <h4>
          accordian top
          <button onClick={toggleTopAccordian}>
            {isAccordHidden.top ? "⬇️" : "🆙"}
          </button>
        </h4>
        {isAccordHidden.top ? "" : <AccordianContent />}
      </div>
      <div className="accordian">
        <h4>
          accordian bottom
          <button onClick={toggleBttomAccordian}>
            {isAccordHidden.bottom ? "⬇️" : "🆙"}
          </button>
        </h4>
        {isAccordHidden.bottom ? "" : <AccordianContent />}
      </div> */}
    </section>
  );
}

export default App;
