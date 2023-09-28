import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import {Textarea} from '../components/Textarea.tsx'

const queryClient = new QueryClient()

// simulate API call
const getLanguages = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(['English', 'Italian', 'Spianish', 'Chinese'])
    }, 100)
  })
}

export const TranslateToolPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslateTool />
    </QueryClientProvider>
  )
}

const TranslateTool = () => {
  const languageQuery = useQuery(['languages'], getLanguages)

  if (languageQuery.isLoading) {
    return <div className="bg-primary-900/8 relative">Loading languages...</div>
  }

  const languages = languageQuery.data || []

  return (
    <div className="max-w-[1010px] p-10 relative mx-auto">
      <div className="grid grid-cols-2">
        <div className="py-4 text-lg">
          Translate from{' '}
          <select className="font-bold bg-transparent">
            {languages.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="py-4 text-lg">
          Translate to{' '}
          <select className="font-bold bg-transparent">
            {languages.map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="relative">
        <div className="absolute grid place-items-center inset-0 pointer-events-none">
          <button
            onClick={(e) => {
              // rotate button on click
              e.currentTarget.classList.toggle('rotate-180')
            }}
            className="rounded-full bg-neutral-25 select-none w-10 h-10 text-lg pointer-events-auto hover:bg-neutral-200 transition-all"
          >
            &#8651;
          </button>
        </div>
        <div className="grid grid-cols-2 min-h-[400px]">
          <div className="border-1 border-neutral-500 rounded-s-md overflow-hidden focus-within:border-neutral-900">
            <Textarea placeholder="Insert text" />
          </div>
          <div className="border-1 border-neutral-500 rounded-e-md overflow-hidden focus-within:border-neutral-900">
            <Textarea placeholder="Translate" />
          </div>
        </div>
      </div>
    </div>
  )
}
