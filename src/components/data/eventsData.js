import React from "react";

import sample_src from "../../images/folders/file-sample.png";

import AudioEngineering from "./team/AudioEngineering";
import Authority450 from "./team/Authority450";
import BetaTest from "./team/BetaTest";
import Designathon from "./team/Designathon";
import DualWield from "./team/DualWield";
import FunctionOverload from "./team/FunctionOverload";
import GD from "./team/GD";
import Hypertext from "./team/Hypertext";
import SideQuest from "./team/SideQuest";
import SixtyFourWit from "./team/SixtyFourWit";

export const eventsData = [
  {
    name: "Hypertext{}",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "2" },
      { name: "people", value: "2" },
      { name: "eligible", value: "9-12" },
      { name: "medium", value: "Online" },
    ],
    desc: <Hypertext />,
  },
  {
    name: "Function Overload",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "Online" },
    ],
    desc: <FunctionOverload />,
  },
  {
    name: "Designathon",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "1" },
      { name: "people", value: "3-4" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "Online" },
    ],
    desc: <Designathon />,
  },
  {
    name: "Dual Wield",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "1" },
      { name: "people", value: "2" },
      { name: "eligible", value: "9-12" },
      { name: "medium", value: "-" },
    ],
    desc: <DualWield />,
  },
  {
    name: "Side Quest",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "-" },
    ],
    desc: <SideQuest />,
  },
  {
    name: "GD",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "-" },
    ],
    desc: <GD />,
  },
  {
    name: "Audio Engineering",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "-" },
    ],
    desc: <AudioEngineering />,
  },
  {
    name: "Authority_450",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "Online" },
    ],
    desc: <Authority450 />,
  },
  {
    name: "BetaTest",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "1" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "Online" },
    ],
    desc: <BetaTest />,
  },
  {
    name: "64 Wit",
    img_src: sample_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "Online" },
    ],
    desc: <SixtyFourWit />,
  },
];
