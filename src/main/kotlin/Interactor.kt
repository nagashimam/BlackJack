class Interactor(private val presenter: Contract.InteractorOutput) : Contract.Interactor {
    private val human = Human()
    private val deck = Deck()
    private val computer = Computer()

    override fun flipSecondComputerCard() {
        presenter.flipSecondComputerCard(computer.flipSecondCard())
    }

    // 手札を引く
    override fun drawHumanCard() {
        if (human.hasBurst()) return
        human.draw(deck).let { card -> presenter.updateHumanStatus(human.calculateScore(), card, human.hasBurst()) }
    }


    // プレーヤーが引くのをやめ、コンピューターの分を引く
    override fun drawComputerCard() {
//        // 表示していなかったコンピューターの2枚目の手札を表示
//        presenter.showMessage("コンピューターの2枚目は${computer.flipSecondCard()}")
//        // 上限を超えるまでコンピューターが手札を引く
//        computer.drawUntilLimit(deck).forEach { result -> presenter.showMessage(result) }
//
//        // それぞれ最終得点を表示
//        finalScoreMsg(computer)
//        finalScoreMsg(human)
//
//        // 結果を表示
//        presenter.showMessage(
//            if (isHumanWin()) {
//                "あなたの勝ちです。"
//            } else {
//                "あなたの負けです。"
//            }
//        )
    }
}