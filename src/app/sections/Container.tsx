
"use client"

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="salt-container relative z-10">
            {children}
        </div>

    )
}
