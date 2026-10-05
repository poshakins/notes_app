import { INote } from "../types/app.types";

type INoteStore = {
    notes: INote[],
    addNote: (note: INote) => void, //responsible for adding notes to the store
    deleteNote: (id: string) => void, //responsible for deleting notes from the store
    markNoteAsCompleted: (id: string) => void, //responsible for marking notes as completed
    updateNote: (id: string, updatedNote: INote) => void, //responsible for updating notes in the store
    getNotesByCategory: (category: string) => INote[], //responsible for retrieving notes by category
    getCompletedNotes: () => INote[], //responsible for retrieving completed notes
    getPendingNotes: () => INote[], //responsible for retrieving pending notes
}

export { INoteStore };
