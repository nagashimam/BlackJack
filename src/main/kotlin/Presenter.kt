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
        interactor.drawMore()
    }

    override fun stopDrawing() {
        view.disableInput()
        interactor.stopDrawing()
    }

    override fun showResult(msg: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showHumanHand(path: String) {
        view.showComputerHand(path)
    }

    override fun showComputerHand(path: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun updateHumanScore(score: Int) {
        view.updateHumanScore(score)
    }
}
