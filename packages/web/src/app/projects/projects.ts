import {
  AmazonwebservicesPlainWordmarkIcon, BootstrapOriginalIcon, Css3PlainWordmarkIcon, DockerPlainWordmarkIcon,
  ExpressOriginalIcon, Html5PlainWordmarkIcon, JavascriptPlainIcon, JqueryPlainWordmarkIcon, MongodbPlainWordmarkIcon,
  NodejsOriginalIcon, ReactOriginalWordmarkIcon
} from 'react-devicons';

import SoundlinkImage from '@/../public/images/projects/soundlink.png';
import TrgImage from '@/../public/images/projects/trg.png';
import SoundlinkMarkdown from '@/content/markdown/projects/soundlink.mdx';
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
      NodejsOriginalIcon,
      MongodbPlainWordmarkIcon,
      AmazonwebservicesPlainWordmarkIcon,
      DockerPlainWordmarkIcon
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