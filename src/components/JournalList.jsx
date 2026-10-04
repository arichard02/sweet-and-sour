function JournalList({ entries, onDeleteEntry }) {
  return (
    <section>
      <h2>My Journal</h2>

      {entries.map((entry) => (
        <article key={entry.id}>
          <h3>{entry.type === "sweet" ? "🍬 Sweet" : "🍋 Sour"}</h3>

           <p>{entry.date}</p>

          <p>{entry.text}</p>

           <button
            type="button"
            onClick={() => onDeleteEntry(entry.id)}
          >
            Delete
          </button>
          
        </article>
      ))}
    </section>
  );
}

export default JournalList;
