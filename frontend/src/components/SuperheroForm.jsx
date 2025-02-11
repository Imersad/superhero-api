import React from "react";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";

export default function SuperheroForm({ addSuperhero }) {
  const [form, setForm] = useState({
    name: "",
    superpower: "",
    humilityScore: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.superpower || !form.humilityScore) return;
    addSuperhero(form);
    setForm({ name: "", superpower: "", humilityScore: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <Label>Name</Label>
      <Input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Label>Superpower</Label>
      <Input
        value={form.superpower}
        onChange={(e) => setForm({ ...form, superpower: e.target.value })}
      />
      <Label>Humility Score (1-10)</Label>
      <Input
        type="number"
        min="1"
        max="10"
        value={form.humilityScore}
        onChange={(e) => setForm({ ...form, humilityScore: e.target.value })}
      />
      <Button type="submit" className="mt-2">
        Add Superhero
      </Button>
    </form>
  );
}
