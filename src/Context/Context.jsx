import { createContext, useEffect, useReducer } from "react";

export const NoteContext = createContext();

const initialState = {
  notes: [],
  selectedNote: null,
  search: "",
  category: "all",
  theme: "light",
};

function noteReducer(state, action) {
  switch (action.type) {
    case "INIT_NOTES":
      return {
        ...state,
        notes: action.payload,
        selectedNote: action.payload || null,
      };

    case "CREATE_NOTE":
      const now = new Date();

      const newNote = {
        id: Date.now(),
        title: "یادداشت جدید",
        content: "",
        category: "عمومی",
        date: new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(now),
      };

      return {
        ...state,
        notes: [newNote, ...state.notes],
      };

    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((singleNote) =>
          singleNote === action.payload ? action.payload : singleNote,
        ),
      };

    case "DELETE_NOTE":
      const newNotes = state.notes.filter((note) => note.id !== action.payload);

      return {
        ...state,
        notes: newNotes,
        selectedNote: newNotes[0] || null,
      };

    case "SELECT_NOTE":
      return {
        ...state,
        selectedNote: action.payload,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };

    default:
      return state;
  }
}

export function NotesProvider({ children }) {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      dispatch({
        type: "INIT_NOTES",
        payload: JSON.parse(savedNotes),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
}
