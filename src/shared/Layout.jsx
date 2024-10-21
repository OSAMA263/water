export default function Layout({ children, className = "" }) {
  return <div className={`bg-abyss ${className}`}>{children}</div>;
}
