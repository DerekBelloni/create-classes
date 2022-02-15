import { ProxyState } from "../AppState.js";
import { Aardvark } from "../Models/aardvark.js";
import { Beaver } from "../Models/beaver.js";
import { Carp } from "../Models/carp.js";
import { Doggy } from "../Models/doggy.js";
import { Elephant } from "../Models/elephant.js";
import { Fancycat } from "../Models/fancycat.js";
import { Gator } from "../Models/gator.js";
import { Hyena } from "../Models/hyena.js";
import { Iguana } from "../Models/iguana.js";
import { Jackelope } from "../Models/jackelope.js";
import { Kangaroo } from "../Models/kangaroo.js";
import { Llama } from "../Models/llama.js";
import { Mongoose } from "../Models/mongoose.js";
import { Nicebird } from "../Models/nicebird.js";
import { Orangebear } from "../Models/orangebear.js";
import { Parrot } from "../Models/parrot.js";
import { Quail } from "../Models/quail.js";
import { Rat } from "../Models/rat.js";
import { Snake } from "../Models/snake.js";
import { Trex } from "../Models/trex.js";
import { Umbrella } from "../Models/umbrella.js";
import { Value } from "../Models/Value.js";
import { Vulture } from "../Models/vulture.js";
import { Xylophone } from "../Models/xylophone.js";
import { Yeti } from "../Models/yeti.js";
import { Zebra } from "../Models/zebra.js";

let Aardvark1 = new Aardvark('Judd', false, 38, true)
let Beaver1 = new Beaver('John', true, true, true)
let Carp1 = new Carp('Jessie', true, true)
let Doggy1 = new Doggy('Kermit', true, true)
let Elephant1 = new Elephant('Chester', true, true)
let Fancycat1 = new Fancycat('Kamal', true, true)
let Gator1 = new Gator('Percy', true, true)
let Hyena1 = new Hyena('Josh', true, 37)
let Iguana1 = new Iguana('Lester', 69, true)
let Jackelope1 = new Jackelope('Moe', 21, true)
let Kangaroo1 = new Kangaroo('Jeffrey', 12, true, true)
let LLama1 = new Llama('Laura', 17, true)
let Mongoose1 = new Mongoose('Maurice', 89, true)
let Nicebird1 = new Nicebird('Patty', 48, true)
let Orangebear1 = new Orangebear('Mustard', 78, true)
let Parrot1 = new Parrot('Earl', 16, true, true)
let Quail1 = new Quail('Mugsy', true, true)
let Rat1 = new Rat('Stacy', 87, true)
let Snake1 = new Snake('Louis', 16, true)
let Trex1 = new Trex('Nancy', 24, true)
let Umbrella1 = new Umbrella('John', true, true)
let Vulture1 = new Vulture('Vinny', 56)
let Xylophone1 = new Xylophone('Bruce', 25, true)
let Yeti1 = new Yeti('Freddy', 21)
let Zebra1 = new Zebra('Zoe', 31, true)
class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const values = ProxyState.values.filter(v => v.id !== id)
    ProxyState.values = values
  }

  whatsUpAardvark() {
    Aardvark1.whatsUpAardvark()
  }

  whatsUpBeaver() {
    Beaver1.whatsUpBeaver()
  }

  whatsUpCarp() {
    Carp1.whatsUpCarp()
  }

  whatsUpDoggy() {
    Doggy1.whatsUpDoggy()
  }

  whatsUpElephant() {
    Elephant1.whatsUpElephant()
  }

  whatsUpFancyCat() {
    Fancycat1.whatsUpCat()
  }

  whatsUpGator() {
    Gator1.whatsUpGator()
  }

  whatsUpHyena() {
    Hyena1.whatsUpHyena()
  }

  whatsUpIguana() {
    Iguana1.whatUpIguana()
  }

  whatsUpJackelope() {
    Jackelope1.whatsUpJackelope()
  }

  whatsUpKangaroo() {
    Kangaroo1.whatsUpKangaroo()
  }

  whatsUpLlama() {
    LLama1.whatsUpLlama()
  }

  whatsUpMongoose() {
    Mongoose1.whatUpMongoose()
  }

  whatsUpNiceBird() {
    Nicebird1.whatUpNiceBird()
  }

  whatsUpOrangeBear() {
    Orangebear1.whatUpOrangeBear()
  }

  whatsUpParrot() {
    Parrot1.whatUpParrot()
  }
  whatsUpQuail() {
    Quail1.whatsUpQuail()
  }

  whatsUpRat() {
    Rat1.whatsUpRat()
  }

  whatsUpSnake() {
    Snake1.whatsUpSnake()
  }

  whatsUpTrex() {
    Trex1.whatsUpTRex()
  }

  whatsUpUmbrella() {
    Umbrella1.whatsUpUmbrella()
  }

  whatsUpVulture() {
    Vulture1.whatsUpVulture()
  }

  whatsUpXylophone() {
    Xylophone1.whatsUpXylophone()
  }

  whatsUpYeti() {
    Yeti1.whatsUpYeti()
  }

  whatsUpZebra() {
    Zebra1.whatsUpZebra()
  }

  sayName() {
    console.log()
  }
}

export const valuesService = new ValuesService();

