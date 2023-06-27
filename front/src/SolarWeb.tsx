import solarWebStyles, { aboutGame, aboutGameLabel, backgroundImage, beyondBlueSkiesBackground, issueNumber } from "./solarWeb.module.css";

export default function SolarWeb() {
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
            {new Date(Math.round(Math.random() * 50 + 1900)).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
      <div class={solarWebStyles.about}>
        <div class={`${aboutGame} ${beyondBlueSkiesBackground}`}>
          <div class={aboutGameLabel}>Beyond Blue Skies</div>
        </div>
      </div>
      <div class={backgroundImage}></div>
    </div>
  );
}
