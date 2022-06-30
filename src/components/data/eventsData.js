import React from "react";

import sample_src from "../../images/folders/file-sample.png";
import hypertext_src from "../../images/events/hypertext.png";
import designathon_src from "../../images/events/designathon.png";
import authority450_src from "../../images/events/authority450.png";
import functionoverload_src from "../../images/events/functionoverload.png";
import sidequest_src from "../../images/events/sidequest.png";
import dualwield_src from "../../images/events/dualwield.png";
import sixtyfourwit_src from "../../images/events/sixtyfourwit.png";
import itsdebatable_src from "../../images/events/itsdebatable.png";
import projectremix_src from "../../images/events/projectremix.png";

import ProjectRemix from "./team/ProjectRemix";
import Authority450 from "./team/Authority450";
import BetaTest from "./team/BetaTest";
import Designathon from "./team/Designathon";
import DualWield from "./team/DualWield";
import FunctionOverload from "./team/FunctionOverload";
import ItsDebatable from "./team/ItsDebatable";
import Hypertext from "./team/Hypertext";
import SideQuest from "./team/SideQuest";
import SixtyFourWit from "./team/SixtyFourWit";

export const eventsData = [
  {
    name: "Hypertext{}",
    img_src: hypertext_src,
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
    img_src: functionoverload_src,
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
    img_src: designathon_src,
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
    img_src: dualwield_src,
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
    img_src: sidequest_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "-" },
    ],
    desc: <SideQuest />,
  },
  {
    name: "It's Debatable",
    img_src: itsdebatable_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "-" },
    ],
    desc: <ItsDebatable />,
  },
  {
    name: "ProjectRemix",
    img_src: projectremix_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "-" },
    ],
    desc: <ProjectRemix />,
  },
  {
    name: "Authority_450",
    img_src: authority450_src,
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
    img_src: sixtyfourwit_src,
    fields: [
      { name: "teams", value: "-" },
      { name: "people", value: "-" },
      { name: "eligible", value: "-" },
      { name: "medium", value: "Online" },
    ],
    desc: <SixtyFourWit />,
  },
];
