import { Options, AstPath, Doc } from "prettier";
import { AbstractNode, Expression } from "./lib/freemarker.types";

type NodePrinter<T extends AbstractNode | Expression> = (context: {
  node: T;
  options: Options;
  print: any;
  path: AstPath<T>;
}) => Doc;

type PrintFn = (path: AstPath, options: Options, print: any) => Doc;
