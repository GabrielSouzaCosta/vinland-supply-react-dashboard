export interface Context {
    theme: string, 
    setTheme: React.Dispatch<React.SetStateAction<string>>, 
    toggleTheme: () => void,
    isSidebarVisible: boolean, 
    handleToggleSidebar: () => void
}