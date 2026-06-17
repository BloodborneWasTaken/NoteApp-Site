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

  const updateNote = (updatedNote) => {
    const newNotes = notes.map((singleNote) =>
      singleNote.id === updatedNote.id ? updatedNote : singleNote,
    );
    setNotes(() => newNotes);
  };

  const deleteNote = (id) => {
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

  return (
    <div className="font-normal bg-[#b2b2b236] flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header
          note={selectedNote}
          onDelete={deleteNote}
          notes={notes}
          setNotes={setNotes}
          onSelect={setSelectedNote}
          selected={selectedNote}
          onSave={updateNote}
        />
      </div>
    </div>
  );
}

export default App;
