/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kukla7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Kukla7/costumes/kostüm 1.svg", {
        x: 15.000000000000085,
        y: 8.656387665198196
      }),
      new Costume("kostüm 2", "./Kukla7/costumes/kostüm 2.svg", {
        x: 15.000000000000085,
        y: 8.656387665198196
      })
    ];

    this.sounds = [new Sound("pop", "./Kukla7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "haber2" },
        this.whenIReceiveHaber2
      ),
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
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo)
    ];
  }

  *whenIReceiveHaber2() {
    while (true) {
      if (this.stage.vars.use == "t") {
        while (!(this.stage.vars.use == "f")) {
          this.costumeNumber += 1;
          yield* this.wait(0.1);
          yield;
        }
      } else {
        this.costume = "kostüm 1";
      }
      if (this.stage.vars.use == "t") {
        while (!(this.stage.vars.use == "f")) {
          this.stage.vars.apaci += 1;
          yield* this.wait(1);
          yield;
        }
      } else {
        this.stage.vars.apaci = 0;
      }
      if (this.stage.vars.apaci > 15) {
        this.stage.vars.apaci = 0;
        this.broadcast("haber1");
        return;
      }
      yield;
    }
  }

  *whenIReceiveGreenflag() {
    while (true) {
      /* TODO: Implement looks_gotofrontback */ null;
      if (this.stage.vars.use == "t") {
        while (!(this.stage.vars.use == "f")) {
          this.costumeNumber += 1;
          yield* this.wait(0.1);
          yield;
        }
      } else {
        this.costume = "kostüm 1";
      }
      if (this.stage.vars.use == "t") {
        while (!(this.stage.vars.use == "f")) {
          this.stage.vars.apaci += 1;
          yield* this.wait(1);
          yield;
        }
      } else {
        this.stage.vars.apaci = 0;
      }
      if (this.stage.vars.apaci > 15) {
        this.stage.vars.apaci = 0;
        this.broadcast("haber1");
        return;
      }
      yield;
    }
  }

  *whenIReceiveGreenflag2() {
    while (true) {
      if (this.stage.vars.use == "t") {
        /* TODO: Implement music_playDrumForBeats */ null;
      }
      yield;
    }
  }

  *whenIReceiveGo() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
