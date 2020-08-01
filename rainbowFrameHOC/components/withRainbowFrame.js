import React from "react";

let withRainbowFrame = (colors) => (Component) => (props) => {
  var code = <Component {...props} />;
  colors.forEach((color) => {
    code = (
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "7px",
          borderColor: color,
        }}
      >
        {code}
      </div>
    );
  });
  return code;
};

export { withRainbowFrame };
