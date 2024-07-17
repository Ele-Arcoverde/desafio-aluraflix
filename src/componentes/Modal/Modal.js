import React from 'react';

const Modal = ({ video, aoFechar, aoSalvar, aoAlterar }) => {
  return (
    <div className="modal">
      <button onClick={aoFechar}>Fechar</button>
      <form onSubmit={(e) => { e.preventDefault(); aoSalvar(video); }}>
        <input type="text" name="titulo" value={video.titulo} onChange={aoAlterar} />
        <select name="categoria" value={video.categoria} onChange={aoAlterar}>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Inovação">Inovação</option>
        </select>
        <input type="text" name="imagem" value={video.imagem} onChange={aoAlterar} />
        <input type="text" name="video" value={video.video} onChange={aoAlterar} />
        <textarea name="descricao" value={video.descricao} onChange={aoAlterar}></textarea>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default Modal;

