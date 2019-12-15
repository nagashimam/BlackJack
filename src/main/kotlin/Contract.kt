interface Contract {

    interface View {
        fun enableInput()
        fun disableInput()
        fun updateHumanScore(score: Int)
        fun showHumanHand(path: String)
        fun showComputerHand(path: String)
        fun showAlert(msg: String)
        fun showWinningPercentage()
    }

    interface Presenter {
        fun drawMore()
        fun stopDrawing()
    }

    interface Interactor {
        fun setUp()
        fun drawMore()
        fun stopDrawing()
    }

    interface InteractorOutput {
        fun showResult(msg: String)
        fun showHumanHand(path: String)
        fun showComputerHand(path: String)
        fun updateHumanScore(score: Int)
    }
}