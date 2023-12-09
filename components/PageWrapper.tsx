import React from 'react';
import classNames from 'classnames';

export default function PageWrapper ({children, className}: {children: React.ReactNode, className?: string}) {
    const classes = classNames('flex min-h-screen flex-col items-center relative antialiased', className);
    return (
        <main className={classes}>
            {children}
        </main>
    );
}