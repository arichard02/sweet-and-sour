import { useEffect, useState } from "react";
import Header from "./components/Header";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

function App() {
  const [journalEntries, setJournalEntries] = useState(() => {
    const savedEntries = localStorage.getItem("journalEntries");

    return savedEntries ? JSON.parse(savedEntries) : [];
  });


function handleAddEntry(newEntry) {
  setJournalEntries((currentEntries) => [
    ...currentEntries,
    newEntry,
  ]);
}

function handleDeleteEntry(entryId) {
  setJournalEntries((currentEntries) =>
    currentEntries.filter((entry) => entry.id !== entryId)
  );
}


  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
  }, [journalEntries]);

  return (
    <main>
      <Header />

      <JournalForm onAddEntry={handleAddEntry} />

      <JournalList
  entries={journalEntries}
  onDeleteEntry={handleDeleteEntry}
/>

      <p>Number of entries: {journalEntries.length}</p>
    </main>
  );
}

export default App;
