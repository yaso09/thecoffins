/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kukla3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Kukla3/costumes/kostüm 1.svg", {
        x: 212.50855914019806,
        y: 51.1044025084023
      })
    ];

    this.sounds = [new Sound("pop", "./Kukla3/sounds/pop.wav")];

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
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu)
    ];

    this.vars.d2 = 0;
  }

  *whenIReceiveGreenflag() {
    this.goto(-27, -41);
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
        this.stage.vars.deIKenim += 5;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveGreenflag3() {
    while (true) {
      if (this.touching(this.sprites["Kukla2"].andClones()) && 0 < 50) {
        this.effects.pixelate += -5;
        this.stage.vars.deIKenim += -5;
      }
      yield;
    }
  }

  *whenIReceiveGreenflag4() {
    while (true) {
      if (this.stage.vars.deIKenim < 0) {
        this.stage.vars.deIKenim = 0;
        this.effects.pixelate = 0;
      }
      if (this.stage.vars.deIKenim > 100) {
        this.broadcast("go");
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.vars.deIKenim = 0;
  }

  *whenIReceiveGo() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMenu() {
    this.stage.vars.deIKenim = 0;
  }
}
