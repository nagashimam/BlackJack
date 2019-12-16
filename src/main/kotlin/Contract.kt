interface Contract {

    interface View {
        fun enableInput()
        fun disableInput()
        fun updateHumanScore(humanScore: Int)
        fun placeHumanHand(imagePath: String)
        fun placeComputerHand(imagePath: String)
        fun showMessage(msg: String)
        fun showWinningPercentage(winningPercentage: String)
    }

    interface Presenter {
        fun drawMore()
        fun stopDrawing()
    }

    interface Interactor {
        fun drawHumanCard()
        fun drawComputerCard()
    }

    interface InteractorOutput {
        fun sendFinalResult(humanScore: Int, computerScore: Int, isComputerBurst: Boolean)
        fun updateHumanStatus(humanScore: Int, imagePath: String, isHumanBurst: Boolean)
        fun updateComputerStatus(path: String)
    }
}