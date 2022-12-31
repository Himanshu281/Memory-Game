import React, { useState } from "react";

export default function Card() {
  const [grid, setGrid] = useState([
    [1, 2, 3, 0],
    [0, 1, 2, 3],
    [5, 6, 5, 6],
  ]);

  const [showGrid, setShowGrid] = useState(
    new Array(grid.length).fill("").map(() => {
      return new Array(grid[0].length).fill(false);
    })
  );

  const checkAnswer = () => {
    let noOfCardsVisible = 0;
    let rowIndex1, colIndex1, rowIndex2, colIndex2;

    showGrid.map((row, rowIndex) => {
      return row.map((value, colIndex) => {
        if (value === true) {
          noOfCardsVisible++;
          if (noOfCardsVisible === 1) {
            rowIndex1 = rowIndex;
            colIndex1 = colIndex;
          } else {
            rowIndex2 = rowIndex;
            colIndex2 = colIndex;
          }
        }
      });
    });
    if (noOfCardsVisible === 2) {
      if (grid[rowIndex1][colIndex1] === grid[rowIndex2][colIndex2]) {
        alert("Correct Answer");
      } else {
        alert("Wrong Answer");
      }
      window.location.reload();
    }
  };

  const showCardValue = (rowIndex, ColIndex) => {
    const revealedCard = [...showGrid];
    revealedCard[rowIndex][ColIndex] = !revealedCard[rowIndex][ColIndex];
    setShowGrid(revealedCard);
    checkAnswer();
  };

  return (
    <div className="row">
      {grid.map((row, rowIndex) => {
        return (
          <div className="value">
            {row.map((value, ColIndex) => {
              return (
                <div
                  onClick={() => showCardValue(rowIndex, ColIndex)}
                  className="specific-value"
                >
                  {showGrid[rowIndex][ColIndex] ? value : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
