/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
import diff from "diff-dom-streaming";

type Options = {
  transition?: boolean
}

const scripts = new Set();

export default async function diffReload(options: Options) {
		const res = await fetch(globalThis.location.toString())
    registerCurrentScripts();
    return diff(document, res.body as ReadableStream<Uint8Array>, {
      ...options,
      onNextNode: loadScripts,
    });
}

// Register current scripts
function registerCurrentScripts() {
  for (let script of document.scripts) {
    if (script.id || script.hasAttribute("src")) {
      scripts.add(script.id || script.getAttribute("src"));
    }
  }
}

// Load new scripts
function loadScripts(el: Node) {
  if (el.nodeName !== "SCRIPT") return;

  const src = (el as HTMLElement).getAttribute("src");

  if (scripts.has(src) || scripts.has((el as HTMLElement).id)) return;

  const script = document.createElement("script");

  if (src) script.src = src;

  script.innerHTML = (el as HTMLElement).innerHTML;

  // Remove after load the script
  script.onload = script.onerror = () => script.remove();

  document.head.appendChild(script);

  // Remove after append + execute (only for inline script)
  if (!src) script.remove();
}