import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechnoxBD",
  description: "Ecommerce Web application built with Next.js and Tailwind CSS",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;