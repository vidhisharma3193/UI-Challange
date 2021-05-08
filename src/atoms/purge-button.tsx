import styled from 'styled-components';
import colors from '../constants/colors';
import React from 'react';

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

let Button = styled.button<{ className?: string}>`
  border: ${props => props.className === "Idle" ? '10px solid #CBCBCB' : '10px solid #00CBE6'};
  color: ${colors.cyan.shade500};
  background: white;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  height: 15rem;
  width: 15rem;
  position: absolute;
  border-radius: 50%;
  // border-top: ${props => props.className === "Idle" ? null : '10px solid red'}; testing border color
  box-sizing: border-box;
  // transition: ${props => props.className !== "Idle" ? 'all .10s ease-in-out': 'null'};
  box-shadow: inset -10px -10px 15px rgba(0, 0, 0, 0.15), inset 10px 10px 20px rgba(255, 255, 255, 0.35);
  // inset -5px -5px 10px rgb(0 0 0 / 7%);
`;

export const PurgeButton = ({ className = 'Idle' }: PurgeButtonProps) => {

  const [buttonState, setButtonState] = React.useState(className);

  // const myTimer = setInterval(() => console.log("Click!"))
  // const buttonPressed = () => {
  //   setButtonState(false)
  //   // console.log(e) 
  //   // debugger
  // //   Button = styled(Button)`
  // //  border: 10px solid #00CBE6`

  // }

  // const buttonRelesed = () => {
  //   setButtonState(true)
  // //   Button = styled(Button)`
  // //  border: 10px solid #CBCBCB`
  // }

  // console.log(buttonState)

  return (
    <Button 
    className = {buttonState}
    onMouseDown={() => setButtonState("Activating")}
    onMouseUp={() => setButtonState("Idle")}
    >
      PURGE
    </Button>
  );
};

export default PurgeButton;
