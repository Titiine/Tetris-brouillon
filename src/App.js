// import logo from './logo.svg';
import './App.css';

function App() {

  const numGridLines = 16;
  const numGridColumns = 10;
  // const gridCases = [
  //   [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], 
  //   [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]
  // ];
  const gridCases = new Array(numGridLines).fill(0)
  .map(()=>Array(numGridColumns).fill(0));

  return (
    <div className="App">


      <div class="container_0">


        <div class="first-col_1">
          <div class="gridContainer_11">
            {/* {gridCases.map(i=> {})} */}
            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>

            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>

            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>

            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>

            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>

            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>

            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>

            <div class="box box1">1</div>
            <div class="box box2">2</div>
            <div class="box box3">3</div>
            <div class="box box4">4</div>
            <div class="box box5">5</div>
            <div class="box box6">6</div>
            <div class="box box7">7</div>
            <div class="box box8">8</div>
            <div class="box box9">9</div>
            <div class="box box10">10</div>
            <div class="box box1">11</div>
            <div class="box box2">12</div>
            <div class="box box3">13</div>
            <div class="box box4">14</div>
            <div class="box box5">15</div>
            <div class="box box6">16</div>
            <div class="box box7">17</div>
            <div class="box box8">18</div>
            <div class="box box9">19</div>
            <div class="box box10">20</div>



          </div>
        </div>

        <div class="second-col_2">

          <div class="blue_row_21">
          <p>Next: </p>
          <div>X</div>
          <div>XXXX</div>

          </div>

          <div class="green_row_22">
          <div>Current score:</div>
          <div>265</div>
          <br/>
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
