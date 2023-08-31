import { AmazonwebservicesPlainWordmarkIcon, BootstrapOriginalIcon, Css3PlainWordmarkIcon, ExpressOriginalIcon, Html5PlainWordmarkIcon, JavascriptPlainIcon, JqueryPlainWordmarkIcon, NodejsOriginalIcon, ReactOriginalWordmarkIcon } from 'react-devicons';

import SoundlinkImage from '@/content/images/projects/soundlink.png';
import SoundlinkMarkdown from '@/content/markdown/projects/soundlink.mdx';

import TrgImage from '@/content/images/projects/trg.png';
import TrgMarkdown from '@/content/markdown/projects/trg.mdx';


const projects = [
  {
    title: 'TRG Order Management System',
    imgSrc: TrgImage,
    mdBlurb: TrgMarkdown,
    tech: [
      Html5PlainWordmarkIcon,
      Css3PlainWordmarkIcon,
      JavascriptPlainIcon,
      BootstrapOriginalIcon,
      JqueryPlainWordmarkIcon,
      ExpressOriginalIcon,
      AmazonwebservicesPlainWordmarkIcon
    ]
  },
  {
    title: 'Soundlink',
    imgSrc: SoundlinkImage,
    mdBlurb: SoundlinkMarkdown,
    tech: [
      Html5PlainWordmarkIcon,
      Css3PlainWordmarkIcon,
      JavascriptPlainIcon,
      ReactOriginalWordmarkIcon,
      ExpressOriginalIcon,
      NodejsOriginalIcon
    ],
    sourceUrl: 'https://github.com/danswann/largeproject'
  },
  
]

export default projects;