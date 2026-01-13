import React, { useState } from "react";
import { Scissors, FileText, Circle } from "lucide-react";

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ player: 0, computer: 0, draws: 0 });
  const [showResult, setShowResult] = useState(false);

  const options = ["scissors", "paper", "rock"];

  const resultMatrix = [
    ["Draw", "Computer Wins", "You Win"],
    ["You Win", "Draw", "Computer Wins"],
    ["Computer Wins", "You Win", "Draw"],
  ];

  const getIcon = (choice) => {
    switch (choice) {
      case "scissors":
        return <Scissors className="w-16 h-16" />;
      case "paper":
        return <FileText className="w-16 h-16" />;
      case "rock":
        return <Circle className="w-16 h-16" />;
      default:
        return null;
    }
  };

  const play = (playerIndex) => {
    const computerIndex = Math.floor(Math.random() * 3);
    const playerChoiceName = options[playerIndex];
    const computerChoiceName = options[computerIndex];

    setPlayerChoice(playerChoiceName);
    setComputerChoice(computerChoiceName);

    const gameResult = resultMatrix[computerIndex][playerIndex];
    setResult(gameResult);
    setShowResult(true);

    // Update score
    if (gameResult === "You Win") {
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
    } else if (gameResult === "Computer Wins") {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
    } else {
      setScore((prev) => ({ ...prev, draws: prev.draws + 1 }));
    }
  };

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setShowResult(false);
  };

  const resetScore = () => {
    setScore({ player: 0, computer: 0, draws: 0 });
    reset();
  };

  const getResultColor = () => {
    if (result === "You Win") return "text-green-600";
    if (result === "Computer Wins") return "text-red-600";
    return "text-yellow-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Rock Paper Scissors
        </h1>
        <p className="text-center text-gray-600 mb-6">Choose your weapon!</p>

        {/* Score Board */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">You</p>
              <p className="text-2xl font-bold text-purple-600">
                {score.player}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Draws</p>
              <p className="text-2xl font-bold text-yellow-600">
                {score.draws}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Computer</p>
              <p className="text-2xl font-bold text-red-600">
                {score.computer}
              </p>
            </div>
          </div>
        </div>

        {/* Game Area */}
        {!showResult ? (
          <div>
            <p className="text-center text-lg font-semibold mb-4 text-gray-700">
              Make your choice:
            </p>
            <div className="grid grid-cols-3 gap-4">
              {/* Scissors */}
              <button
                onClick={() => play(0)}
                className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 active:scale-95 flex flex-col items-center gap-2"
              >
                <Scissors className="w-16 h-16" />
                <span className="font-semibold">Scissors</span>
              </button>

              {/* Paper */}
              <button
                onClick={() => play(1)}
                className="bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 active:scale-95 flex flex-col items-center gap-2"
              >
                <FileText className="w-16 h-16" />
                <span className="font-semibold">Paper</span>
              </button>

              {/* Rock */}
              <button
                onClick={() => play(2)}
                className="bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105 active:scale-95 flex flex-col items-center gap-2"
              >
                <Circle className="w-16 h-16" />
                <span className="font-semibold">Rock</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            {/* Result Display */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <p className="text-sm text-gray-600 mb-2">You chose:</p>
                  <div className="flex flex-col items-center text-purple-600">
                    {getIcon(playerChoice)}
                    <p className="font-bold mt-2 capitalize">{playerChoice}</p>
                  </div>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl">
                  <p className="text-sm text-gray-600 mb-2">Computer chose:</p>
                  <div className="flex flex-col items-center text-red-600">
                    {getIcon(computerChoice)}
                    <p className="font-bold mt-2 capitalize">
                      {computerChoice}
                    </p>
                  </div>
                </div>
              </div>

              {/* Result Text */}
              <div className={`text-3xl font-bold mb-6 ${getResultColor()}`}>
                {result === "Draw"
                  ? "🤝 "
                  : result === "You Win"
                  ? "🎉 "
                  : "😔 "}
                {result}
                {result === "Draw"
                  ? " 🤝"
                  : result === "You Win"
                  ? " 🎉"
                  : " 😔"}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={reset}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transform transition hover:scale-105"
              >
                Play Again
              </button>
              <button
                onClick={resetScore}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg transform transition hover:scale-105"
              >
                Reset Score
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
