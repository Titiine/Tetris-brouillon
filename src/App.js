// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  // // #TODO: delete -- Original values so that it fits:
  // const numGridLines = 16;
  // const numGridColumns = 10;

  const numGridLines = 16;
  const numGridColumns = 10;
  let shipColor = Math.ceil(Math.random()*10);

  console.log("Assma 1");
  const [timer, setTimer] = useState(0);
  let backupGrid = null;
  const [gridCases, setGridCases] = useState(a_1_buildGrid(numGridColumns, numGridLines));
  // Warning: same ship should be used, #TODO: change
  // const [ship, setShip] = useState(null);
  const [ship, setShip] = useState(initialiseSquareShip());

  let message = "";

  // // #TODO: delete -- Example for the matrix, to know the kind of content:
  // const gridCases = [
  //   [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], 
  //   [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]
  // ];

  const _left_key = 37;
  const _up_key = 38;
  const _right_key = 39;
  const _down_key = 40;

  useEffect(() => {
    document.addEventListener("keydown", checkKey);
  }, [])

  function checkKey(e) {
    if (e.keyCode === 78 || e.keyCode === 16) {
      // touch "N" or "n" was pressed, restart:
      alert('n');
      // endGame();
      startGame();
    }

    if (e.keyCode === _left_key) {
      // setStep(() => WEST);
      applyMove1RightOrLeftOrDownOnShip(ship, "left")
      //alert("left");


      backupGrid = gridCases.slice(0, gridCases.length);
      let updatedGrid = a_1_buildGrid(numGridColumns, numGridLines);
      // compute the compGrid (using the ship)
      colorShipInMatrix(updatedGrid, ship);
      // update the (grid) state with the compGrid
      setGridCases(updatedGrid);
  
    }
    else if (e.keyCode === _right_key) {
      // setStep(() => EAST);
      applyMove1RightOrLeftOrDownOnShip(ship, "right")
      // alert("right");

      backupGrid = gridCases.slice(0, gridCases.length);
      let updatedGrid = a_1_buildGrid(numGridColumns, numGridLines);
      // compute the compGrid (using the ship)
      colorShipInMatrix(updatedGrid, ship);
      // update the (grid) state with the compGrid
      setGridCases(updatedGrid);

      
    }
    // else if (e.keyCode === _up_key) {
    // }
    else if (e.keyCode === _down_key) {
      // alert("down");
      applyMove1RightOrLeftOrDownOnShip(ship, "down");

      backupGrid = gridCases.slice(0, gridCases.length);
      let updatedGrid = a_1_buildGrid(numGridColumns, numGridLines);
      // compute the compGrid (using the ship)
      colorShipInMatrix(updatedGrid, ship);
      // update the (grid) state with the compGrid
      setGridCases(updatedGrid);

    }
  }
  /////////////////////////////
  // 0/ INITIALIZE A GAME (jeudi 13 jan 2022):
  /////////////////////////////

  function startGame() {

    // 0/ Old :
    // init ship : with random . 
    // >> not needed : done with the endGame
      // const createdShip = initialiseSquareShip();
      // setShip(createdShip);
  
      // 1/ draw ship :
    // save the normal grid in an array copy:
    backupGrid = gridCases.slice(0, gridCases.length);
    //let updatedGrid = gridCases.slice(0, gridCases.length);
    let updatedGrid = gridCases.slice(0, gridCases.length);
    a_1_buildGrid(numGridColumns, numGridLines)
    // compute the compGrid (using the ship)
    shipColor = Math.ceil(Math.random()*10);
    colorShipInMatrix(updatedGrid, ship);
    // update the (grid) state with the compGrid
    setGridCases(updatedGrid);

  }

  function endGame() {
    // reset grid:
    setGridCases(a_1_buildGrid(numGridColumns, numGridLines));
    // (reset piece ?)
    setShip(initialiseSquareShip());
    
  }

  function tick() {

    // ETAPE 1 : faire les calculs (sur ce qui a deja été affiché)

    //check gameover (if ship touches floor)
    // => endGame()
    //si pas de gameover :
    // check si ligne complete 
    // => supprime la ou les lignes
    // => update toutes les lignes de la matrice

    ////////////////////////////////

    // ETAPE 2 : faire l'update du tick : mouvement vers bas

    //down the ship
    // (eviter les collisions avec le bas (idem pour gauche droite))
    // descendre la piece
    applyMove1RightOrLeftOrDownOnShip(ship, "down");

    // fin : ca dessine
    // alert(6);
    // moveShipLeft();
  }

  useEffect(() => {
    startGame();
    // setInterval(tick, 4000);
  }, []);


  /////////////////////////////
  // 1/ INITIALIZE GRID AND SHIP:
  /////////////////////////////

  function a_1_buildGrid(nbColumns, nbLines) {
    // Create a grid (with 0 in every cell):
    const createdGrid = new Array(nbLines)
      .fill(0)
      .map(() => Array(nbColumns).fill(-1));

    // const createdShip = initialiseSquareShip();
    // colorShipInMatrix(createdGrid, createdShip);

    // let updatedGridWithRightMove = null;
    // // applyMoveRightOnShip(createdShip);
    // applyMove1RightOrLeftOrDownOnShip(createdShip, "right");
    // updatedGridWithRightMove = applyMoveRightOnGridFromThisShipAndReturnTheGrid(createdShip, createdGrid);

    // // Index used to increment the matrix' cell values (test purpose)
    // let indexToIncrement = 1;

    // // Incrementing the matrix' cell values (test purpose)
    // createdGrid.forEach(gridLine => {
    //   for (let index = 0; index < gridLine.length; index++) {
    //     gridLine[index] = indexToIncrement;
    //     indexToIncrement++;
    //   }
    // });

    // return updatedGridWithRightMove;
    // TODO : uncomment this line:
    return createdGrid;
  }


  function initialiseSquareShip(params) {
    // Create a grid (with 0 in every cell):
    const createdShip = new Array(4)
      .fill(0)
      .map(() => Array(2).fill(0));
      // .map(() => Array(2).fill(Math.ceil(Math.random()*10)));

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
    matrix[cell[1]][cell[0] - 1] = shipColor;
    ;
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

  function applyMove1RightOrLeftOrDownOnShip(ship, strLeftOrRight) {
    if (ship != null) {

      let right = 0;
      let up = 0;

      switch (strLeftOrRight) {
        case "right":
          right = 0.5;
          break;
        case "left":
          right = -0.5;
          break;
        case "down":
          up = -1;
          break;
        default:
          console.log("This movement doesn't exist, please use right or left")
          break;
      }

      // Assma comment
      // alert("down. ship:" +ship);
      ship.forEach(shipLine => {
        // For each pixel:
        // A B
        // D C

        const coordA = ship[0];
        const coordB = ship[1];
        const coordC = ship[2];
        const coordD = ship[3];

        if (coordC[1]>0) {
                    // A
          coordA[0] = coordA[0] + right;
          coordA[1] = coordA[1] + up;
          // B
          coordB[0] = coordB[0] + right;
          coordB[1] = coordB[1] + up;
          // C
          coordC[0] = coordC[0] + right;
          coordC[1] = coordC[1] + up;
          // D
          coordD[0] = coordD[0] + right;
          coordD[1] = coordD[1] + up;
        } else {
          alert("Ship reached the floor");
          message = "Ship reached the floor";
        }

      })
      // Assma comment
      // alert("down. ship:" +ship);
    }
  }

  // function applyMove2UpOrDownOnShip(ship) {
  //   ship.forEach(shipLine => {
  //     // For each pixel:
  //     // A B
  //     // D C

  //     const coordA = ship[0];
  //     const coordB = ship[1];
  //     const coordC = ship[2];
  //     const coordD = ship[3];

  //     // A
  //     coordA[0] = coordA[0] + 1;
  //     // coordA[1] = 15;
  //     // B
  //     coordB[0] = coordB[0] + 1;
  //     // coordB[1] = 15;
  //     // C
  //     coordC[0] = coordC[0] + 1;
  //     // coordC[1] = 14;
  //     // D
  //     coordD[0] = coordD[0] + 1;
  //     // coordD[1] = 14;
  //   })
  //   // matrix[cell[1]][cell[0]-1] = 1;
  // }

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

  function moveShipDown(matrix, cell) {
    // matrix[cell[1]][cell[0]-1] = 1;
  }

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

          <h1>Tetris</h1>

          <div class="gridContainer_11">

            {
              // Rendering the grid from the matrix, taking colors into account with the box$i css class:
              gridCases.map(line => (
                // gridCases[0].map(blockElement => (
                line.map(blockElement => (
                  <div class={`box box${blockElement % 10}`}>
                    {/* {blockElement} */}
                    </div>
                ))
              ))

            }
            {/* #TODO: delete -- A two-row manual example, to test some stuff: */}

            {/* <div class="box box1x">1 x</div>
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
            <div class="box box10x">20 x</div> */}

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
            <p>Next piece: </p>
            <div className='heheNext'>X</div>
            <div className='heheNext'>XXXX</div>
            <br/>
            <br/>
            
            {/* 
            <div>Debug: 1/ ship 2/matrix</div>
            <div>{ship}</div>
            <div>{gridCases}</div>
             */}

            
            <div>Messages: </div>
            <div>{message}</div>
            <br/>
            <br/>

            


          </div>

          <div class="green_row_22">
            <br/>
            <div>Current score:</div>
            <div className='heheNext'>265</div>
            <br />
            <div>High score:</div>
            <div className='heheNext'>2000</div>
            <div>(by RedPlayer)</div>
            <br/>
          </div>

        </div>


      </div>


    </div>
  );
}

export default App;
