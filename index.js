import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Kukla1 from "./Kukla1/Kukla1.js";
import Kukla2 from "./Kukla2/Kukla2.js";
import Kukla3 from "./Kukla3/Kukla3.js";
import Kukla4 from "./Kukla4/Kukla4.js";
import Kukla5 from "./Kukla5/Kukla5.js";
import Kukla6 from "./Kukla6/Kukla6.js";
import Kukla7 from "./Kukla7/Kukla7.js";
import Kukla8 from "./Kukla8/Kukla8.js";
import Kukla9 from "./Kukla9/Kukla9.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Kukla1: new Kukla1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Kukla2: new Kukla2({
    x: -202,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Kukla3: new Kukla3({
    x: -27,
    y: -41,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Kukla4: new Kukla4({
    x: 0,
    y: -35,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Kukla5: new Kukla5({
    x: 12,
    y: -107,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Kukla6: new Kukla6({
    x: 51,
    y: 24,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Kukla7: new Kukla7({
    x: 0,
    y: 164,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Kukla8: new Kukla8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 99.6197864409611,
    visible: true
  }),
  Kukla9: new Kukla9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
