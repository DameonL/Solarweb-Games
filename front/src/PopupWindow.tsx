import { VNode, h } from "preact";
import { closeButton, komika, popupWindow, title } from "./solarWeb.module.css";

export interface PopupWindowOptions {
  label: string;
  content: VNode;
  close: Function;
}

export function PopupWindow(props: { options: PopupWindowOptions }) {
  return (
    <div
      class={popupWindow}
      onClick={(event) => {
        event.stopPropagation();
        props.options.close();
      }}
    >
      <div class={closeButton} />
      <div class={`${komika} ${title}`}>{props.options.label}</div>
      {props.options.content}
    </div>
  );
}
