import React from 'react';


import EcommerceA from './ecommerce/a';
import EcommerceB from './ecommerce/b';
import EcommerceC from './ecommerce/c';


import FooterA from './footer/a';
import FooterB from './footer/b';
import FooterC from './footer/c';
import FooterD from './footer/d';
import FooterE from './footer/e';

import GalleryA from './gallery/a';
import GalleryB from './gallery/b';
import GalleryC from './gallery/c';

import HeaderA from './header/a';
import HeaderB from './header/b';
import HeaderC from './header/c';
import HeaderD from './header/d';

import HeroA from './hero/a';
import HeroB from './hero/b';
import HeroC from './hero/c';
import HeroD from './hero/d';
import HeroE from './hero/e';
import HeroF from './hero/f';

import PricingA from './pricing/a';
import PricingB from './pricing/b';




import TeamA from './team/a';
import TeamB from './team/b';
import TeamC from './team/c';


export default function getIcons() {
  return {
   
    Ecommerce: {
      EcommerceA: <EcommerceA />,
      EcommerceB: <EcommerceB />,
      EcommerceC: <EcommerceC />
    },
  
    Footer: {
      FooterA: <FooterA />,
      FooterB: <FooterB />,
      FooterC: <FooterC />,
      FooterD: <FooterD />,
      FooterE: <FooterE />
    },
    Gallery: {
      GalleryA: <GalleryA />,
      GalleryB: <GalleryB />,
      GalleryC: <GalleryC />
    }, 
    Header: {
      HeaderA: <HeaderA />,
      HeaderB: <HeaderB />,
      HeaderC: <HeaderC />,
      HeaderD: <HeaderD />
    }, 
    Hero: {
      HeroA: <HeroA />,
      HeroB: <HeroB />,
      HeroC: <HeroC />,
      HeroD: <HeroD />,
      HeroE: <HeroE />,
      HeroF: <HeroF />
    },
    Pricing: {
      PricingA: <PricingA />,
      PricingB: <PricingB />
    }, 
 
    Team: {
      TeamA: <TeamA />,
      TeamB: <TeamB />,
      TeamC: <TeamC />
    },
    
  }
}
