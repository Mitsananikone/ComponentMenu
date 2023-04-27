import React from 'react';

export default function SeparationLine(props) {
  const { color, width, height } = props;

  const lineStyle = {
    backgroundColor: color,
    height: height,
    width: width,
    margin: '200px auto',
    border: 'none',
    boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.2)',

    left: '40%',
    right: '40%',
  };

  return <div style={lineStyle}></div>;
}
