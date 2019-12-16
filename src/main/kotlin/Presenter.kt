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
        val msg = when {
            isComputerBurst || humanScore > computerScore -> "あなたの勝ちです。"
            else -> "あなたの負けです。"
        }
        showMessageWithDelay("コンピューターの得点:${computerScore}\nあなたの得点:${humanScore}\n$msg")
    }

    override fun updateHumanStatus(humanScore: Int, imagePath: String, isHumanBurst: Boolean) {
        with(view) {
            updateHumanScore(humanScore)
            placeHumanHand(imagePath)
            if (isHumanBurst) {
                showMessageWithDelay("あなたの得点:${humanScore}\nあなたの負けです")
            } else {
                enableInput()
            }
        }
    }

    override fun updateComputerStatus(path: String) {
        view.placeComputerHand(path)
    }

    private fun showMessageWithDelay(msg: String) {
        GlobalScope.launch {
            delay(1000L)
            view.showMessage(msg)
            view.reload()
        }
    }
}
