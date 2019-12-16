class Interactor(private val presenter: Contract.InteractorOutput) : Contract.Interactor {
    private val human = Human()
    private val deck = Deck()
    private val computer = Computer()

    override fun setUp() {
        presenter.updateComputerStatus(computer.draw(deck))
        presenter.updateComputerStatus(computer.draw(deck))
        drawHumanCard()
        drawHumanCard()
    }

    override fun drawHumanCard() {
        if (human.hasBurst()) return
        human.draw(deck).let { card -> presenter.updateHumanStatus(human.calculateScore(), card, human.hasBurst()) }
    }

    override fun startDrawingComputerCard() {
        presenter.flipSecondComputerCard(computer.flipSecondCard())
        computer.drawUntilScoreExceedsLimit(deck).forEach { card -> presenter.updateComputerStatus(card) }
        presenter.sendFinalResult(human.calculateScore(), computer.calculateScore(), computer.hasBurst())
    }

}