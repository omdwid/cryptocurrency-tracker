import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import React from "react";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
    title: "Cryptonite",
    description: "Web Application for a Cryptocurrency Tracking.",
    icons: {
        icon: "/assets/images/site-logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
