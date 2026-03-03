import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const H2 = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
`;

export const Body = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
`;

export const Small = styled.small`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.mutedForeground};
`;
