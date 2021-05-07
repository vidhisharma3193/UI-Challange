import styled from 'styled-components';
import colors from '../constants/colors';

interface PurgeButtonProps {
  className?: string;
}

/* Notes --------------------------------------------------------
The purge button is a common example of a pattern we have in our
field app. The user is intended to hold down the button in order
to perform an action. This prevents accidental activation of our
machine that could cause problems in the field.

This button has three defined states:
1) Idle
2) Activating with an animated stroke
  - Press and hold to animate stroke to full circle.
  - Release and stroke will animate back to the zero point.
3) Active
  - Background color change for button state now that stroke is complete.
  - Animations on release of an "active" button is up to you.
-------------------------------------------------------------- */

const Button = styled.button`
  background: ${colors.gray.shade300};
  color: ${colors.gray.shade800};
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 300;
  height: 15rem;
  border: 1px solid ${colors.gray.shade400};
  width: 15rem;
`;

export const PurgeButton = ({ className = '' }: PurgeButtonProps) => {
  return (
    <Button>Button Placeholder</Button>
  );
};

export default PurgeButton;
