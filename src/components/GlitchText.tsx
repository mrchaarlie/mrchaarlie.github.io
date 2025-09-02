type Props = { children: string; className?: string }
export default function GlitchText({ children, className }: Props) {
  return (
    <span className={["glitch", className].filter(Boolean).join(" ")} data-text={children}>
      {children}
    </span>
  )
} 