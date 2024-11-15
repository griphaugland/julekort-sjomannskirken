import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Define the content type for each ornament
interface OrnamentContent {
  name: string;
  title: string;
  description: string;
  buttonText?: string;
}

// Content for each ornament
const ornamentContent: Record<string, OrnamentContent> = {
  Frank: {
    name: "Frank",
    title: "Hilsen fra Frank",
    description:
      "Jeg er frivillig i besøkstjenesten og besøker sjøfolk på skip i Oslo havn. Det er givende å kunne bidra til at sjøfolk får en bedre hverdag når de er langt hjemmefra.",
    buttonText: "Lukk",
  },
  Annette: {
    name: "Annette",
    title: "Hilsen fra Annette",
    description:
      "Som frivillig i besøkstjenesten har jeg møtt mange flotte mennesker. Det er fint å kunne være til stede for andre og bidra til at de får en bedre dag.",
    buttonText: "Lukk",
  },
  "Jan S": {
    name: "Jan S",
    title: "Hilsen fra Jan S",
    description:
      "Jeg har vært frivillig i mange år og synes det er meningsfullt å kunne hjelpe andre. Det er fint å kunne gi noe tilbake til samfunnet.",
    buttonText: "Lukk",
  },
  Arnstein: {
    name: "Arnstein",
    title: "Hilsen fra Arnstein",
    description:
      "Som frivillig får jeg mulighet til å møte mennesker fra hele verden. Det er spennende å høre deres historier og erfaringer.",
    buttonText: "Lukk",
  },
  Åshild: {
    name: "Åshild",
    title: "Hilsen fra Åshild",
    description:
      "Det beste med å være frivillig er å se gleden i øynene til dem vi besøker. Et lite besøk kan bety så mye for noen som er langt hjemmefra.",
    buttonText: "Lukk",
  },
  Frode: {
    name: "Frode",
    title: "Hilsen fra Frode",
    description:
      "Jeg er stolt av å være en del av besøkstjenesten. Det er givende å kunne være der for sjøfolk som trenger noen å snakke med.",
    buttonText: "Lukk",
  },
  Star: {
    name: "Star",
    title: "Hilsen fra stjerne",
    description:
      "Jeg er frivillig i besøkstjenesten og besøker sjøfolk på skip i Oslo havn. Det er givende å kunne bidra til at sjøfolk får en bedre hverdag når de er langt hjemmefra.",
    buttonText: "Lukk",
  },
};

// Dialog component
export const OrnamentDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  content: string;
}> = ({ isOpen, onClose, content }) => {
  const dialogContent = ornamentContent[content];

  if (!dialogContent) return null;

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bricolage">
            {dialogContent.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            {dialogContent.description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>
            {dialogContent.buttonText || "Lukk"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface OrnamentProps {
  color: string;
  top: string;
  left?: string;
  content: string;
  onOrnamentClick: (content: string) => void;
}

export const Ornament: React.FC<OrnamentProps> = ({
  color,
  top,
  left,
  content,
  onOrnamentClick,
}) => {
  return (
    <button
      className="ornament"
      onClick={() => onOrnamentClick(content)}
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
        className={`relative z-10 font-semibold text-xs text-inherit drop-shadow-[0_1.1px_1.1px_rgba(0,0,0,0.8)]`}
      >
        {content}
      </span>
    </button>
  );
};
