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
import Facebook from "@/app/media/Facebook";
import Appstore from "@/app/media/Appstore";
import Android from "@/app/media/Android";
import Link from "next/link";

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
    videoPath:
      "https://gkkwzhnh4oujq0by.public.blob.vercel-storage.com/annette-P2yvljAeKHUZnhjVC4LeLg02BnFebi.mp4",
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
    videoPath:
      "https://gkkwzhnh4oujq0by.public.blob.vercel-storage.com/arnstein-hzbAZOkRFEmgt3oxZJAdOwLu0VxZA1.MP4",
    description: "Varme hilser fra Aberdeen!",
    buttonText: "Lukk",
  },
  Åshild: {
    name: "Åshild",
    title: "Hilsen fra Åshild",
    videoPath:
      "https://gkkwzhnh4oujq0by.public.blob.vercel-storage.com/ashild-LUQXy3mhMzzShL46uRZbx5ayyWLCAr.MP4",
    description: "",
    buttonText: "Lukk",
  },
  Frode: {
    name: "Frode",
    title: "Hilsen fra Frode",
    videoPath:
      "https://gkkwzhnh4oujq0by.public.blob.vercel-storage.com/frode-w65IT3Nm5AspGxlsfv1VeuXZRqWgjr.MP4",
    description: "Julehilsner fra Rotterdam!",
    buttonText: "Lukk",
  },
  Erna: {
    name: "Erna",
    title: "Erna leser juleevangeliet🎄",
    videoPath:
      "https://gkkwzhnh4oujq0by.public.blob.vercel-storage.com/erna-lLqZRDiQrgFaGXRXVaGhw777FNEMBp.MP4",
    description: "",
  },
  Nødapp: {
    name: "Nødapp",
    title: "Last ned Nødnummer-appen på din mobil",
    description: "",
    videoPath: "",
    customContent: (
      <div className="pb-4 flex gap-4 text-muted-foreground text-lg flex-col">
        <div>
          Sjømannskirkens nødnummer-app hjelper deg å finne nødnummeret i landet
          du er i.{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-500 text-md"
            href="https://www.sjomannskirken.no/nodnummer/"
          >
            Les mer om appen her.
          </Link>
        </div>

        <div className="pt-4 flex gap-4 flex-row justify-between items-center">
          <Link
            className="flex gap-6 items-center hover:underline text-lg w-full"
            target="_blank"
            rel="noopener noreferrer"
            href="https://itunes.apple.com/no/app/n-dnummer/id688801563?ls=1&mt=8"
          >
            <div className="h-12 w-12">
              <Appstore />
            </div>
            <span> Last ned til iPhone</span>
          </Link>
          <Link
            className=" flex gap-6  items-center hover:underline text-lg w-full"
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=no.deepmind.SjomannskirkenBeredskap&hl=no"
          >
            <div className="h-12 w-12">
              <Android />
            </div>
            <span>Last ned til Android</span>
          </Link>
        </div>
      </div>
    ),
  },
  Tjeneste: {
    name: "Gudstjeneste",
    title: "Julegudstjeneste",
    videoPath: "/videos/gudstjeneste.mp4",
    customContent: (
      <Link
        className="p-4 flex gap-4 items-center hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/profile.php?id=100068015694171"
      >
        <p className="text-lg h-10 w-10">
          <Facebook />
        </p>
        <p className="text-lg text-muted-foreground">
          Se julegudstjenesten på Facebook
        </p>
      </Link>
    ),
    description:
      "Vi har spilt inn en julegudstjeneste som ligger ut på vår Facebook side. Trykk på ikonet under for å komme til facebook siden vår!",
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
