import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { services } from "@/lib/services";

const workLinks = [
  { label: "Our Work", href: routes.work },
  { label: "Case Studies", href: routes.work },
];

const companyLinks = [
  { label: "About", href: routes.about },
  { label: "Scale Up", href: routes.scaleUp },
  { label: "Careers", href: routes.careers },
  { label: "News", href: routes.news },
  { label: "Contact", href: routes.contact },
];

const legalLinks = [
  { label: "Privacy Policy", href: routes.legal.privacy },
  { label: "Terms of Service", href: routes.legal.terms },
  { label: "Cookie Policy", href: routes.legal.cookies },
];

export function Footer() {
  return (
    <footer className="border-t border-cv-black/5 bg-smoke">
      <Container size="wide">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <Logo variant="horizontal" color="evergreen" height={28} link />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-cv-black/55">
              Centervert helps businesses plan, build, implement, and support the
              systems they rely on to operate.
            </p>
            <div className="mt-5 flex flex-col gap-1.5 text-[14px] text-cv-black/60">
              <a
                href={routes.contactEmail}
                className="transition-colors hover:text-cv-black"
              >
                {routes.emailDisplay}
              </a>
              <a
                href={routes.contactPhone}
                className="transition-colors hover:text-cv-black"
              >
                {routes.phoneDisplay}
              </a>
              <span>Greenville, SC</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-4">
            <FooterColumn title="Services">
              {services.map((s) => (
                <FooterLink key={s.slug} href={s.href}>
                  {s.title}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Work">
              {workLinks.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Company">
              {companyLinks.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterColumn>
            <FooterColumn title="Legal">
              {legalLinks.map((l) => (
                <FooterLink key={l.label} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cv-black/8 py-8 text-[12.5px] text-cv-black/40 md:flex-row">
          <div className="flex items-center gap-3">
            <p>&copy; {new Date().getFullYear()} Centervert LLC. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-3">
            <span>Greenville, SC</span>
            <Image
              src="/brand/logos/center.builtby.footer.evergreen.png"
              alt="Built by Centervert"
              width={240}
              height={60}
              className="h-4 w-auto opacity-70"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[13px] font-semibold uppercase tracking-wider text-cv-black">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] text-cv-black/55 transition-colors hover:text-cv-black"
      >
        {children}
      </Link>
    </li>
  );
}
