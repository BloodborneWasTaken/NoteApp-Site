import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "ایده پروژه",
      snippet: "ساخت یک اپ مدیریت یادداشت با ReactوTailwind",
      content: "متن کامل یادداشت...",
      category: "ایده",
      date: "1403/09/12",
      isPinned: true,
    },
    {
      id: 2,
      title: "مطالب کلاس",
      snippet: "آموزش props,state,React",
      content: "جزئیات یادداشت...",
      category: "آموزش",
      date: "1403/09/10",
      isPinned: false,
    },
    {
      id: 3,
      title: "لیست",
      snippet: "اماده سازی تمرین برای دانشجو ها",
      content: "جزئیات یادداشت...",
      category: "کار",
      date: "1403/09/9",
      isPinned: false,
    },
  ]);
  const [selectedNote, setSelectedNote] = useState(notes);

  const updateNoteHandller = (updatedNote) => {
    const newNotes = notes.map((singleNote) =>
      singleNote.id === updatedNote.id ? updatedNote : singleNote,
    );
    setNotes(() => newNotes);
  };

  const deleteNoteHandller = (id) => {
    const newNotes = notes.filter((singleNote) => singleNote.id !== id);
    setNotes(() => newNotes);
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
      id: Date.now,
      title: "یادداشت جدید",
      snippet: "",
      category: "عمومی",
      date: new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(now),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setSelectedNote(newNote.id)
  };

  return (
    <div className="font-normal bg-[#b2b2b236] flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header
          note={selectedNote}
          onDelete={deleteNoteHandller}
          notes={notes}
          setNotes={setNotes}
          onSelect={setSelectedNote}
          selected={selectedNote}
          onSave={updateNoteHandller}
          onCreate={createNoteHandller}
        />
      </div>
    </div>
  );
}

export default App;
