import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface IUser {
  name: string;
}

type AuthenticationContextType = {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
};

const AuthenticationContext = createContext<AuthenticationContextType>({
  user: null,
  setUser: () => {},
});

interface IAuthenticationProviderProps {
  children: ReactNode;
}

const AuthenticationProvider: React.FC<IAuthenticationProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthenticationContext.Provider value={{user, setUser}}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationContext, AuthenticationProvider, type IUser};
