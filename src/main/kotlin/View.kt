import js.externals.jquery.JQueryEventObject
import js.externals.jquery.jQuery

private const val draw = "#more"
private const val stop = "#stop"
private const val click = "click"

class View(private val presenter: Contract.Presenter) : Contract.View {

    init {
        setOnClick(draw) { _, _ -> presenter.drawMore() }
        setOnClick(stop) { _, _ -> presenter.stopDrawing() }
    }

    private fun setOnClick(selector: String, function: (JQueryEventObject, Any) -> Any) {
        jQuery(selector).on(click, function)
    }

    override fun enableInput() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun disableInput() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun updateHumanScore(score: Int) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showHumanHand(path: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showComputerHand(path: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showAlert(msg: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showWinningPercentage() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }


}
