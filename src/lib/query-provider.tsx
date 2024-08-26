<<<<<<< HEAD
=======
'use client'

import ClientWrapper from "@/app/client-wrapper";
>>>>>>> 8d80a130897fc9effc781d0d54fe31fcf3c1f3fe
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type QueryProps = {
  children: React.ReactNode;
};

const QueryProvider = ({ children }: QueryProps) => {
<<<<<<< HEAD
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
=======
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
>>>>>>> 8d80a130897fc9effc781d0d54fe31fcf3c1f3fe
};

export default QueryProvider;
