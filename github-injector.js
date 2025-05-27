const style = document.createElement("style");
console.log("injecting!");
style.textContent = `
  @font-face {
    font-family: "CaskaydiaCoveNF";
    src: url("https://github.com/ryanoasis/nerd-fonts/raw/refs/heads/master/patched-fonts/CascadiaCode/CaskaydiaCoveNerdFontMono-Regular.ttf") format("truetype");
    font-display: swap;
  }

  :root {
    --fontStack-monospace: "CaskaydiaCove NF Mono", monospace !important;
    --code-font-family: "CaskaydiaCove NF Mono", monospace !important;
  }
`;
/*
  .react-blob-print-hide,
  .file-info,
  .commit-ref,
  pre,
  code,
  .blob-code,
  .blob-code-content,
  .blob-code-marker {
    font-family: "CaskaydiaCoveNF", monospace !important;
  }
`;
*/
document.head.appendChild(style);

