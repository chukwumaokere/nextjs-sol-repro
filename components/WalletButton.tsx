'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
// Reference: https://solana.stackexchange.com/questions/4304/error-hydration-failed-because-the-initial-ui-does-not-match-what-was-rendered
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);
import { useWallet } from '@solana/wallet-adapter-react';

export interface IWalletButton {
  wallet: true;
}

export function WalletButton() {
  const session = useSession();

  const { publicKey, signTransaction, sendTransaction } = useWallet();

  return <WalletMultiButtonDynamic />;
}
