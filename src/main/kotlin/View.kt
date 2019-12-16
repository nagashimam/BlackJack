import js.externals.jquery.JQueryEventObject
import js.externals.jquery.jQuery
import kotlin.browser.document
import kotlin.browser.window

private const val draw = "#more"
private const val stop = "#stop"
private const val cpu_hand = "#cpu-hand"
private const val human_hand = "#human-hand"
private const val click = "click"
private const val src = "src"
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
        jQuery(draw).prop(disabled, isDisabled)
        jQuery(stop).prop(disabled, isDisabled)
    }

    override fun updateHumanScore(humanScore: Int) {
        jQuery(humanScore).html("<p>$humanScore</p>")
    }

    override fun placeHumanHand(imagePath: String) {
        placeCard(human_hand, imagePath)
    }

    override fun placeComputerHand(imagePath: String) {
        placeCard(cpu_hand, imagePath)
    }

    override fun flipSecondComputerCard(path: String) {
        jQuery("$cpu_hand img:last").attr(src, path)
    }

    private fun placeCard(selector: String, path: String) {
        jQuery(selector).append("<img class=\"col-1 pl-1 pr-1\" src=\"${path}\" alt=\"\">")
    }


    override fun showMessage(msg: String) {
        window.alert(msg)
    }

    override fun showWinningPercentage(winningPercentage: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }


}
