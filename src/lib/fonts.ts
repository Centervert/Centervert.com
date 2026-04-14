import localFont from "next/font/local";

/**
 * Brand fonts loaded through next/font/local for zero layout shift, automatic
 * preloading of the critical weights, and self-hosting. Paths are relative to
 * this file; the assets live in /public/brand/fonts so plain CSS can still
 * reference them as /brand/fonts/... if needed.
 */

export const effra = localFont({
  src: [
    { path: "../../public/brand/fonts/Effra_Th.ttf", weight: "100", style: "normal" },
    { path: "../../public/brand/fonts/Effra_Hair.ttf", weight: "200", style: "normal" },
    { path: "../../public/brand/fonts/Effra_Lt.ttf", weight: "300", style: "normal" },
    { path: "../../public/brand/fonts/Effra_LtIt.ttf", weight: "300", style: "italic" },
    { path: "../../public/brand/fonts/Effra_Rg.ttf", weight: "400", style: "normal" },
    { path: "../../public/brand/fonts/Effra_It.ttf", weight: "400", style: "italic" },
    { path: "../../public/brand/fonts/Effra_Md.ttf", weight: "500", style: "normal" },
    { path: "../../public/brand/fonts/Effra_MdIt.ttf", weight: "500", style: "italic" },
    { path: "../../public/brand/fonts/Effra_SBd.ttf", weight: "600", style: "normal" },
    { path: "../../public/brand/fonts/Effra_SBdIt.ttf", weight: "600", style: "italic" },
    { path: "../../public/brand/fonts/Effra_Bd.ttf", weight: "700", style: "normal" },
    { path: "../../public/brand/fonts/Effra_BdIt.ttf", weight: "700", style: "italic" },
    { path: "../../public/brand/fonts/Effra_XBd.ttf", weight: "800", style: "normal" },
    { path: "../../public/brand/fonts/Effra_XBdIt.ttf", weight: "800", style: "italic" },
    { path: "../../public/brand/fonts/Effra_Blk.ttf", weight: "900", style: "normal" },
    { path: "../../public/brand/fonts/Effra_BlkIt.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-effra-local",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
  fallback: ["Arial", "Helvetica", "system-ui", "sans-serif"],
});

export const recia = localFont({
  src: [
    {
      path: "../../public/brand/fonts/Recia-Variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/brand/fonts/Recia-VariableItalic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-recia-local",
  display: "swap",
  preload: true,
  adjustFontFallback: "Times New Roman",
  fallback: ["Georgia", "Times New Roman", "serif"],
});
