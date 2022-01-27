/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kukla8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Yasirator İcon", "./Kukla8/costumes/Yasirator İcon.svg", {
        x: 363.6262547948341,
        y: 253.5498817146001
      })
    ];

    this.sounds = [
      new Sound("pop", "./Kukla8/sounds/pop.wav"),
      new Sound("intro sound", "./Kukla8/sounds/intro sound.wav"),
      new Sound(
        "Kevin MacLeod _ Darkling",
        "./Kukla8/sounds/Kevin MacLeod _ Darkling.wav"
      ),
      new Sound("Miza - Remember", "./Kukla8/sounds/Miza - Remember.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "menu" }, this.whenIReceiveMenu),
      new Trigger(
        Trigger.BROADCAST,
        { name: "greenflag" },
        this.whenIReceiveGreenflag
      ),
      new Trigger(Trigger.BROADCAST, { name: "go" }, this.whenIReceiveGo)
    ];

    this.audioEffects.volume = 25;
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = true;
    this.goto(0, 0);
    this.size = 100;
    this.effects.ghost = 100;
    yield* this.startSound("intro sound");
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += -1;
      yield;
    }
    yield* this.wait(3.5);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      yield;
    }
    this.broadcast("menu");
  }

  *whenIReceiveMenu() {
    yield* this.playSoundUntilDone("Kevin MacLeod _ Darkling");
  }

  *musiki() {
    while (true) {
      /* TODO: Implement music_playDrumForBeats */ null;
      yield;
    }
  }

  *whenIReceiveGreenflag() {
    this.stopAllSounds();
  }

  *whenIReceiveGo() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
