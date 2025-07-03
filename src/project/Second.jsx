import { useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";
import StyledCard from "./StyledCard";

export const Second = () => {
  const [interValue, setInterValue] = useState("");
  const [add, setAdd] = useState([]);

  const handleChange = (value) => {
    setInterValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!interValue.trim()) return;

    if (add.includes(interValue)) {
      setInterValue("");
      return;
    }

    setAdd((prev) => [...prev, interValue]);
    setInterValue("");
  };

  const handleDelete = (itemToDelete) => {
    setAdd((prev) => prev.filter((item) => item !== itemToDelete));
  };

  return (
    <StyledCard>
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-purple-700">📝 Todo List</h1>
      </header>

      <form onSubmit={handleFormSubmit} className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter task..."
          value={interValue}
          onChange={(e) => handleChange(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Add Task
        </button>
      </form>

      <ul className="space-y-2">
        {add.map((item, index) => (
          <li
            key={index}
            className="p-3 bg-gray-100 border border-gray-300 rounded shadow-sm hover:bg-gray-200 flex justify-between items-center"
          >
            <span className="text-lg">{item}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => alert("Completed! ✅")}
                className="text-green-600 hover:text-green-800"
              >
                <MdCheck size={20} />
              </button>
              <button
                onClick={() => handleDelete(item)}
                className="text-red-600 hover:text-red-800"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </StyledCard>
  );
};

export default Second;
