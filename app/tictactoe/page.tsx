import Footer from "@/components/Footer";

export default function TicTacToe() {
  return (
    <div className="min-h-screen">
      <div className="lg:ml-64 lg:py-10 lg:px-48 lg:mt-0 mt-24 p-6 min-h-screen">
        <div className="lg:flex lg:flex-row block justify-between items-center">
          <div className="lg:mb-0 mb-2">
            <h1 className="lg:text-5xl text-3xl font-semibold">&apos;Endless&apos; TicTacToe</h1>
            <h2 className="lg:text-xl text-sm text-neutral-400">The game never ends in a tie!</h2>
          </div>
          <a href="tictactoe/play" className="rounded-md py-2 px-4 bg-[#007FFF] hover:bg-[#0065CC] cursor-pointer transition-colors text-neutral-200 hidden lg:block">Play Now!</a>
        </div>
        <img src="/images/tictactoeMOCK.png" alt="tic tac toe" className="max-w-[80%] mx-auto" />
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <p className="lg:text-base text-sm">More often than not, normal games of tic tac toe end in a tie. However, in this version of the game, each player is only allowed to have up to 3 X&apos;s or O&apos;s at any placed at any given moment, meaning that the game continues until one of the players wins. When a fourth X or O is placed, that player&apos;s oldest piece is removed from the board. You can choose to play against another real person by taking turns moving, or play against the computer!</p>
        <br className="lg:block hidden" />
        <Footer />
      </div>
    </div>
  );
}