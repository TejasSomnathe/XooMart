import { useState } from "react";

export default function ImageSearch() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:8000/api/v1/users/search-image", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setResults(data.matches);
  };

  return (
    <div>
      <h2>Search Products by Image</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.map(p => (
          <div key={p._id}>
            <img src={p.imageUrl} alt={p.name} width="150" />
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
