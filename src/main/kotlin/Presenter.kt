import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.w3c.dom.get
import kotlin.browser.localStorage

/**
 * 出入力と実際の処理を仲立ちするクラス
 */

private const val lsKey = "winsOverLoses"
private const val win = "win"
private const val lose = "lose"

class Presenter() : Contract.Presenter, Contract.InteractorOutput {
    private val view: Contract.View = View(this)
    private val interactor: Contract.Interactor = Interactor(this)
    private val records = localStorage[lsKey]?.let { JSON.parse<Array<String>>(it) } ?: arrayOf()

    init {

        val winningPercentage =
            if (records.isEmpty()) {
                "0%"
            } else {
                val totalMatches = records.size
                val wins = records.count { it == win }
                (wins * 100 / totalMatches).toString().concat("%")
            }

        view.showWinningPercentage(winningPercentage)
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
        val isHumanWin = when {
            isComputerBurst -> true
            else -> humanScore > computerScore
        }

        val result = if (isHumanWin) {
            records.plus(win) to "あなたの勝ちです。"
        } else {
            records.plus(lose) to "あなたの負けです。"
        }

        localStorage.setItem(lsKey, JSON.stringify(result.first))
        showMessageWithDelay("コンピューターの得点:${computerScore}\nあなたの得点:${humanScore}\n${result.second}")
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
