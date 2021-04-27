import { useContext } from 'react'
import { GenreContext } from '../contexts/GenreContextProvider'

export function Header() {
  const { selectedGenre } = useContext(GenreContext)

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}