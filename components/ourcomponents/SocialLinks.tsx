import { Facebook,  Github,  Slack,  Twitter,  Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { cn } from '@/lib/utils';

const socialLink = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com',
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    name: 'Github',
    url: 'https://www.github.com',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'Slack',
    url: 'https://www.slack.com',
    icon: <Slack className="w-5 h-5" />,
  },
];

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialLinks = ({className, iconClassName, tooltipClassName }: Props) => {
  return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-4 mt-6 text-white/80", className)}>
                { socialLink.map((item) => (
                    <Tooltip key={item.name}>
                        <TooltipTrigger>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className={cn("p-2 border rounded-full hover:border-darkRed hover:text-white hoverEffect",iconClassName )}>
                                {item.icon}
                            </a> 
                        </TooltipTrigger>
                        <TooltipContent className={cn("bg-white text-darkColor font-semibold rounded-md p-2", tooltipClassName)}>
                            {item.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
  )
}

export default SocialLinks
