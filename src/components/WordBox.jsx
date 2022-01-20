import React, { useState, useEffect } from "react";

function WordBox(props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(false);
  }, [props.redo]);
  const handleClick = (val) => {
    props.addValue(props.word);
    setSelected(true);
  };
  return (
    <div
      className={
        selected
          ? "wordBox selectable mr-2 my-1 px-3 py-3 d-flex shadow selected"
          : "wordBox selectable mr-2 my-1 px-3 py-3 d-flex shadow"
      }
      data-testid="wordButton"
      key={props.index}
      onClick={!selected ? () => handleClick(props.word) : null}
    >
      <h4>{props.word}</h4>
    </div>
  );
}

export default WordBox;
