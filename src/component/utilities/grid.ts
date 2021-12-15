import {
    css,
    CSSObject,
    SimpleInterpolation,
    FlattenSimpleInterpolation,
  } from 'styled-components';
  
  type ObjectMap<T> = { [key: string]: T };
  
  const sizes: ObjectMap<number> = {
    desktopWide: 1025,
    desktop: 990,
    tablet: 768,
    mobile: 420,
    bigScreen: 1440
  };
  
  // Iterate through the sizes and create a media template
  export const from = Object.keys(sizes).reduce((acc: {
    [key: string]: (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => FlattenSimpleInterpolation;
  }, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
  
    return acc;
  }, {});
  
  // Iterate through the sizes and create a media template
  export const to = Object.keys(sizes).reduce((acc: {
    [key: string]: (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => FlattenSimpleInterpolation;
  }, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
  
    return acc;
  }, {});
  
  export const media = {
    from,
    to
  };
  