import React, { useState } from "react";

function Buscador({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Digimon por nombre"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Buscador;
