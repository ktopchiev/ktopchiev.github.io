import { useEffect, useState } from "react";

export default function useAnimationState() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return isLoaded;
}