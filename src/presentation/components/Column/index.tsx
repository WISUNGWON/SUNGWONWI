import styled from 'styled-components';

interface IColumn {
  align?: string;
  justify?: string;
  reverse?: boolean;
  flex?: number | string;
  text?: string;
}

const defaultProps = {
  align: 'normal',
  justify: 'normal',
  reverse: false,
  flex: 'none',
  text: 'unset',
};

export const Column = styled.div<IColumn>`
  min-width: 0;
  display: flex;
  flex-direction: ${(props): string =>
    props.reverse ? 'column-reverse' : 'column'};
  align-items: ${(props): string | undefined => props.align};
  text-align: ${(props): string | undefined => props.text};
  justify-content: ${(props): string | undefined => props.justify};
  flex: ${(props): number | string => (props.flex ? props.flex : 'none')};
`;

Column.defaultProps = defaultProps;
