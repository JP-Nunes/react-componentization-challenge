import { createContext, ReactNode, useState } from 'react';

import { api } from '../services/api';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenreContextData {
  selectGenre: (id: number) => void;
  selectedGenre: GenreResponseProps;
}

interface GenreContextProviderProps {
  children: ReactNode;
}

export const GenreContext = createContext({} as GenreContextData);

export function GenreContextProvider({ children }: GenreContextProviderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function selectGenre(id: number) {
    api.get<GenreResponseProps>(`genres/${id}`).then(response => {
      setSelectedGenre(response.data);
    })
  }

  return (
    <GenreContext.Provider value={{ selectGenre, selectedGenre }}>
      {children}
    </GenreContext.Provider>
  )
}