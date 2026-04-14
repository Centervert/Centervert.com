/**
 * Backwards-compatibility shim. The legacy default import
 *   `import Navbar from "@/components/Navbar";`
 * now renders the new Nav section. All new code should import
 * `Nav` directly from `@/components/sections`.
 */
import { Nav } from "./sections/Nav";

export default Nav;
