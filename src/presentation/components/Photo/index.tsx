import styled from 'styled-components';

interface IPhoto {
  width: number;
  height: number;
  //   row?: boolean;
  //   column?: boolean;
}

// export const defaultProps: IPhoto = {
//   size: 4,
//   row: false,
//   column: false,
// };

export const Photo = styled.img<IPhoto>`
  width: ${(props): number => props.width}px;
  height: ${(props): number => props.height}px;
  transform: scale(1);
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// Photo.defaultProps = defaultProps;
