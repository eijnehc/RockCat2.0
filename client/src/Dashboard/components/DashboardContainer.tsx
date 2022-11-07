import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useAtom } from 'jotai'
import styled from 'styled-components'

import { useLocalStorage } from '../../global'

import { checkMapCollision, getNextTurnDirection, MOVEMENT } from './Map/GameComponents/constants'
import { characterAtom, DirectionFacing } from './Map/GameComponents/gameAtoms.ts/characterAtom'
import { mapUpdateRequiredAtom, questionGridMapToDraw } from './Map/GameComponents/gameAtoms.ts/mapAtom'
import { questionsMap } from './Map/GameComponents/questions'
import { EditorView } from './Editor'
import { stringJSParser } from './editorToGameJSParser'
import { MapView } from './Map'
import { QuestionView } from './Questions'

// Used after string to js parsing for gameplay
async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

export const DashboardContainer: FC = () => {
  const [js, setJs] = useLocalStorage('js', '')
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [srcDoc, setSrcDoc] = useState('')

  const handleChange = useCallback((value: string) => {
    setJs(value)
  }, [])

  // set game map to use
  const [questionGridMap, setQuestionGridMap] = useAtom(questionGridMapToDraw)

  useEffect(()=> {
    // set key to use from questions.ts . pass from a prop maybe?
    setQuestionGridMap('question1')
  }, [])

  // init character status
  const [character, setCharacter] = useAtom(characterAtom);
  const [, setMapUpdateRequired] = useAtom(mapUpdateRequiredAtom);
  const characterRef = useRef(character);

  useEffect(() => {
    characterRef.current = character
  }, [character])


  const turnState = (nextDirection: DirectionFacing) => {
    setMapUpdateRequired(true);
    setCharacter((prev) => {
      const updatedcharacter = { ... prev}
      updatedcharacter.facing = nextDirection
      updatedcharacter.characterImage = `#${nextDirection}`;
      return updatedcharacter
    })
  }

  // Used after string to js parsing for gameplay
  const turnWhile = () => {
    // next direction cannot be opposite of 
    const nextDirection = getNextTurnDirection(characterRef.current.facing, characterRef.current.lastMoved);
    turnState(nextDirection);
  };

    // Used after string to js parsing for gameplay
    const turn = () => {
      // next direction cannot be opposite of 
      const nextDirection = getNextTurnDirection(characterRef.current.facing);
      turnState(nextDirection);
    };

  // Used after string to js parsing for gameplay
  const isBlocked =  () => {
    const key = characterRef.current.facing;
    const [x, y] = MOVEMENT[key];
    if (questionGridMap) {
      const blocked = checkMapCollision(characterRef.current.x + x, characterRef.current.y + y, questionsMap[questionGridMap])
      return blocked
    }
  }

  // Used after string to js parsing for gameplay
  const move = () => {
    const key = characterRef.current.facing;
    const [x, y] = MOVEMENT[key];
    if (questionGridMap && !checkMapCollision(characterRef.current.x + x, characterRef.current.y + y, questionsMap[questionGridMap])) {
      setMapUpdateRequired(true);
      setCharacter((prev) => {
          const updatedcharacter = { ... prev}
          updatedcharacter.x += x
          updatedcharacter.y += y
          updatedcharacter.lastMoved = key;
          return updatedcharacter
      })
    }
  };

  // Used after string to js parsing for gameplay
  const escaped = () => {
    const {x, y} = characterRef.current;
    if (questionGridMap && questionsMap[questionGridMap]){
      const {finalLocation} = questionsMap[questionGridMap]
      return x === finalLocation.x && y === finalLocation.y ;
    }
  }

  const handleSubmitCode = async () => {
    const parsedJS = stringJSParser(js);
    console.log(parsedJS)
    try {
        eval(`(async () => {${parsedJS}})()`).then().catch((err: unknown) =>{
          alert(err)
        })
    } catch(e) {
      alert(e)
    }
  }


  return (
      <Wrapper>
        <QuestionView />
        <EditorView code={js} onChange={handleChange} onSubmitCode={handleSubmitCode} />
        <MapView />
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;

  > div {
    flex: 1;
    /* Temp border to see the demarcation */
    border: 1px solid var(--color-white);
  }
`

DashboardContainer.displayName = 'DashboardContainer'
