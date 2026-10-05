import { create } from 'zustand';
import { INoteStore } from "./noted.js";

export const useNoteStore = create<INoteStore>((set, get) => ({

    notes: [],

    addNote :(note)=>{},

    deleteNote :(id)=>{},

    markNoteAsCompleted :(id)=>{},

    updateNote :(id, updatedNote)=>{},

    getNotesByCategory :(category)=>{ return [] },

    getCompletedNotes :()=>{ return [] },

    getPendingNotes :()=>{ return [] },
}));

export default useNoteStore;