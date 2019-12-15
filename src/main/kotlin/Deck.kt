/**
 * トランプのマークを表すEnum
 */
enum class Suit() {
    CLUB(),
    SPADE(),
    DIAMOND(),
    HEART();
}

/**
 * トランプの数字とその得点を表すEnum
 */
enum class Number(val score: Int) {
    ONE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5),
    SIX(6),
    SEVEN(7),
    EIGHT(8),
    NINE(9),
    TEN(10),
    ELEVEN(10),
    TWELVE(10),
    THIRTEEN(10);
}

/**
 * SuitとNumberを保持するクラス
 */
class Card(val suit: Suit, val number: Number) {
    override fun toString(): String = "${suit}の${number}"
}

/**
 * トランプの山札を表すクラス
 */
class Deck {

    private val deck: MutableList<Card> by lazy { initializeDeck() }

    private fun initializeDeck(): MutableList<Card> {
        return mutableListOf<Card>()
            .apply { Suit.values().forEach { suit -> addCardsOf(suit) } }
            .apply { shuffle() }
    }

    private fun MutableList<Card>.addCardsOf(suit: Suit) =
        Number.values().forEach { number -> add(Card(suit, number)) }

    fun drawCard(): Card {
        return if (deck.isEmpty()) {
            throw IllegalStateException("カードがもうありません")
        } else {
            deck.removeAt(0)
        }
    }

}
