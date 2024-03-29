interface Contract {

    interface View {
        fun enableInput()
        fun disableInput()
        fun updateHumanScore(humanScore: Int)
        fun placeHumanHand(imagePath: String)
        fun placeComputerHand(imagePath: String)
        fun flipSecondComputerCard(path: String)
        fun showMessage(msg: String)
        fun showWinningPercentage(winningPercentage: String)
        fun reload()
    }

    interface Presenter {
        fun drawMore()
        fun stopDrawing()
    }

    interface Interactor {
        fun setUp()
        fun drawHumanCard()
        fun startDrawingComputerCard()
    }

    interface InteractorOutput {
        fun flipSecondComputerCard(path: String)
        fun sendFinalResult(humanScore: Int, computerScore: Int, isComputerBurst: Boolean)
        fun updateHumanStatus(humanScore: Int, imagePath: String, isHumanBurst: Boolean)
        fun updateComputerStatus(path: String)
    }
}