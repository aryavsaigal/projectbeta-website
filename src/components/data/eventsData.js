// eventsData stores all metadata, icon and description of each event page

// Icon links of respective event departments
// import sample_src from "../../images/folders/file-sample.png";
import hypertextImgSrc from "../../images/events/hypertext.png";
import designathonImgSrc from "../../images/events/designathon.png";
import authority450ImgSrc from "../../images/events/authority450.png";
import functionoverloadImgSrc from "../../images/events/functionoverload.png";
import sidequestImgSrc from "../../images/events/sidequest.png";
import dualwieldImgSrc from "../../images/events/dualwield.png";
import sixtyfourwitImgSrc from "../../images/events/sixtyfourwit.png";
import itsdebatableImgSrc from "../../images/events/itsdebatable.png";
import projectremixImgSrc from "../../images/events/projectremix.png";
import betatestImgSrc from "../../images/events/betatest.png";

// Description/instructions of respective event departments
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
    img_src: hypertextImgSrc,
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
    img_src: functionoverloadImgSrc,
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
    img_src: designathonImgSrc,
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
    img_src: dualwieldImgSrc,
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
    img_src: sidequestImgSrc,
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
    img_src: itsdebatableImgSrc,
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
    img_src: projectremixImgSrc,
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
    img_src: authority450ImgSrc,
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
    img_src: betatestImgSrc,
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
    img_src: sixtyfourwitImgSrc,
    fields: [
      { name: "team", value: "1" },
      { name: "max", value: "1" },
      { name: "eligible", value: "9-12th" },
      { name: "medium", value: "Both" },
    ],
    desc: SixtyFourWit,
  },
];
