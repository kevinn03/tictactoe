const gameBoard = (() => {
    let board = [];
    let player = [];
    const container = document.querySelector(".game");

const setBoard = (size = 3) => {
    if(size < 3){size = 3};
    for(let i = 0; i < size; i++){
        let arr = [];
        
        for(let j = 0; j < size; j++){
            arr.push("");
        }
        board.push(arr);
    }

        
    
    let frac = "";
    for(let i = 0; i < size; i++){
            
        for (let j = 0; j < size; j++) {
            let grid = document.createElement("div");
            grid.classList.add(`box${i}${j}`);
            grid.classList.add("box");
            grid.addEventListener("click", mark)
            container.appendChild(grid);
        }
    
    }
    
        for(let k = 0; k < size; k++){
            frac += "1fr "; 
        }
        container.style.cssText = `grid-template-columns: ${frac}`;
    };

    
    const getBoard = () => {
        let copyBoard = board.slice();
        return copyBoard;
    };

    const addPlayer = (player) => {
        if(gameBoard.player.includes(player) === false){
            board.push(player);
            return true;
        }
        return false;
    };

    const _winVert = () => {

        
        for (let i = 0; i < board.length; i++) {
            let marker = board[0][i];    
            for(let j = 0; j < board.length; j++){
               if(board[j][i] !== marker){return false;}
            }
            
        }
        return true;
    };

    const _winHor = () => {
        for(let i = 0; i < board.length; i++){
            let marker = board[i][0];
           
            for(let j = 0; j < board.length; j++){
                if(board[i][j] !== marker ){return false;}
            }
            
        }
        return true;
    };

    const _winDiagLeft = () => {
        let marker = board[0][0];
        for (let i = 0; i < array.length; i++) {
            if(board[i][i] !== marker){return false;}
            
        }
        return true;
    };

    const _winDiagRight = () => {
        let marker = board[0][board.length - 1];
        let j = board.length - 1;
        for (let i = 0; i < array.length; i++) {
            if(board[i][j] !== marker){
                j--;
                return false;}
            
        }
        return true;
    };

    const win = () => {

        if(_winVert() || _winHor() || _winDiagLeft() || _winDiagRight()){return true;}

        return false;
    }

    const tie = () => {

    };

    const render = () => {

    }

    const mark = () => {

    }




return {setBoard, getBoard, addPlayer, win, render, tie};
})();


window.onload = function(){
    
    
    gameBoard.setBoard();
}