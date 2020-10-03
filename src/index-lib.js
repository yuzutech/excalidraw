import { exportToSvg } from "./scene/export";

export function renderSvg(text) {
  let json;
  if (typeof text === "string") {
    json = JSON.parse(text);
  } else {
    json = text;
  }
  let elements;
  if (json.elements) {
    elements = json.elements;
  } else {
    elements = json;
  }
  const svgElement = exportToSvg(elements, {
    exportBackground: false,
    viewBackgroundColor: "#ffffff",
    shouldAddWatermark: false,
  });
  return svgElement.outerHTML;
}
