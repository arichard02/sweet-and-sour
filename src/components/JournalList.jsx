function JournalList({ entries }) {
  return (
    <section>
      <h2>My Journal</h2>

      {entries.map((entry) => (
        <article key={entry.id}>
          <h3>{entry.type === "sweet" ? "🍬 Sweet" : "🍋 Sour"}</h3>

          <p>{entry.text}</p>
        </article>
      ))}
    </section>
  );
}

export default JournalList;
