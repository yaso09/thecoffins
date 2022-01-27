/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kukla4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Kukla4/costumes/kostüm 1.svg", {
        x: 133.93498807150976,
        y: 1.0593570368553173
      })
    ];

    this.sounds = [new Sound("pop", "./Kukla4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag4
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu)
    ];

    this.vars.d3 = 0;
  }

  *whenIReceiveGreenflag() {
    this.goto(0, -35);
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

  *whenIReceiveGreenflag2() {
    while (true) {
      if (this.touching(this.sprites["Kukla2"].andClones())) {
        this.effects.pixelate += -5;
      }
      yield* this.wait(this.random(5, 15));
      for (let i = 0; i < this.random(5, 15); i++) {
        this.effects.pixelate += 5;
        this.vars.d3 += 5;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveGreenflag3() {
    while (true) {
      if (this.touching(this.sprites["Kukla2"].andClones()) && 0 < 50) {
        this.effects.pixelate += -5;
        this.vars.d3 += -5;
      }
      yield;
    }
  }

  *whenIReceiveGreenflag4() {
    while (true) {
      if (this.vars.d3 < 0) {
        this.vars.d3 = 0;
        this.effects.pixelate = 0;
      }
      if (this.vars.d3 > 100) {
        this.broadcast("go");
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

  *whenGreenFlagClicked2() {
    this.vars.d3 = 0;
  }

  *whenIReceiveMenu() {
    this.vars.d3 = 0;
  }
}
