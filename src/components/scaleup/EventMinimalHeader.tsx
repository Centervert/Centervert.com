import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

/**
 * Single-purpose LP header. Centered logo only: no nav, no secondary CTA.
 * The only action on the page is RSVP. Logo links to "/" for users who want
 * to explore Centervert before deciding.
 */
export function EventMinimalHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-6 md:pt-8">
      <Container size="wide">
        <div className="flex items-center justify-center">
          <Logo variant="horizontal" color="smoke" height={26} />
        </div>
      </Container>
    </header>
  );
}
