import React from "react";
import { useState, useEffect } from "react";
import { fetchSuperheroes, addSuperhero } from "./services/api";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";

export default function App() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetchSuperheroes().then(setSuperheroes);
  }, []);

  const handleAddSuperhero = async (superhero) => {
    await addSuperhero(superhero);
    fetchSuperheroes().then(setSuperheroes);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Humble Superhero API</h1>
      <SuperheroForm addSuperhero={handleAddSuperhero} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
}
