import Link from "next/link";
import songs from "./api/songs.json";

export default function SongList() {
  return (
    <div className="container">
      <Link href="/"><li>/home</li></Link> 

        {songs.map((song) => (
            <Link href={`/songs/${song.id}`}>
                <li key={song.id}>
                   {song.title}
                 </li>
            </Link>
        ))}
     
    </div>
  );
}