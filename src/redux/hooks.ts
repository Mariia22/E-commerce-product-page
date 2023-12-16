import { useEffect, useState } from "react"
import { AppDispatch, RootState } from "./store"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => {
            setMatches(media.matches)
        }
        media.addListener(listener)
        return () => media.removeListener(listener)
    }, [matches, query])

    return matches
}
