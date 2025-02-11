import React from "react";
import { Card, CardContent } from "./ui/Card";

export default function SuperheroList({ superheroes }) {
  return (
    <div className="space-y-2">
      {superheroes.map((hero, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <p className="font-bold">{hero.name}</p>
            <p>{hero.superpower}</p>
            <p>Humility Score: {hero.humilityScore}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
