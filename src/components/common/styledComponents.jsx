import styled from 'styled-components';
import { Card, Image } from 'react-bootstrap';
export const WithShadowCard = styled(Card)`
box-shadow: rgba(0, 0, 0, 0.05) 4px 4px 4px 4px;
`;
export const StyledCard = styled(Card)`
         cursor: pointer;
          max-width: 16rem;
          max-height: 22rem;
          box-shadow: rgba(0, 0, 0, 0.05) 2px 2px 2px 2px
`;
export const StyledImg = styled(Image)`
max-height: 10rem;
max-width: 8rem
`;
export default (
    WithShadowCard,
    StyledCard,
    StyledImg
)