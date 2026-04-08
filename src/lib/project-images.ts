import type { StaticImageData } from "next/image";

import ANKHOE from "../../asert/ANKHOE.png";
import ANKHOE1 from "../../asert/ANKHOE1.png";
import ANKHOE2 from "../../asert/ANKHOE2.png";

import ERPHRM from "../../asert/ERPHRM.png";
import ERPHRM1 from "../../asert/ERPHRM1.png";
import ERPHRM2 from "../../asert/ERPHRM2.png";
import ERPHRM3 from "../../asert/ERPHRM3.png";
import ERPHRM4 from "../../asert/ERPHRM4.png";
import ERPHRM5 from "../../asert/ERPHRM5.png";
import ERPHRM6 from "../../asert/ERPHRM6.png";
import ERPHRM7 from "../../asert/ERPHRM7.png";
import ERPHRM8 from "../../asert/ERPHRM8.png";
import ERPHRM9 from "../../asert/ERPHRM9.png";

export type ProjectImageKey =
  | "calories-tracking:1"
  | "calories-tracking:2"
  | "calories-tracking:3"
  | "erp-hrm:1"
  | "erp-hrm:2"
  | "erp-hrm:3"
  | "erp-hrm:4"
  | "erp-hrm:5"
  | "erp-hrm:6"
  | "erp-hrm:7"
  | "erp-hrm:8"
  | "erp-hrm:9"
  | "erp-hrm:10";

export const projectImages: Record<ProjectImageKey, StaticImageData> = {
  "calories-tracking:1": ANKHOE,
  "calories-tracking:2": ANKHOE1,
  "calories-tracking:3": ANKHOE2,

  "erp-hrm:1": ERPHRM,
  "erp-hrm:2": ERPHRM1,
  "erp-hrm:3": ERPHRM2,
  "erp-hrm:4": ERPHRM3,
  "erp-hrm:5": ERPHRM4,
  "erp-hrm:6": ERPHRM5,
  "erp-hrm:7": ERPHRM6,
  "erp-hrm:8": ERPHRM7,
  "erp-hrm:9": ERPHRM8,
  "erp-hrm:10": ERPHRM9,
};

