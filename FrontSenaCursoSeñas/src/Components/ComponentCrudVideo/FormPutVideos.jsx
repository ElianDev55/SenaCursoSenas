import  { useContext, useState } from "react";
import { VideosContext } from "../../Context/ContextVideos";
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoMdSend } from "react-icons/io";
import { Spinner } from "@nextui-org/react";
import { CategoriesContext } from "../../Context/ContextCategories";

export function FormPutVidos(infovideo) {
  const { updateVideosData, updated } = useContext(VideosContext);

  let idvideo = infovideo.infovideo.datavideo.data.idvideo;
  const context = useContext(CategoriesContext)
  const categories = context.categories;

  const [formData, setFormData] = useState({
    video: null,
    videoName: "",
    title: infovideo.infovideo.datavideo.data.title,
    description: infovideo.infovideo.datavideo.data.description,
    state: infovideo.infovideo.datavideo.data.state,
    idUser: infovideo.infovideo.datavideo.data.idUser,
    idCategory: infovideo.infovideo.datavideo.data.idCategory,
    miniature: null,
    miniatureName: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    if (formData.video) {
      formDataToSend.append("video", formData.video);
    }

    if (formData.miniature) {
      formDataToSend.append("miniature", formData.miniature);
    }

    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("idUser", formData.idUser);
    formDataToSend.append("idCategory", formData.idCategory);

    try {
      await updateVideosData(idvideo, formDataToSend);
    } catch (error) {
      console.error("Hubo un problema al actualizar los datos del video:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const inputValue = type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">Título del Video:</span>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Descripción del Video:</span>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Usuario:</span>
          <Input
            type="text"
            name="idUser"
            value={formData.idUser}
            onChange={handleInputChange}
            className="mt-1 block bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
        </label>
        <label className="block mt-4">
  <span className="text-sm font-medium text-gray-700">Categoría:</span>
  <select
    name="idCategory"
    value={formData.idCategory}
    onChange={handleInputChange}
    className="mt-1 block bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
  >
    {categories.map((category) => (
      <option key={category.idcategory} value={category.idcategory}>
        
        {category.title}
      </option>
    ))}
  </select>
</label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Miniatura del Video:</span>
          <input
            type="file"
            name="miniature"
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
          {formData.miniatureName && (
            <p className="text-gray-500 text-sm mt-2">Miniatura seleccionada: {formData.miniatureName}</p>
          )}
        </label>
        <label className="block mt-4">
          <span className="text-sm font-medium text-gray-700">Video del Video:</span>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
          />
          {formData.videoName && (
            <p className="text-gray-500 text-sm mt-2">Video seleccionado: {formData.videoName}</p>
          )}
        </label>
        <div className="flex items-center justify-between mt-10 pb-10">
          <label className="block mt-4">
            <span className="text-sm font-medium text-gray-700">Estado del Video:</span>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base"
            >
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </select>
          </label>
          <Button color="success" variant="solid" type="submit">
            Enviar <IoMdSend />
          </Button>
        </div>
      </form>
      {updated && <Spinner color="success" />}
    </div>
  );
}
