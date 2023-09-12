import { useState, useEffect } from "react";

export const useEmojis = (initialState) => {
    const [emojis, setEmojis] = useState(initialState);
  
    useEffect(() => {
      const emojis = ["🦄", "👩🏻‍🚀", "🏂🏾", "🏈", "🔥"];
      setEmojis(emojis);
    }, []);
  
    return [emojis, setEmojis];
};