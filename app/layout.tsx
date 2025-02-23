import '#/styles/globals.css';
import { GlobalNav } from '#/ui/global-nav/global-nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Capsmarks Methodology',
    template: '%s | Documentation',
  },
  description:
    'A comprehensive guide to our companys strategic approach and operational practices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body
        className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36"
        id={'semi-root'}
      >
        <GlobalNav />

        <div className="lg:pl-72">
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
