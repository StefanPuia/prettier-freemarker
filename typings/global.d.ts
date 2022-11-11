import prettier from "prettier";

declare module "prettier" {
  type RequiredOptions = Record<string, never>;
  namespace __debug {
    // eslint-disable-next-line import/prefer-default-export
    export function parse(
      originalText: string,
      originalOptions: Partial<RequiredOptions>,
      massage: boolean,
    ): AST;
  }
}
