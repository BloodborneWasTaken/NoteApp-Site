import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [search, setSearch] = useState("");
  const [selectedNote, setSelectedNote] = useState(notes);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // اعمال دارک مود
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const fillteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  const updateNoteHandller = (updatedNote) => {
    const newNotes = notes.map((singleNote) =>
      singleNote.id === updatedNote.id ? updatedNote : singleNote,
    );
    setNotes(newNotes);
  };

  const deleteNoteHandller = (id) => {
    const newNotes = notes.filter((singleNote) => singleNote.id !== id);
    setNotes(newNotes);

    if (selectedNote?.id === id) {
      if (newNotes.length > 0) {
        setSelectedNote(newNotes[0]);
      } else {
        setSelectedNote("");
      }
    }
  };

  const createNoteHandller = () => {
    const now = new Date();

    const newNote = {
      id: Date.now(),
      title: "یادداشت جدید",
      snippet: "",
      category: "دسته",
      date: new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(now),
    };

    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setSelectedNote(newNote.id);
  };

  return (
    <div
      className={`font-normal flex ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-slate-100 text-black"
      }`}
    >
      <div>
        <Sidebar theme={theme} />
      </div>

      <div className="flex-1">
        <Header
          note={selectedNote}
          onDelete={deleteNoteHandller}
          notes={fillteredNotes}
          setNotes={setNotes}
          onSelect={setSelectedNote}
          selected={selectedNote}
          onSave={updateNoteHandller}
          onCreate={createNoteHandller}
          search={search}
          setSearch={setSearch}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </div>
  );
}

export default App;
