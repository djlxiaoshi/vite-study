/*
 * @Author: your name
 * @Date: 2021-03-06 10:36:41
 * @LastEditTime: 2021-03-07 14:02:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-study/src/pre-bundle/index.tsx
 */

import React, { useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash-es";

export default () => {
  useEffect(() => {
    // axios.get("http://www.baidu.com");
    const callback = debounce(function () {
      console.log("hello world");
    });
    callback();
  }, []);
  return <div className="test">pre-bundle</div>;
};
