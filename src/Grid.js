// import logo from './logo.svg';
import './Grid.css';

function Grid() {
  // const numGridLines = 12;
  // const numGridColumns = 8;
  const numGridLines = 8;
  const numGridColumns = 4;

  // const gridCases = [0,0,0];
  // const gridCases = Array.from(Array(10).keys());           // 12 lines

  const _gridCasesX = [...Array(numGridLines).keys()];           // 12 lines

  
  // gridCases.map{ createColumns};
  // const createColumns = () => {

  // };

  const gridCases = [
                      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], 
                      [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]
                    ];

  const newArr0 = gridCases.map(createColumn);

  const arr1 = createColumn(numGridColumns);


  function createColumn(numberOfElements) {
    // #TODO_ : demander au prof pourquoi, ce que fait Array(8)

    // // 1) In ES6 using Array from() and keys() methods.
    // Array.from(Array(10).keys());
    //   //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      
    // // 2) Shorter version using spread operator.
    // [...Array(10).keys()];
    //   //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return Array.from(Array(numberOfElements).keys());
  }

  return (
    <div className="Grid">
      GRID COMPONENT

      {/* <div>First array, gridCases: {gridCases}</div>
      <div>Second array, arr1: {arr1}</div>
      <div>3rd array, newArr0: {newArr0}</div> */}


      {/* <div>{arr1}</div> */}
      <div>{gridCases}</div>
      <div>{ }</div>
      <div>{ }</div>
      <div>{ }</div>
      <div>{ }</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Grid;
