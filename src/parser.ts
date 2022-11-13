import { Parser as FreemarkerParser } from "freemarker-parser";

export default function parse(text: string) {
  const parser = new FreemarkerParser();
  return parser.parse(text).ast;
}
