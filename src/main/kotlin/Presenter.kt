/**
 * 出入力と実際の処理を仲立ちするクラス
 */
class Presenter() : Contract.Presenter, Contract.InteractorOutput {
    private val view: Contract.View = View(this)
    private val interactor: Contract.Interactor = Interactor(this)

    init {
        with(interactor) {
            drawHumanCard()
            drawHumanCard()
            drawComputerCard()
            drawComputerCard()
        }
        view.enableInput()
    }

    override fun drawMore() {
        view.disableInput()
        interactor.drawHumanCard()
    }

    override fun stopDrawing() {
        view.disableInput()
        interactor.flipSecondComputerCard()
        interactor.drawComputerCard()
    }

    override fun flipSecondComputerCard(path: String) {
        view.flipSecondComputerCard(path)
    }

    override fun sendFinalResult(humanScore: Int, computerScore: Int, isComputerBurst: Boolean) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun updateHumanStatus(humanScore: Int, imagePath: String, isHumanBurst: Boolean) {
        with(view) {
            updateHumanScore(humanScore)
            placeHumanHand(imagePath)
            if (isHumanBurst) {
                showMessage("あなたの得点:${humanScore}\nあなたの負けです")
            } else {
                enableInput()
            }
        }
    }


    override fun updateComputerStatus(path: String) {
        view.placeComputerHand(path)
    }

}
