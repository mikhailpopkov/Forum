import { useState } from "react";

export const useFetching = (callback: () => Promise<void>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string>("");

  const fetching = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setIsError("");
      await callback();
    } catch (error) {
      if (error instanceof Error) {
        setIsError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, isError] as const;
};
