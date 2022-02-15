import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let cardsTemplate = ''
  values.forEach(v => cardsTemplate += v.CardTemplate)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.valuesController.whatsUpZebra()
  ">Add Value</button>  
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}

//Public
export class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }


  }
  sayName() {
    valuesService.sayName()
  }

  whatsUpAard() {
    valuesService.whatsUpAardvark()
  }

  whatsUpBeav() {
    valuesService.whatsUpBeaver()
  }

  whatsUpCarp() {
    valuesService.whatsUpCarp()
  }

  whatsUpDog() {
    valuesService.whatsUpDoggy()
  }

  whatsUpEle() {
    valuesService.whatsUpElephant()
  }

  whatsUpCat() {
    valuesService.whatsUpFancyCat()
  }

  whatsUpGator() {
    valuesService.whatsUpGator()
  }

  whatsUpHyena() {
    valuesService.whatsUpHyena()
  }

  whatsUpIguana() {
    valuesService.whatsUpIguana()
  }

  whatsUpJackelope() {
    valuesService.whatsUpJackelope()
  }

  whatsUpKangaroo() {
    valuesService.whatsUpKangaroo()
  }

  whatsUpLlama() {
    valuesService.whatsUpLlama()
  }

  whatsUpMongoose() {
    valuesService.whatsUpMongoose()
  }

  whatsUpNiceBird() {
    valuesService.whatsUpNiceBird()
  }

  whatsUpOrangeBear() {
    valuesService.whatsUpOrangeBear()
  }

  whatsUpParrot() {
    valuesService.whatsUpParrot()
  }

  whatsUpQuail() {
    valuesService.whatsUpQuail()
  }

  whatsUpRat() {
    valuesService.whatsUpRat()
  }

  whatsUpSnake() {
    valuesService.whatsUpSnake()
  }

  whatsUpTrex() {
    valuesService.whatsUpTrex()
  }

  whatsUpUmbrella() {
    valuesService.whatsUpUmbrella()
  }

  whatsUpVulture() {
    valuesService.whatsUpVulture()
  }

  whatsUpXylophone() {
    valuesService.whatsUpXylophone()
  }

  whatsUpYeti() {
    valuesService.whatsUpYeti()
  }

  whatsUpZebra() {
    valuesService.whatsUpZebra()
  }
}
