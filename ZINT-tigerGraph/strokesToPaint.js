function visit(picture, i, j, visitedBoxes) {
  const currentElem = picture[i][j];
  if (picture[i][j] === currentElem) {
      visitedBoxes[i][j] = true;

      // down
      if (i + 1 < picture.length && picture[i+1][j] === currentElem && visitedBoxes[i+1][j] === false) {
          visit(picture, i+1, j, visitedBoxes);
      }
      // left
      if (j+ 1 < picture[i].length && picture[i][j+1] === currentElem && visitedBoxes[i][j+1] === false) {
          visit(picture, i, j+1, visitedBoxes);
      }
      // up
      if (i > 0 && picture[i-1][j] === currentElem && visitedBoxes[i-1][j] === false) {
          visit(picture, i-1, j, visitedBoxes);
      }
      // right
      if (j > 0 && picture[i, j-1] === currentElem && visitedBoxes[i, j-1] === false) {
          visit(picture, i, j-1, visitedBoxes);
      }
  }
}

function countStrokes(picture) {
  const visitedBoxes = [];
  for (let i = 0; i < picture.length; i++) {
      visitedBoxes[i] = [];
      for(let j = 0; j < picture[i].length; j++) {
          visitedBoxes[i][j] = false;
      }
  }
  let strokesCount = 0;
  for (let i = 0; i < picture.length; i++) {
      for (let j = 0; j < picture[i].length; j++) {
          if (!visitedBoxes[i][j]) {
              visit(picture, i, j, visitedBoxes);
              strokesCount++;
          }
      }
  }
  console.log('Strokes Count', strokesCount);
}

countStrokes(['aaaba', 'ababa', 'aacba']);