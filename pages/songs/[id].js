import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import songs from "../api/songs.json"
import ModalComponent from "../../components/ModalCancionero";
import Link from "next/link";
export default function SongPage() {
  const router = useRouter();
  const { id } = router.query;
  const [songData, setSongData] = useState(null);
  const [songContent, setSongContent] = useState("");

  useEffect(() => {
    if (!id) return;

    const song = songs.find((song) => song.id === id);
    if (song) {
      setSongData(song);

      // Si tiene un archivo asociado, cargar su contenido
      if (song.file) {
        fetch(song.file)
          .then((response) => response.text())
          .then((text) => setSongContent(text))
          .catch((error) => console.error("Error al cargar la canción:", error));
      } else {
        setSongContent(song.content); // Si no, usa el contenido del JSON
      }
    }
  }, [id]);

  if (!songData) {
    return <p>Cargando...</p>;
  }

  return (
    <>
    <Link href="../songs"><li>/volver</li></Link>
      <h3>{songData.title}</h3>
      <ModalComponent
        content={songContent}
        fontSize={songData.fontSize}
        previewFontSize={songData.previewFontSize}
        showPreview={true}
      />
    </>
  );
}