export interface Context {
    theme: string, 
    setTheme: React.Dispatch<React.SetStateAction<string>>, 
    toggleTheme: () => void,
    isSidebarVisible: boolean, 
    setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>, 
    handleToggleSidebar: () => void,
}