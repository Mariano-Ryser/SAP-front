import Head from "next/head"
import Image from "next/image"

const URL = "https://newsapi.org/v2/"
const URLqiz = "c4340d194f48"

export default function Cienciados({noticia}){
    return(
    <>

<div className="section">
  <div className="tl">
    {noticia.map((as) => (
      <div className="box" key={as.id}>
        <h2 className="news-title">{as.title}</h2>
        {/* <p className="news-description">{as.description}</p> */}
        <p className="news-content">{as.content}</p>

        {/* Imagen que redirige a la URL de la noticia */}
        <a href={as.url} target="_blank" rel="noopener noreferrer">
          <img src={as.urlToImage} alt={as.title} className="news-image" />
        </a>

        <p className="news-date">Published on: {new Date(as.publishedAt).toLocaleDateString()}</p>
        <p className="news-author">By {as.author || "Unknown"}</p>
      </div>
    ))}
  </div>

  {/* Estilos CSS */}
  <style jsx>{`
    .section {
    }

    .tl {
    }

    .box {
      padding: 20px;
      box-shadow: 0 13px 8px 6px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      margin-bottom:3rem;
    }

    .news-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .news-description {
      margin-bottom: 10px;
    }

    .news-content {
      font-size: 14px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .news-date {
      color: #888;
      font-size: 12px;
      margin-bottom: 10px;
    }

    .news-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }

    .news-image:hover {
      opacity: 0.8;
    }

    .news-author {
      font-size: 12px;
    }

    /* Estilos responsivos */
    @media (max-width: 768px) {
      .tl {
        grid-template-columns: 1fr;
      }

      .news-content {
        white-space: normal;
      }

      .news-image {
        height: auto;
      }
    }
  `}</style>
</div>
    </>
    )
}

export const getServerSideProps = async (context) =>{
   const res = await fetch(`${URL}top-headlines?country=us&apiKey=87aa57ca5${URLqiz}b0784b4ab31`)
   const noticias = await res.json()

console.log(noticias)

const filteredNoticias = noticias.articles.filter(article => article.title !== '[Removed]');

return {
  props: {
    noticia: filteredNoticias
  }
    }
}

