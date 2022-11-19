import { Parser as FreemarkerParser } from "freemarker-parser";

export default function parse(text: string) {
  const parser = new FreemarkerParser();
  const { ast } = parser.parse(text);

  // TODO: handle errors correctly
  if (ast.errors) {
    throw new Error(JSON.stringify(ast.errors, null, 4));
  }

  return ast;
}
