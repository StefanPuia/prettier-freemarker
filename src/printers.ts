/* eslint-disable @typescript-eslint/no-unused-vars */
import prettier from "prettier";
import type {
  AbstractNode,
  ArrayExpression,
  Assign,
  AssignmentExpression,
  BinaryExpression,
  BuiltInExpression,
  CallExpression,
  Comment,
  Compound,
  Condition,
  Identifier,
  Interpolation,
  List,
  Literal,
  LogicalExpression,
  MapExpression,
  MemberExpression,
  NodeTypes,
  ParamNames,
  TextNode,
  UnaryExpression,
  UpdateExpression,
} from "./lib/freemarker.types";
import { NodePrinter } from "./types";

const docBuilders = prettier.doc.builders;

const { join, hardline, line, group, indent, markAsRoot } = docBuilders;

const handleProgram: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleElse: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleCondition: NodePrinter<Condition> = ({ path, print }) =>
  markAsRoot(
    group([
      "<#if ",
      path.call(print, "params"),
      ">",
      indent(path.map(print, "consequent")),
      "</#if>",
    ]),
  );

const handleConditionElse: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleInclude: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleList: NodePrinter<List> = ({ path, print }) => [
  "<#list ",
  path.call(print, "params"),
  ">",
  hardline,
  indent(path.call(print, "body")),
  hardline,
  "</#list>",
];

const handleText: NodePrinter<TextNode> = ({ node }) => node.text;

const handleAssign: NodePrinter<Assign> = ({ path, print }) => [
  "<#assign ",
  path.call(print, "params"),
  "/>",
];

const handleGlobal: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleLocal: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleMacro: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleMacroCall: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleInterpolation: NodePrinter<Interpolation> = ({ path, print }) => [
  "${ ",
  path.call(print, "params"),
  " }",
];

const handleItems: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleAttempt: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleRecover: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleComment: NodePrinter<Comment> = ({ node }) => [
  "<#-- ",
  node.text,
  " -->",
];

const handleSwitch: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleSwitchCase: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleSwitchDefault: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleBreak: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleFunction: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleReturn: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleCompress: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleImport: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleStop: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleSetting: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleLt: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleNt: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleRt: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleT: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleFlush: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleFtl: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleEscape: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleNoEscape: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleVisit: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleRecurse: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleNested: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleFallback: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleAutoEsc: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleNoAutoEsc: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleOutputFormat: NodePrinter<AbstractNode> = () => {
  throw new Error("");
};

const handleCompound: NodePrinter<Compound> = ({ path, print }) =>
  join(line, path.call(print, "body"));

const handleIdentifier: NodePrinter<Identifier> = ({ node }) => node.name;

const handleMemberExpression: NodePrinter<MemberExpression> = ({
  path,
  print,
}) => [path.call(print, "object"), ".", path.call(print, "property")];

const handleLiteral: NodePrinter<Literal> = ({ node }) => {
  if (node.value) {
    // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
    switch (typeof node.value) {
      case "string":
        return [`"`, node.value, `"`];
      case "number":
      case "boolean":
        return node.value.toString();
    }
  }
  return [];
};

const handleCallExpression: NodePrinter<CallExpression> = ({ path, print }) => [
  path.call(print, "callee"),
  "(",
  path.call(print, "arguments"),
  ")",
];

const handleUnaryExpression: NodePrinter<UnaryExpression> = ({
  path,
  print,
}) => [path.call(print, "argument"), "??"];

const handleBinaryExpression: NodePrinter<BinaryExpression> = () => {
  throw new Error("");
};

const handleLogicalExpression: NodePrinter<LogicalExpression> = () => {
  throw new Error("");
};

const handleArrayExpression: NodePrinter<ArrayExpression> = ({
  path,
  print,
}) => ["[ ", path.call(print, "elements"), " ]"];

const handleMapExpression: NodePrinter<MapExpression> = () => {
  throw new Error("");
};

const handleAssignmentExpression: NodePrinter<AssignmentExpression> = ({
  print,
  node,
  path,
}) => [
  path.call(print, "left"),
  " ",
  node.operator,
  " ",
  path.call(print, "right"),
];

const handleBuiltInExpression: NodePrinter<BuiltInExpression> = ({
  path,
  print,
  node,
}) => [path.call(print, "left"), node.operator, path.call(print, "right")];

const handleUpdateExpression: NodePrinter<UpdateExpression> = () => {
  throw new Error("");
};

// eslint-disable-next-line import/prefer-default-export
export const printers: Record<NodeTypes | ParamNames, NodePrinter<any>> = {
  Assign: handleAssign,
  Attempt: handleAttempt,
  AutoEsc: handleAutoEsc,
  Break: handleBreak,
  Comment: handleComment,
  Compress: handleCompress,
  Condition: handleCondition,
  ConditionElse: handleConditionElse,
  Else: handleElse,
  Escape: handleEscape,
  Fallback: handleFallback,
  Flush: handleFlush,
  Ftl: handleFtl,
  Function: handleFunction,
  Global: handleGlobal,
  Import: handleImport,
  Include: handleInclude,
  Interpolation: handleInterpolation,
  Items: handleItems,
  List: handleList,
  Local: handleLocal,
  Lt: handleLt,
  Macro: handleMacro,
  MacroCall: handleMacroCall,
  Nested: handleNested,
  NoAutoEsc: handleNoAutoEsc,
  NoEscape: handleNoEscape,
  Nt: handleNt,
  OutputFormat: handleOutputFormat,
  Program: handleProgram,
  Recover: handleRecover,
  Recurse: handleRecurse,
  Return: handleReturn,
  Rt: handleRt,
  Setting: handleSetting,
  Stop: handleStop,
  Switch: handleSwitch,
  SwitchCase: handleSwitchCase,
  SwitchDefault: handleSwitchDefault,
  T: handleT,
  Text: handleText,
  visit: handleVisit,

  ArrayExpression: handleArrayExpression,
  AssignmentExpression: handleAssignmentExpression,
  BinaryExpression: handleBinaryExpression,
  BuiltInExpression: handleBuiltInExpression,
  CallExpression: handleCallExpression,
  Compound: handleCompound,
  Identifier: handleIdentifier,
  Literal: handleLiteral,
  LogicalExpression: handleLogicalExpression,
  MapExpression: handleMapExpression,
  MemberExpression: handleMemberExpression,
  UnaryExpression: handleUnaryExpression,
  UpdateExpression: handleUpdateExpression,
};
