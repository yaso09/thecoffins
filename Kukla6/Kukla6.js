/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kukla6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Kukla6/costumes/kostüm 1.svg", {
        x: -69.75870593255917,
        y: -2.934637491597698
      })
    ];

    this.sounds = [new Sound("pop", "./Kukla6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo)
    ];

    this.vars.d5 = 0;
  }

  *whenIReceiveGreenflag() {
    this.goto(51, 24);
    this.effects.clear();
    this.visible = true;
    while (true) {
      this.effects.ghost = 100;
      if (this.touching(this.sprites["Kukla2"].andClones())) {
        this.effects.ghost = 75;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGo() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
