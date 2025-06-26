import type { Metadata } from 'next'
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { settingsFooterQuery, settingsQuery, settingsSeoQuery } from "@/sanity/queries/settings";
import { useMetadata } from "@/hooks/use-metadata";
import { draftMode } from "next/headers";
import localFont from "next/font/local";

import { LayoutTransition } from "@/components/global/layout-transition";
import { EnterAnimation } from "@/components/global/enter-animation";
import { ReactLenis } from "lenis/react";
import { Header } from "@/components/global/header";
import { SetVH } from "@/components/global/SetVH";

import "./globals.css";
import { InformationPage } from "@/components/information/information-page";
import { Footer } from '@/components/global/footer';
import { ThemeProvider } from '@/components/global/theme-provider';

const GerstnerText = localFont({
  src: [
    {
      path: '../fonts/GerstnerProgrammFSL-Bold.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/GerstnerProgrammFSL-Italic.woff',
      weight: '400',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-gerstner-text'
})

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({ query: settingsSeoQuery })

  return useMetadata({ data, useTitleTemplate: false })
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [{ data: settings }, { data: footerSettings }] = await Promise.all([
    sanityFetch({ query: settingsQuery }),
    sanityFetch({ query: settingsFooterQuery })
  ])

  return (
    <ThemeProvider>
      <body
        className={`${GerstnerText.variable} antialiased font-serif font-normal bg-grey-light text-black dark:bg-dark-black dark:text-grey-light transition-colors duration-[600ms] ease`}
      >
        <EnterAnimation />
        <Header {...settings?.header} />
        <SetVH />
        <InformationPage />
        <SanityLive />
        <LayoutTransition>
          <ReactLenis
            root
            options={{
              lerp: 0.15,
            }}
          >
            {children}
            <Footer {...footerSettings} />
          </ReactLenis>
        </LayoutTransition>
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </ThemeProvider>
  );
}
