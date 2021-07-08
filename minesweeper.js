//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// A lot of my thought pattern was done on the whiteboard trying to figure
// out how this works. Once I figured that out the logic just flowed

export const annotate = (input = []) => {

  for (let r = 0; r < input.length; r++) {
    let lineArray = [];
    for (let c = 0; c < input[r].length; c++) {
      // every position, is either a mine or a number
      if (input[r][c] == '*') {
        // if position is a mine leave it a mine
        lineArray.push('*');
      } 
      else {
      // check the 8 positions around for mines
      let numMines = 0;
      // Max and min to take care of the borders and corners
        for (let rIndex = Math.max(0, r - 1);
            rIndex < Math.min(input.length, r + 2);
            rIndex++) {
          for (let cIndex = Math.max(0, c - 1);
              cIndex < Math.min(input[r].length, c + 2);
              cIndex++) {
            if (input[rIndex][cIndex] == '*') numMines++;
          }
        }
        lineArray.push(numMines > 0 ? numMines : ' '); // Don't show 0
      }
    }
    input[r] = lineArray.join('');
  }
  return input;

};