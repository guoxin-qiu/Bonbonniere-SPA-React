export function EncodeContent(content) {
  return content
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br/>")
    .replace(/`([\S\s]+?)`/g, "<code>$1</code>");
}

export function PlaceholderMethod() {
  return "test";
}
