interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
}

export default function Button({
  children,
  onClick,
  color = "#22c55e",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        background: color,
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      {children}
    </button>
  );
}
