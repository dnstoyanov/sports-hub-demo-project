import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';

export const StyledCarousel = styled(Carousel)`
  .navButtonWrapper:hover .navigationButton {
    opacity: 1;
    filter: none;
  }

  .navigationButton {
    border: 1px solid #979797;
    &:hover {
      color: #c63638;
      border: 1px solid #c63638;
      svg {
        fill: #c63638;
      }
    }
  }
`;
