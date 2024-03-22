import React from 'react';

import LightBlogA from './blog/light/a';
import LightBlogB from './blog/light/b';
import LightBlogC from './blog/light/c';
import LightBlogD from './blog/light/d';
import LightBlogE from './blog/light/e';

import DarkBlogA from './blog/dark/a';
import DarkBlogB from './blog/dark/b';
import DarkBlogC from './blog/dark/c';
import DarkBlogD from './blog/dark/d';
import DarkBlogE from './blog/dark/e';



import LightEcommerceA from './ecommerce/light/a';
import LightEcommerceB from './ecommerce/light/b';
import LightEcommerceC from './ecommerce/light/c';

import DarkEcommerceA from './ecommerce/dark/a';
import DarkEcommerceB from './ecommerce/dark/b';
import DarkEcommerceC from './ecommerce/dark/c';




import LightFooterA from './footer/light/a';
import LightFooterB from './footer/light/b';
import LightFooterC from './footer/light/c';
import LightFooterD from './footer/light/d';
import LightFooterE from './footer/light/e';

import DarkFooterA from './footer/dark/a';
import DarkFooterB from './footer/dark/b';
import DarkFooterC from './footer/dark/c';
import DarkFooterD from './footer/dark/d';
import DarkFooterE from './footer/dark/e';

import LightGalleryA from './gallery/light/a';
import LightGalleryB from './gallery/light/b';
import LightGalleryC from './gallery/light/c';

import DarkGalleryA from './gallery/dark/a';
import DarkGalleryB from './gallery/dark/b';
import DarkGalleryC from './gallery/dark/c';

import LightHeaderA from './header/light/a';
import LightHeaderB from './header/light/b';
import LightHeaderC from './header/light/c';
import LightHeaderD from './header/light/d';

import DarkHeaderA from './header/dark/a';
import DarkHeaderB from './header/dark/b';
import DarkHeaderC from './header/dark/c';
import DarkHeaderD from './header/dark/d';

import LightHeroA from './hero/light/a';
import LightHeroB from './hero/light/b';
import LightHeroC from './hero/light/c';
import LightHeroD from './hero/light/d';
import LightHeroE from './hero/light/e';
import LightHeroF from './hero/light/f';

import DarkHeroA from './hero/dark/a';
import DarkHeroB from './hero/dark/b';
import DarkHeroC from './hero/dark/c';
import DarkHeroD from './hero/dark/d';
import DarkHeroE from './hero/dark/e';
import DarkHeroF from './hero/dark/f';

import LightPricingA from './pricing/light/a';
import LightPricingB from './pricing/light/b';

import DarkPricingA from './pricing/dark/a';
import DarkPricingB from './pricing/dark/b';

import LightStatisticA from './statistic/light/a';
import LightStatisticB from './statistic/light/b';
import LightStatisticC from './statistic/light/c';

import DarkStatisticA from './statistic/dark/a';
import DarkStatisticB from './statistic/dark/b';
import DarkStatisticC from './statistic/dark/c';

import LightTeamA from './team/light/a';
import LightTeamB from './team/light/b';
import LightTeamC from './team/light/c';

import DarkTeamA from './team/dark/a';
import DarkTeamB from './team/dark/b';
import DarkTeamC from './team/dark/c';



export default function getBlock({theme = 'indigo', darkMode = false}) {
  return {
    Blog: {
      BlogA: darkMode ? <DarkBlogA theme={theme} /> : <LightBlogA theme={theme} />,
      BlogB: darkMode ? <DarkBlogB theme={theme} /> : <LightBlogB theme={theme} />,
      BlogC: darkMode ? <DarkBlogC theme={theme} /> : <LightBlogC theme={theme} />,
      BlogD: darkMode ? <DarkBlogD theme={theme} /> : <LightBlogD theme={theme} />,
      BlogE: darkMode ? <DarkBlogE theme={theme} /> : <LightBlogE theme={theme} />
    },
    
    Ecommerce: {
      EcommerceA: darkMode ? <DarkEcommerceA theme={theme} /> : <LightEcommerceA theme={theme} />,
      EcommerceB: darkMode ? <DarkEcommerceB theme={theme} /> : <LightEcommerceB theme={theme} />,
      EcommerceC: darkMode ? <DarkEcommerceC theme={theme} /> : <LightEcommerceC theme={theme} />
    },
    
    Footer: {
      FooterA: darkMode ? <DarkFooterA theme={theme} /> : <LightFooterA theme={theme} />,
      FooterB: darkMode ? <DarkFooterB theme={theme} /> : <LightFooterB theme={theme} />,
      FooterC: darkMode ? <DarkFooterC theme={theme} /> : <LightFooterC theme={theme} />,
      FooterD: darkMode ? <DarkFooterD theme={theme} /> : <LightFooterD theme={theme} />,
      FooterE: darkMode ? <DarkFooterE theme={theme} /> : <LightFooterE theme={theme} />
    },
    Gallery: {
      GalleryA: darkMode ? <DarkGalleryA theme={theme} /> : <LightGalleryA theme={theme} />,
      GalleryB: darkMode ? <DarkGalleryB theme={theme} /> : <LightGalleryB theme={theme} />,
      GalleryC: darkMode ? <DarkGalleryC theme={theme} /> : <LightGalleryC theme={theme} />
    },
    Header: {
      HeaderA: darkMode ? <DarkHeaderA theme={theme} /> : <LightHeaderA theme={theme} />,
      HeaderB: darkMode ? <DarkHeaderB theme={theme} /> : <LightHeaderB theme={theme} />,
      HeaderC: darkMode ? <DarkHeaderC theme={theme} /> : <LightHeaderC theme={theme} />,
      HeaderD: darkMode ? <DarkHeaderD theme={theme} /> : <LightHeaderD theme={theme} />
    },
    Hero: {
      HeroA: darkMode ? <DarkHeroA theme={theme} /> : <LightHeroA theme={theme} />,
      HeroB: darkMode ? <DarkHeroB theme={theme} /> : <LightHeroB theme={theme} />,
      HeroC: darkMode ? <DarkHeroC theme={theme} /> : <LightHeroC theme={theme} />,
      HeroD: darkMode ? <DarkHeroD theme={theme} /> : <LightHeroD theme={theme} />,
      HeroE: darkMode ? <DarkHeroE theme={theme} /> : <LightHeroE theme={theme} />,
      HeroF: darkMode ? <DarkHeroF theme={theme} /> : <LightHeroF theme={theme} />
    },
    Pricing: {
      PricingA: darkMode ? <DarkPricingA theme={theme} /> : <LightPricingA theme={theme} />,
      PricingB: darkMode ? <DarkPricingB theme={theme} /> : <LightPricingB theme={theme} />
    },
    Statistic: {
      StatisticA: darkMode ? <DarkStatisticA theme={theme} /> : <LightStatisticA theme={theme} />,
      StatisticB: darkMode ? <DarkStatisticB theme={theme} /> : <LightStatisticB theme={theme} />,
      StatisticC: darkMode ? <DarkStatisticC theme={theme} /> : <LightStatisticC theme={theme} />
    },
   
    Team: {
      TeamA: darkMode ? <DarkTeamA theme={theme} /> : <LightTeamA theme={theme} />,
      TeamB: darkMode ? <DarkTeamB theme={theme} /> : <LightTeamB theme={theme} />,
      TeamC: darkMode ? <DarkTeamC theme={theme} /> : <LightTeamC theme={theme} />
    },
   
  }
}

