import Person from "./Person";
import { FAMILY_TREE } from "../data";

export default function Rolodex() {
  const people = [];
  people.push(FAMILY_TREE.database.people);

  console.log(people);

  return (
    <section id="rolodex">
      <h2>Rolodex</h2>
      <ul>
        {people.map((person, index) => (
          <Person
            key={person.person[index]}
            name={person.person[index].name.first}
            gender={person.person[index].gender}
          />
        ))}
      </ul>
    </section>
  );
}
