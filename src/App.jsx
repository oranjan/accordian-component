import { useState } from "react";
import AccordianContent from "./AccordianContent";

function App() {
  const [isAccordHidden, setIsAccordHidden] = useState(
    {
    top:true,
    bottom:true
    }
    );

  const toggleTopAccordian = () => {
    setIsAccordHidden((prev) => {
      return { ...prev, top: !prev.top };
    });
  };

  const toggleBttomAccordian = () => {
    setIsAccordHidden((prev) => {
      return { ...prev, bottom: !prev.bottom };
    });
  };

  return (
    <>
      <div className="accordian">
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
      </div>
    </>
  );
}

export default App;
