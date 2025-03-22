// components/NotiItem.js
import { handleLike, handleDelete } from '../../services/notiService';

const NotiItem = ({ noti, baseURL, onDelete, onLike }) => {
  const { _id, titulo, text, likes } = noti;

  return (
    <div key={_id} className="notiBox">
      <h1 className="titulo">{titulo}</h1>
      <span className="text">{text}</span>
      <br />
      <div>
        <button className="likeButton" onClick={() => onLike(_id)}>
          ❤️{likes}
        </button>
        <span className="x" onClick={() => onDelete(_id)}>
          ❌
        </span>
      </div>
    </div>
  );
};

export default NotiItem;