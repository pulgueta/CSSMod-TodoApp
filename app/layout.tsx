import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { Navbar } from '~/components/navbar/navbar';
import { Layout } from '~/types';

const geist = GeistSans;

import './globals.css';

export const metadata: Metadata = {
    title: 'CSS Modules with Next.js - TODO App',
    description:
        'A simple TODO app built with Next.js and CSS Modules. This is the app itself and is to test the usability of CSS Modules.',
    metadataBase: new URL(
        `http${process.env.NODE_ENV === 'production' ? 's' : ''}://${
            process.env.VERCEL_URL ?? 'localhost:3000'
        }`
    ),
    alternates: {
        canonical: '/',
    },
    twitter: {
        creator: '@pulgueta_',
    },
    category: 'Full Stack',
    creator: 'Andrés Rodríguez',
    keywords: [
        'todo',
        'css modules',
        'next.js',
        'react',
        'typescript',
        'javascript',
        'app',
        'web',
        'web app',
        'app web',
        'webapp',
        'appweb',
        'web-app',
        'app-web',
        'todo app',
        'todo-app',
        'todoapp',
    ],
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            notranslate: true,
        },
    },
    icons: {
        icon: '/favicon.ico',
    },
};

const RootLayout: React.FC<Layout> = ({ children }) => {
    return (
        <html lang='en'>
            <body className={geist.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
