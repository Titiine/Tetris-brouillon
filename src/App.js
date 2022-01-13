// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  // // #TODO: delete -- Original values so that it fits:
  // const numGridLines = 16;
  // const numGridColumns = 10;

  const numGridLines = 16;
  const numGridColumns = 10;

  const [timer, setTimer] = useState(0);
  const [gridCases, setGridCases] = useState(buildGrid(numGridColumns, numGridLines));
  // Warning: same ship should be used, #TODO: change
  const [ship, setShip] = useState(initialiseSquareShip());

  // // #TODO: delete -- Example for the matrix, to know the kind of content:
  // const gridCases = [
  //   [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], 
  //   [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]
  // ];

  
  /////////////////////////////
  // 0/ INITIALIZE GRID AND SHIP (jeudi 13 jan 2022):
  /////////////////////////////

  useEffect(() => {
    // setInterval(draw, 4000);
  }, []);

  function draw() {
    alert(6);
  }

  /////////////////////////////
  // 1/ INITIALIZE GRID AND SHIP:
  /////////////////////////////

  function buildGrid(nbColumns, nbLines) {
    // Create a grid (with 0 in every cell):
    const createdGrid = new Array(nbLines)
      .fill(0)
      .map(() => Array(nbColumns).fill(0));

    const createdShip = initialiseSquareShip();
    colorShipInMatrix(createdGrid, createdShip);

    let updatedGridWithRightMove = null;
    applyMoveRightOnShip(createdShip);
    updatedGridWithRightMove = applyMoveRightOnGridFromThisShipAndReturnTheGrid(createdShip, createdGrid);
 
    // // Index used to increment the matrix' cell values (test purpose)
    // let indexToIncrement = 1;

    // // Incrementing the matrix' cell values (test purpose)
    // createdGrid.forEach(gridLine => {
    //   for (let index = 0; index < gridLine.length; index++) {
    //     gridLine[index] = indexToIncrement;
    //     indexToIncrement++;
    //   }
    // });

    return updatedGridWithRightMove;
    // TODO : uncomment this line:
    return createdGrid;
  }


  function initialiseSquareShip(params) {
    // Create a grid (with 0 in every cell):
    const createdShip = new Array(4)
      .fill(0)
      .map(() => Array(2).fill(0));

    // Incrementing the matrix' cell values (test purpose)
    createdShip.forEach(shipLine => {
        // For each pixel:
        // A B
        // D C

        const coordA = createdShip[0];
        const coordB = createdShip[1];
        const coordC = createdShip[2];
        const coordD = createdShip[3];

        // A
        coordA[0] = 5;
        coordA[1] = 15;
        // B
        coordB[0] = 6;
        coordB[1] = 15;
        // C
        coordC[0] = 5;
        coordC[1] = 14;
        // D
        coordD[0] = 6;
        coordD[1] = 14;
    });

    return createdShip;
  }

  /////////////////////////////
  // 2/ COLOR SHIP AND GRID:
  /////////////////////////////

  function colorShipInMatrix(matrix, ship) {
    ship.forEach(cell => {
      colorCell(matrix, cell);
    });
  }

  function colorCell(matrix, cell) {
    matrix[cell[1]][cell[0]-1] = 1;
  }

  /////////////////////////////
  // 3/ MOVE FUNCTIONS:
  /////////////////////////////

  function moveShipLeft(matrix, cell) {
    // matrix[cell[1]][cell[0]-1] = 1;
  }

  // function moveShipRight(matrix, cell) {
  //   alert(4);
  //   const shipToMove = initialiseSquareShip();
  //   const movedShip = applyMoveRightOnShip(shipToMove);
  //   applyMoveRightOnGridFromThisShipAndReturnTheGrid(movedShip, null);
  //   setShip(movedShip);

  //   // matrix[cell[1]][cell[0]-1] = 1;
  // }

  function applyMoveRightOnShip(ship) {
    ship.forEach(shipLine => {
      // For each pixel:
      // A B
      // D C

      const coordA = ship[0];
      const coordB = ship[1];
      const coordC = ship[2];
      const coordD = ship[3];

      // A
      coordA[0] = coordA[0] + 1;
      // coordA[1] = 15;
      // B
      coordB[0] = coordB[0] + 1;
      // coordB[1] = 15;
      // C
      coordC[0] = coordC[0] + 1;
      // coordC[1] = 14;
      // D
      coordD[0] = coordD[0] + 1;
      // coordD[1] = 14;
    })
    // matrix[cell[1]][cell[0]-1] = 1;
  }

  function applyMoveRightOnGridFromThisShipAndReturnTheGrid(ship, grid) {
    let createdGrid = new Array();
    if (grid == null) {
      createdGrid = gridCases;        
    } else {
      createdGrid = grid;
    }
    colorShipInMatrix(createdGrid, ship);
    return createdGrid;
    // matrix[cell[1]][cell[0]-1] = 1;
  }

  // function moveShipDown(matrix, cell) {
  //   // matrix[cell[1]][cell[0]-1] = 1;
  // }

  // function moveShipUp(matrix, cell) {
  //   // matrix[cell[1]][cell[0]-1] = 1;
  // }

  // function moveShipSpace(matrix, cell) {
  //   // matrix[cell[1]][cell[0]-1] = 1;
  // }

  //Game loop:
  // moveShipRight(null, null);


  /////////////////////////////
  // 10/ HTML RENDERING:
  /////////////////////////////

  return (
    <div className="App">


      <div class="container_0">


        <div class="first-col_1">
          <div class="gridContainer_11">

            {
              // Rendering the grid from the matrix, taking colors into account with the box$i css class:
              gridCases.map(line => (
                // gridCases[0].map(blockElement => (
                line.map(blockElement => (
                  <div class={`box box${blockElement % 10}`}>{blockElement}</div>
                ))
              ))

            }
            {/* #TODO: delete -- A two-row manual example, to test some stuff: */}

            <div class="box box1x">1 x</div>
            <div class="box box2x">2 x</div>
            <div class="box box3x">3 x</div>
            <div class="box box4x">4 x</div>
            <div class="box box5x">5 x</div>
            <div class="box box6x">6 x</div>
            <div class="box box7x">7 x</div>
            <div class="box box8x">8 x</div>
            <div class="box box9x">9 x</div>
            <div class="box box10x">10 x</div>
            <div class="box box1x">11 x</div>
            <div class="box box2x">12 x</div>
            <div class="box box3x">13 x</div>
            <div class="box box4x">14 x</div>
            <div class="box box5x">15 x</div>
            <div class="box box6x">16 x</div>
            <div class="box box7x">17 x</div>
            <div class="box box8x">18 x</div>
            <div class="box box9x">19 x</div>
            <div class="box box10x">20 x</div>

            {/* <div class="box box1">1 x</div>
            <div class="box box2">2 x</div>
            <div class="box box3">3 x</div>
            <div class="box box4">4 x</div>
            <div class="box box5">5 x</div>
            <div class="box box6">6 x</div>
            <div class="box box7">7 x</div>
            <div class="box box8">8 x</div>
            <div class="box box9">9 x</div>
            <div class="box box10">10 x</div>
            <div class="box box1">11 x</div>
            <div class="box box2">12 x</div>
            <div class="box box3">13 x</div>
            <div class="box box4">14 x</div>
            <div class="box box5">15 x</div>
            <div class="box box6">16 x</div>
            <div class="box box7">17 x</div>
            <div class="box box8">18 x</div>
            <div class="box box9">19 x</div>
            <div class="box box10">20 x</div> */}


          </div>
        </div>

        {/* The main right-handside div container (next piece + score and highscore)  */}
        <div class="second-col_2">

          <div class="blue_row_21">
            <p>Next: </p>
            <div>X</div>
            <div>XXXX</div>
            {/* 
            <div>Debug: 1/ ship 2/matrix</div>
            <div>{ship}</div>
            <div>{gridCases}</div>
             */}
          </div>

          <div class="green_row_22">
            <div>Current score:</div>
            <div>265</div>
            <br />
            <div>High score:</div>
            <div>2000</div>
            <div>(by RedPlayer)</div>
          </div>

        </div>


      </div>


    </div>
  );
}

export default App;
