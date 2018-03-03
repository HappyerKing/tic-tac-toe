/**
 * palyer 下棋人
 * board 3x3 棋盘
 */
getResult = (palyer, board) => {
	const n = 3;
	//console.log(board.length);
	if (board.length != n) return [];
	let result = [];
	board.forEach((currentRow, rowIndex) => {
		if (currentRow.length != n) return [];
		currentRow.forEach((currentCol, colIndex) => {
			if (currentCol == 'e' && checkWin(palyer, board, rowIndex, colIndex)) result.push([ rowIndex, colIndex ]);
		});
	});

	return result;
};

/**
 * palyer 下棋人
 * board 3x3 棋盘
 * rowIndex  插入位置的行数
 * colIndex 插入位置的列数
 */
checkWin = (palyer, board, rowIndex, colIndex) => {
	const n = board.length;
	//row check
	let rowWin = board[rowIndex].every((index, current) => {
		if (index == colIndex || current == palyer) return true;
	});
	if (rowWin) return true;

	//collom check
	let colWin = true;
	for (let i = 0; i < n; i++) {
		if (i != rowIndex && board[i][colIndex] != palyer) {
			colWin = false;
			break;
		}
	}
	if (colWin) return true;

	// diagonal check
	if (rowIndex == colIndex) {
		let diagonalWin = true;
		for (let i = 0; i < n; i++) {
			if (i != rowIndex && board[i][i] != palyer) {
				diagonalWin = false;
				break;
			}
		}
		if (diagonalWin) return true;
	}

	//oppositeDiagonal check
	if (rowIndex + colIndex == n - 1) {
		let oppositeDiagonalWin = true;
		for (let i = 0; i < n; i++) {
			if (i != rowIndex && board[i][n-1-i] != palyer) {
				oppositeDiagonalWin = false;
				break;
			}
		}
		if (oppositeDiagonalWin) return true;
	}

	return false;
};

export default getResult
