import { useEffect } from 'react';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';

function Personagens() {
  const { characters, loading, getCharacters } = useCharacters();

  useEffect(() => {
    getCharacters();
  }, []);

  if (loading) {
    return <div className="text-center text-xl mt-10">Carregando personagens...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Personagens</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default Personagens;
