import { css, FlattenSimpleInterpolation } from "styled-components";

// 브레이크포인트 설정
const sizes: { [key: string]: number } = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

interface Media {
  [key: string]: (
    args: TemplateStringsArray,
    ...interpolations: any[]
  ) => FlattenSimpleInterpolation;
}

// 미디어 쿼리 헬퍼
export const media: Media = Object.keys(sizes).reduce(
  (acc: Media, label: string) => {
    acc[label] = (args: TemplateStringsArray, ...interpolations: any[]) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(args, ...interpolations)};
      }
    `;
    return acc;
  },
  {} as Media
);
