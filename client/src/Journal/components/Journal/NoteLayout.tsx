import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Note } from "../JournalContainer"

type NoteLayoutProps = {
  notes: Note[]
}

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams()
  const note = notes.find(n => n.id === id)

  if (note == null) return <Navigate to="journal" replace />

  return <Outlet context={note} />
}

export function useNote() {
  return useOutletContext<Note>()
}
