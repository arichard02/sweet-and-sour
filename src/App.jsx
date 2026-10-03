import { useState } from "react";
import Header from "./components/Header";
import JournalForm from "./components/JournalForm";

function App() {
  const [journalEntries, setJournalEntries] = useState([]);

  function handleAddEntry(newEntry) {
    setJournalEntries((currentEntries) => [...currentEntries, newEntry]);
  }

  return (
    <main>
      <Header />

      <JournalForm onAddEntry={handleAddEntry} />

      <p>Number of entries: {journalEntries.length}</p>
    </main>
  );
}

export default App;
