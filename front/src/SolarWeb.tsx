import solarWebStyles from "./solarWeb.module.css";

export default function SolarWeb() {
  return (
    <div>
      <div class={solarWebStyles.pageTitle}>
        <svg>
          <path
            id="curve"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath xlink:href="#curve">SolarWeb</textPath>
          </text>
        </svg>
        <div>Games</div>
        <div class={solarWebStyles.price}>10₵</div>
      </div>
      <div class={solarWebStyles.about}>
        SolarWeb Games is a small game development studio in Seattle, WA, with a
        focus on unique games with a retro feel.
      </div>
    </div>
  );
}
