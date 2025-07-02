export default function TabButton(prop){
  return (
    <button className = {prop.isSelected ? "active" : undefined}onClick = {prop.onSelect}>{prop.children}</button>
  )
}