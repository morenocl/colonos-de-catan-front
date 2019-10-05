export const listLobbies = () => [
    {id: 1,
    name: "nombre1",
    owner: "owner1",
    players: ["user1.1", "user1.2", "user1.3"],
    max_players: 1
    },
    {id: 2,
    name: "nombre2",
    owner: "owner2",
    players: ["user2.1", "user2.2"],
    max_players: 2
    }
];

export function joinLobby(id) {
  console.log(`Joined lobby ${id}`);
}
