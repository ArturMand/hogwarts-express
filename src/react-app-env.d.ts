/// <reference types="react-scripts" />
declare module "color-name" {
  interface ColorNameMap {
    [color: string]: [number, number, number];
  }

  const colorName: ColorNameMap;

  export default colorName;
}
