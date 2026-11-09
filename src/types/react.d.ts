import "react";
declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
  }
  interface HTMLAttributes<T> {
    name?: string;
  }
}
declare module "react" {
  interface CSSProperties {
    cornerShape?: string;
  }
}
