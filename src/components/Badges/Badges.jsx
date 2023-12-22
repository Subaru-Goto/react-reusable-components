export default function Badges({ children, variant, color, ...rest}) {
  // squre or pill
  let variantClass = variant && `badge--${variant}`;
  // red, yellownpm run dev
  let colorClass = color && `badge--${color}`;
  const allClasses = `badge ${variantClass} ${colorClass}`
  return (
    <div className={allClasses}>{ children }</div>
  )
}