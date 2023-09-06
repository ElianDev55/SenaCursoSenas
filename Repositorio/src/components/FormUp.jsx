import React, { useState } from 'react';

function FormUP() {
  const [formData, setFormData] = useState({
    video: null,
    title: '',
    description: '',
    state: false,
    miniature: null,
    idUser: '',
    idCategory: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'checkbox' ? checked : files ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const enviarDatos = async () => {
    const form = new FormData();

    form.append('video', formData.video);
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('state', formData.state);
    form.append('miniature', formData.miniature);
    form.append('idUser', formData.idUser);
    form.append('idCategory', formData.idCategory);

    const data = {
      title: formData.title,
      description: formData.description,
      state: formData.state,
      idUser: formData.idUser,
      idCategory: formData.idCategory,
    };

    form.append('data', JSON.stringify(data));

    try {
      const response = await fetch('http://localhost:8000/videos/', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados con éxito:', responseData);
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Formulario para enviar datos a la API con Archivos de Video y Miniatura</h1>
      <form>
        <label htmlFor="video">Archivo de Video:</label>
        <input type="file" id="video" name="video" onChange={handleInputChange} /><br /><br />

        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} /><br /><br />

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea><br /><br />

        <label htmlFor="state">Estado:</label>
        <input type="checkbox" id="state" name="state" checked={formData.state} onChange={handleInputChange} /><br /><br />

        <label htmlFor="miniature">Archivo de Miniatura:</label>
        <input type="file" id="miniature" name="miniature" onChange={handleInputChange} /><br /><br />

        <label htmlFor="idUser">ID de Usuario:</label>
        <input type="text" id="idUser" name="idUser" value={formData.idUser} onChange={handleInputChange} /><br /><br />

        <label htmlFor="idCategory">ID de Categoría:</label>
        <input type="text" id="idCategory" name="idCategory" value={formData.idCategory} onChange={handleInputChange} /><br /><br />

        <input type="button" value="Enviar" onClick={enviarDatos} />
      </form>
    </div>
  );
}

export default FormUP;