// import { FC } from 'react'

import { useMemo } from "react"
import { Routes, Route, Navigate, Outlet } from "react-router-dom"
import { NewNote } from "./components/Journal/NewNote"
import { useLocalStorageJournal } from "../global/apis/hooks/useLocalStorage"
import { NoteList } from "./components/Journal/NoteList"
import { NoteLayout } from "./components/Journal/NoteLayout"
import { Note } from "./components/Journal/Note"
import { EditNote } from "./components/Journal/EditNote"

import { JournalView } from './components/Journal/JournalView'

// import { v4 as uuidV4 } from "uuid"

function generateRandomString(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


export type Note = {
  id: string
} & NoteData

export type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}

const JournalRouter = () => {
  const [notes, setNotes] = useLocalStorageJournal<RawNote[]>("NOTES", [])
  const [tags, setTags] = useLocalStorageJournal<Tag[]>("TAGS", [])

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
    })
  }, [notes, tags])


  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        // { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) },
        { ...data, id: generateRandomString(), tagIds: tags.map(tag => tag.id) },
      ]
    })
  }

  function onUpdateNote(id: string, { tags, ...data }: NoteData) {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map(tag => tag.id) }
        } else {
          return note
        }
      })
    })
  }

  function onDeleteNote(id: string) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id)
    })
  }

  function addTag(tag: Tag) {
    setTags(prev => [...prev, tag])
  }

  function updateTag(id: string, label: string) {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag
        }
      })
    })
  }

  function deleteTag(id: string) {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id)
    })
  }

  // const { questions } = useQuestionsQuery()

  // return <JournalView />
  return (
    <>
      <Routes>
        <Route
          path="journal"
          element={
            <NoteList
              notes={notesWithTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
        />
        <Route
          path="journal/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route path="journal/:journalId" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onUpdateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
        </Route>
      </Routes>
      <Outlet />
    </>
  )
}

// JournalContainer.displayName = 'JournalContainer'
export default JournalRouter