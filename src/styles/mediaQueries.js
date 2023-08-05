const breakpionts = {
  desktop: 1280,
  tablet: 768,
  mobile: 320,
};

export const mediaQueries = (key) => {
  return (style) =>
    `@media screen and (min-width: ${breakpionts[key]}px) {${style}}`;
};
