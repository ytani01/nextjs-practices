"use client"
import { useState, useEffect  } from 'react';
import Board from '../components/Board';
import { initializeBoard, makeMove, checkWinner, canMakeMove, BoardState, Player } from '../utils/gameLogic';
import WinnerAnnouncement from '../components/WinnerAnnouncement';

export default function Home() {
    const [board, setBoard] = useState<BoardState>(initializeBoard());
    const [currentPlayer, setCurrentPlayer] = useState<Player>('black');
    const [winner, setWinner] = useState<Player | 'draw' | null>(null);

    // セルをクリックしたときの処理
    const handleCellClick = (row: number, col: number) => {
        // 石を置く
        const newBoard = makeMove(board, row, col, currentPlayer);
        // 石を置けた場合
        if (newBoard) {
            setBoard(newBoard);
            const winner = checkWinner(newBoard);
            if (winner) {
                // 勝者がいる場合、アニメーションでお知らせ
                setWinner(winner);
            } else {
                // 次のプレイヤーのターンに切り替え
                setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
            }
        }
    };

    const handleWinnerDismiss = () => {
        setWinner(null);
        setBoard(initializeBoard()); // ゲームをリセット
        setCurrentPlayer('black'); // 初期プレイヤーをセット
    };

    // 現在のプレイヤーが動けない場合に自動でターンをスキップする
    useEffect(() => {
        if (winner === null && !canMakeMove(board, currentPlayer)) {
            alert(`${currentPlayer.toUpperCase()}はパスします`);
            setCurrentPlayer(currentPlayer === 'black' ? 'white' : 'black');
        }
    }, [board, currentPlayer, winner]);

    return (
        <div className="container mx-auto p-4">
          <Board board={board} onCellClick={handleCellClick} />
          <p className="text-center text-lg font-bold mt-4">現在のプレイヤー: {currentPlayer.toUpperCase()}</p>
          {winner && <WinnerAnnouncement winner={winner} onDismiss={handleWinnerDismiss} />}
        </div>
    );
}
