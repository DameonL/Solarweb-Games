import solarWebStyles, {
  aboutGame,
  aboutGameLabel,
  backgroundImage,
  beyondBlueSkiesBackground,
  issueNumber,
} from "./solarWeb.module.css";
import { useState } from "preact/hooks";
import { PopupWindow, PopupWindowOptions } from "./PopupWindow";
import { h } from "preact";

export default function SolarWeb() {
  const [popupOptions, setPopupOptions] = useState<PopupWindowOptions>();

  return (
    <div>
      <div class={solarWebStyles.pageTitle}>
        <div>SolarWeb</div>
        <div>Games</div>
        <div class={solarWebStyles.price}>
          <div>10₵</div>
        </div>
        <div class={issueNumber}>
          <div>No. {Math.round(Math.random() * 300 + 100)}</div>
          <div>
            {new Date(Math.round(Math.random() * 50 + 1900), Math.round(Math.random() * 7)).toLocaleDateString(
              "en-US",
              {
                month: "short",
                year: "numeric",
              }
            )}
          </div>
        </div>
      </div>
      <div class={solarWebStyles.about}>
        <div
          class={`${aboutGame} ${beyondBlueSkiesBackground}`}
          onClick={() => {
            setPopupOptions({
              content: (
                <div>
                  <div>Beyond Blue Skies is a mobile retro shoot 'em up game. More information coming soon!</div>
                </div>
              ),
              label: "Beyond Blue Skies",
              close: () => setPopupOptions(undefined),
            });
          }}
        >
          <div class={aboutGameLabel}>Beyond Blue Skies</div>
        </div>
        {popupOptions && <PopupWindow options={popupOptions} />}
      </div>
      <div class={backgroundImage}></div>
    </div>
  );
}
