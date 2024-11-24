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
import Video from "@/components/ui/Video";

// Define the content type for each ornament
interface OrnamentContent {
  name: string;
  title: string;
  description: string;
  buttonText?: string;
  videoPath: string;
  customContent?: React.ReactNode;
}

// Content for each ornament
const ornamentContent: Record<string, OrnamentContent> = {
  Frank: {
    name: "Frank",
    title: "Hilsen fra Frank",
    videoPath: "/videos/frank.mp4",
    description: "Frank sender julehilsner fra  Randaberg!",
    buttonText: "Lukk",
  },
  Annette: {
    name: "Annette",
    videoPath: "/videos/annette.mp4",
    title: "Hilsen fra Annette",
    description: "Anette sender julehilsner fra Los Angeles!",
    buttonText: "Lukk",
  },
  "Jan S": {
    name: "Jan S",
    title: "Hilsen fra Jan S",
    videoPath: "/videos/jan-s.mp4",
    description: "",
    buttonText: "Lukk",
  },
  Arnstein: {
    name: "Arnstein",
    title: "Hilsen fra Arnstein",
    videoPath: "/videos/arnstein.mp4",
    description: "",
    buttonText: "Lukk",
  },
  Åshild: {
    name: "Åshild",
    title: "Hilsen fra Åshild",
    videoPath: "/videos/ashild.mp4",
    description: "",
    buttonText: "Lukk",
  },
  Frode: {
    name: "Frode",
    title: "Hilsen fra Frode",
    videoPath: "/videos/frode.mp4",
    description: "",
    buttonText: "Lukk",
  },
  Erna: {
    name: "Erna",
    title: "Erna leser juleevangeliet🎄",
    videoPath: "/videos/erna.mp4",
    description: "",
  },
  Nødapp: {
    name: "Nødapp",
    title: "Hilsen fra Nødapp",
    videoPath: "",
    customContent: (
      <div className="p-4">
        <h1 className="text-2xl font-bricolage">Nødapp</h1>
        <p className="text-lg">
          Nødapp har dessverre ikke laget en julehilsen i år.
        </p>
      </div>
    ),
    description:
      "Vi har spilt inn en julegudstjeneste for deg! Denne ligger på vår facebook side. Her er lenken: https://www.facebook.com/profile.php?id=100068015694171",
  },
  Tjeneste: {
    name: "Gudstjeneste",
    title: "Julegudstjeneste",
    videoPath: "/videos/gudstjeneste.mp4",
    customContent: (
      <div className="p-4">
        <h1 className="text-2xl font-bricolage">Gudstjeneste</h1>
        <p className="text-lg"></p>
      </div>
    ),
    description:
      "Vi har spilt inn en julegudstjeneste for deg! Denne ligger på vår facebook side. Her er lenken: https://www.facebook.com/profile.php?id=100068015694171",
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
      <AlertDialogContent className="bg-white max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bricolage">
            {dialogContent.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            {dialogContent.description}
          </AlertDialogDescription>
          {dialogContent.customContent ? (
            dialogContent.customContent
          ) : (
            <Video src={dialogContent.videoPath} />
          )}
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
  textClassName?: string;
}

export const Ornament: React.FC<OrnamentProps> = ({
  color,
  top,
  left,
  content,
  onOrnamentClick,
  textClassName,
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
        className={`relative z-10 font-bold text-xs text-inherit drop-shadow-[0_1.1px_1.1px_rgba(0,0,0,0.8)] ${textClassName}`}
      >
        {content}
      </span>
    </button>
  );
};
