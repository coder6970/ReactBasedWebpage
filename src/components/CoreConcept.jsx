export default function CoreConcept(prop){
  return (
    <li>
      <img src = {prop.image} alt="" />
      <h3>{prop.title}</h3>
      <p>{prop.description}</p>
    </li>
  );
}