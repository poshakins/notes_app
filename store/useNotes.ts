import { create } from 'zustand';
import { INoteStore } from "./noted.js";

export const useNoteStore = create<INoteStore>((set, get) => ({

    notes: [],

    addNote :(note)=>{
        set((state) => ({ notes: [...state.notes, note] }));
    },

    deleteNote :(id)=>{
        set((state) => ({ notes: state.notes.filter((n) => n.id !== id) }));
    },

    markNoteAsCompleted :(id)=>{
        set((state) => ({
            notes: state.notes.map((n) =>
                n.id === id ? { ...n, isCompleted: true } : n
            )
        }));
    },

    updateNote :(id, updatedNote)=>{
        set((state) => ({
            notes: state.notes.map((n) =>
                n.id === id ? { ...n, ...updatedNote } : n
            )
        }));
    },

    getNotesByCategory :(category)=>{
        return get().notes.filter((n) => n.category === category);
    },

    getCompletedNotes :()=>{
        return get().notes.filter((n) => n.isCompleted === true);
    },

    getPendingNotes :()=>{
        return get().notes.filter((n) => n.isCompleted === false);
    },
}));

export default useNoteStore;