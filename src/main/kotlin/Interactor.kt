class Interactor(private val presenter: Contract.InteractorOutput) : Contract.Interactor {
    private val human = Human()
    private val deck = Deck()
    private val computer = Computer()

    // 初期化処理
    override fun setUp() {

    }

    // 手札を引く
    override fun drawMore() {
        if (human.isOver()) return

        drawAndShowHumanHand()

        if (human.isOver()) {
            presenter.showResult("現在の得点:\n${human.calculateScore()}\nあなたの負けです。")
        }
    }

    private fun drawAndShowHumanHand() {
        human.draw(deck).let { result ->
            presenter.showHumanHand(result)
            presenter.updateHumanScore(human.calculateScore())
        }
    }


    // プレーヤーが引くのをやめ、コンピューターの分を引く
    override fun stopDrawing() {
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

    // 人間が勝ったかどうかを判定
    private fun isHumanWin(): Boolean {
        return computer.calculateScore().let { computerScore ->
            when {
                computerScore > 21 -> true
                else -> computerScore < human.calculateScore()
            }
        }
    }

    // プレーヤーの最終得点を表示
    private fun finalScoreMsg(player: Player) = ("${player.whichSide()}の最終得点:${player.calculateScore()}")

}