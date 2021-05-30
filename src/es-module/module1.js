/*
 * @Author: your name
 * @Date: 2021-03-10 10:51:03
 * @LastEditTime: 2021-03-10 13:04:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-study/src/es-module/module1.js
 */
import "./module2.js";

console.log(1);
const oldTime = Date.now();
while (Date.now() - oldTime < 2000) {}
