import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GetCurrentFormattedDate from "@/components/ui/getCurrentFormattedDate";
import { buildMetadata, siteConfig } from "@/config/site.config";

export const metadata = buildMetadata({
  title: `Privacy Policy | ${siteConfig.siteName}`,
  description:
    "Privacy Policy - how Babu Angi collects, uses, and protects portfolio visitor and contact data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-12 pt-20 sm:pt-24">
      <Card>
        <CardHeader>
          <CardTitle>Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
            <p className="text-sm text-muted-foreground">
              Last updated: <GetCurrentFormattedDate />
            </p>

            <p>
              This Privacy Policy explains how {siteConfig.siteName} collects,
              uses, and protects information when you visit {siteConfig.domain},
              submit a contact form, or start a project conversation.
            </p>

            <h2 className="pt-2 text-lg font-semibold text-foreground">
              Information Collected
            </h2>
            <p>
              I collect only the information needed to respond to your request,
              such as your name, email address, project details, budget range,
              and any message you choose to send. Basic technical information,
              such as browser type, device information, and page activity, may
              be processed by hosting or analytics services to keep the website
              secure and reliable.
            </p>

            <h2 className="pt-2 text-lg font-semibold text-foreground">
              How Information Is Used
            </h2>
            <p>
              Information is used to reply to inquiries, discuss potential work,
              improve the portfolio experience, protect the site from abuse, and
              meet legal or security obligations. I do not sell personal
              information.
            </p>

            <h2 className="pt-2 text-lg font-semibold text-foreground">
              Third-Party Services
            </h2>
            <p>
              This site may use trusted third-party services for hosting,
              authentication, form delivery, analytics, media hosting, and
              communication. These providers process data according to their own
              privacy and security practices.
            </p>

            <h2 className="pt-2 text-lg font-semibold text-foreground">
              Data Retention
            </h2>
            <p>
              Contact and project messages are kept only as long as needed to
              respond, maintain records, or support an active business
              relationship. You can request deletion or correction of your data
              at any time.
            </p>

            <h2 className="pt-2 text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p>
              For privacy questions or data requests, email{" "}
              <Link
                href={`mailto:${siteConfig.links.contactMail}`}
                className="text-primary underline"
              >
                {siteConfig.links.contactMail}
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
