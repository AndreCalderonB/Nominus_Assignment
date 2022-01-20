import React, { useState, useEffect } from "react";
import WordBox from "../components/WordBox";
import Redo from "../assets/img/Redo.png";
function Excercise(props) {
  const [answer, setAnswer] = useState([]);
  const [words, setWords] = useState();
  const [redo, setRedo] = useState();
  const shuffleArray = (arr) => {
    let i = arr.length;
    while (i > 0) {
      let randomPos = Math.floor(Math.random() * i);
      i--;
      let ref = arr[i];
      arr[i] = arr[randomPos];
      arr[randomPos] = ref;
    }
    return arr;
  };
  useEffect(() => {
    let wordsArr = props.solution.split(" ");
    setWords(shuffleArray(wordsArr));
  }, [props]);
  const addValue = (val) => {
    let temp = [...answer];
    temp.push(val);
    setAnswer(temp);
  };
  const handleRedo = () => {
    setAnswer([]);
    setRedo(!redo);
  };
  if (!words) {
    return <></>;
  } else {
    return (
      <div data-testid="excercise" className="row excercise mx-0 pl-0 pr-0">
        <div className="col-12 col-md-6 d-flex excercise-left pl-0">
          <div className="excerciseText">
            <h4>{props.title}</h4>
            <br />
            <p>{props.text}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex d-col excercise-right">
          <div className="solutionContainer">
            <div className="row mx-0 w-100">
              <div className="col-2 col-md-1 offset-11 py-3">
                <img
                  src={Redo}
                  className="img-100 redo selectable"
                  onClick={() => handleRedo()}
                  alt=""
                />
              </div>
            </div>

            <div className="row mx-0 excerciseSolution px-4 py-4 shadow w-100 d-flex">
              {answer.length > 0 && <p data-testid="answer" className={answer.length === props.solution.split(" ").length ? (answer.join(" ") === props.solution ? "correct" : "wrong") : ""}>{answer.join(" ")}</p>}
            </div>
            <br />
            <div className="excerciseInput d-flex">
              {words.map((w, index) => {
                return (
                  <WordBox
                    className=""
                    key={index}
                    redo={redo}
                    word={w}
                    addValue={addValue}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Excercise;
