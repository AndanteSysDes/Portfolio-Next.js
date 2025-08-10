import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@AndanteSysDes",
    icon: Icons.gitHub,
    link: "https://github.com/AndanteSysDes",
  },
  {
    name: "LinkedIn",
    username: "Asuka Saito",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/asuka-saito-andante/",
  },
  {
    name: "Twitter",
    username: "@AndanteSysDes",
    icon: Icons.twitter,
    link: "https://x.com/AndanteSysDes",
  },
  {
    name: "Gmail",
    username: "asuka.saito",
    icon: Icons.gmail,
    link: "mailto:asuka.saito@andante-sd.com",
  },
];
