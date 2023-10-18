
import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {

    return (
        <div className="flex items-center justify-between w-400 px-10 py-2">
  <input
    type="text"
    className="w-full rounded-lg border border-gray-300 shadow-sm"
    placeholder="Buscar..."
    
  />
  <BiSearchAlt
    className="text-white "
    size="20px"
    style={{ backgroundColor: "green" }}
  />
</div>
      );
};