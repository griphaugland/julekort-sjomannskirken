"use client";
interface OrnamentProps {
  color: string;
  top: string;
  left?: string;
  content: string;
  darkText?: boolean;
}

const Ornament: React.FC<OrnamentProps> = ({
  color,
  top,
  left,
  content,
  darkText = false,
}) => {
  return (
    <button
      className="absolute w-14 h-14 rounded-full overflow-hidden shadow-lg flex justify-center items-center"
      onClick={() => {
        console.log(content);
      }}
      style={{
        background: `radial-gradient(circle at 35% 35%, white 0%, ${color} 30%, ${color} 40%)`,
        top: top,
        left: left,
      }}
    >
      <div
        className="absolute inset-0 bg-white/20 rounded-full"
        style={{
          clipPath: "ellipse(70% 40% at 65% 30%)",
        }}
      />
      <div className="absolute w-3 h-3 bg-gray-300 rounded-full left-1/2 -top-1.5 transform -translate-x-1/2 shadow-inner" />
      <span
        className={`relative z-10  ${
          darkText ? "text-black/50" : "text-white/80"
        } font-semibold text-xs`}
      >
        {content}
      </span>
    </button>
  );
};

export default Ornament;
