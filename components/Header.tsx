'use client';

import AuthContext from '@/contexts/AuthContext';
import QueryContext from '@/contexts/QueryContext';
import { SolanaContextProvider } from '@/contexts/SolanaContext';
import React from 'react';
import { WalletButton } from './WalletButton';

export function Header () {
    return (
        <div>
            <h1>Header</h1>
            <SolanaContextProvider>
                <QueryContext>
                    <AuthContext>
                        <WalletButton />
                    </AuthContext>
                </QueryContext>
            </SolanaContextProvider>
        </div>
    )
}