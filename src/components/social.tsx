import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

// Define the type for the social media items
interface SocialItem {
  icon: React.ElementType; // Define icon as a React component type
  path: string;            // Define path as a string
}

// Create an array of social media items
const social: SocialItem[] = [
  { icon: FaGithub, path: 'https://github.com/sami8890' },
  { icon: FaLinkedin, path: 'https://www.linkedin.com/in/muhammad-sami-gabol-ab27772b4/' },
  { icon: FaTwitter, path: 'https://x.com/SamiSam58944435' },
  { icon: FaFacebook, path: 'https://www.facebook.com/profile.php?id=61561709531154&mibextid=ZbWKwL' }
];

// Define props for the Socials component
interface SocialsProps {
  containerStyles?: string; // Make styles optional
  iconStyles?: string;      // Make styles optional
}

export const Socials: React.FC<SocialsProps> = ({ containerStyles = '', iconStyles = '' }) => {
  return (

    <div className={containerStyles}>
      {social.map((item, index) => {
        const IconComponent = item.icon; // Extract the icon component
        return (
          <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer">
            <IconComponent className={iconStyles} />
          </Link>
        );
      })}
    </div>
  );
};
