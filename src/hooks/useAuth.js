import react, { useState, useContext, createContext } from '../../node_modules/react/index';
import jsCookie from '../../node_modules/js-cookie/index';
import axios from '../../node_modules/axios/index';
import endPoints from 'services/api/index';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProviderAuth() {
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {
        const { data: access_token } = await axios.post();
    };
    return {
        user,
        signIn,
    };
}
