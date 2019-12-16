import js.externals.jquery.JQueryEventObject
import js.externals.jquery.jQuery

private const val draw = "#more"
private const val stop = "#stop"
private const val cpu_hand = "#cpu-hand"
private const val human_hand = "#human-hand"
private const val click = "click"
private const val disabled = "disabled"

class View(private val presenter: Contract.Presenter) : Contract.View {

    init {
        setOnClick(draw) { _, _ -> presenter.drawMore() }
        setOnClick(stop) { _, _ -> presenter.stopDrawing() }
    }

    private fun setOnClick(selector: String, function: (JQueryEventObject, Any) -> Any) {
        jQuery(selector).on(click, function)
    }

    override fun enableInput() {
        setButtonAvailability(false)
    }

    override fun disableInput() {
        setButtonAvailability(true)
    }

    private fun setButtonAvailability(isDisabled: Boolean) {
        jQuery(draw).attr(disabled, isDisabled.toString())
        jQuery(stop).attr(disabled, isDisabled.toString())
    }

    override fun updateHumanScore(score: Int) {
        jQuery(score).html("<p>$score</p>")
    }

    override fun showHumanHand(path: String) {
        placeCard(human_hand, path)
    }

    override fun showComputerHand(path: String) {
        placeCard(cpu_hand, path)
    }

    private fun placeCard(selector: String, path: String) {
        jQuery(selector).append("<img class=\"col-1 pl-1 pr-1\" src=\"${path}\" alt=\"\">")
    }


    override fun showAlert(msg: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showWinningPercentage() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }


}
