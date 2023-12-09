'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';

// Reference: https://github.com/solana-labs/wallet-adapter/commit/70fd5aac6eaf9584b0e3034685236a850e3488e4
// Extra: https://github.com/solana-labs/wallet-adapter/issues/648
const WalletDisconnectButtonDynamic = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletDisconnectButton,
  { ssr: false }
);

export default function AccountPage() {
  return (
    <div>
      <WalletDisconnectButtonDynamic />
    </div>
  );
}
