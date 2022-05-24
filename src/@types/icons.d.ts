declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  interface SvgrComponent extends FC<SVGProps<SVGElement>> {}
  export const ReactComponent: SvgrComponent;
}
