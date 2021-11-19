import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let i = 0;
	let board = []
    for (let j = 0; j < 3; j++) {
      let row = [];
      for (let column = 0; column < 3; column++) {
        row.push(this.renderSquare(i++));
      }
      board.push(row);
    }
    return (
      board.map((board_row, index) => {
        const id = 'row_' + index;
        return(<div className="board-row" key={id}>{board_row}</div>);
      })
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        move: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
	const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const temp_squares = current.squares.slice();
	const sign = this.state.xIsNext ? 'X' : 'O';
    let temp_move;
    if (temp_squares[i] || calculateWinner(temp_squares))
      return;
    temp_move = sign + ' in line ' + Math.trunc(i / 3) + ' row ' + (i % 3);
    temp_squares[i] = sign;
    this.setState({
      history: history.concat([{
        squares: temp_squares,
        move: temp_move,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      let desc = move ?
        'Go back to turn n°' + move :
        'Go back to beginning';
      const move_str = history[move].move;
      if (history[move] === current)
        desc = <b>{desc}</b>;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
          <p>{move_str}</p>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner : ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
             squares={current.squares}
             onClick={(i) => this.handleClick(i)}
           />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}

