import { ThemeProvider } from "@/components/theme-provider"

function App() {

    return (
        <>
            <ThemeProvider storageKey="vite-ui-theme">
            </ThemeProvider>
        </>
    )
}

export default App
