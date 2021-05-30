import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function QiankunApp() {
  return <h1>hello world3</h1>;
}

function render(isMicroFrontend: boolean, props: any) {
  const { container } = props;
  ReactDOM.render(
    <QiankunApp />,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render(false, {});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  render(true, props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
