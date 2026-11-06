import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

// Define the values available through our authentication context.
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// Create the context with an undefined default.
// This lets our custom hook detect missing providers.
const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

// Define the props accepted by our provider.
interface AuthProviderProps {
    children: ReactNode;
}

// Share authentication state with the application.
export function AuthProvider({ children }: AuthProviderProps) {
    // Users begin in the logged-out state.
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Simulate logging in.
    const login = useCallback(() => {
        setIsAuthenticated(true);
    }, []);

    // Simulate logging out.
    const logout = useCallback(() => {
        setIsAuthenticated(false);
    }, []);

    // Memoize the context value to avoid unnecessary updates.
    const value = useMemo(
        () => ({
            isAuthenticated,
            login,
            logout,
        }),
        [isAuthenticated, login, logout]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// Provide a reusable way for components to access authentication.
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}
