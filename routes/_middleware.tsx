import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { Language } from "../i18n.ts";

export function handler(req: Request, ctx: MiddlewareHandlerContext<Language>) {
  ctx.state.language = req.headers.get("accept-language");
  return ctx.next();
}
