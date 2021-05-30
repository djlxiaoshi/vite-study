import React from "react";
import "./index.css";

const oldTime = Date.now();
while (Date.now() - oldTime < 5000) {}
export default () => <div className="test">css-split</div>;
