// import sample_src from "../../images/folders/file-sample.png";
import hypertext_src from "../../images/events/hypertext.png";
import designathon_src from "../../images/events/designathon.png";
import authority450_src from "../../images/events/authority450.png";
import functionoverload_src from "../../images/events/functionoverload.png";
import sidequest_src from "../../images/events/sidequest.png";
import dualwield_src from "../../images/events/dualwield.png";
import sixtyfourwit_src from "../../images/events/sixtyfourwit.png";
import itsdebatable_src from "../../images/events/itsdebatable.png";
import projectremix_src from "../../images/events/projectremix.png";
import betatest_src from "../../images/events/betatest.png";

import ProjectRemix from "./events/ProjectRemix.md";
import Authority450 from "./events/Authority450.md";
import BetaTest from "./events/BetaTest.md";
import Designathon from "./events/Designathon.md";
import DualWield from "./events/DualWield.md";
import FunctionOverload from "./events/FunctionOverload.md";
import ItsDebatable from "./events/ItsDebatable.md";
import Hypertext from "./events/Hypertext.md";
import SideQuest from "./events/SideQuest.md";
import SixtyFourWit from "./events/SixtyFourWit.md";

export const eventsData = [
  {
    name: "Hypertext{}",
    img_src: hypertext_src,
    fields: [
      { name: "team", value: "2" },
      { name: "max", value: "2" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Online" },
    ],
    desc: Hypertext,
  },
  {
    name: "Function Overload",
    img_src: functionoverload_src,
    fields: [
      { name: "team", value: "0" },
      { name: "max", value: "1" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Offline" },
    ],
    desc: FunctionOverload,
  },
  {
    name: "Design Syndicate",
    img_src: designathon_src,
    fields: [
      { name: "team", value: "3-5" },
      { name: "max", value: "1" },
      { name: "eligible", value: "8-12th" },
      { name: "medium", value: "Both" },
    ],
    desc: Designathon,
  },
  {
    name: "Dual Wield",
    img_src: dualwield_src,
    fields: [
      { name: "team", value: "2" },
      { name: "max", value: "1" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Online" },
    ],
    desc: DualWield,
  },
  {
    name: "Side Quest",
    img_src: sidequest_src,
    fields: [
      { name: "team", value: "5" },
      { name: "max", value: "1" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Online" },
    ],
    desc: SideQuest,
  },
  {
    name: "It's Debatable",
    img_src: itsdebatable_src,
    fields: [
      { name: "team", value: "0" },
      { name: "max", value: "2" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Both" },
    ],
    desc: ItsDebatable,
  },
  {
    name: "ProjectRemix",
    img_src: projectremix_src,
    fields: [
      { name: "team", value: "0" },
      { name: "max", value: "1" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Online" },
    ],
    desc: ProjectRemix,
  },
  {
    name: "Authority_450",
    img_src: authority450_src,
    fields: [
      { name: "team", value: "3-5" },
      { name: "max", value: "2" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Offline" },
    ],
    desc: Authority450,
  },
  {
    name: "BetaTest",
    img_src: betatest_src,
    fields: [
      { name: "team", value: "0" },
      { name: "max", value: "0" },
      { name: "eligible", value: "Open to All" },
      { name: "medium", value: "Online" },
    ],
    desc: BetaTest,
  },
  {
    name: "64 Wit",
    img_src: sixtyfourwit_src,
    fields: [
      { name: "team", value: "1" },
      { name: "max", value: "1" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Both" },
    ],
    desc: SixtyFourWit,
  },
];
