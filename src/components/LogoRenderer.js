import { Tooltip } from "antd";
import React, { Component } from "react";

const LogoRenderer = ({ alt, index, size, margin, level }) => {
  return (
    <>
      <Tooltip placement="top" title={alt} openClassName="hovered">
        <span
          className="language-logo"
          style={{
            backgroundPosition: `-${index * 80}px`,
            width: size,
            height: size,
            margin,
            marginBottom: margin + margin,
            marginTop: 0,
            display: "inline-block",
          }}
        >
          <span className="bar" style={{ width: `${level}%` }}>
            {level}%
          </span>
        </span>
      </Tooltip>
    </>
  );
};

export default LogoRenderer;
