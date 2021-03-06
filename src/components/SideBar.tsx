import { GenreResponseProps } from '../App'
import { Button } from "./Button";
interface SidebarProps {
  genres: GenreResponseProps[]
  selectedGenreId: number
  HandleClick: (id: number) => void
}


export function SideBar(props: SidebarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.HandleClick(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}