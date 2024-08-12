import { QueryClientProvider, QueryClient} from '@tanstack/react-query'

type QueryProps = {
    children: React.ReactNode;
}

const QueryProvider = ({children}: QueryProps) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryProvider;