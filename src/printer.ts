import prettier, { AstPath, Doc } from "prettier";
import { AbstractNode } from "./lib/freemarker.types";
import { printers } from "./printers";
import { PrintFn } from "./types";

const genericPrint: PrintFn = (
  path: AstPath<AbstractNode>,
  options: prettier.Options,
  print: any,
) => {
  const node = path.getValue();

  if (Array.isArray(node)) {
    return path.map(print);
  }

  if (node.type in printers) {
    try {
      return printers[node.type]({ node, print, options, path });
    } catch (err) {
      console.trace(err);
      console.error(node);
    }
  }

  throw new Error(
    `No handler found for ${node.type}. Please file a bug report.`,
  );
};

let options: prettier.ParserOptions;
export default function printGenerically(
  path: AstPath,
  opts: prettier.ParserOptions,
  print: PrintFn,
): Doc {
  if (typeof opts === "object") {
    options = opts;
  }
  const doc = genericPrint(path, options, print);
  return doc;
}
