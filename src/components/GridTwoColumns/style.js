import styled, { css } from 'styled-components';
import { Title } from '../Heading/style';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }

    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
      color: ${background ? theme.colors.white : theme.colors.primaryColors};
    }
  `};
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `};
`;

export const ImageContainer = styled.div`
  ${() => css``};
`;

export const Image = styled.img`
  ${() => css``};
`;
