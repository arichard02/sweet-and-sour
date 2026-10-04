import { useState } from "react";

function JournalForm({ onAddEntry }) {
  const [entryType, setEntryType] = useState("");
  const [entryText, setEntryText] = useState("");

  function handleSubmit(event) {
  event.preventDefault();

  if (!entryType || !entryText.trim()) {
    return;
  }

  const newEntry = {
    id: Date.now(),
    type: entryType,
    text: entryText.trim(),
  };

  onAddEntry(newEntry);


  setEntryType("");
  setEntryText("");

}

  return (
  
    <section>
      {" "}
      <h2>How was your day?</h2>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <div>
          {" "}
          <label>
            {" "}
            <input
              type="radio"
              name="entryType"
              value="sweet"
              onChange={(event) => setEntryType(event.target.value)}
            />{" "}
            🍬 Sweet{" "}
          </label>{" "}
          <label>
            {" "}
            <input
              type="radio"
              name="entryType"
              value="sour"
              onChange={(event) => setEntryType(event.target.value)}
            />{" "}
            🍋 Sour{" "}
          </label>{" "}
        </div>{" "}
        <div>
          {" "}
          <label htmlFor="entryText">What happened?</label>{" "}
          <textarea
            id="entryText"
            placeholder="Write about your day..."
            value={entryText}
            onChange={(event) => setEntryText(event.target.value)}
          ></textarea>
        </div>{" "}
        <button type="submit">Add Entry</button>
      </form>{" "}
    </section>
  );
}
export default JournalForm;
