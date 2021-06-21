import styled from 'styled-components';

interface IMargin {
  size: number;
  row?: boolean;
  column?: boolean;
}

export const defaultProps: IMargin = {
  size: 4,
  row: false,
  column: false,
};

export const Margin = styled.div<IMargin>`
  width: 1px;
  height: ${(props): number => props.size}px;
  flex-shrink: 0;

  ${(props): string | undefined =>
    props.row
      ? `
      width: ${props.size}px; 
      height: 1px;
      `
      : undefined}
  ${(props): string | undefined =>
    props.column
      ? `
      height: ${props.size}px; 
      width: 1px;
      `
      : undefined};
`;

Margin.defaultProps = defaultProps;
