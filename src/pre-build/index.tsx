/*
 * 测试预构建，在vite.config.js中加入如下配置，注意删除之前的构建缓存
 optimizeDeps: {
    exclude: ["lodash-es"],
  },

  现象 会发出600多个请求
 */

import React, { useEffect } from "react";
import { debounce } from "lodash-es";

export default () => {
  useEffect(() => {
    const callback = debounce(function () {
      console.log("hello world");
    });
    callback();
  }, []);
  return <div>pre-bundle</div>;
};
