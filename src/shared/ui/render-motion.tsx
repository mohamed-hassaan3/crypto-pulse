import type { ReactNode } from "react";

export const RenderMotion = ({ children }: { children: ReactNode }) => {
  return <div className="render-motion">{children}</div>;
};
