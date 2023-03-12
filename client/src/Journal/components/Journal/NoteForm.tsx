import { FormEvent, useRef, useState } from "react"
import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import { NoteData, Tag } from "../JournalContainer"
import styled from 'styled-components'
// import { v4 as uuidV4 } from "uuid"

function generateRandomString(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 7; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & Partial<NoteData>

export function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)
  const navigate = useNavigate()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    })

    navigate("..")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StackDiv>
        <JournalRow>
          <StackInnerDiv1>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required defaultValue={title} />
            </Form.Group>
          </StackInnerDiv1>
          <StackInnerDiv1>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                onCreateOption={label => {
                  const newTag = { id: generateRandomString(), label }
                  onAddTag(newTag)
                  setSelectedTags(prev => [...prev, newTag])
                }}
                value={selectedTags.map(tag => {
                  return { label: tag.label, value: tag.id }
                })}
                options={availableTags.map(tag => {
                  return { label: tag.label, value: tag.id }
                })}
                onChange={tags => {
                  setSelectedTags(
                    tags.map(tag => {
                      return { label: tag.label, id: tag.value }
                    })
                  )
                }}
                isMulti
              />
            </Form.Group>
          </StackInnerDiv1>
        </JournalRow>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control
            defaultValue={markdown}
            required
            as="textarea"
            ref={markdownRef}
            rows={15}
          />
        </Form.Group>
        <StackInnerDiv2>
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </StackInnerDiv2>
      </StackDiv>
    </Form>
  )
}

const JournalRow = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
const StackWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 2px;

  > div {
    flex: 0 1 400px;
  }
`
const EditButton = styled.button`
  color: var(--color-green-100);
  background: linear-gradient(
    -45deg,
    #e46bbb 0%,
    #eb78bd 29.89%,
    var(--color-primary-medium) 73.63%,
    var(--color-primary-dark) 100%
  );
`

const DeleteButton = styled.button`
  color: var(--color-red-100);
  background: linear-gradient(
    -45deg,
    #e46bbb 0%,
    #eb78bd 29.89%,
    var(--color-primary-medium) 73.63%,
    var(--color-primary-dark) 100%
  );
`

const BackButton = styled(Link)`
  color: var(--color-gray-700);
  font-size: 1.3rem;

  svg {
    display: inline-block;
  }

  :hover {
    color: var(--color-black);
    text-decoration: underline;
  }
`

const StackDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 4px;

  > div {
    flex: 0 1 400px;
  }
`
const StackInnerDiv1 = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1px;

  color: var(--color-blue-700);
  font-size: 1.3rem;

  :hover {
    color: var(--color-black);
    text-decoration: underline;
  }
`

const StackInnerDiv2 = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1px;


  color: var(--color-blue-700);
  font-size: 1.3rem;

  :hover {
    color: var(--color-black);
    text-decoration: underline;
  }
`

const Badge = styled.span.attrs(props =>
  ({ className: 'badge' }))`
  color: red;
`