import printFn from "./printer";
import parse from "./parser";
import { AbstractBodyNode } from "./lib/freemarker.types";

export const languages = [
  {
    name: "FreeMarker",
    parsers: ["ftl"],
    extensions: [".ftl"],
    group: "FreeMarker",
  },
];

export const parsers = {
  ftl: {
    astFormat: "ftl",
    parse,
    locStart: (node: AbstractBodyNode) => node.start,
    locEnd: (node: AbstractBodyNode) => node.end,
    preprocess: (text: string): string => text.trim(),
  },
};

export const printers = {
  ftl: {
    print: printFn,
  },
};

export const options = {};

export const defaultOptions = {};
