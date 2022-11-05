import { FC, useContext, useEffect } from 'react';
import { useAtom } from 'jotai';

import { mapDrawnAtom, mapUpdateRequiredAtom } from './gameAtoms.ts/mapAtom';
import CanvasContext, { ICanvasContext } from './canvasContext';
import { TILE_SIZE } from './constants';
import { questionsMap } from './questions';


export const DrawMap: FC<{questionKey: string}> = (props) => {
    const { renderingContext, saveRenderingContext } = useContext(CanvasContext) as ICanvasContext;
    const[,setMapDrawnStatus] = useAtom(mapDrawnAtom);
    const [isUpdateRequired, ] = useAtom(mapUpdateRequiredAtom)
    const { dimensions, mapLevels } = questionsMap[props.questionKey]
    const {columns, rows, width, height } = dimensions

    useEffect(() => {
        if (renderingContext ) {

            // function to add image tiles
            const drawMap = (grid: number[][]) => {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < columns; j++) {
                        const item = grid[i][j];
                        if (!item) {
                            // empty tile
                            continue;
                        }
                        const img = document.querySelector(`#mapSquareImage-${item}`);
                        const x = j * TILE_SIZE;
                        const y = i * TILE_SIZE;
                        renderingContext.drawImage(
                            img,
                            0,
                            0,
                            TILE_SIZE,
                            TILE_SIZE,
                            x,
                            y,
                            TILE_SIZE,
                            TILE_SIZE,
                        );
                    }
                }
            };
        
            drawMap(mapLevels[0]);
            drawMap(mapLevels[1]);

            // two loops to draw horizontal and vertical lines to decpict 2d grid
            for (let i = 0; i < rows; i++) {
                const y = i * TILE_SIZE;
                renderingContext.beginPath();
                renderingContext.moveTo(0, y);
                renderingContext.lineTo(width, y);
                renderingContext.stroke();
            }
            for (let j = 0; j < columns; j++) {
                const x = j * TILE_SIZE;
                renderingContext.beginPath();
                renderingContext.moveTo(x, 0);
                renderingContext.lineTo(x, height);
                renderingContext.stroke();
            }

            setMapDrawnStatus(true);
        }
        return () => {
            renderingContext && renderingContext.clearRect(0, 0, renderingContext.canvas.width, renderingContext.canvas.height);
        }
    }, [renderingContext, saveRenderingContext, isUpdateRequired]);

    return null;
};