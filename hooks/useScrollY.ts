import { useEffect, useState } from "react";

export const useScrollY = (): number => {
    const isBrowser = typeof window !== "undefined";

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = (): void => {
            const currentScrollY = isBrowser ? window.scrollY : 0;
            setScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isBrowser]);

  return scrollY;
};
