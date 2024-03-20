export default function Person({ people, firstName, surName, gender }) {
  return (
    <div className="mb-2 rounded-md bg-stone-200">
      <h3 className="font-bold">
        {surName}, {firstName}
      </h3>
      <p>Gender: {gender}</p>
      <p>Child of: </p>
    </div>
  );
}
