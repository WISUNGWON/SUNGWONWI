/* eslint-disable import/no-named-default */

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { default as MetropolisRegular } from 'resources/fonts/Metropolis-Regular.otf';
import { default as MetropolisBold } from 'resources/fonts/Metropolis-Bold.otf';
import { default as MetropolisMedium } from 'resources/fonts/Metropolis-Medium.otf';
import { default as NotoSansKRRegular } from 'resources/fonts/NotoSansKR-Regular.otf';
import { default as NotoSansKRBold } from 'resources/fonts/NotoSansKR-Bold.otf';
import { default as NotoSansKRMedium } from 'resources/fonts/NotoSansKR-Medium.otf';

export const GlobalStyles = createGlobalStyle`
 ${reset}

  @font-face {
    font-family: metropolis;
    font-display: swap;
    src: url(${MetropolisRegular}) format('opentype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: metropolis;
    font-weight: bold;
    font-display: swap;
    src: url(${MetropolisBold}) format('opentype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: metropolis;
    font-weight: medium;
    font-display: swap;
    src: url(${MetropolisMedium}) format('opentype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: NotoSansKR;
    font-display: swap;
    src: url(${NotoSansKRRegular}) format('opentype');
  }
  @font-face {
    font-family: NotoSansKR;
    font-weight: 500;
    font-display: swap;
    src: url(${NotoSansKRMedium}) format('opentype');
  }

  @font-face {
    font-family: NotoSansKR;
    font-weight: 700;
    font-display: swap;
    src: url(${NotoSansKRBold}) format('opentype');
  }

  body {
      font-family: metropolis, NotoSansKR;
  }
`;
