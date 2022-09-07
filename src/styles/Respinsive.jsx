const breakPoint = {
  xsm: 480,
  sm: 575,
  md: 768,
  cs: 820,
  lg: 1024,
  xl: 1200,
  xxl: 1919,
};

export const media = {
  up: function (bpn) {
    return `
          @media screen and (min-width: ${breakPoint[bpn]}px)
        `;
  },
  down: function (bpn) {
    return `
          @media screen and (max-width: ${breakPoint[bpn]}px)
        `;
  },
};
