import { useState } from "react";
import Header from "./components/Header";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

function App() {
  const [journalEntries, setJournalEntries] = useState([]);

  function handleAddEntry(newEntry) {
    setJournalEntries((currentEntries) => [...currentEntries, newEntry]);
  }

  return (
    <main>
      <Header />

      <JournalForm onAddEntry={handleAddEntry} />

      <JournalList entries={journalEntries} />

      <p>Number of entries: {journalEntries.length}</p>
    </main>
  );
}

export default App;
