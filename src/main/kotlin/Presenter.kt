import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

/**
 * 出入力と実際の処理を仲立ちするクラス
 */
class Presenter() : Contract.Presenter, Contract.InteractorOutput {
    private val view: Contract.View = View(this)
    private val interactor: Contract.Interactor = Interactor(this)

    init {
        interactor.setUp()
    }

    override fun drawMore() {
        view.disableInput()
        interactor.drawHumanCard()
    }

    override fun stopDrawing() {
        view.disableInput()
        interactor.startDrawingComputerCard()
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
                GlobalScope.launch {
                    delay(1000L)
                    showMessage("あなたの得点:${humanScore}\nあなたの負けです")
                }
            } else {
                enableInput()
            }
        }
    }

    override fun updateComputerStatus(path: String) {
        view.placeComputerHand(path)
    }

}
