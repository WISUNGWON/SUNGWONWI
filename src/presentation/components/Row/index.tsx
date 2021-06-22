import styled from 'styled-components';

interface IRow {
  align?: string;
  justify?: string;
  reverse?: boolean;
  flex?: number | string;
  text?: string;
  wrap?: boolean;
}

const defaultProps = {
  align: 'normal',
  justify: 'normal',
  reverse: false,
  flex: 'none',
  text: 'unset',
  wrap: false,
};

export const Row = styled.div<IRow>`
  display: flex;
  flex-direction: ${(props): string => (props.reverse ? 'row-reverse' : 'row')};
  align-items: ${(props): string | undefined => props.align};
  text-align: ${(props): string | undefined => props.text};
  justify-content: ${(props): string | undefined => props.justify};
  flex: ${(props): number | string => (props.flex ? props.flex : 'none')};
  flex-wrap: wrap;
`;

Row.defaultProps = defaultProps;
