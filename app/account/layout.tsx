import React from 'react';
import { Session } from 'next-auth';
import { headers } from 'next/headers';
import AuthContext from "@/contexts/AuthContext";
import { SolanaContextProvider } from "@/contexts/SolanaContext";
import QueryContext from '@/contexts/QueryContext';
import PageWrapper from '@/components/PageWrapper';

export const metadata = {
    title: 'My Account',
    description: 'Link and Unlink wallets, connect to Twitch, and more.',
};

export interface AccountLayoutProps {
    children: React.ReactNode;
    admin: React.ReactNode;
}

async function getSession(cookie: string): Promise<Session> {

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
        headers: {
            cookie,
        },
    });

    const session = await response.json();

    return Object.keys(session).length > 0 ? session : null;
}

export default async function AccountLayout({children, admin}: AccountLayoutProps) {
    const session = await getSession(headers().get('cookie') ?? '');

    return (
        <SolanaContextProvider>
            <AuthContext session={session}>
                <QueryContext>
                    <PageWrapper className='h-full'>
                        {children}
                        {admin}
                    </PageWrapper>
                </QueryContext>
            </AuthContext>
        </SolanaContextProvider>
    );
}