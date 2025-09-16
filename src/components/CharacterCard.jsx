// src/components/CharacterCard.jsx

function CharacterCard({ character }) {
    return (
      <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
        <img
          src={character.image}
          alt={character.name}
          className="w-32 h-32 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold">{character.name}</h2>
        <p className="text-gray-600">{character.species}</p>
        <p className="text-gray-600">{character.status}</p>
      </div>
    );
  }
  
  export default CharacterCard;
  