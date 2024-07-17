import React from 'react';

const Formulario = ({ aoEnviar }) => {
  <form onSubmit={aoEnviar}>
    <input type="text" name="titulo" placeholder="Título" />
    <select name="categoria">
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Inovação">Inovação</option>
    </select>
    <input type="text" name="imagem" placeholder="Link da imagem" />
    <input type="text" name="video" placeholder="Link do vídeo" />
    <textarea name="descricao" placeholder="Descrição"></textarea>
    <button type="submit">Salvar</button>
    <button type="reset">Limpar</button>
  </form>
};

export default Formulario
