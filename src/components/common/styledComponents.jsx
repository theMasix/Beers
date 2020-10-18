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
export const DropdownToggle = styled.button`
background-color: transparent;
border: none;
color: gray;
&:focus{
    outline: none;
};
&::after{
    display:none;
}
`;
export const Anchor = styled.a`
cursor: pointer;
 text-align: right;
`;
export const StyledFooter = styled.div`
position:fixed;
bottom:0;
width: 100%;
display: flex;
justify-content: center;
background-color:#f8f9fa;
`;