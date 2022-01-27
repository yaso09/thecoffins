/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kukla9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Kukla9/costumes/kostüm 1.svg", {
        x: 446.15999546999956,
        y: 258.82920089450033
      }),
      new Costume("kostüm 2", "./Kukla9/costumes/kostüm 2.svg", {
        x: 438.952715,
        y: 260.765745
      }),
      new Costume("kostüm 3", "./Kukla9/costumes/kostüm 3.svg", {
        x: 363.5139743455133,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Kukla9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag
      ),
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenIReceiveMenu() {
    this.costume = "kostüm 1";
    this.effects.clear();
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
    this.goto(0, 0);
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      if (this.touching("mouse") && this.mouse.down) {
        for (let i = 0; i < 100; i++) {
          this.effects.ghost += 1;
          /* TODO: Implement stop other scripts in sprite */ null;
          yield;
        }
        this.broadcast("greenflag");
        this.visible = false;
        return;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveGreenflag() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.effects.ghost = 0;
    this.visible = true;
    this.costume = "kostüm 2";
  }

  *whenIReceiveGo() {
    /* TODO: Implement stop other scripts in sprite */ null;
    /* TODO: Implement looks_gotofrontback */ null;
    this.costume = "kostüm 3";
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        yield* this.wait(0.5);
        this.costume = "kostüm 1";
        this.broadcast("menu");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.deIKenim = 0;
  }
}
