if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BlackJack'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BlackJack'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'BlackJack'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'BlackJack'.");
}
var BlackJack = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Unit = Kotlin.kotlin.Unit;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var L1000 = Kotlin.Long.fromInt(1000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var equals = Kotlin.equals;
  Suit.prototype = Object.create(Enum.prototype);
  Suit.prototype.constructor = Suit;
  Number_0.prototype = Object.create(Enum.prototype);
  Number_0.prototype.constructor = Number_0;
  Human.prototype = Object.create(Player.prototype);
  Human.prototype.constructor = Human;
  Computer.prototype = Object.create(Player.prototype);
  Computer.prototype.constructor = Computer;
  function Contract() {
  }
  function Contract$View() {
  }
  Contract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function Contract$Presenter() {
  }
  Contract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  function Contract$Interactor() {
  }
  Contract$Interactor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Interactor',
    interfaces: []
  };
  function Contract$InteractorOutput() {
  }
  Contract$InteractorOutput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'InteractorOutput',
    interfaces: []
  };
  Contract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Contract',
    interfaces: []
  };
  function Suit(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Suit_initFields() {
    Suit_initFields = function () {
    };
    Suit$CLUB_instance = new Suit('CLUB', 0);
    Suit$SPADE_instance = new Suit('SPADE', 1);
    Suit$DIAMOND_instance = new Suit('DIAMOND', 2);
    Suit$HEART_instance = new Suit('HEART', 3);
  }
  var Suit$CLUB_instance;
  function Suit$CLUB_getInstance() {
    Suit_initFields();
    return Suit$CLUB_instance;
  }
  var Suit$SPADE_instance;
  function Suit$SPADE_getInstance() {
    Suit_initFields();
    return Suit$SPADE_instance;
  }
  var Suit$DIAMOND_instance;
  function Suit$DIAMOND_getInstance() {
    Suit_initFields();
    return Suit$DIAMOND_instance;
  }
  var Suit$HEART_instance;
  function Suit$HEART_getInstance() {
    Suit_initFields();
    return Suit$HEART_instance;
  }
  Suit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Suit',
    interfaces: [Enum]
  };
  function Suit$values() {
    return [Suit$CLUB_getInstance(), Suit$SPADE_getInstance(), Suit$DIAMOND_getInstance(), Suit$HEART_getInstance()];
  }
  Suit.values = Suit$values;
  function Suit$valueOf(name) {
    switch (name) {
      case 'CLUB':
        return Suit$CLUB_getInstance();
      case 'SPADE':
        return Suit$SPADE_getInstance();
      case 'DIAMOND':
        return Suit$DIAMOND_getInstance();
      case 'HEART':
        return Suit$HEART_getInstance();
      default:throwISE('No enum constant Suit.' + name);
    }
  }
  Suit.valueOf_61zpoe$ = Suit$valueOf;
  function Number_0(name, ordinal, score) {
    Enum.call(this);
    this.score = score;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Number_initFields() {
    Number_initFields = function () {
    };
    Number$ONE_instance = new Number_0('ONE', 0, 1);
    Number$TWO_instance = new Number_0('TWO', 1, 2);
    Number$THREE_instance = new Number_0('THREE', 2, 3);
    Number$FOUR_instance = new Number_0('FOUR', 3, 4);
    Number$FIVE_instance = new Number_0('FIVE', 4, 5);
    Number$SIX_instance = new Number_0('SIX', 5, 6);
    Number$SEVEN_instance = new Number_0('SEVEN', 6, 7);
    Number$EIGHT_instance = new Number_0('EIGHT', 7, 8);
    Number$NINE_instance = new Number_0('NINE', 8, 9);
    Number$TEN_instance = new Number_0('TEN', 9, 10);
    Number$ELEVEN_instance = new Number_0('ELEVEN', 10, 10);
    Number$TWELVE_instance = new Number_0('TWELVE', 11, 10);
    Number$THIRTEEN_instance = new Number_0('THIRTEEN', 12, 10);
  }
  var Number$ONE_instance;
  function Number$ONE_getInstance() {
    Number_initFields();
    return Number$ONE_instance;
  }
  var Number$TWO_instance;
  function Number$TWO_getInstance() {
    Number_initFields();
    return Number$TWO_instance;
  }
  var Number$THREE_instance;
  function Number$THREE_getInstance() {
    Number_initFields();
    return Number$THREE_instance;
  }
  var Number$FOUR_instance;
  function Number$FOUR_getInstance() {
    Number_initFields();
    return Number$FOUR_instance;
  }
  var Number$FIVE_instance;
  function Number$FIVE_getInstance() {
    Number_initFields();
    return Number$FIVE_instance;
  }
  var Number$SIX_instance;
  function Number$SIX_getInstance() {
    Number_initFields();
    return Number$SIX_instance;
  }
  var Number$SEVEN_instance;
  function Number$SEVEN_getInstance() {
    Number_initFields();
    return Number$SEVEN_instance;
  }
  var Number$EIGHT_instance;
  function Number$EIGHT_getInstance() {
    Number_initFields();
    return Number$EIGHT_instance;
  }
  var Number$NINE_instance;
  function Number$NINE_getInstance() {
    Number_initFields();
    return Number$NINE_instance;
  }
  var Number$TEN_instance;
  function Number$TEN_getInstance() {
    Number_initFields();
    return Number$TEN_instance;
  }
  var Number$ELEVEN_instance;
  function Number$ELEVEN_getInstance() {
    Number_initFields();
    return Number$ELEVEN_instance;
  }
  var Number$TWELVE_instance;
  function Number$TWELVE_getInstance() {
    Number_initFields();
    return Number$TWELVE_instance;
  }
  var Number$THIRTEEN_instance;
  function Number$THIRTEEN_getInstance() {
    Number_initFields();
    return Number$THIRTEEN_instance;
  }
  Number_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Number',
    interfaces: [Enum]
  };
  function Number$values() {
    return [Number$ONE_getInstance(), Number$TWO_getInstance(), Number$THREE_getInstance(), Number$FOUR_getInstance(), Number$FIVE_getInstance(), Number$SIX_getInstance(), Number$SEVEN_getInstance(), Number$EIGHT_getInstance(), Number$NINE_getInstance(), Number$TEN_getInstance(), Number$ELEVEN_getInstance(), Number$TWELVE_getInstance(), Number$THIRTEEN_getInstance()];
  }
  Number_0.values = Number$values;
  function Number$valueOf(name) {
    switch (name) {
      case 'ONE':
        return Number$ONE_getInstance();
      case 'TWO':
        return Number$TWO_getInstance();
      case 'THREE':
        return Number$THREE_getInstance();
      case 'FOUR':
        return Number$FOUR_getInstance();
      case 'FIVE':
        return Number$FIVE_getInstance();
      case 'SIX':
        return Number$SIX_getInstance();
      case 'SEVEN':
        return Number$SEVEN_getInstance();
      case 'EIGHT':
        return Number$EIGHT_getInstance();
      case 'NINE':
        return Number$NINE_getInstance();
      case 'TEN':
        return Number$TEN_getInstance();
      case 'ELEVEN':
        return Number$ELEVEN_getInstance();
      case 'TWELVE':
        return Number$TWELVE_getInstance();
      case 'THIRTEEN':
        return Number$THIRTEEN_getInstance();
      default:throwISE('No enum constant Number.' + name);
    }
  }
  Number_0.valueOf_61zpoe$ = Number$valueOf;
  function Card(suit, number) {
    this.suit = suit;
    this.number = number;
  }
  Card.prototype.anyToLowerCase_0 = function (any) {
    return any.toString().toLowerCase();
  };
  Card.prototype.toString = function () {
    return 'src/main/resources/img/' + this.anyToLowerCase_0(this.suit) + '/' + this.anyToLowerCase_0(this.number) + '.png.webp';
  };
  Card.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Card',
    interfaces: []
  };
  function Deck() {
    this.deck_9yx10$_0 = lazy(Deck$deck$lambda(this));
  }
  Object.defineProperty(Deck.prototype, 'deck_0', {
    get: function () {
      return this.deck_9yx10$_0.value;
    }
  });
  Deck.prototype.initializeDeck_0 = function () {
    var $receiver = ArrayList_init();
    var $receiver_0 = Suit$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      this.addCardsOf_0($receiver, element);
    }
    shuffle($receiver);
    return $receiver;
  };
  Deck.prototype.addCardsOf_0 = function ($receiver, suit) {
    var $receiver_0 = Number$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      $receiver.add_11rb$(new Card(suit, element));
    }
  };
  Deck.prototype.drawCard = function () {
    var tmp$;
    if (this.deck_0.isEmpty()) {
      throw IllegalStateException_init('\u30AB\u30FC\u30C9\u304C\u3082\u3046\u3042\u308A\u307E\u305B\u3093');
    }
     else {
      tmp$ = this.deck_0.removeAt_za3lpa$(0);
    }
    return tmp$;
  };
  function Deck$deck$lambda(this$Deck) {
    return function () {
      return this$Deck.initializeDeck_0();
    };
  }
  Deck.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deck',
    interfaces: []
  };
  function Interactor(presenter) {
    this.presenter_0 = presenter;
    this.human_0 = new Human();
    this.deck_0 = new Deck();
    this.computer_0 = new Computer();
  }
  Interactor.prototype.setUp = function () {
    this.presenter_0.updateComputerStatus_61zpoe$(this.computer_0.draw_19kg9$(this.deck_0));
    this.presenter_0.updateComputerStatus_61zpoe$(this.computer_0.draw_19kg9$(this.deck_0));
    this.drawHumanCard();
    this.drawHumanCard();
  };
  Interactor.prototype.drawHumanCard = function () {
    if (this.human_0.hasBurst())
      return;
    var card = this.human_0.draw_19kg9$(this.deck_0);
    this.presenter_0.updateHumanStatus_cqw3wz$(this.human_0.calculateScore(), card, this.human_0.hasBurst());
  };
  Interactor.prototype.startDrawingComputerCard = function () {
    this.presenter_0.flipSecondComputerCard_61zpoe$(this.computer_0.flipSecondCard());
    var tmp$;
    tmp$ = this.computer_0.drawUntilScoreExceedsLimit_19kg9$(this.deck_0).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.presenter_0.updateComputerStatus_61zpoe$(element);
    }
    this.presenter_0.sendFinalResult_ydzd23$(this.human_0.calculateScore(), this.computer_0.calculateScore(), this.computer_0.hasBurst());
  };
  Interactor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Interactor',
    interfaces: [Contract$Interactor]
  };
  function main() {
    new Presenter();
  }
  function Player() {
    this.hands = ArrayList_init();
    this.isAce_p3plhu$_0 = Player$isAce$lambda;
    this.countAceAsOne_tumiv$_0 = Player$countAceAsOne$lambda(this);
    this.countAceAsEleven_m3bflm$_0 = Player$countAceAsEleven$lambda(this);
  }
  Player.prototype.draw_19kg9$ = function (deck) {
    var card = deck.drawCard();
    this.hands.add_11rb$(card);
    return this.drawResult_18uuo$(card);
  };
  Player.prototype.aces_sg8lft$_0 = function ($receiver) {
    var predicate = this.isAce_p3plhu$_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    return destination;
  };
  Player.prototype.nonAceCards_n9legq$_0 = function ($receiver) {
    var predicate = this.isAce_p3plhu$_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!predicate(element))
        destination.add_11rb$(element);
    }
    return destination;
  };
  Player.prototype.calculateScore = function () {
    var it = this.calculateMaxScore();
    var block$result;
    if (it > 21) {
      block$result = this.calculateMinScore();
    }
     else {
      block$result = it;
    }
    return block$result;
  };
  Player.prototype.calculateScoreOfNonAceCards_ucb0jn$_0 = function () {
    var $receiver = this.nonAceCards_n9legq$_0(this.hands);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.number.score);
    }
    return sum(destination);
  };
  Player.prototype.calculateMinScore = function () {
    return this.calculateScoreOfNonAceCards_ucb0jn$_0() + this.countAceAsOne_tumiv$_0() | 0;
  };
  Player.prototype.calculateMaxScore = function () {
    return this.calculateScoreOfNonAceCards_ucb0jn$_0() + this.countAceAsEleven_m3bflm$_0() | 0;
  };
  Player.prototype.whichSide = function () {
    var tmp$, tmp$_0;
    tmp$ = this.getInstance();
    if (Kotlin.isType(tmp$, Human))
      tmp$_0 = '\u3042\u306A\u305F';
    else if (Kotlin.isType(tmp$, Computer))
      tmp$_0 = '\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC';
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return tmp$_0;
  };
  Player.prototype.hasBurst = function () {
    return this.calculateScore() > 21;
  };
  function Player$isAce$lambda(card) {
    return card.number === Number$ONE_getInstance();
  }
  function Player$countAceAsOne$lambda(this$Player) {
    return function () {
      return this$Player.aces_sg8lft$_0(this$Player.hands).size;
    };
  }
  function Player$countAceAsEleven$lambda(this$Player) {
    return function () {
      if (this$Player.aces_sg8lft$_0(this$Player.hands).isEmpty()) {
        return 0;
      }
       else {
        return this$Player.aces_sg8lft$_0(this$Player.hands).size + 10 | 0;
      }
    };
  }
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: []
  };
  function Human() {
    Player.call(this);
  }
  Human.prototype.getInstance = function () {
    return this;
  };
  Human.prototype.drawResult_18uuo$ = function (card) {
    return card.toString();
  };
  Human.prototype.handsToString = function () {
    return this.handsToStringBuilder_0().toString();
  };
  Human.prototype.handsToStringBuilder_0 = function () {
    var $receiver = StringBuilder_init();
    var tmp$;
    tmp$ = this.hands.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_gw00v9$(element.toString() + '\n');
    }
    return $receiver;
  };
  Human.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Human',
    interfaces: [Player]
  };
  function Computer() {
    Player.call(this);
  }
  Computer.prototype.getInstance = function () {
    return this;
  };
  Computer.prototype.drawResult_18uuo$ = function (card) {
    var tmp$;
    if (this.hands.size === 2) {
      tmp$ = 'src/main/resources/img/face_down.png.webp';
    }
     else {
      tmp$ = card.toString();
    }
    return tmp$;
  };
  Computer.prototype.flipSecondCard = function () {
    return this.hands.get_za3lpa$(1).toString();
  };
  Computer.prototype.drawUntilScoreExceedsLimit_19kg9$ = function (deck) {
    return this.drawUntilScoreExceedsLimit_0(ArrayList_init(), deck);
  };
  Computer.prototype.drawUntilScoreExceedsLimit_0 = function (results, deck) {
    var tmp$;
    if (this.stopsDrawing_0()) {
      tmp$ = results;
    }
     else {
      results.add_11rb$(this.draw_19kg9$(deck));
      tmp$ = this.drawUntilScoreExceedsLimit_0(results, deck);
    }
    return tmp$;
  };
  function Computer$stopsDrawing$countAsOneIsBetter(this$Computer) {
    return function () {
      if (this$Computer.calculateMinScore() > 11)
        return true;
      return this$Computer.calculateExpectedValue_0(this$Computer.calculateMinScore()) > this$Computer.calculateExpectedValue_0(this$Computer.calculateMaxScore());
    };
  }
  Computer.prototype.stopsDrawing_0 = function () {
    var tmp$;
    var countAsOneIsBetter = Computer$stopsDrawing$countAsOneIsBetter(this);
    if (this.calculateMinScore() >= 17)
      tmp$ = true;
    else if (countAsOneIsBetter())
      tmp$ = false;
    else
      tmp$ = this.calculateMaxScore() >= 17;
    return tmp$;
  };
  Computer.prototype.calculateExpectedValue_0 = function (temporaryValue) {
    return this.calculateExpectedValue_1(temporaryValue);
  };
  Computer.prototype.calculateExpectedValue_1 = function (temporaryValue) {
    var tmp$;
    if (temporaryValue > 17.0) {
      tmp$ = temporaryValue;
    }
     else {
      tmp$ = this.calculateExpectedValue_1(temporaryValue + 6.5);
    }
    return tmp$;
  };
  Computer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Computer',
    interfaces: [Player]
  };
  var lsKey;
  var win;
  var lose;
  function Presenter() {
    this.view_0 = new View(this);
    this.interactor_0 = new Interactor(this);
    var tmp$, tmp$_0, tmp$_1;
    this.records_0 = (tmp$_0 = (tmp$ = localStorage[lsKey]) != null ? JSON.parse(tmp$) : null) != null ? tmp$_0 : [];
    if (this.records_0.length === 0) {
      tmp$_1 = '0%';
    }
     else {
      var totalMatches = this.records_0.length;
      var $receiver = this.records_0;
      var tmp$_2;
      var count = 0;
      for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
        var element = $receiver[tmp$_2];
        if (equals(element, win))
          count = count + 1 | 0;
      }
      var wins = count;
      tmp$_1 = ((wins * 100 | 0) / totalMatches | 0).toString().concat('%');
    }
    var winningPercentage = tmp$_1;
    this.view_0.showWinningPercentage_61zpoe$(winningPercentage);
    this.interactor_0.setUp();
  }
  Presenter.prototype.drawMore = function () {
    this.view_0.disableInput();
    this.interactor_0.drawHumanCard();
  };
  Presenter.prototype.stopDrawing = function () {
    this.view_0.disableInput();
    this.interactor_0.startDrawingComputerCard();
  };
  Presenter.prototype.flipSecondComputerCard_61zpoe$ = function (path) {
    this.view_0.flipSecondComputerCard_61zpoe$(path);
  };
  Presenter.prototype.sendFinalResult_ydzd23$ = function (humanScore, computerScore, isComputerBurst) {
    var tmp$, tmp$_0;
    if (isComputerBurst)
      tmp$ = true;
    else
      tmp$ = humanScore > computerScore;
    var isHumanWin = tmp$;
    if (isHumanWin) {
      var $receiver = this.records_0;
      var element = win;
      tmp$_0 = to($receiver.concat([element]), '\u3042\u306A\u305F\u306E\u52DD\u3061\u3067\u3059\u3002');
    }
     else {
      var $receiver_0 = this.records_0;
      var element_0 = lose;
      tmp$_0 = to($receiver_0.concat([element_0]), '\u3042\u306A\u305F\u306E\u8CA0\u3051\u3067\u3059\u3002');
    }
    var result = tmp$_0;
    localStorage.setItem(lsKey, JSON.stringify(result.first));
    this.showMessageWithDelay_0('\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u306E\u5F97\u70B9:' + computerScore + '\n' + '\u3042\u306A\u305F\u306E\u5F97\u70B9:' + humanScore + '\n' + result.second);
  };
  Presenter.prototype.updateHumanStatus_cqw3wz$ = function (humanScore, imagePath, isHumanBurst) {
    var $receiver = this.view_0;
    $receiver.updateHumanScore_za3lpa$(humanScore);
    $receiver.placeHumanHand_61zpoe$(imagePath);
    if (isHumanBurst) {
      var tmp$ = localStorage;
      var tmp$_0 = lsKey;
      var $receiver_0 = this.records_0;
      var element = lose;
      tmp$.setItem(tmp$_0, JSON.stringify($receiver_0.concat([element])));
      this.showMessageWithDelay_0('\u3042\u306A\u305F\u306E\u5F97\u70B9:' + humanScore + '\n' + '\u3042\u306A\u305F\u306E\u8CA0\u3051\u3067\u3059');
    }
     else {
      $receiver.enableInput();
    }
  };
  Presenter.prototype.updateComputerStatus_61zpoe$ = function (path) {
    this.view_0.placeComputerHand_61zpoe$(path);
  };
  function Coroutine$Presenter$showMessageWithDelay$lambda(this$Presenter_0, closure$msg_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Presenter = this$Presenter_0;
    this.local$closure$msg = closure$msg_0;
  }
  Coroutine$Presenter$showMessageWithDelay$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Presenter$showMessageWithDelay$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Presenter$showMessageWithDelay$lambda.prototype.constructor = Coroutine$Presenter$showMessageWithDelay$lambda;
  Coroutine$Presenter$showMessageWithDelay$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = delay(L1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$Presenter.view_0.showMessage_61zpoe$(this.local$closure$msg);
            return this.local$this$Presenter.view_0.reload(), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Presenter$showMessageWithDelay$lambda(this$Presenter_0, closure$msg_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Presenter$showMessageWithDelay$lambda(this$Presenter_0, closure$msg_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Presenter.prototype.showMessageWithDelay_0 = function (msg) {
    launch(coroutines.GlobalScope, void 0, void 0, Presenter$showMessageWithDelay$lambda(this, msg));
  };
  Presenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Presenter',
    interfaces: [Contract$InteractorOutput, Contract$Presenter]
  };
  var draw;
  var stop;
  var score;
  var winning_percentage;
  var cpu_hand;
  var human_hand;
  var click;
  var src;
  var disabled;
  function View(presenter) {
    this.presenter_0 = presenter;
    this.setOnClick_0(draw, View_init$lambda(this));
    this.setOnClick_0(stop, View_init$lambda_0(this));
  }
  View.prototype.setOnClick_0 = function (selector, function_0) {
    jQuery(selector).on(click, function_0);
  };
  View.prototype.enableInput = function () {
    this.setButtonAvailability_0(false);
  };
  View.prototype.disableInput = function () {
    this.setButtonAvailability_0(true);
  };
  View.prototype.setButtonAvailability_0 = function (isDisabled) {
    jQuery(draw).prop(disabled, isDisabled);
    jQuery(stop).prop(disabled, isDisabled);
  };
  View.prototype.updateHumanScore_za3lpa$ = function (humanScore) {
    jQuery(score).html('<p>' + humanScore + '<\/p>');
  };
  View.prototype.placeHumanHand_61zpoe$ = function (imagePath) {
    this.placeCard_0(human_hand, imagePath);
  };
  View.prototype.placeComputerHand_61zpoe$ = function (imagePath) {
    this.placeCard_0(cpu_hand, imagePath);
  };
  View.prototype.flipSecondComputerCard_61zpoe$ = function (path) {
    jQuery('#cpu-hand img:last').attr(src, path);
  };
  View.prototype.placeCard_0 = function (selector, path) {
    jQuery(selector).append('<img class=' + '"' + 'col-1 pl-1 pr-1' + '"' + ' src=' + '"' + path + '"' + ' alt=' + '"' + '"' + '>');
  };
  View.prototype.showMessage_61zpoe$ = function (msg) {
    window.alert(msg);
  };
  View.prototype.showWinningPercentage_61zpoe$ = function (winningPercentage) {
    jQuery(winning_percentage).html('<p>' + winningPercentage + '<\/p>');
  };
  View.prototype.reload = function () {
    window.location.reload();
  };
  function View_init$lambda(this$View) {
    return function (f, f_0) {
      this$View.presenter_0.drawMore();
      return Unit;
    };
  }
  function View_init$lambda_0(this$View) {
    return function (f, f_0) {
      this$View.presenter_0.stopDrawing();
      return Unit;
    };
  }
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: [Contract$View]
  };
  Contract.View = Contract$View;
  Contract.Presenter = Contract$Presenter;
  Contract.Interactor = Contract$Interactor;
  Contract.InteractorOutput = Contract$InteractorOutput;
  _.Contract = Contract;
  Object.defineProperty(Suit, 'CLUB', {
    get: Suit$CLUB_getInstance
  });
  Object.defineProperty(Suit, 'SPADE', {
    get: Suit$SPADE_getInstance
  });
  Object.defineProperty(Suit, 'DIAMOND', {
    get: Suit$DIAMOND_getInstance
  });
  Object.defineProperty(Suit, 'HEART', {
    get: Suit$HEART_getInstance
  });
  _.Suit = Suit;
  Object.defineProperty(Number_0, 'ONE', {
    get: Number$ONE_getInstance
  });
  Object.defineProperty(Number_0, 'TWO', {
    get: Number$TWO_getInstance
  });
  Object.defineProperty(Number_0, 'THREE', {
    get: Number$THREE_getInstance
  });
  Object.defineProperty(Number_0, 'FOUR', {
    get: Number$FOUR_getInstance
  });
  Object.defineProperty(Number_0, 'FIVE', {
    get: Number$FIVE_getInstance
  });
  Object.defineProperty(Number_0, 'SIX', {
    get: Number$SIX_getInstance
  });
  Object.defineProperty(Number_0, 'SEVEN', {
    get: Number$SEVEN_getInstance
  });
  Object.defineProperty(Number_0, 'EIGHT', {
    get: Number$EIGHT_getInstance
  });
  Object.defineProperty(Number_0, 'NINE', {
    get: Number$NINE_getInstance
  });
  Object.defineProperty(Number_0, 'TEN', {
    get: Number$TEN_getInstance
  });
  Object.defineProperty(Number_0, 'ELEVEN', {
    get: Number$ELEVEN_getInstance
  });
  Object.defineProperty(Number_0, 'TWELVE', {
    get: Number$TWELVE_getInstance
  });
  Object.defineProperty(Number_0, 'THIRTEEN', {
    get: Number$THIRTEEN_getInstance
  });
  _.Number = Number_0;
  _.Card = Card;
  _.Deck = Deck;
  _.Interactor = Interactor;
  _.main = main;
  _.Player = Player;
  _.Human = Human;
  _.Computer = Computer;
  _.Presenter = Presenter;
  _.View = View;
  lsKey = 'winsOverLoses';
  win = 'win';
  lose = 'lose';
  draw = '#more';
  stop = '#stop';
  score = '#score';
  winning_percentage = '#winning_percentage';
  cpu_hand = '#cpu-hand';
  human_hand = '#human-hand';
  click = 'click';
  src = 'src';
  disabled = 'disabled';
  main();
  Kotlin.defineModule('BlackJack', _);
  return _;
}(typeof BlackJack === 'undefined' ? {} : BlackJack, kotlin, this['kotlinx-coroutines-core']);
