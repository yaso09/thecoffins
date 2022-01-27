/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kukla2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Kukla2/costumes/kostüm 1.svg", {
        x: 78.5,
        y: 19.75
      })
    ];

    this.sounds = [new Sound("pop", "./Kukla2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "haber1" },
        this.whenIReceiveHaber1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag
      ),
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo)
    ];
  }

  *whenIReceiveHaber1() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(15);
    this.broadcast("haber2");
    this.effects.clear();
    this.visible = true;
    this.effects.ghost = 75;
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      this.goto(this.mouse.x, this.mouse.y);
      if (this.mouse.down) {
        this.stage.vars.use = "t";
        this.visible = true;
      } else {
        this.stage.vars.use = "f";
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveGreenflag() {
    this.effects.clear();
    this.visible = true;
    this.effects.ghost = 75;
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      if (this.mouse.down) {
        this.stage.vars.use = "t";
        this.visible = true;
      } else {
        this.stage.vars.use = "f";
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveGo() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
