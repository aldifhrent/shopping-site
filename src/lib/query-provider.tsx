import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type QueryProps = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: QueryProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
