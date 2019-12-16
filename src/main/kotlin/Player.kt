/**
 * Player(コンピューター又は人間)を表すクラス
 *
 * sealedを使うと、他のファイルで使えなくなる
 * どうしてこの書き方をしたかはwhichSide()内のコメントを参照
 */
sealed class Player {
    // 手札
    protected val hands = mutableListOf<Card>()

    // 手札にカードを追加し、結果を文字列として返す
    // グラフィックを付けるときには、返す文字列を画像のパスにする
    fun draw(deck: Deck): String {
        return deck.drawCard().let { card ->
            hands.add(card)
            drawResult(card)
        }
    }

    // カードを引いた結果
    abstract fun drawResult(card: Card): String

    private val isAce: (Card) -> Boolean = { card -> card.number == Number.ONE }
    private val countAceAsOne: () -> Int = { hands.aces().size }
    private val countAceAsEleven: () -> Int = {
        if (hands.aces().isEmpty()) {
            0
        } else {
            hands.aces().size + 10
        }
    }

    private fun List<Card>.aces() = filter(isAce)
    private fun List<Card>.nonAceCards() = filterNot(isAce)

    fun calculateScore() =
        calculateMaxScore().let {
            if (it > 21) {
                calculateMinScore()
            } else {
                it
            }
        }

    private fun calculateScoreOfNonAceCards() = hands.nonAceCards().map { card -> card.number.score }.sum()
    protected fun calculateMinScore() = calculateScoreOfNonAceCards() + countAceAsOne()
    protected fun calculateMaxScore() = calculateScoreOfNonAceCards() + countAceAsEleven()

    // 人間なのか、コンピューターなのかを文字列で返す
    // コンソールでの表示に使う予定
    fun whichSide(): String {
        return when (getInstance()) {
            // when は、全ての分岐をカバーする必要がある
            // Playerはsealedなので、子クラスはこのファイルで定義されているHumanかComputerしかない
            is Human -> "あなた"
            is Computer -> "コンピューター"
            // else -> "?????" ←sealedにしないと、意味のない分岐を書く必要がある
        }
    }

    // 手札の合計点が最大値を超えているのかどうかを返す
    fun hasBurst(): Boolean = calculateScore() > 21

    // 自分を返す(コンピューター or 人間)
    protected abstract fun getInstance(): Player

}

class Human : Player() {
    // 自分を返す(人間)
    override fun getInstance() = this

    // カードを引いた結果を返す
    override fun drawResult(card: Card) = card.toString()

    // 手札を文字列に変える
    // 文字列を直接足し算をすると、遅くなる。一旦StringBuilderに変換して、それから文字列にする
    fun handsToString() = handsToStringBuilder().toString()

    // 手札をStringBuilderに変換する
    private fun handsToStringBuilder() = StringBuilder().apply { hands.forEach { hand -> append("${hand}\n") } }
}

class Computer : Player() {
    // 自分を返す(コンピューター)
    override fun getInstance() = this

    // カードを引いた結果を返す
    override fun drawResult(card: Card): String {
        // 2枚目に引いたカードは、最初は表示しない
        return if (hands.size == 2) {
            "src/main/resources/img/face_down.png.webp"
        } else {
            card.toString()
        }
    }

    // 最後に2枚目のカードがどれだったのかを表示する
    fun flipSecondCard() = hands[1].toString()

    // 最大値を超えるまで引き続ける
    fun drawUntilScoreExceedsLimit(deck: Deck) = drawUntilScoreExceedsLimit(mutableListOf(), deck)

    private tailrec fun drawUntilScoreExceedsLimit(results: MutableList<String>, deck: Deck): List<String> {
        return if (stopsDrawing()) {
            results
        } else {
            results.add(draw(deck))
            drawUntilScoreExceedsLimit(results, deck)
        }
    }

    private fun stopsDrawing(): Boolean {
        fun countAsOneIsBetter(): Boolean {
            if (calculateMinScore() > 11) return true
            return calculateExpectedValue(calculateMinScore()) > calculateExpectedValue(calculateMaxScore())
        }

        return when {
            calculateMinScore() >= 17 -> true
            countAsOneIsBetter() -> false
            else -> calculateMaxScore() >= 17
        }
    }

    private fun calculateExpectedValue(temporaryValue: Int): Double = calculateExpectedValue(temporaryValue.toDouble())

    private tailrec fun calculateExpectedValue(temporaryValue: Double): Double {
        // TODO: ここ>=じゃなきゃだめ...検証が終わったら帰る
        return if (temporaryValue > 17.0) {
            temporaryValue
        } else {
            calculateExpectedValue(temporaryValue + 6.5)
        }
    }

}

