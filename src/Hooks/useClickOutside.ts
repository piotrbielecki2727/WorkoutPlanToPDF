import { useEffect } from "react";

const useClickOutside = (ref: React.RefObject<HTMLElement>, handler: () => void, isActive: boolean) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        };

        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActive, ref, handler]);
};

export default useClickOutside;