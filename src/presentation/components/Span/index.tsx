import styled from 'styled-components';
import _ from 'lodash';

const getHoverColor = (color: string): string => {
  if (!_.isRegExp(/^[a-zA-Z]{4}[0-9]{2}$/)) return color;
  return _.replace(color, /[0-9]{2}/, (capture): string => {
    let level = Number(capture);
    if (level > 50) level -= 20;
    else level = 30;
    return String(level);
  });
};

interface ISpan {
  size?: number;
  color: string;
  regular?: boolean;
  medium?: boolean;
  bold?: boolean;
  underline?: boolean;
  onClick?: () => void;
}

export const Span = styled.span<ISpan>`
  font-size: ${(props): string => (props.size ? `${props.size}px` : 'inherit')};
  color: ${(props): string =>
    props.color ? props.theme.colors[props.color] : 'inherit'};

  ${(props): string | undefined =>
    props.regular ? `font-weight: 400;` : undefined}

  ${(props): string | undefined =>
    props.medium ? `font-weight: 500;` : undefined}

  ${(props): string | undefined =>
    props.bold ? `font-weight: 700;` : undefined};

  ${(props): string | undefined =>
    props.underline ? `text-decoration: underline` : undefined};

  ${(props): string | undefined =>
    props.onClick
      ? `
        cursor: pointer;
        &:hover {
          color: ${props.theme.colors[getHoverColor(props?.color)]};
        }
        `
      : undefined};
`;
