import { render } from "preact";
import SolarWeb from "./SolarWeb";

const root = document.createElement("div", { id: "root" });
document.body.appendChild(root);
render(SolarWeb(), root);
