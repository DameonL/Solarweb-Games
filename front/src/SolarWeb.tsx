import solarWebStyles from "./solarWeb.module.css";

export default function SolarWeb() {
  return (
    <div>
      <div class={solarWebStyles.pageTitle}>
        <div>SolarWeb</div>
        <div>Games</div>
        <div class={solarWebStyles.price}>10₵</div>
      </div>
      <div class={solarWebStyles.about}>
        SolarWeb Games is a small game development studio in Seattle, WA, with a focus on unique games that have a retro feel.
      </div>
    </div>
  );
}
