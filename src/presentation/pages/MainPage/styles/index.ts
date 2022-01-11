import styled from 'styled-components';
import { Typography, Row } from 'presentation/components';

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(props): string => props.theme.colors.gray40};
`;

export const TopButton = styled.div`
  padding: 15px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 100px;
  background: #2d2d2d;

  :hover {
    background-color: ${(props): string => props.theme.colors.blue50};
    cursor: pointer;
  }
`;

export const LogoIcon = styled.img`
  width: 32px;
  border-radius: 100px;
  margin-left: 8px;
  padding: 2px;
  background-color: ${(props): string => props.theme.colors.white};
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100vw;
  margin-left: 238px;
  padding: 200px 0px 100px 0px;
  background-color: ${(props): string => props.theme.colors.gray85};

  & > :not(${Divider}, ${TopButton}, ${LogoIcon}) {
    padding-left: 40px;
    @media only screen and (max-width: 768px) {
      padding: 0px 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const LogIcon = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  border-radius: 100px;
  background-color: ${(props): string => props.theme.colors.white};
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const BookcoveryLinkTypo = styled(Typography)`
  :hover {
    text-decoration: underline;
  }
`;

export const Photos = styled(Row)`
  * {
    margin-bottom: 20px;
  }
`;

export const LanguageBtn = styled.button<{ point?: boolean }>`
  z-index: inherit;
  position: relative;
  outline: 0;
  border: 0;
  white-space: nowrap;
  padding: 0 16px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1.6;
  border: 1px solid ${(props) => props.theme.colors.white};
  background-color: inherit;
  color: ${(props) => props.theme.colors.white};

  ${(props) =>
    props.point
      ? `
        background-color: white;
        border: 1px solid ${props.theme.colors.gray20};
        color: ${props.theme.colors.gray70};
      `
      : undefined};
`;
