import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchButton = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${({ isOn }) => (isOn ? '#4CAF50' : '#ccc')};
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;

const SwitchCircle = styled.div`
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: ${({ isOn }) => (isOn ? 'translateX(30px)' : 'translateX(0)')};
`;

const ToggleButton = ({ onClick }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <SwitchButton isOn={isOn} onClick={toggleSwitch}>
      <SwitchCircle isOn={isOn} />
    </SwitchButton>
  );
};

export default ToggleButton;
