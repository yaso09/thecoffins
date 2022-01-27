/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dekor 1", "./Stage/costumes/dekor 1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("dekor 2", "./Stage/costumes/dekor 2.svg", {
        x: 364.0402124287231,
        y: 214.4947447447447
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.deIKenim = 40;
    this.vars.ghost = 25;
    this.vars.use = "f";
    this.vars.apaci = 0;
  }
}
