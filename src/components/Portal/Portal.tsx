import React, { ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
    children: ReactNode
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
    const mount = document.getElementById("portal-root") as HTMLElement
    const el = document.createElement("div") as HTMLElement

    useEffect(() => {
        mount?.appendChild(el)
        return () => {
            mount?.removeChild(el)
        }
    }, [el, mount])

    return createPortal(children, el)
}
