import React from "react";
import styled, { keyframes } from "styled-components";
import styles from './ProgressBar.module.css'

// Striped background animation keyframes
const stripes = keyframes`
  0% { background-position: 1rem 0; }
  100% { background-position: 0 0; }
`;

// Styled component for the progress container
const Progress = styled.div`
  width: 100%;
  height: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  overflow: hidden;
`;

// Styled component for the inner progress bar with striped and animated effect
const ProgressBarInner = styled.div`
  height: 100%;
  background-color: #28a745;
  transition: width 0.6s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
  animation: ${stripes} 1s linear infinite;
`;

const ProgressBar = ({ score, level }) => {
  const maxValue = level * 100;
  const ratio = (score / maxValue) * 100;
  const remainingPoints = maxValue - score;
  return (
    <div className={styles.container}>
      <div className={styles.title}>현재 점수</div>
      <Progress>
        <ProgressBarInner style={{ width: `${ratio}%` }}>
          {`${ratio}%`}
        </ProgressBarInner>
      </Progress>
      <div className={styles.score}>
        다음 성장까지 <span className={styles.highlight}>{remainingPoints}점</span> 남았어요!
      </div>
    </div>
  );
};

export default ProgressBar;
