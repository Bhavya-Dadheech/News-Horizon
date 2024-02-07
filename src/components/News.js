import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CNBC"
      },
      author: "Sam Meredith",
      title: "BP shares rise 6% after British oil giant announces plans to boost shareholder returns - CNBC",
      description:
        "British oil giant BP on Tuesday announced plans to boost shareholder returns, even after a sharp drop in full-year profits aligned with lower oil prices.",
      url: "https://www.cnbc.com/2024/02/06/bp-earnings-q4-and-fy-2023.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107166797-1671109570377-gettyimages-1420436727-bp-3.jpeg?v=1707132966&w=1920&h=1080",
      publishedAt: "2024-02-06T07:15:51Z",
      content:
        'BP in 2020 set out its ambition to become a net zero company "by 2050 or sooner."\r\nShares of BP rose 6% on Tuesday after the oil giant accelerated the pace of its buybacks and increased its dividend,… [+4571 chars]'
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg"
      },
      author: null,
      title: "Stock Market Today: Dow, S&P Live Updates for February 6 - Bloomberg",
      description: null,
      url: "https://www.bloomberg.com/news/articles/2024-02-05/stock-market-today-dow-s-p-live-updates",
      urlToImage: null,
      publishedAt: "2024-02-06T06:43:00Z",
      content: "To continue, please click the box below to let us know you're not a robot."
    },
    {
      source: {
        id: "cnn",
        name: "CNN"
      },
      author:
        'By Mary Gilbert, Antoinette Radford, Eric Zerkel, <a href="/profiles/elise-hammond">Elise Hammond</a>, Zoe Sottile, <a href="/profiles/amir-vera">Amir Vera</a> and Deva Lee, CNN',
      title: "Atmospheric river lashes California with heavy rain and wind: Live updates - CNN",
      description:
        "An intense, long-lasting atmospheric river is bringing the potential for life-threatening flooding to California from Sunday through Tuesday. Follow here for the latest.",
      url: "https://www.cnn.com/us/live-news/california-atmospheric-river-flooding-rain-02-05-24/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/240203081717-california-storms-weather-chinchar-super-tease.jpg",
      publishedAt: "2024-02-06T06:37:00Z",
      content:
        "Heavy snowfall associated with the atmospheric river-fueled storm system over California has been helping with the snowpack accumulation in the Sierra Nevada mountains, which is crucial to the water … [+1316 chars]"
    },
    {
      source: {
        id: null,
        name: "YouTube"
      },
      author: null,
      title:
        "Rhodes and Zayn battle McIntyre and Nakamura after Raw goes off the air: Raw Exclusive, Feb. 5, 2024 - WWE",
      description:
        "After Drew McIntyre executed a post-Bull Rope Match attack on Cody Rhodes in the final seconds of Raw, Shinsuke Nakamura joins the attack and soon brings Sam...",
      url: "https://www.youtube.com/watch?v=F6SeukugG4Y",
      urlToImage: "https://i.ytimg.com/vi/F6SeukugG4Y/maxresdefault.jpg",
      publishedAt: "2024-02-06T06:03:11Z",
      content: null
    },
    {
      source: {
        id: null,
        name: "fox5sandiego.com"
      },
      author: "Domenick Candelieri",
      title: "How much rain has fallen in San Diego County? Here are rainfall totals - FOX 5 San Diego",
      description:
        "Rainfall totals are expected to increase from the atmospheric river that has entered the San Diego area.",
      url: "https://fox5sandiego.com/weather/how-much-rain-has-fallen-in-san-diego-county-here-are-rainfall-totals/",
      urlToImage:
        "https://fox5sandiego.com/wp-content/uploads/sites/15/2024/02/snapshot-2024-02-05T214909.060.jpg?w=1280",
      publishedAt: "2024-02-06T05:51:37Z",
      content:
        "SAN DIEGO (FOX 5/KUSI) — Rainfall totals are expected to increase from the atmospheric river that has entered the San Diego area.\r\nThe heaviest rain will occur Monday evening into the overnight hours… [+1081 chars]"
    },
    {
      source: {
        id: null,
        name: "Eonline.com"
      },
      author: "Leah Degrazia",
      title: "Rapper Killer Mike Breaks His Silence on Arrest at 2024 Grammy Awards - E! NEWS",
      description:
        "Killer Mike, who took home three awards at the 2024 Grammys, spoke out for the first time since getting arrested during the Feb. 4 event at Los Angeles' Crypto.com Arena.",
      url: "https://www.eonline.com/news/1394604/rapper-killer-mike-breaks-his-silence-on-arrest-at-2024-grammy-awards",
      urlToImage:
        "https://akns-images.eonline.com/eol_images/Entire_Site/202414/rs_1200x1200-240204174251-killermike.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
      publishedAt: "2024-02-06T05:36:21Z",
      content:
        "Killer Mike is setting the record straight on his 2024 Grammys night. \r\nThe rapper, whose real name is Michael Santiago Render, broke his silence after getting escorted out of Los Angeles' Crypto.com… [+708 chars]"
    },
    {
      source: {
        id: null,
        name: "Push Square"
      },
      author: "Sammy Barker",
      title: "Microsoft Has Apparently Been Stocking Up on PS5 Devkits as Xbox Pivots - Push Square",
      description: "Further fuel to the fire",
      url: "https://www.pushsquare.com/news/2024/02/microsoft-has-apparently-been-stocking-up-on-ps5-devkits-as-xbox-pivots",
      urlToImage: "https://images.pushsquare.com/b3adfbdded7d0/1280x720.jpg",
      publishedAt: "2024-02-06T04:30:00Z",
      content:
        "Image: Push Square\r\nWhile an enormous amount of attention has been placed on the games Microsoft is potentially bringing to PlayStation, reports also suggest the tech titan has been quietly stocking … [+1000 chars]"
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press"
      },
      author: "JON GAMBRELL",
      title:
        "Ship targeted in suspected Yemen Houthi rebel drone attack in southern Red Sea as tensions high - The Associated Press",
      description:
        "A ship traveling through the southern Red Sea has been attacked by a suspected Yemen Houthi rebel drone. The attack happened early Tuesday west of Hodeida, Yemen, and a projectile caused “slight damage” to the vessel’s windows on the bridge. That's according …",
      url: "https://apnews.com/article/yemen-houthi-rebels-ship-attack-iran-us-e1c74b063a59fa4417d47feb5ab369cc",
      urlToImage:
        "https://dims.apnews.com/dims4/default/dbd5b7b/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff2%2Ff5%2F6420ee53ba8253d5b0ccbc90e414%2Fb4cb0423cbef414caf3cdfd2adba7608",
      publishedAt: "2024-02-06T04:22:00Z",
      content:
        "TEL AVIV, Israel (AP) A ship traveling through the southern Red Sea was attacked by a suspected Yemen Houthi rebel drone early on Tuesday, authorities said, the latest assault in their campaign targe… [+2392 chars]"
    },
    {
      source: {
        id: null,
        name: "BBC News"
      },
      author: null,
      title: "Yandex: Owner of 'Russia's Google' pulls out of home country - BBC.com",
      description:
        "Yandex has previously been accused of hiding information about the Ukraine war from the Russian public.",
      url: "https://www.bbc.com/news/business-68213191",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/15F27/production/_132559898_gettyimages-1243579431.jpg",
      publishedAt: "2024-02-06T04:04:42Z",
      content:
        'By Mariko OiBusiness reporter\r\nThe owner of Yandex, often referred to as "Russia\'s Google", has said it will pull out of its country of origin.\r\nIts Dutch-based parent company sold the operation in R… [+2438 chars]'
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal"
      },
      author: "John McCormick",
      title: "Nikki Haley Asks for Secret Service Protection After Increase in Threats - The Wall Street Journal",
      description:
        "Former South Carolina governor is final hurdle between Trump and the Republican presidential nomination",
      url: "https://www.wsj.com/politics/elections/nikki-haley-asks-for-secret-service-protection-after-increase-in-threats-05b67a22",
      urlToImage: "https://images.wsj.net/im-921513/social",
      publishedAt: "2024-02-06T03:35:00Z",
      content: null
    },
    {
      source: {
        id: "the-hill",
        name: "The Hill"
      },
      author: "Miranda Nazzaro",
      title: "NASA announces ‘super-Earth,’ exoplanet in ‘habitable zone’ - The Hill",
      description:
        "A nearby “super-Earth” exoplanet was recently discovered just 137 light-years away from Earth, prompting scientists to dig deeper into if it has the conditions to sustain life, NASA announced. The planet, dubbed TOI-715 b, is about one and a half times as wid…",
      url: "https://thehill.com/homenews/space/4450048-nasa-announces-super-earth-exoplanet-in-habitable-zone/",
      urlToImage:
        "https://thehill.com/wp-content/uploads/sites/2/2023/06/nasa_logo_GettyImages-1258903649-e1687791364531.jpg?w=1280",
      publishedAt: "2024-02-06T03:33:00Z",
      content:
        "Skip to content\r\nA nearby “super-Earth” exoplanet was recently discovered just 137 light-years away from Earth, prompting scientists to dig deeper into if it has the conditions to sustain life, NASA … [+1343 chars]"
    },
    {
      source: {
        id: null,
        name: "NBCSports.com"
      },
      author: "Josh Alper",
      title: 'Kyle Shanahan "not worried at all" about practicing on field at UNLV - NBC Sports',
      description:
        "The 49ers found the surface at UNLV to be softer than they like, but they will practice there this week",
      url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/kyle-shanahan-not-worried-at-all-about-practicing-on-field-at-unlv",
      urlToImage:
        "https://nbcsports.brightspotcdn.com/dims4/default/beef16e/2147483647/strip/true/crop/3500x1969+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb6%2F6a%2Fc8bcc0cd4822bba8b38540d60d11%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1986639458",
      publishedAt: "2024-02-06T03:23:51Z",
      content:
        "The 49ers will be sticking with the original plan for their practice week. \r\nWord of the teams displeasure with the field at UNLV was reported on Monday morning and there was some question about whet… [+912 chars]"
    },
    {
      source: {
        id: null,
        name: "YouTube"
      },
      author: null,
      title: "Chiefs and 49ers Preview | Super Bowl LVIII Opening Night - NFL",
      description:
        "New ClipWatch live local and primetime games, NFL RedZone, and NFL Network on Plus.NFL.comCheck out our other channels:NFL Mundo https://www.youtube.com/mund...",
      url: "https://www.youtube.com/watch?v=h2lpOQgS40M",
      urlToImage: "https://i.ytimg.com/vi/h2lpOQgS40M/maxresdefault.jpg",
      publishedAt: "2024-02-06T03:22:48Z",
      content: null
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press"
      },
      author: "MALLIKA SEN, BETH HARRIS",
      title: "Taylor Swift's new album, 'The Tortured Poets Department,' comes out in April - The Associated Press",
      description:
        "Forget her “Reputation.” Taylor Swift has a brand new album coming out. Accepting the Grammy for best pop vocal album, Taylor said she’d been keeping a secret for two years. Swift posted a black-and-white image of her reclining across pillows across her socia…",
      url: "https://apnews.com/article/taylor-swift-new-album-5e219107982b1498a3656caeea85e0eb",
      urlToImage:
        "https://dims.apnews.com/dims4/default/dba5bc0/2147483647/strip/true/crop/2637x1483+0+137/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F00%2F50%2Fcaede6acd55bc9356a1361bfa6c5%2F1b9202cc999d471d8e19722a017711e3",
      publishedAt: "2024-02-06T03:14:00Z",
      content:
        "LOS ANGELES (AP) Forget her Reputation. Taylor Swift has a whole new album coming out.\r\nAccepting the Grammy for best pop vocal album on Sunday night, Taylor said shed been keeping a secret for two y… [+3447 chars]"
    },
    {
      source: {
        id: null,
        name: "WLWT Cincinnati"
      },
      author: "Fletcher Keel",
      title: "Ohio health officials warn of potential measles exposure at CVG - WLWT Cincinnati",
      description:
        "The Ohio Department of Health says passengers at Cincinnati/Northern Kentucky International Airport may have been exposed to measles last week.",
      url: "https://www.wlwt.com/article/ohio-measles-cincinnati-exposure-cvg-montgomery-county/46648780",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/cvg-travel-6585038c5cb29.png?crop=1.00xw:0.991xh;0,0&resize=1200:*",
      publishedAt: "2024-02-06T03:10:00Z",
      content:
        "HEBRON, Ky. —The Ohio Department of Health says passengers at Cincinnati/Northern Kentucky International Airport may have been exposed to measles last week.\r\nODH says passengers in Terminal A at CVG … [+1238 chars]"
    },
    {
      source: {
        id: null,
        name: "KCRA Sacramento"
      },
      author: "Erin Heft",
      title: "Crews clear downed redwood trees in Solano County after storm - KCRA Sacramento",
      description: "Heavy rain and wind left toppled redwoods across Solano County.",
      url: "https://www.kcra.com/article/solano-county-clearing-trees-after-storm/46654038",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/tree-solano-png-65c1931173dc2.png?crop=0.897xw:1.00xh;0.0521xw,0&resize=1200:*",
      publishedAt: "2024-02-06T02:50:00Z",
      content:
        "SOLANO COUNTY, Calif. —Heavy rain and wind left toppled redwoods across Solano County.\r\nKCRA 3 spoke with people who live at Grande Village, where property management is actively removing trees that … [+1398 chars]"
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News"
      },
      author: "Charles Creitz",
      title: "Border bill co-author Sinema addresses 'real misunderstanding' as House GOP calls it 'DOA' - Fox News",
      description:
        "Arizona Independent Senator Kyrsten Sinema responded to Republican criticism of her border and immigration legislation forged with Sens. Lankford and Murphy.",
      url: "https://www.foxnews.com/media/border-bill-author-sinema-addresses-real-misunderstandings-house-gop-calls-doa",
      urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/GettyImages-1255957737.jpg",
      publishedAt: "2024-02-06T02:45:00Z",
      content:
        "Sen. Kyrsten Sinema, I-Ariz., responded Monday to House Republican criticisms of the border legislation she co-authored.\r\nSinema, the Senate Homeland Security Subcommittee on Border Management chairw… [+5027 chars]"
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider"
      },
      author: "Erin Snodgrass",
      title: "Trump tries to remain on Colorado's ballot ahead of SCOTUS arguments - Business Insider",
      description:
        "The Supreme Court is set to hear arguments on whether Trump can appear on Colorado's primary ballot after a group of voters challenged his candidacy.",
      url: "https://www.businessinsider.com/donald-trump-brief-remain-colorado-ballot-ahead-supreme-court-arguments-2024-2",
      urlToImage: "https://i.insider.com/65c194ae6fcb546d2d4c6e84?width=1200&format=jpeg",
      publishedAt: "2024-02-06T02:29:00Z",
      content:
        "Donald Trump is imploring the Supreme Court to keep him on Colorado's ballot in what is likely the former president's final push before the top court begins hearing oral arguments in the momentous ca… [+3251 chars]"
    },
    {
      source: {
        id: null,
        name: "hoopsrumors.com"
      },
      author: null,
      title: "Sixers Notes: Embiid, Maxey, Harris, Drummond, Deadline Approach - hoopsrumors.com",
      description:
        "As Joel Embiid prepares for surgery, Sixers coach Nick Nurse said the reigning Most Valuable Player is experiencing a range &hellip;",
      url: "https://www.hoopsrumors.com/2024/02/sixers-notes-embiid-maxey-harris-drummond-deadline-approach.html",
      urlToImage: "https://cdn.hoopsrumors.com/files/2024/02/Joel-Embiid-900x600.jpg",
      publishedAt: "2024-02-06T02:11:00Z",
      content:
        "Furkan, House, Springer, 4 SRPs for Miles Bridges and Nick Richards. Solves Scoring and Center.\r\nBamba, KMJ, 2 SRP for Drummond. Solves back-up Center.\r\nReed, RoCo, FRP, FRP Swap for Murray. Solves S… [+224 chars]"
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post"
      },
      author: "Jesse Dougherty",
      title: "NLRB ruling says Dartmouth men’s basketball players can unionize - The Washington Post",
      description:
        "A regional director for the NLRB issued the ruling Monday, deciding that the basketball players are employees of their school. Dartmouth can still appeal.",
      url: "https://www.washingtonpost.com/sports/2024/02/05/dartmouth-basketball-union/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/U3SEN35Y3BF3LJNKY3EPAKL6VY_size-normalized.jpg&w=1440",
      publishedAt: "2024-02-06T02:06:00Z",
      content:
        "A regional director for the National Labor Relations Board pushed college sports a bit further from amateurism Monday when she ruled the Dartmouth mens basketball team can hold a union election which… [+7442 chars]"
    }
  ];
  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  render() {
    return (
      <div className="container my-2">
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          <div className="col-md-3 my-2">
            <NewsItem
              title="mytitle"
              description="This is a news desscription."
              imageUrl="https://ichef.bbci.co.uk/news/1024/cpsprodpb/DDB3/production/_132555765_p0h950yb.jpg"
              newsUrl=""
            />
          </div>
          <div className="col-md-3 my-2">
            <NewsItem title="mytitle" description="This is a news desscription." />
          </div>
          <div className="col-md-3 my-2">
            <NewsItem title="mytitle" description="This is a news desscription." />
          </div>
          <div className="col-md-3 my-2">
            <NewsItem title="mytitle" description="This is a news desscription." />
          </div>
          <div className="col-md-3 my-2">
            <NewsItem title="mytitle" description="This is a news desscription." />
          </div>
          <div className="col-md-3 my-2">
            <NewsItem title="mytitle" description="This is a news desscription." />
          </div>
          <div className="col-md-3 my-2">
            <NewsItem title="mytitle" description="This is a news desscription." />
          </div>
          <div className="col-md-3 my-2">
            <NewsItem title="mytitle" description="This is a news desscription." />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
