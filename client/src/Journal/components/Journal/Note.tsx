// import { Badge, Button, Col, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useNote } from "./NoteLayout"
import ReactMarkdown from "react-markdown"
import styled from 'styled-components'

type NoteProps = {
  onDelete: (id: string) => void
}

export function Note({ onDelete }: NoteProps) {
  const note = useNote()
  const navigate = useNavigate()

  return (
    <>
      <JournalRow className="align-items-center mb-4">
        <StackDiv>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <StackInnerDiv1>
              {note.tags.map(tag => (
                <Badge key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </StackInnerDiv1>
          )}
        </StackDiv>
        <StackDiv>
          <StackInnerDiv2>
            <Link to={`/${note.id}/edit`}>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteButton
              onClick={() => {
                onDelete(note.id)
                navigate("/")
              }}
            >
              Delete
            </DeleteButton>
            <BackButton to="/">Back</BackButton>
          </StackInnerDiv2>
        </StackDiv>
      </JournalRow>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
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
  gap: 2px;

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

const Badge = styled.span.attrs(props =>
  ({ className: 'badge' }))`
  color: red;
`
