"use client";

import { useState } from "react";

//Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

//Images
import Image from "next/image";
import mafiaLogo from "../assets/logo.jpg";

export default function Home() {
  const [players, setPlayers] = useState<
    { name: string; number: number | null }[]
  >([
    { name: "Walter", number: null },
    { name: "Yor", number: null },
    { name: "Glebola", number: null },
    { name: "Sonya Blade", number: null },
    { name: "Kurut", number: null },
    { name: "Итачи", number: null },
    { name: "Хитрый Кот", number: null },
    { name: "Кэш", number: null },
    { name: "КисешьПисешь", number: null },
    { name: "Кэт", number: null },
  ]);

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleNameChange = (index: number, newName: string) => {
    const updatedPlayers = players.map((player, i) =>
      i === index ? { ...player, name: newName } : player
    );
    setPlayers(updatedPlayers);
  };

  const assignRandomNumbers = () => {
    const numbers = shuffleArray(
      Array.from({ length: players.length }, (_, i) => i + 1)
    );

    const updatedPlayers = players.map((player, index) => ({
      ...player,
      number: numbers[index],
    }));

    const sortedPlayers = updatedPlayers.sort(
      (a, b) => (a.number ?? 0) - (b.number ?? 0)
    );
    setPlayers(sortedPlayers);
  };

  return (
    <div className="mt-4 mr-2 mb-8 ml-1">
      <div className="flex flex-col items-center mb-4 mt-4">
        <h1 className="mb-2">Рандомайзер для клуба 10 Якорей</h1>
        <Image
          className="rounded"
          src={mafiaLogo}
          width={50}
          height={50}
          alt="logo"
        />
      </div>

      <ul>
        {players.map((player, index) => (
          <li key={index} className="relative mb-4 mt-4 mr-2 ml-2">
            <Input
              type="text"
              value={player.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
            {player.number !== null && (
              <span className="absolute top-1.5 bottom-0 left-[90%]">
                {player.number}
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button className="text-white px-4 py-2" onClick={assignRandomNumbers}>
          Ебануть рандом
        </Button>
      </div>
    </div>
  );
}
