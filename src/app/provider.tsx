import React from 'react'
import { ReactLenis } from 'lenis/react'

import { ReactNode } from 'react';

export default function Provider({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )
}
