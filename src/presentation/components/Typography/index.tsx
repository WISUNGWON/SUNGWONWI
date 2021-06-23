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

interface ITypography {
  size: number;
  color: string;
  bold?: boolean;
  regular?: boolean;
  medium?: boolean;
  center?: boolean;
  multiline?: boolean;
  underline?: boolean;
  align?: string;
  nowrap?: boolean;
  onClick?: () => void;
}

const defaultProps = {
  size: 16,
  color: 'black',
  bold: false,
  regular: false,
  medium: false,
  center: false,
  multiline: false,
  underline: false,
  align: 'left',
  nowrap: false,
};

export const Typography = styled.div<ITypography>`
  font-weight: 400;
  line-height: ${(props): number => (props.multiline ? 1.6 : 1.447)};
  font-size: ${(props): number => props.size}px;
  text-decoration: ${(props): string | undefined =>
    props.underline ? 'underline' : undefined};
  color: ${(props): string => props.theme.colors[props.color]};
  text-align: ${(props): string => (props.align ? props.align : 'left')};
  white-space: ${(props): string => (props.nowrap ? 'nowrap' : 'pre-wrap')};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  word-wrap: break-word;

  ${(props): string | undefined =>
    props.center ? 'text-align: center;' : undefined}

  ${(props): string | undefined =>
    props.regular ? `font-weight: 400;` : undefined}

  ${(props): string | undefined =>
    props.medium ? `font-weight: 500;` : undefined}

  ${(props): string | undefined =>
    props.bold ? `font-weight: 700;` : undefined};

  ${(props): string | undefined =>
    props.onClick
      ? `
      cursor: pointer;
      &:hover {
        color: ${props.theme.colors[getHoverColor(props.color)]};
      }
      `
      : undefined};
`;

Typography.defaultProps = defaultProps;
