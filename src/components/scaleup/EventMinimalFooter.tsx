import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";

/**
 * Single-purpose LP footer. Logo, copyright, legal links. No services column,
 * no company column, no email signup. Keeps the page focused on RSVP while
 * satisfying legal basics.
 */
export function EventMinimalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-cv-black/5 bg-smoke">
      <Container size="wide">
        <div className="flex flex-col items-center justify-between gap-6 py-10 text-[12.5px] text-cv-black/45 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Logo variant="horizontal" color="evergreen" height={22} />
            <span>&copy; {year} Centervert LLC</span>
          </div>
          <nav className="flex items-center gap-5" aria-label="Legal">
            <Link
              href={routes.legal.privacy}
              className="transition-colors hover:text-cv-black"
            >
              Privacy
            </Link>
            <Link
              href={routes.legal.terms}
              className="transition-colors hover:text-cv-black"
            >
              Terms
            </Link>
            <Link
              href={routes.contactEmail}
              className="transition-colors hover:text-cv-black"
            >
              connect@centervert.com
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
