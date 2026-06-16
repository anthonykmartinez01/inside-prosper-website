export const siteConfig = {
  name: 'Inside Prosper',
  description: 'Inside Prosper is where neighbors discover the best local businesses in Prosper, Texas. Curated and invitation-only.',
  siteUrl: 'https://insideprosper.com',
  email: 'anthony@insideprosper.com',
  phone: '(469) 481-1395',
  phoneRaw: '+14694811395',
  location: 'Prosper, Texas',
  street: '1591 Blue Forest Drive',
  city: 'Prosper',
  state: 'TX',
  zip: '75078',
};

export const nearbyCities = ['Celina', 'Frisco', 'McKinney', 'Little Elm', 'Aubrey'];

export interface Category {
  name: string;
  slug: string;
  urlPath: string;
  description: string;
  longDescription: string;
  metaDescription: string;
}

export const categories: Category[] = [
  {
    name: 'Food & Fun',
    slug: 'food-fun',
    urlPath: 'food-and-fun',
    description: 'Restaurants, entertainment, and local eateries in Prosper, Texas.',
    longDescription: 'Prosper, Texas has quietly become one of the best dining destinations in Collin County. From specialty coffee shops brewing fresh pour-overs to authentic Tex-Mex joints and globally inspired kitchens, the local food scene reflects the diversity and pride of this growing community. Whether you are craving handmade sushi, Southern Indian favorites, or a perfectly crafted espresso after a Saturday morning walk, Prosper has something for every palate. These are the restaurants and eateries that neighbors recommend to each other — the kind of places where the owners know your name and the food keeps you coming back. Residents from nearby Celina, Frisco, and McKinney regularly make the drive to eat here, and once you try them, you will too.',
    metaDescription: 'Discover the best restaurants, cafes, and eateries in Prosper, TX. Locally owned food spots recommended by your neighbors — from coffee to Tex-Mex to sushi.',
  },
  {
    name: 'Health & Fitness',
    slug: 'health-fitness',
    urlPath: 'health-and-fitness',
    description: 'Gyms, wellness centers, and health professionals in Prosper, Texas.',
    longDescription: 'Staying active in Prosper, Texas means more than just hitting a treadmill — it means joining a community that pushes you to be your best. From high-intensity CrossFit boxes and functional training studios to results-driven personal training facilities, Prosper has fitness options for every level and goal. What makes these gyms special is the people behind them: coaches who learn your name, trainers who build programs around your life, and communities that celebrate every milestone with you. Residents across Prosper, Celina, and Frisco trust these fitness professionals to help them build strength, confidence, and lasting healthy habits.',
    metaDescription: 'Find the best gyms, fitness studios, and wellness centers in Prosper, TX. CrossFit, personal training, group classes — trusted by the local community.',
  },
  {
    name: 'Professionals',
    slug: 'professionals',
    urlPath: 'professionals',
    description: 'Accountants, lawyers, real estate agents, and more in Prosper, Texas.',
    longDescription: 'When you need an accountant, attorney, or financial advisor in Prosper, Texas, nothing beats working with someone who understands the local community. The professional service providers featured here have earned their reputation through years of dedicated work serving families and businesses across Prosper, Celina, Frisco, and the surrounding area. Whether you are planning your estate, navigating a real estate transaction, or looking for a CPA to manage your taxes, these professionals combine deep expertise with a personal, small-town approach. They are the kind of people your neighbors recommend at the soccer field or over the backyard fence.',
    metaDescription: 'Find trusted lawyers, CPAs, and professional services in Prosper, TX. Estate planning, tax preparation, real estate law — recommended by your neighbors.',
  },
  {
    name: 'Shop',
    slug: 'shop',
    urlPath: 'shop',
    description: 'Boutiques, retail stores, and unique shopping experiences in Prosper, Texas.',
    longDescription: 'Downtown Prosper is home to a growing collection of boutiques, gift shops, and specialty stores that make shopping here feel personal. From curated women\'s fashion and artisanal home decor to locally arranged flower bouquets, the shops in Prosper reflect the character and creativity of this community. Broadway Street and Main Street are the heart of the shopping scene, where you can browse unique finds, discover the perfect gift, and support small business owners who pour their hearts into their storefronts. Visitors from Frisco, McKinney, and Celina frequently make the trip to explore what downtown Prosper has to offer.',
    metaDescription: 'Shop local boutiques, florists, and unique stores in Prosper, TX. Curated fashion, home decor, and gifts on Broadway Street — support small business.',
  },
  {
    name: 'Trades',
    slug: 'trades',
    urlPath: 'trades',
    description: 'Plumbers, electricians, contractors, and skilled tradespeople in Prosper, Texas.',
    longDescription: 'Finding a reliable plumber, electrician, or contractor in Prosper, Texas should not feel like a gamble. The skilled tradespeople featured here have earned the trust of homeowners across Prosper, Little Elm, Frisco, and the surrounding communities through consistent, high-quality work. Whether you need an emergency plumbing repair at midnight, a panel upgrade for your new home, or routine HVAC maintenance, these professionals show up on time, do the job right, and stand behind their work. In a fast-growing area where new homes are going up every day, having a trusted tradesperson on speed dial is worth its weight in gold.',
    metaDescription: 'Find trusted plumbers, electricians, and contractors serving Prosper, TX. 24/7 emergency service, honest pricing — recommended by local homeowners.',
  },
];

export const navigation = categories.map((c) => ({
  label: c.name,
  href: `/${c.urlPath}/`,
}));

export interface Business {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  htmlDescription?: string;
  quote?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  hours?: string;
  mapEmbedUrl?: string;
  image: string;
  /** Optional override used by listing cards (homepage, category pages, related lists). Falls back to image if not set. */
  cardImage?: string;
  cardImageAspect?: string;
  /** Optional logo shown above the Business Info sidebar on the detail page. */
  logo?: string;
  /** Optional override for the city label in the detail page H1 (defaults to "Prosper, TX"). */
  locationLabel?: string;
  imagePosition?: string;
  imageAspect?: string;
  verified?: boolean;
  published?: boolean;
  socials?: {
    facebook?: string;
    instagram?: string;
    nextdoor?: string;
    youtube?: string;
  };
}

export const businesses: Business[] = [
  // Food & Fun
  {
    name: '1418 Coffee',
    slug: '1418-coffee',
    category: 'food-fun',
    shortDescription: 'Locally owned coffee shop in Prosper, TX serving fresh-baked pastries, espresso drinks, and pour-overs. A neighborhood favorite on Preston Road.',
    longDescription: '1418 Coffee is a locally owned specialty coffee shop right here in Prosper, Texas. We\'re passionate about serving expertly crafted espresso drinks, smooth pour-overs, and fresh-baked pastries made in-house daily. Our cozy space is designed to be a gathering spot for the community\u2014whether you\'re catching up with friends, getting some work done, or just enjoying a quiet moment with a great cup of coffee. We source our beans from quality roasters and take pride in every drink we serve. Stop by and taste the difference that local love makes.',
    quote: 'We wanted to create a coffee shop that feels like home for the Prosper community.',
    phone: '(469) 598-1418',
    address: '1418 N Preston Rd, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 6am\u20135pm, Sat\u2013Sun 7am\u20134pm',
    image: '/images/1418-coffee.png',
  },
  {
    name: 'Salsa Tex-Mex',
    slug: 'salsa-tex-mex',
    category: 'food-fun',
    shortDescription: 'Popular Tex-Mex restaurant in Prosper, TX serving familiar favorites and margaritas in many flavors. A neighborhood go-to on Preston Road.',
    longDescription: 'Salsa Tex-Mex is an upbeat restaurant providing familiar Tex-Mex standards and margaritas in many flavors. A Prosper favorite since opening, we pride ourselves on great food, friendly service, and a welcoming atmosphere for families and friends.',
    phone: '(972) 346-4643',
    address: '1170 N Preston Rd, Ste 190, Prosper, TX 75078',
    hours: 'Mon\u2013Thu 11am\u20139:30pm, Fri\u2013Sat 11am\u201310pm, Sun 11am\u20139pm',
    image: '/images/salsa-tex-mex.png',
  },
  {
    name: "Prema's Kitchen",
    slug: 'premas-kitchen',
    category: 'food-fun',
    shortDescription: 'Authentic Indian restaurant in Prosper, TX offering traditional dishes, Indo-Chinese specialties, and Southern Indian favorites on Preston Road.',
    longDescription: "Prema's Kitchen is an authentic Indian restaurant offering traditional dishes, Indo-Chinese specialties, and Southern Indian favorites. Our recipes are crafted with care, bringing the rich flavors of India to the Prosper community.",
    address: '1921 N Preston Rd, Prosper, TX 75078',
    hours: 'Daily 10am\u20132:30pm, 4:30pm\u201310pm',
    image: '/images/premas-kitchen.png',
  },
  {
    name: 'Sake Sushi & Hibachi',
    slug: 'sake-sushi-hibachi',
    category: 'food-fun',
    shortDescription: 'Japanese restaurant in Prosper, TX offering fresh sushi, sashimi, and hibachi grills with a full bar on University Drive.',
    longDescription: 'Sake Sushi & Hibachi is a Japanese restaurant offering fresh sushi, sashimi, hibachi grills, and a full bar in a modern setting. We bring the art of Japanese cuisine to Prosper with quality ingredients and skilled chefs.',
    phone: '(469) 260-3200',
    address: '4580 W University Dr, Suite 50, Prosper, TX 75078',
    hours: 'Mon\u2013Thu 11am\u20139:30pm, Fri 11am\u201310:30pm, Sat 12pm\u201310:30pm, Sun 12pm\u20139:30pm',
    image: '/images/sake-sushi-hibachi.png',
  },
  // Health & Fitness
  {
    name: 'CrossFit Prosper',
    slug: 'crossfit-prosper',
    category: 'health-fitness',
    shortDescription: 'Premier CrossFit gym in Prosper, TX offering group classes, personal training, and a supportive community for all fitness levels.',
    longDescription: 'CrossFit Prosper is a premier CrossFit gym offering group classes, personal training, and a supportive community for all fitness levels. We believe fitness is for everyone and our coaches are dedicated to helping you reach your goals.',
    quote: 'We believe fitness is for everyone. Our community will push you to be your best.',
    phone: '(469) 842-0667',
    address: '4295 S Coit Rd, Building 140, Prosper, TX 75078',
    hours: 'Mon\u2013Sat 5am\u20139pm',
    image: '/images/crossfit-prosper.png',
  },
  {
    name: 'Apex Fitness Prosper',
    slug: 'apex-fitness-prosper',
    category: 'health-fitness',
    shortDescription: 'Results-based fitness facility in Prosper, TX with expert trainers, modern equipment, and a community-focused approach to wellness.',
    longDescription: 'Apex Fitness Prosper is a results-based fitness facility with expert trainers, modern equipment, and a community-focused approach to wellness. We help you build strength, confidence, and lasting healthy habits.',
    phone: '(469) 277-9532',
    address: '750 Richland Blvd, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 6am\u201312pm & 4pm\u20138pm, Sat 6am\u201312pm, Sun Closed',
    image: '/images/apex-fitness-prosper.png',
  },
  {
    name: 'F45 Training Prosper',
    slug: 'f45-training-prosper',
    category: 'health-fitness',
    shortDescription: 'Functional group fitness studio in Prosper, TX with 5,000+ dynamic movements, team energy, and real results for every body.',
    longDescription: 'F45 Training Prosper offers functional group fitness classes with 5,000+ dynamic movements, team energy, and real results for every body. Our innovative workouts combine cardio and resistance training for maximum impact.',
    phone: '(972) 427-4002',
    address: '1061 N Coleman St, Ste 150, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 5:15am\u20136:30pm, Sat 8am\u201311:45am, Sun 9am\u20133pm',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
  // Professionals
  {
    name: 'Greg Hall Law',
    slug: 'greg-hall-law',
    category: 'professionals',
    shortDescription: 'Estate planning and probate attorney in Prosper, TX serving local families with personalized, compassionate legal guidance.',
    longDescription: 'Greg Hall Law is an estate planning and probate attorney serving Prosper families with personalized, compassionate legal guidance. We make the legal process as comfortable and clear as possible.',
    quote: 'Most people never want to meet with a lawyer. I make the process as comfortable and clear as possible.',
    phone: '(214) 295-7000',
    address: '290 S Preston Rd, Suite 300, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 9am\u20135pm',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
  },
  {
    name: 'Henry & Peters CPAs',
    slug: 'henry-peters-cpas',
    category: 'professionals',
    shortDescription: 'Established CPA firm serving Prosper, TX with comprehensive tax preparation, audit, and business advisory services for individuals and businesses.',
    longDescription: 'Henry & Peters CPAs is an established CPA firm providing comprehensive tax, audit, and business advisory services to Prosper individuals and businesses. We bring decades of experience to help you navigate your financial future.',
    phone: '(469) 956-5400',
    address: '8000 Warren Pkwy, Ste 103, Frisco, TX 75034',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    name: 'The Cawlfield Law Firm',
    slug: 'cawlfield-law-firm',
    category: 'professionals',
    shortDescription: 'Real estate attorney serving Prosper, TX, Frisco, and Celina with residential and commercial legal services for homebuyers and investors.',
    longDescription: 'The Cawlfield Law Firm is a real estate attorney serving Prosper, Frisco, and Celina with residential and commercial legal services. We guide you through every step of your real estate transaction with expertise and care.',
    phone: '(972) 382-5400',
    address: '129 N Ohio St, Celina, TX 75009',
    hours: 'Mon\u2013Fri 8am\u20135pm',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  // Shop
  {
    name: 'Lily Claire',
    slug: 'lily-claire',
    category: 'shop',
    shortDescription: 'Boutique shop in Prosper, TX on Main Street offering unique women\'s fashion, home d\u00e9cor, and artisanal gifts with a personal touch.',
    longDescription: 'Lily Claire is a boutique shop on Broadway offering unique women\'s fashion, home d\u00e9cor, and artisanal gifts with a personal touch. Step in and discover curated collections that make every visit special.',
    phone: '(214) 649-4806',
    address: '201 S Main St, Suite C, Prosper, TX 75078',
    hours: 'Mon 1:30pm\u20136pm, Tue\u2013Sat 11am\u20136pm, Sun Closed',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
  },
  {
    name: 'Prosper Blooms',
    slug: 'prosper-blooms',
    category: 'shop',
    shortDescription: "Prosper, TX's leading florist since 2014 on Broadway Street, creating expertly crafted arrangements for every occasion with local delivery.",
    longDescription: "Prosper Blooms has been Prosper's leading florist since 2014, creating expertly crafted arrangements for every occasion with local delivery. From weddings to everyday bouquets, we bring beauty to your doorstep.",
    phone: '(469) 481-9294',
    address: '210 W Broadway St, Prosper, TX 75078',
    hours: 'Mon\u2013Fri 9am\u20135pm, Sat 10am\u20132pm, Sun Closed',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80',
  },
  {
    name: 'Dawson + Claire',
    slug: 'dawson-claire',
    category: 'shop',
    shortDescription: "Women's boutique in downtown Prosper, TX on Broadway Street offering curated clothing, accessories, and gifts. A local shopping favorite.",
    longDescription: "Dawson + Claire is an adorable women's boutique on Broadway Street offering curated clothing, accessories, and gifts in downtown Prosper. We love helping you find pieces that feel uniquely you.",
    quote: 'We love helping women feel confident and beautiful. Shopping here is an experience, not just a transaction.',
    phone: '(214) 305-3461',
    address: '113 W Broadway St, Prosper, TX 75078',
    hours: 'Mon\u2013Sat 10am\u20136pm, Closed Sunday',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80',
  },
  // Trades
  {
    name: 'The Red Roofer',
    slug: 'the-red-roofer',
    category: 'trades',
    shortDescription: 'Trusted roofing contractor serving Prosper, TX with honest inspections, transparent pricing, and quality roof repairs and replacements.',
    longDescription: 'The Red Roofer is a trusted, family-owned roofing contractor serving Prosper, TX and the surrounding DFW metroplex. Owner William Ferlet is known for honest inspections, transparent pricing, and quality workmanship on every roof repair, storm damage repair, and full roof replacement.',
    htmlDescription: `<h2>Meet William Ferlet, the Roofing Contractor in Prosper Who Actually Tells You the Truth</h2>

<p>If you've ever called a roofing company and felt like you were being sold something you didn't need, that's exactly why <a href="https://theredroofer.com" target="_blank" rel="noopener noreferrer">The Red Roofer</a> stands out. William Ferlet, the owner, is the kind of contractor who will climb up on your roof, take pictures of everything he finds, and then come back down and tell you straight: you don't need a new roof. Not as a sales tactic. Because it's actually the truth. He does this regularly, even when the easy sale is sitting right there in front of him.</p>

<p>William is not interested in convincing anyone to file an insurance claim they don't need. He won't dodge your questions or wave you off with "don't worry about it, I've got it." He believes every homeowner deserves to see exactly what he sees, know exactly what needs to be done, and understand exactly what they're paying for. If a roof just needs a quick repair or some sealant in the right spots, that's what he's going to recommend. Period.</p>

<h2>A Family Owned Roofing Company Built on Hard Work and Honesty</h2>

<p>The Red Roofer is a family owned business, and that matters more than you might think. William and his wife built this company from the ground up, and when people say "from the ground up," in this case it's literal. William grew up on a small farm in Navarro County with no central heat and air. His wife grew up in a house with a hole in the roof. They moved to the DFW area, faced the grind of a first year in business where the total income was $16,000, and kept going.</p>

<p>That background shapes everything about how this company operates. When you call The Red Roofer, you're not dealing with a faceless operation or a storm chaser who blows through town looking for quick insurance payouts. You're talking to someone who understands what it feels like to need help and not be able to afford a mistake. That empathy shows up in every interaction, from the first phone call to the final cleanup.</p>

<h2>What to Expect When You Hire The Red Roofer for <a href="https://theredroofer.com/service/roof-repair" target="_blank" rel="noopener noreferrer">Roof Repair</a> in Prosper</h2>

<p>Here's what the experience actually looks like. You reach out, and William responds. Quickly. He answers his phone, he returns texts, and he communicates clearly about scheduling and pricing. When he gives you a quote, that quote holds. The price he tells you is the price you pay. That alone separates him from a lot of roofing contractors in the Prosper area.</p>

<p>When the day of the job arrives, expect William to show up on time or early. He walks homeowners through exactly what he plans to do, makes sure everyone is on the same page, and then gets to work. Throughout the process, he explains each step so you're never left wondering what's happening on your own roof. If something unexpected comes up, you hear about it immediately, not after the invoice arrives.</p>

<blockquote>"William quoted me a price for the project and that price didn't change. Many times this isn't the case with contractors. Communicating with him was easy. He answered calls and text promptly. He showed up on time."</blockquote>
<p style="margin-top: 0.75rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; font-style: normal; color: #6b7280;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> <span>Verified Review from Google</span></p>

<h2>Transparent Roofing Inspections With Photos and Video</h2>

<p>One of the things that stands out most about working with The Red Roofer is the transparency. William videos and photographs the entire inspection process so homeowners can see their roof the way he sees it. If there's damage, you'll see the picture before he even gets off the ladder. If there's no damage, he'll tell you that too, even if it means he doesn't get the job.</p>

<p>That willingness to let homeowners in on everything is something his customers notice right away. He's been known to let people ride along to pick up materials, assist with the work if they want to, and ask as many questions as they need. That level of openness and confidence in his craft is rare, and it builds the kind of trust that turns a one time roof repair into a relationship that lasts for years.</p>

<h2>Roofing Contractor Serving Prosper, Little Elm, Frisco, and Denton County</h2>

<p>The Red Roofer serves Prosper, Little Elm, Providence Village, Frisco, Aubrey, Celina, McKinney, The Colony, Denton, Plano, Lewisville, and surrounding communities across the DFW metroplex. Whether you need a full roof replacement after a North Texas hailstorm or a targeted repair to stop a leak before it gets worse, William treats every job the same way: show up, communicate, do the work right, and leave the property better than he found it.</p>

<p>His crew doesn't just clean up after themselves in the area where they worked. They clean up your entire driveway. They go above and beyond what was discussed, not to pad a bill, but because William genuinely wants to leave your home in better shape than he found it. That's not marketing language. That's what his customers say, unprompted, in their reviews.</p>

<h2>Why Prosper Homeowners Trust The Red Roofer</h2>

<p>At the end of the day, your home is probably your biggest investment, and trusting someone to work on your roof is a big deal. William gets that. He doesn't take it lightly. When you hire The Red Roofer, you're getting a roofing contractor who values integrity over a quick sale, who communicates openly instead of dodging hard questions, and who treats your home like it belongs to someone he actually cares about. Because, in his mind, it does.</p>

<p>If you're looking for a roofer in the Prosper area who will be honest with you, show up when he says he will, and do the job right the first time, give The Red Roofer a call. You'll understand the difference the moment William picks up the phone.</p>`,
    phone: '(940) 260-3197',
    website: 'https://theredroofer.com',
    address: 'Serving Prosper, TX and surrounding areas',
    hours: 'Mon\u2013Sat 7am\u20136pm',
    image: '/images/the-red-roofer.jpg',
    verified: true,
  },
  {
    name: 'Cody & Sons Plumbing, Heating & Air',
    slug: 'cody-sons-plumbing',
    category: 'trades',
    shortDescription: 'Full-service plumbing, heating, and air conditioning company serving Prosper, TX with expert care and 24/7 live answering.',
    longDescription: 'Cody & Sons Plumbing, Heating & Air is a full-service plumbing, heating, and air conditioning company serving Prosper with expert care and 24/7 live answering. We treat every home like our own.',
    phone: '(214) 339-3401',
    address: '701 E Plano Pkwy, Suite 400, Plano, TX 75074',
    hours: 'Mon\u2013Fri 8am\u20136pm, Sat 8am\u20133pm',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
  },
  {
    name: 'Top Notch Electrician',
    slug: 'top-notch-electrician',
    category: 'trades',
    shortDescription: 'Locally owned electrician serving Prosper, TX and surrounding areas with reliable, affordable electrical services and 24/7 emergency response.',
    longDescription: 'Top Notch Electrician is a locally owned electrical contractor serving Prosper with reliable, affordable services and 24/7 fast responses. We handle everything from panel upgrades to troubleshooting with professionalism.',
    phone: '(972) 379-8646',
    address: 'Serving Prosper, TX and surrounding areas',
    hours: 'Open 24/7',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  },
  {
    name: 'Prosper Painting',
    slug: 'prosper-painting',
    category: 'trades',
    published: true,
    shortDescription: 'Professional painting company in Prosper, TX offering interior and exterior painting, cabinet refinishing, and custom finishes. Over 12 years serving the community.',
    longDescription: 'Prosper Painting is a locally owned painting company led by Sean Henry, a lifelong craftsman who brought Northeast trade standards to Texas over 12 years ago. From interior and exterior painting to cabinet refinishing and custom finishes, Sean and his team deliver flawless results with transparent communication and a three-step quality control process.',
    htmlDescription: `<h2>A Prosper, TX Painting Company Built on Craftsmanship, Not Shortcuts</h2>

<p>When you call <a href="https://prosperpainting.com/" target="_blank" rel="noopener noreferrer">Prosper Painting</a>, you're not getting a random crew with a truck and a couple of rollers. You're getting a company built by Sean Henry, a guy who grew up around painting and carpentry his entire life. His dad and uncles were all painters and carpenters back in Connecticut, where the trade actually requires licensing and certifications. Sean brought that whole Northeast craftsman mentality down to Texas when he started Prosper Painting over 12 years ago, and it shows in every single job his team touches.</p>

<p>Sean lives here in Prosper. Prosper Painting isn't a franchise managing things from a call center somewhere. Sean is involved in every project behind the scenes, whether that's giving you an honest estimate, checking in with the crew, or making sure every job meets his standard before it's done. His guys are trained to work the way he would, and he holds them to it.</p>

<h2>Interior and Exterior Painting in Prosper That Gets Done Right the First Time</h2>

<p>One thing you'll notice almost immediately is the communication. From the very first estimate, the Prosper Painting team is upfront about everything. If painting your baseboards is going to make the door next to them look worn out, they'll tell you before the job starts. No surprises or sneaky order changes tacked on at the end. They're upfront and set proper expectations so you can make the decision on your own terms. Many customers talk about getting updates throughout the entire process and never feeling left in the dark about what's happening in their own home.</p>

<p>The crew shows up on time. That might sound basic, but if you've ever hired a contractor who ghosted you for three days or showed up whenever they felt like it, you know how rare punctuality actually is. Prosper Painting is consistent with its clients' scheduling. The only things that shift a timeline are weather, illness, or something you request as the homeowner. Everything else stays locked in.</p>

<h2>Cabinet Refinishing and Custom Finishes in Prosper, TX</h2>

<p>If you need cabinet refinishing, this is where Prosper Painting really shines. The cabinet system Sean built involves a minimum of two coats of primer and two to three coats of paint, with sanding between every single coat. The goal is a factory finish that looks and feels like glass. Customers who have had their cabinets done talk about the results being "incredible" and looking brand new.</p>

<p>Beyond cabinets, the team handles metallic finishes, Venetian plaster, wallpaper, carpentry, and all kinds of custom work that most painting companies won't even attempt. Prosper Painting works with custom builders on high end projects regularly, so the standard of quality never drops whether it's an accent wall in your living room or a full interior repaint of a two story home.</p>

<h2>Prosper Painters Who Actually Clean Up After Themselves</h2>

<p>Something that comes up again and again in reviews is how clean the crew leaves your home. Multiple homeowners have said the work area was cleaner when the team left than when they arrived. The Prosper Painting crew is trained to treat your space with respect, and cleanliness is a non-negotiable part of every single project. You're not going to come home to paint drips on your floor or tape residue stuck to your trim. The team takes pride in leaving your home looking like they were never there, except for the beautiful new paint on your walls.</p>

<h2>A Three-Step Quality Control Process You Won't Find Anywhere Else</h2>

<p>Here's something that sets Prosper Painting apart from just about every other painter in the DFW area. They run a three-step closeout process on every job. First, a crew member goes through the entire project with tape, marking every spot that needs a touch-up. Once those are handled, the crew leader does his own walkthrough and marks anything else. Then the project lead does a final walkthrough with you, the homeowner, to make sure everything meets your expectations before they pack up.</p>

<p>This is why Prosper Painting almost never has to come back for touch-ups. The job is done right before the crew leaves your driveway. Customers talk about walking their entire house after the team finished and not being able to find a single missed spot. That kind of thoroughness is rare, and it comes from a system Sean built specifically because he refuses to leave a homeowner hanging.</p>

<h2>Why Prosper Homeowners Trust Sean Henry With Their Homes</h2>

<p>At the end of the day, what makes Prosper Painting different is Sean himself. He's a craftsman in an industry flooded with people who picked up a brush last Tuesday. He grew up learning the trade the right way, with real standards and real accountability. He trains every crew member to his standard, and the guys who stick around are the ones willing to learn the craft and take pride in the work.</p>

<p>Sean will tell you straight up: don't just go with the cheapest bid. There's a reason someone quotes you $200 when the job should cost $500. You get what you pay for, and with Prosper Painting, what you get is a team that communicates clearly, shows up when they say they will, delivers a finish that looks flawless, and stands behind their work with a 100% guarantee.</p>

<p>Whether you need your whole house painted inside and out, cabinets refinished to a factory smooth finish, or a custom metallic accent wall that makes your guests stop and stare, Prosper Painting is the call to make. The team has been doing this in the Prosper community for over a decade, and they're not slowing down anytime soon.</p>

<h2>Find Prosper Painting on Google</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53376.97668700452!2d-96.81242424803946!3d33.26489419149891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3fc0da786dc9%3A0x3f48777f6007d3d!2sProsper%20Painting!5e0!3m2!1sen!2sus!4v1775757141625!5m2!1sen!2sus" width="100%" height="450" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<p>Looking for more trusted tradespeople in Prosper? Check out our full <a href="/trades/">Prosper trades directory</a> to find <a href="/trades/the-red-roofer/">roofers</a>, <a href="/trades/impact-landscapes/">landscapers</a>, <a href="/blog/best-plumbers-prosper-tx/">plumbers</a>, and other contractors recommended by your neighbors.</p>`,
    phone: '(972) 346-5202',
    website: 'https://prosperpainting.com/',
    address: '1912 Univ Business Dr #415, McKinney, TX 75071',
    hours: 'Mon\u2013Fri 8am\u20135pm',
    image: '/images/prosper-painting.webp',
    verified: true,
  },
  {
    name: 'Legacy Plumbing',
    slug: 'legacy-plumbing',
    category: 'trades',
    shortDescription: 'Expert plumber serving Prosper, TX with a mission to spread good by doing good. Trusted by local homeowners for quality plumbing services.',
    longDescription: 'Legacy Plumbing provides expert plumbing services in Prosper with a mission to spread good by doing good. Trusted by the community, we bring integrity and skill to every job.',
    phone: '(972) 801-9798',
    address: '1101 E Eldorado Pkwy, Little Elm, TX 75068',
    hours: 'Mon\u2013Fri 7am\u20138pm, Sat\u2013Sun 7am\u20135:30pm',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80',
  },
  {
    name: 'Impact Landscapes',
    slug: 'impact-landscapes',
    category: 'trades',
    published: true,
    shortDescription: 'Professional landscaping company serving Prosper, TX with honest pricing, quality hardscaping, outdoor living spaces, and full front yard and backyard transformations. Locally owned by Erik Davenport.',
    longDescription: 'Impact Landscapes is a locally owned landscaping company led by Erik Davenport, serving the Prosper, TX area with everything from stone edging and French drains to full outdoor living spaces and backyard transformations. Known for honest pricing, punctual crews, and long-term customer relationships built on trust.',
    htmlDescription: `<h2>What It's Really Like Working with Impact Landscapes in Prosper, TX</h2>

<p>So if you're out here looking for a landscaping company in the Prosper, Texas area, you've probably already scrolled through a ton of websites that all say the same exact thing. Great service. Quality work. You know, the usual stuff. So let me just tell you what actually happens when you reach out to <a href="https://impactlandscapes.net/" target="_blank" rel="noopener noreferrer">Impact Landscapes</a> and work with the owner, Erik Davenport.</p>

<p>First thing, you're getting a call back within twenty-four hours. Whether it's Erik himself or his wife picking up the phone or texting you back, that alone already puts them ahead of so many landscaping companies out here in North Texas. From the moment you make contact, you're not dealing with some call center or a scheduler who doesn't even know what a French drain is. You're talking to someone who actually knows the work and can give you an honest answer about what it's going to take to get the results you want. And that's huge.</p>

<h2>Honest Pricing from a Prosper Landscaper Who Won't Cut Corners</h2>

<p>Here's where Erik is different from a lot of contractors, and this is something you're going to notice right away. He's not going to tell you what you want to hear just to win the job. If your budget doesn't match your vision, he's going to tell you that upfront. No sugarcoating. No hidden charges that show up halfway through the project. Erik has a really simple philosophy: he will never compromise quality to meet a budget. If the numbers don't line up, he'd rather just be straight with you than deliver something he's not proud of. And honestly, that says a lot about the kind of person he is.</p>

<p>Now that might sound intimidating, but it's actually the opposite. It means you're never going to get blindsided by surprise costs or sloppy shortcuts. Erik is not the cheapest option out there, and he'll tell you that himself. But he's also not the most expensive. The thing is, he's someone who builds things the right way the first time so you don't end up paying for it twice. And that matters way more than most people realize until they've already learned the hard way.</p>

<h2>Quality Landscape Design and Hardscaping in North Texas</h2>

<p>The range of work Impact Landscapes handles is pretty impressive. Stone edging, flagstone patios, French drains, sod installation, turf, landscape lighting, grading, custom wood fencing, outdoor living spaces, putting greens, retaining walls, and full backyard transformations. Erik and his crew have tackled everything from simple flower bed borders to complete outdoor overhauls involving hardscaping, drainage rerouting, and custom design work around existing pools. One customer had them build a flagstone patio, reroute drainage, and move sprinkler heads all in one project. Another had them come in and tear out a previous contractor's bad work and redo the entire job in about a day and a half.</p>

<p>That last one is worth pausing on because it happens way more than you'd think. People go with the cheaper bid, the work falls apart or just doesn't look right, and then they end up calling Erik to fix it. At that point, you're paying more than you would have if you'd just gone with Impact from the start. Erik sees this all the time, and it's one of the reasons he's so upfront about pricing. He'd rather lose a job than deliver something that doesn't hold up. And that right there is the kind of business you want to work with.</p>

<h2>A Landscaping Crew That Shows Up on Time and Communicates</h2>

<p>When the crew shows up, they show up on time. That sounds like it should just be a basic expectation, but if you've ever hired a contractor for anything, you know how rare that actually is. Erik's team arrives when they say they will, they work hard while they're there, and they clean up when the job is done. A lot of customers have specifically called out the cleanup as something that really stood out to them. You're not going to come home to a yard full of debris and leftover materials. The crew treats your property with respect, and it shows.</p>

<p>Communication throughout the project is another thing that keeps coming up. Erik stays in the loop with you from start to finish. If questions come up, he responds quick. If there's an issue, he addresses it. You're never just sitting there wondering what's going on with your own yard. And that peace of mind is something you really can't put a price on.</p>

<h2>Repeat Customers and Long Term Relationships in Prosper Landscaping</h2>

<p>One of the most telling things about Impact Landscapes is how many customers come back. Not just once, but over and over again. There are clients who have had Erik work on multiple homes. They'll have him redo the front yard, then the backyard, then they move to a whole new house and call him again. One family had him build a patio three years ago and just recently brought him back for an update and refresh. That kind of loyalty doesn't just happen by accident. It happens because the work holds up, the experience is good, and the relationship is real.</p>

<p>Erik genuinely enjoys building those long term connections with his customers. He talks about repeat clients the way most people talk about old friends. When someone calls him back for a second or third project, that's the ultimate compliment in his eyes, and it's really the foundation his entire business is built on. And you can tell it means a lot to him.</p>

<h2>Outdoor Living Spaces and Backyard Transformations in Prosper, TX</h2>

<p>If you're dreaming about a full outdoor living space, that's where Erik really lights up. The projects he gets most excited about are the ones where he gets to touch every single inch of the yard. A patio with a cover, an outdoor kitchen, landscape lighting, turf, the whole thing designed and built as one cohesive space. He's currently working on a project around an existing pool that includes a putting green, turf installation, rock work, and a full lighting package. These are the kinds of transformations that completely change how you use your backyard. And honestly, that's pretty amazing when you think about it.</p>

<p>But here's the thing, you don't need a massive project to work with Impact. Plenty of customers have started with something smaller, like stone edging around flower beds or a drainage fix, and then come back later for the bigger stuff. Erik actually plans for that. He'll help you figure out what makes sense to tackle now and what can wait for a future phase, so you're building toward something great even if you can't do it all at once. That's the kind of approach you want from somebody.</p>

<h2>Community Involvement and Trusted Prosper Landscape Contractor</h2>

<p>Impact Landscapes isn't just about residential jobs, either. Erik and his team volunteered their time and skills to revitalize the butterfly garden at The Colony High School, removing dead plants, trimming bushes, and adding fresh mulch so the art room's garden could come back to life. That kind of community involvement says a lot about the character behind the company. That's the kind of stuff that really matters.</p>

<p>Erik has also been recognized as the best landscaper in his area for multiple years running, along with several contractor awards. But he doesn't lean on accolades to sell his work. The reviews speak for themselves. Words like "honest," "professional," "responsive," and "trustworthy" show up again and again from real customers who have been through the process and came out the other side genuinely happy with the result. And when you see that kind of consistency in reviews, you know it's legit.</p>

<h2>What to Expect When You Call Impact Landscapes</h2>

<p>So here's what you can actually expect. You're going to talk to Erik or one of his team members. They'll come look at your property and give you an honest assessment. If your budget fits your vision, he'll lay out a plan and get to work. His crew will show up on time, do the job right, and leave your property cleaner than they found it. And when it's all done, you'll probably find yourself already thinking about what you want them to do next. That's just how it goes with Impact Landscapes.</p>

<p>If you've got a project in mind or just want to talk through some ideas for your yard, reach out to Impact Landscapes. Erik and his team are easy to talk to, and there's no pressure. Just good people who do great work.</p>

<p>Looking for more trusted tradespeople in Prosper? Browse our full <a href="/trades/">Prosper trades directory</a> to find <a href="/trades/prosper-painting/">painters</a>, <a href="/trades/the-red-roofer/">roofers</a>, <a href="/blog/best-plumbers-prosper-tx/">plumbers</a>, and other contractors recommended by your neighbors. Thinking about what makes Prosper a great place to invest in your home? Check out our guide on <a href="/blog/cost-of-living-prosper-tx/">the cost of living in Prosper, TX</a>.</p>`,
    website: 'https://impactlandscapes.net/',
    phone: '(972) 849-6443',
    address: 'Serving Prosper, TX and surrounding areas',
    hours: 'Mon–Fri 9am–4pm, Sat–Sun Closed',
    image: '/images/impact-landscapes.webp',
    verified: true,
  },
  {
    name: 'TruClean Power Washing',
    slug: 'truclean-power-washing',
    category: 'trades',
    published: true,
    shortDescription: 'Professional power washing and window cleaning serving Prosper, TX and surrounding areas. Over 75 five-star reviews in seven months. Owned and operated by Tyler Fisher.',
    longDescription: 'TruClean Power Washing LLC is a locally owned power washing and window cleaning company led by Tyler Fisher, serving Prosper and all surrounding areas. Known for honest communication, attention to detail, and the kind of service that earns five-star reviews from real customers.',
    htmlDescription: `<h2>Meet Tyler Fisher: The Guy Behind TruClean Power Washing in Prosper</h2>

<p>So here's the thing about hiring somebody to come clean your house, your driveway, your windows, whatever it is. You're letting a stranger onto your property. And that can be weird, right? You don't know if they're going to show up on time, if they're going to do a good job, or if they're even going to show up at all. That's just the reality of hiring contractors sometimes.</p>

<p>Tyler Fisher is not that guy. Not even close.</p>

<p>Tyler runs <a href="https://trucleanpw.com/" target="_blank" rel="noopener noreferrer">TruClean Power Washing LLC</a>, serving the Prosper area and all the surrounding communities. And when I say he runs it, I mean he's the one actually doing the work. He's not sitting in some office dispatching random people to your house. Tyler is the one showing up with the equipment, doing the cleaning, and making sure everything looks right before he leaves. That matters. That matters a lot.</p>

<h2>Honest Communication Before the Pressure Washing Even Starts</h2>

<p>One of the biggest things you're going to notice about Tyler is how he communicates. And I don't just mean that he texts you back fast, although he absolutely does that too. It's more about how he sets expectations before he even touches your property. If you've got a big oil stain on your driveway and you're expecting it to disappear completely, Tyler is going to tell you straight up that's not going to happen. He'll let you know what's realistic and what's not. No sugarcoating, no telling you what you want to hear just to close the deal.</p>

<p>That's huge. Because how many times have you hired somebody and then been disappointed because the result didn't match what was in your head? Tyler eliminates that. He tells you exactly what to expect so there are no surprises. You know what you're getting before the job even starts.</p>

<h2>75 Five Star Reviews in Seven Months Says Everything</h2>

<p>So let's talk about the reviews for a second because this is where it gets real. TruClean has over 75 five star reviews on Google, and they did that in about seven months. That's not luck. That's not buying fake reviews like some companies out there do. That's 75 real people who were happy enough with the work that they took time out of their day to go leave a review. And if you know anything about getting people to leave reviews, you know that's not easy to do.</p>

<p>When you read through those reviews, you start seeing the same things come up over and over again. People talk about how professional Tyler is. They talk about how punctual he is. They talk about the attention to detail. One customer said their windows looked like they did the day they were installed. Another one said their windows were literally invisible after Tyler cleaned them. That's the kind of result people are getting.</p>

<h2>Window Cleaning and Pressure Washing That Actually Delivers</h2>

<p>TruClean does a lot of different things. Driveway cleaning, house washing, gutter cleaning, patio cleaning, window cleaning, commercial dumpster pad cleaning. But if you look at the reviews, you'll notice that a ton of people are calling Tyler specifically for windows. And they keep coming back. One customer said she's going to have her windows cleaned regularly now because Tyler did such a good job the first time. Another customer hired him to help prep their home to sell and said the results were outstanding.</p>

<p>The thing that keeps coming up is that Tyler doesn't just do the job. He goes above and beyond. Multiple customers have mentioned that he took care of extra things while he was already on site. He's not watching the clock trying to get out of there as fast as possible. He's making sure everything is done right.</p>

<h2>What TruClean Power Washing Offers</h2>

<ul>
<li><strong>Driveway &amp; Concrete Cleaning</strong> — oil stains, dirt buildup, and weathering</li>
<li><strong>House Washing</strong> — full exterior soft wash to remove mold, mildew, and grime</li>
<li><strong>Window Cleaning</strong> — interior and exterior, the service customers rave about most</li>
<li><strong>Gutter Cleaning</strong> — debris removal and exterior gutter brightening</li>
<li><strong>Patio &amp; Deck Cleaning</strong> — restore outdoor living spaces</li>
<li><strong>Commercial Dumpster Pad Cleaning</strong> — for businesses and property managers</li>
</ul>

<p>Need a free estimate? Call or text Tyler directly at <a href="tel:+15743703974">(574) 370-3974</a> or email <a href="mailto:info@trucleanpw.com">info@trucleanpw.com</a>. He responds fast.</p>

<h2>Why You Shouldn't Just Go With the Cheapest Quote</h2>

<p>And look, this is something that Tyler is really passionate about and honestly it applies to pretty much every trade out there. Don't just go with the cheapest quote. Your home is probably the biggest investment you're ever going to make. So when somebody comes in with a super low price, you have to ask yourself why. Are they insured? Do they know what they're doing? Because if they mess something up and they're not insured, you're stuck. You're dealing with that mess on your own and that cheap price just became really expensive.</p>

<p>Tyler is insured. Tyler knows what he's doing. And Tyler is going to treat your property like it's his own. That's not just something on a website. That's what people are actually saying in their reviews.</p>

<h2>The Dad Jokes Are Free of Charge</h2>

<p>One more thing. Tyler is genuinely a fun person to have around. He's got this sarcastic sense of humor and he is absolutely a self proclaimed dad joke connoisseur. His wife says he's not funny. He disagrees. He's the kind of guy who will crack a joke with you even if he just met you five minutes ago, and honestly that makes the whole experience of having somebody at your house way more comfortable. He's not some stiff, robotic contractor. He's a real dude who happens to be really, really good at what he does.</p>

<p>He started this business for two reasons. One, he didn't want to work for somebody else for the rest of his life. And two, he wanted to build something he could hand down to his son someday. That's the kind of motivation that shows up in the work. When somebody is building something for their family's future, they're not cutting corners. They're not phoning it in.</p>

<h2>Book TruClean Power Washing and See for Yourself</h2>

<p>TruClean Power Washing serves Prosper and all the surrounding areas. Monday through Friday, 8 to 5, and weekends by appointment. You can call or text Tyler at (574) 370-3974 or email info@trucleanpw.com. Free estimates, honest pricing, and the kind of service that makes you actually want to leave a five star review when it's done.</p>

<h2>Find TruClean Power Washing on Google</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53512.31430086604!2d-96.99697082867101!3d33.04278362937013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885871fb3a7766b%3A0x9af75ac9bfbc83a1!2sTruClean%20Power%20Washing%20LLC!5e0!3m2!1sen!2sus!4v1776018742978!5m2!1sen!2sus" width="100%" height="450" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<p>Looking for more trusted tradespeople? Check out our full <a href="/trades/">trades directory</a> to find <a href="/trades/the-red-roofer/">roofers</a>, <a href="/trades/impact-landscapes/">landscapers</a>, <a href="/blog/best-plumbers-prosper-tx/">plumbers</a>, and other contractors recommended by your neighbors.</p>`,
    phone: '(574) 370-3974',
    website: 'https://trucleanpw.com/',
    address: 'Serving Prosper, TX and surrounding areas',
    hours: 'Mon–Fri 8am–5pm, Weekends by appointment',
    image: '/images/truclean-power-washing.webp',
    verified: true,
  },
  {
    name: 'The Playground Standard',
    slug: 'the-playground-standard',
    category: 'trades',
    shortDescription: 'Professional playground deep cleaning and sanitation serving Prosper, TX and surrounding areas. Child-safe, eco-friendly products. Serving HOAs, cities, schools, daycares, and churches across Collin and Denton County.',
    longDescription: 'The Playground Standard is a professional playground deep cleaning and sanitation service based in Aubrey and serving communities throughout Prosper, Frisco, Celina, and McKinney. Owned by Jennifer and Tre Davis, the company uses child-safe, eco-friendly products and delivers detailed before-and-after reports with every job.',
    htmlDescription: `<h2>When Two Parents Decided Playgrounds Deserved Better</h2>

<p>When you work with Jennifer and Tre Davis, the first thing you'll notice is that they actually care. Not in a corporate "we value our customers" kind of way, but in the way two parents of three young kids care about where those kids put their hands and what ends up in their mouths.</p>

<p><a href="https://theplaygroundstandard.com/" target="_blank" rel="noopener noreferrer">The Playground Standard</a> is a professional playground deep cleaning and sanitation service based in Aubrey and serving communities throughout the Prosper, Frisco, Celina, and McKinney areas. Jennifer and Tre started this business because they were tired of bringing their kids to playgrounds that, frankly, nobody was taking care of. And instead of just complaining about it, they did something about it.</p>

<h2>Deep Cleaning That Goes Way Beyond the Surface</h2>

<p>What sets them apart is the level of detail. Think of it like the difference between running your car through an automatic wash versus getting a full detail. They scrub every inch of a playground, including the spots most people would never think to touch. They use child safe, eco friendly cleaning products because, as Jennifer puts it, kids touch surfaces and then put their hands right in their mouths. Bleach has no place in that equation.</p>

<p>When the job is done, you get a full report with before and after photos plus a breakdown of any safety concerns they spotted along the way, like missing bolts or cracks in the equipment. That kind of thoroughness is rare.</p>

<h2>See the Difference for Yourself</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
<div style="text-align:center;">
<img src="/images/playground-slide-before.webp" alt="Playground slide before deep cleaning by The Playground Standard" width="600" height="450" loading="lazy" style="width:100%;height:auto;border-radius:12px;" />
<p style="margin-top:0.5rem;font-weight:700;color:#ef4444;font-size:0.9rem;">BEFORE</p>
</div>
<div style="text-align:center;">
<img src="/images/playground-slide-after.webp" alt="Playground slide after deep cleaning by The Playground Standard" width="600" height="450" loading="lazy" style="width:100%;height:auto;border-radius:12px;" />
<p style="margin-top:0.5rem;font-weight:700;color:#22c55e;font-size:0.9rem;">AFTER</p>
</div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
<div style="text-align:center;">
<img src="/images/playground-climbing-before.webp" alt="Playground climbing equipment before cleaning" width="600" height="450" loading="lazy" style="width:100%;height:auto;border-radius:12px;" />
<p style="margin-top:0.5rem;font-weight:700;color:#ef4444;font-size:0.9rem;">BEFORE</p>
</div>
<div style="text-align:center;">
<img src="/images/playground-climbing-after-1.webp" alt="Playground climbing equipment after deep cleaning by The Playground Standard" width="600" height="450" loading="lazy" style="width:100%;height:auto;border-radius:12px;" />
<p style="margin-top:0.5rem;font-weight:700;color:#22c55e;font-size:0.9rem;">AFTER</p>
</div>
</div>

<h2>What The Playground Standard Offers</h2>

<ul>
<li><strong>Full Playground Deep Cleaning</strong> — every surface scrubbed, top to bottom</li>
<li><strong>Sanitation with Child-Safe Products</strong> — eco-friendly, no bleach, no harsh chemicals</li>
<li><strong>Safety Inspection Reports</strong> — missing bolts, cracks, and hazards flagged</li>
<li><strong>Before &amp; After Documentation</strong> — full photo report with every job</li>
<li><strong>Recurring Maintenance Plans</strong> — keep playgrounds safe year-round</li>
</ul>

<h2>Who They Serve Across Collin and Denton County</h2>

<p>They serve HOAs, municipalities, schools, daycares, and churches throughout Collin and Denton County. If your community has a playground that families depend on, Jennifer and Tre are the ones to call.</p>

<p>Think about the last time you took your kids to the neighborhood playground. Did you wonder when that equipment was last cleaned? Most people do. The problem is, most communities don't have a plan for it. The Playground Standard exists to fix that. Whether it's a one-time deep clean or a recurring maintenance schedule, Jennifer and Tre make sure the places where your kids play are actually safe and clean.</p>

<h2>Why Prosper Communities Trust The Playground Standard</h2>

<p>Jennifer and Tre aren't some big corporate cleaning franchise. They're local parents who built this business because they saw a problem nobody else was solving. Every playground they clean is one their own kids could end up playing on. That's the standard they hold themselves to, and it shows in every single job.</p>

<p>If you're on an HOA board, run a daycare, manage a school facility, work for a Parks and Rec department, or oversee a church playground, reach out to The Playground Standard. Call <a href="tel:+14692690534">(469) 269-0534</a> or email <a href="mailto:contact@theplaygroundstandard.com">contact@theplaygroundstandard.com</a>. You'll get an honest assessment, a thorough cleaning, and the peace of mind that comes from knowing the job was done right by people who genuinely care about keeping kids safe.</p>

<p>Looking for more trusted local services? Check out our full <a href="/trades/">Prosper trades directory</a> to find <a href="/trades/the-red-roofer/">roofers</a>, <a href="/trades/impact-landscapes/">landscapers</a>, <a href="/trades/truclean-power-washing/">power washing</a>, and other professionals recommended by your neighbors.</p>`,
    phone: '(469) 269-0534',
    email: 'contact@theplaygroundstandard.com',
    website: 'https://theplaygroundstandard.com/',
    address: 'Serving Prosper, TX and surrounding areas',
    image: '/images/the-playground-standard.webp',
    verified: true,
  },
  {
    name: 'Elite Integrated Performance',
    slug: 'elite-integrated-performance',
    category: 'health-fitness',
    published: true,
    shortDescription: 'Performance training, nutrition programming, and medical optimization all under one roof in Prosper, TX. Founded by veteran and coach Chris Hatch with over 25 years of experience.',
    longDescription: 'Elite Integrated Performance combines personalized training, data-driven nutrition, and medical optimization including peptide programs, TRT, and IV therapy. Founded by veteran Chris Hatch, the facility serves Prosper, Frisco, and Celina with a structured, results-focused approach.',
    htmlDescription: `<h2>Not a Gym. A System Built for Real Results.</h2>

<p>Chris Hatch built this business from the ground up. He's a veteran, spent a decade in the military, then years running large scale manufacturing operations. When he moved his family back to Texas and decided to turn his lifelong passion for training into a business, he didn't just open a facility. He created a process that shaped the journey for every person that he works with. When you walk into <a href="https://eliteintegratedperformance.net/" target="_blank" rel="noopener noreferrer">Elite Integrated Performance</a>, you're not signing up for a gym. You're stepping into a system, and that's exactly what makes this place different from anything else in the Prosper area.</p>

<h2>Data-Driven Training and Nutrition That Actually Works</h2>

<p>Your first experience starts with an InBody scan. The team learns your body composition, how many calories you actually burn, and builds your nutrition plan and training program around real numbers. Nothing is generic. Your workouts are built on percentages, your nutrition shifts with each phase, and the programming runs on a three phase annual cycle: 16 weeks of cutting, 16 weeks of performance work, and 16 weeks of building through the holidays when you're eating more anyway. It's designed to work with your actual life.</p>

<h2>Medical Optimization Nobody Else in Prosper Is Offering</h2>

<p>What nobody else in Prosper is doing is the medical side. Elite has a Chief Nursing Officer on staff and a team of doctors backing the operation. Peptide programs, testosterone replacement therapy, IV therapy, comprehensive bloodwork — all of it runs through certified pharmacies with real medical evaluations. You're not buying something off the internet and hoping for the best.</p>

<h2>What Elite Integrated Performance Offers</h2>

<ul>
<li><strong>Personalized Training Programs</strong> — built on your InBody data, not cookie-cutter templates</li>
<li><strong>Custom Nutrition Planning</strong> — calorie and macro targets based on real numbers, adjusted each phase</li>
<li><strong>Three-Phase Annual Programming</strong> — 16 weeks cutting, 16 weeks performance, 16 weeks building</li>
<li><strong>Peptide Programs &amp; TRT</strong> — medically supervised through certified pharmacies</li>
<li><strong>IV Therapy</strong> — recovery and optimization protocols</li>
<li><strong>Comprehensive Bloodwork</strong> — real medical evaluations, not guesswork</li>
</ul>

<h2>25 Years of Coaching Experience Behind Every Program</h2>

<p>Chris has over 25 years of coaching experience, and the way he runs this place reflects that. It's structured, personal, and genuinely focused on whether you're making progress. This isn't a headcount operation. They know every client, they track everything, and they care about outcomes.</p>

<p>If you're in Prosper, Frisco, or Celina and you want training, nutrition, and medical optimization all working together under one roof, Elite Integrated Performance is definitely worth a shot.</p>

<p>Looking for more health and fitness options in the area? Check out our <a href="/health-and-fitness/">Prosper health and fitness directory</a> to find <a href="/health-and-fitness/crossfit-prosper/">CrossFit</a>, <a href="/health-and-fitness/apex-fitness-prosper/">personal training</a>, and other fitness professionals recommended by your neighbors.</p>`,
    phone: '(469) 584-5524',
    website: 'https://eliteintegratedperformance.net/',
    address: '850 Mike Howard Ln #40, Prosper, TX 75078',
    hours: 'Mon–Fri 5am–7:30pm, Sat 7–10am, Sun Closed',
    image: '/images/elite-integrated-performance.webp',
    verified: true,
  },
  // Shop — Kids Activities
  {
    name: 'A Joyful Mess Art Studio',
    slug: 'a-joyful-mess-art-studio',
    category: 'shop',
    published: true,
    shortDescription: 'Kids art studio in downtown Prosper, TX offering classes for toddlers through 8th grade, birthday parties, summer camps, and homeschool art taught by certified art educators.',
    longDescription: 'A Joyful Mess Art Studio is a kids art studio in downtown Prosper, TX founded by Alycia Trotter, a former elementary art teacher with 14 years of classroom experience. The studio offers Mommy and Me classes, homeschool art, after-school programs, birthday parties, and summer camps for ages preschool through 8th grade, all led by a team of seven certified art educators.',
    htmlDescription: `<h2>A Joyful Mess Art Studio Brings Creativity to Life in Prosper, TX</h2>

<p>A Joyful Mess Art Studio has been running art classes for kids in downtown Prosper for about seven years. Alycia Trotter opened the studio after fourteen years teaching art in Prosper elementary schools, and today her team of seven certified art educators runs classes, camps, and workshops for kids from preschool through eighth grade.</p>

<h2>A Kids Art Studio Built by a Real Art Teacher</h2>

<p>Alycia spent fourteen years as an elementary art teacher in Prosper before she ever unlocked the doors of the studio. She started small, running summer art camps out of her garage because she noticed something simple but important. Kids in Prosper had plenty of options for music and sports, but creative kids were getting left behind. Those garage camps filled up, then filled up again, and the story grew from there. Seven years ago, she opened her downtown studio, and that same heart for creative kids is still driving every class on the schedule. When you meet Alycia, you are not meeting a business owner who happened to pick art. You are meeting an educator who has been teaching children to express themselves through color and shape for most of her adult life.</p>

<h2>Classes for Every Age and Every Kind of Creative Kid</h2>

<p>One of the things that makes A Joyful Mess special is how many different kinds of families find a fit here. Toddlers and preschoolers come in with mom for Mommy and Me sessions, where creative centers invite the littlest hands to explore textures and colors without pressure. Homeschool families build their week around the dedicated homeschool art classes, and parents keep saying the same thing in review after review. Their children look forward to it. Afternoon classes for school aged kids fill up fast, and the summer and holiday camps are the kind of thing families talk about for months. All of the programming runs from preschool age all the way through eighth grade, so your child can grow up inside this studio and never outgrow it.</p>

<h2>Certified Art Educators Who Actually Love Kids</h2>

<p>Alycia is very intentional about who teaches inside her studio. The team of seven educators is made up of certified art teachers, with the Mommy and Me program led by a former elementary classroom teacher. One of the current teachers started as a summer camp intern while he was still in college and stayed for all four years before becoming part of the full team. That kind of loyalty tells you something about the culture. When families talk about the staff, they use words like sweet, talented, and patient. Class sizes are kept small on purpose, which means every child gets real attention and real feedback. Parents consistently say it feels calm, personal, and focused, which is not always easy to find in a kids activity.</p>

<h2>Birthday Parties, Camps, and Workshops Families Keep Coming Back To</h2>

<p>If you are thinking about a birthday party for your child, A Joyful Mess has become a favorite in Prosper for exactly that. Families describe the party experience as the best they have ever had. The same goes for the mini camps on random school off days and the full summer camp lineup. Kids leave holding finished artwork that ends up on refrigerators and bedroom walls, learning about real artists and real techniques along the way. The curriculum is developed in house by certified art educators who understand what is developmentally appropriate for each age group, and that shows up in the quality of what children bring home.</p>

<h2>A Local Business That Truly Belongs to Prosper</h2>

<p>Alycia and her family have been in Prosper since her oldest was in kindergarten, and her roots in this community run deep. A Joyful Mess is not a chain or a franchise. It is a local studio run by someone who lives here, who raised her kids here, and who genuinely cares about the families who walk through the door. Her mission is simple. Joyful art experiences that inspire creativity in kids. When you sign your child up, you are stepping into a studio where the owner knows your name, the teachers know what your kid is working on, and your child walks out already asking when they get to come back.</p>

<h2>Find A Joyful Mess Art Studio on Google</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.1464176193717!2d-96.80513632294277!3d33.236467360362155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3f0fb8891f99%3A0x58caf3d6be12db7b!2sA%20Joyful%20Mess!5e0!3m2!1sen!2sus!4v1776371853321!5m2!1sen!2sus" width="100%" height="450" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<p>Looking for more local businesses in downtown Prosper? Check out our <a href="/shop/">Prosper shop directory</a> to find <a href="/shop/lily-claire/">boutiques</a>, <a href="/shop/prosper-blooms/">florists</a>, and other locally owned favorites recommended by your neighbors.</p>`,
    phone: '(972) 963-9662',
    email: 'Info@AJoyfulMessArtStudio.com',
    website: 'https://www.ajoyfulmessartstudio.com/',
    address: '108 W Broadway St, Prosper, TX 75078',
    image: '/images/a-joyful-mess-art-studio.webp',
    imagePosition: 'top',
    verified: true,
  },
  // Professionals — Henna / Mehndi Artist
  {
    name: "Sheetal's Henna Designs LLC",
    slug: 'sheetal-henna-artist',
    category: 'professionals',
    published: true,
    shortDescription: 'Dallas-based bridal henna and mehndi artist serving Prosper, Frisco, and the entire DFW Metroplex. Custom designs, deep long-lasting natural stain, and nearly 20 years of professional experience.',
    longDescription: 'Sheetal is a Dallas mehndi and henna artist with close to 20 years of professional work, serving brides and clients across the entire DFW Metroplex. She specializes in custom bridal mehndi, engagement and Karwa Chauth gatherings, corporate events, and private home studio appointments. Sheetal mixes her own 100% natural henna for a deep, long-lasting stain and works closely with brides on completely custom designs.',
    htmlDescription: `<h2>Booking a Trusted Dallas Henna Artist</h2>
<p>Finding the right henna artist for your wedding or event is one of those decisions that feels small until the day arrives and your artist has your hands in theirs for the next 8 hours. Sheetal makes that decision an easy one. Henna has been a part of her life since she was a kid in a joint family in India, sketching practice designs with leftover cones from her cousins, and close to 20 years of professional work. She finds the challenging designs fun, talks about wanting to make every client's day, and pours that energy into all of her art. You are not booking someone going through the motions. Instead, you are booking someone who genuinely loves the craft and wants your design to be one of the best pieces she has ever done.</p>

<h2>Custom Bridal Mehndi Designs Made for You</h2>
<p>Sheetal is not the kind of artist who has the same process for every bride. If you scroll through her work, you will see skylines, portraits, figure work, bride and groom scenes, and ceremony specific motifs woven into hands and feet. You can bring her a bunch of Pinterest screenshots and she will put the vision you have together into a custom piece of art. Brides have asked her to blend Indian and American cultural touches, add tributes to family pets, and reflect the specific ceremonies of their wedding week, and she handles all of it with care. She also makes sure your hands match your hands, and your feet match your feet.</p>

<h2>Deep, Dark, Long Lasting Henna Stain</h2>
<p>The stain is the part everyone talks about. Sheetal mixes her own 100 percent natural henna, and the color develops the way it is supposed to develop, deep burgundy and dark brown that keeps maturing over the first 48 hours. Brides regularly mention their henna lasting more than two weeks past the wedding and still showing rich color in every photo. Part of that comes from her recipe, and part comes from the pre care and post care instructions she walks you through so the design has the best chance to stain dark. She tells you when to do your manicure, what to avoid before sitting down, how long to keep the paste on, and how to take it off with coconut oil instead of water. She follows up to make sure you actually do it, because she cares about the result just as much as you do.</p>

<h2>A Calm Bridal Henna Experience From Start to Finish</h2>
<p>A full bridal session can run 6 to 8 hours, and sitting still for that long sounds intimidating until you actually do it with her. Brides describe the time as conversational, relaxed, and sometimes laugh out loud fun. She is patient with you when you fidget, she guides you on how to hold your hands so nothing smudges, and she paces the work so she stays on schedule for the rest of the day. If you have family and friends who also want henna, she brings additional artists from her team so the whole event runs on time and no one is left waiting. By the time you stand up and stretch, you walk away with a stain that still needs a day or two to reach its full color and a feeling that the longest part of your wedding week was actually one of the most enjoyable.</p>

<h2>Bridal, Engagement, Karwa Chauth, and Corporate Event Henna in Dallas</h2>
<p>Whether you are planning a full bridal mehndi session, an engagement, a Karwa Chauth gathering, a corporate event, or a small home studio appointment for a personal design, Sheetal handles it. She serves the entire DFW Metroplex and, as a freelancer, travels for the right event. Her pricing is consistently described as fair for the level of detail and customization you receive, and she manages last minute requests like schedule changes or extra artists without making you feel like a problem. Local wedding planners send brides her way all the time, and once you sit with her for a session you understand why she is recommended so much.</p>

<h2>What to Expect When You Book Sheetal's Henna Designs</h2>
<p>Plan on a vendor who answers your messages, shows up on time, brings her own supplies, and listens closely to what you actually want. Plan on a stain that keeps deepening for two days and lingering for two weeks. Plan on someone who is easy to talk to, who genuinely loves what she does, and who treats your celebration with the kind of attention that makes you feel like the only client she has. If you are looking for a Dallas mehndi artist who delivers stunning, intricate, beautifully stained henna without the stress that often comes with wedding planning, Sheetal is definitely the right person!</p>`,
    phone: '(202) 330-1412',
    email: 'sheetalshennadesign@gmail.com',
    address: '6480 Aldridge Dr, Frisco, TX 75035',
    image: '/images/sheetal-henna-artist.webp',
    imageAspect: '874/691',
    imagePosition: 'top',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.1179673547786!2d-96.73858552289711!3d33.132265265744074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c17cd9028b873%3A0xc811a96e7b4251e0!2sSheetal\'s%20Henna%20Designs%20LLC!5e0!3m2!1sen!2sus!4v1778164402483!5m2!1sen!2sus',
    verified: true,
    socials: {
      facebook: 'https://www.facebook.com/Sheetalshennadesigns/',
      instagram: 'https://www.instagram.com/sheetals_henna_designs_dallas/',
    },
  },
  // Professionals — Home Inspections
  {
    name: 'Stonebriar Property Inspections',
    slug: 'stonebriar-property-inspections',
    category: 'professionals',
    published: true,
    shortDescription: 'Owner-operated home inspector serving Prosper, Frisco, and the DFW area. Keith Boggs has over 460 five-star reviews and 20 years of experience, offering thermal imaging, sewer scoping, drone roof inspections, and more.',
    longDescription: 'Stonebriar Property Inspections is a locally owned home inspection service led by Keith Boggs, serving Prosper, Frisco, and the Dallas Fort Worth area since 2005. Keith runs every inspection himself and offers wood destroying insect inspections, thermal imaging, foundation measurements, pool inspections, drone roof inspections, and sewer scoping.',
    htmlDescription: `<h2>Meet Keith Boggs, the Inspector Behind Stonebriar Property Inspections</h2>

<p>If you are buying a home in Frisco or Prosper and you want an inspector you can actually trust, Keith Boggs at Stonebriar Property Inspections is your guy. He has built this business on doing the job the right way, treating every client like they are the only client, and telling people the truth whether the news is easy to hear or not. Honestly, that is pretty rare in this business, and it is exactly what you want when you are about to make one of the biggest purchases of your life.</p>

<h2>A Home Inspector in Frisco Who Actually Cares About Getting It Right</h2>

<p>Keith has been doing this since 2005, and it shows in the consistent work he does for his clients. He has a 4.9 star rating across more than 460 reviews, and he has held that for 20 straight years. That is not something that happens by chance, it happens because Keith genuinely cares whether you end up in the right house. Not whether the deal closes, not whether the realtor is happy, just whether you are going to be good in the house you are about to buy. That's the reason people keep sending him their friends, their family, and anybody they know who is about to buy a place.</p>

<h2>Peace of Mind for First Time Home Buyers in Prosper and Frisco</h2>

<p>Buying a house is stressful, and if it is your first time doing it, it can feel like a lot. The thing people keep saying after working with Keith is that he takes the stress right out of it. He walks you through everything in plain language, answers every question you have, and never makes you feel rushed. First time buyers talk about feeling calm and actually confident by the time the inspection wraps up. Repeat clients keep coming back because they already know what to expect, and they just trust him. When you are putting down that kind of money on a house, that trust is really everything.</p>

<h2>Independent From Realtors, Which Is Exactly What You Want</h2>

<p>Here is something that really sets Keith apart. Most home inspectors get the bulk of their business from realtor referrals, and while there are great realtors out there, that referral pipeline can sometimes create unspoken pressure on the inspector. Keith built his business a different way on purpose. Less than 5% of his work comes from realtors. The rest comes from direct referrals, repeat customers, and word of mouth from people he has actually helped. That shows his only focus during your inspection is you and the house, not the deal around it, which is not easy to find in this industry.</p>

<h2>More Than a Standard Home Inspection</h2>

<p>Stonebriar Property Inspections does way more than a basic walk through. Keith is certified for wood destroying insect and termite inspections, thermal imaging, foundation measurements, pool inspections, and drone roof inspections. He is also doing sewer scoping on almost every job now, and honestly, that one has been eye opening. He finds issues almost every single day, even in brand new construction and multimillion dollar homes. Sewer repairs can easily hit five figures, sometimes way more, and catching that before you close is the difference between moving into your dream home and moving into a really expensive headache. It is one of the smartest things a buyer can add to an inspection right now.</p>

<h2>What Stonebriar Property Inspections Offers</h2>

<ul>
<li><strong>Full Home Inspections</strong> — thorough walkthroughs for buyers, sellers, and homeowners</li>
<li><strong>Wood Destroying Insect &amp; Termite Inspections</strong> — certified inspector with detailed reporting</li>
<li><strong>Thermal Imaging</strong> — catch moisture, insulation, and electrical issues invisible to the eye</li>
<li><strong>Foundation Measurements</strong> — precise evaluation of slab and structural movement</li>
<li><strong>Pool Inspections</strong> — full assessment of pool equipment, safety, and condition</li>
<li><strong>Drone Roof Inspections</strong> — safe, detailed roof analysis with aerial imaging</li>
<li><strong>Sewer Scoping</strong> — catch costly pipe issues before you close on the house</li>
</ul>

<h2>A Home Inspection Report You Can Actually Read and Understand</h2>

<p>Another thing people always bring up is how easy the reports are to read. You are not getting some massive document that leaves you more confused than you were before. Keith explains every finding, includes clear photos, and separates the cosmetic stuff from the actual issues you need to know about. And if you still have questions after you look it over, he will pick up the phone and walk you through it again. That is a big part of why people trust him the way they do.</p>

<p>Keith is also known for how quickly he gets back to people. Clients reach out 365 days a year, and unless something truly unexpected comes up, he replies within 24 hours, often much sooner. It is not unusual to get a text or email back from him on a weekend, during a holiday, or even at 3 in the morning. He is working most of the day, so an instant reply is not always possible, but you will hear back. Keith's consistent communication is part of what keeps people sending their friends and family his way.</p>

<h2>Why Stonebriar Property Inspections Keeps Earning Referrals in North Texas</h2>

<p>After more than 20 years in this business, there is an extremely clear pattern. People walk away from Keith's inspections feeling informed, respected, and genuinely confident in the decision they are about to make. They send him to their family, friends, and when it comes time to buy the next house... they call him again. The reviews almost always mention the same three things: he is thorough, he is professional, and he genuinely cares. For a service whose purpose is to protect one of the biggest purchases of your life, that is exactly who you want in your corner.</p>

<h2>Book Your Home Inspection With Stonebriar Property Inspections</h2>

<p>If you are buying a home in Frisco, Prosper, or anywhere across the Dallas Fort Worth area, Stonebriar Property Inspections is the one to call. Keith answers his own phone, runs every inspection himself, and stands behind every report he delivers. If you want somebody who is actually going to look out for you and not just chase the next deal, this is your guy. Reach out when you are ready.</p>

<h2>Find Stonebriar Property Inspections on Google</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107040.8928894238!2d-96.91179086312958!3d33.02939534671301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3b5e49817cf7%3A0x4c5ba4996ca4e705!2sStonebriar%20Property%20Inspections!5e0!3m2!1sen!2sus!4v1776952389783!5m2!1sen!2sus" width="100%" height="450" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<p>Looking for more trusted local professionals? Check out our <a href="/professionals/">Prosper professionals directory</a> to find <a href="/professionals/greg-hall-law/">estate planning attorneys</a>, <a href="/professionals/henry-peters-cpas/">CPAs</a>, and other professional services recommended by your neighbors.</p>`,
    phone: '(214) 923-7304',
    website: 'https://www.stonebriarpropertyinspections.com',
    address: '1575 Foard Dr, Frisco, TX 75034',
    hours: 'Daily 7am–11pm',
    image: '/images/stonebriar-property-inspections.webp',
    imageAspect: '1200/1106',
    verified: true,
  },
  // Trades — Auto Repair
  {
    name: 'Bobcats Automotive',
    slug: 'bobcats-automotive',
    category: 'trades',
    published: true,
    shortDescription: 'Honest, owner-operated auto repair shop in Celina, TX serving Prosper and surrounding areas. Lahcen brings 35 years of experience, fair pricing, and a 24-month/24,000-mile NAPA Auto Care nationwide warranty on every repair.',
    longDescription: 'Bobcats Automotive is a small, locally owned auto repair shop in Celina, TX run by Lahcen, a master technician with nearly 35 years of experience. From oil changes and brakes to engine diagnostics, transmission work, A/C repair, suspension, and electrical, Bobcats services all makes and models with dealership-quality work, transparent pricing, and a 24-month/24,000-mile nationwide NAPA Auto Care warranty.',
    htmlDescription: `<h2>Meet Lahcen, the Mechanic Behind Bobcats Automotive in Celina, TX</h2>

<p>When you walk into Bobcats Automotive, you'll figure out pretty quickly that this isn't your typical repair shop. Most people have a story about a repair shop that quoted them way more than the job was worth. Bobcats Automotive exists because Lahcen got tired of seeing that happen to people who didn't know better. It's a small, clean, well organized shop run by an expert who has been repairing vehicles for nearly 35 years. Originally from Morocco, with stops in France, Chicago, and California along the way, Lahcen landed in the Celina area in 2016 and opened Bobcats Automotive a little over a year ago. Everything about the shop reflects the way he believes auto repair should feel: small town, personal, and built on trust.</p>

<h2>What to Expect From a Local Auto Repair Shop That Treats You Like a Neighbor</h2>

<p>The experience with Lahcen and Bobcats Automotive starts with a real conversation. If your check engine light is on or your car is making a noise you can't really describe, Lahcen will actually take the time to listen. He's been known to hop in the passenger seat and go for a drive with customers just to hear what they're hearing. There's no feeling like you're about to get taken advantage of, no eye rolling when you don't know what a car part is, and no pressure to commit to anything before you understand what's going on. Customers describe him as straightforward, kind, and genuinely interested in helping people, not just collecting tickets.</p>

<h2>Honest Diagnostics and Fair Pricing You Can Actually Trust</h2>

<p>The story you hear over and over from people who bring their cars into the shop sounds almost identical. Someone gets quoted a price that doesn't feel right at a dealership or a big chain, decides to get a second opinion at Bobcats, and walks out paying a fraction of the price for the actual repair that was needed. One customer shared that an O2 sensor diagnosis and replacement cost less than half of what other shops were quoting. Another said their coolant issue was diagnosed correctly, fixed quickly, and priced fairly with zero pressure to add on extra services. Lahcen will mention if something looks like it might need attention down the road, but he's not the type of person to talk you into a panic over a slightly leaky shock. If it doesn't need to be done, it doesn't get done.</p>

<h2>Quality Work Backed by a Two Year Nationwide Warranty</h2>

<p>One of the newer things going on at the shop is a partnership with NAPA Auto Care, which means every repair done at Bobcats is now covered by a 24 month, 24,000 mile nationwide warranty. If something goes wrong within 25 miles of the shop, Lahcen takes care of it himself. If you're farther away, you can take it to any NAPA Auto Care location in the country and it's covered, towing included. That's like a weight off your shoulders, especially for families sending kids off to college in cars that need to be dependable. Speaking of which, Lahcen works on a lot of those: parents, kids, grandparents, all coming to the same shop because once one family member trusts him, the rest tend to follow.</p>

<h2>A Celina Auto Shop That Services All Makes and Models</h2>

<p>From oil changes and brake jobs to engine diagnostics, transmission work, A/C recharges, suspension repairs, level kits, and electrical issues, Bobcats handles passenger vehicles and light commercial trucks up to a ton and a half. Whether you drive a Jeep, an Audi, a Yukon, a Trail Boss, or your everyday commuter, you're going to get dealership quality work without the dealership runaround. The shop has already been recognized as a CARFAX Top Rated Service Center and named one of Celina's top newcomers by Google, with a track record of great 5 stars reviews.</p>

<h2>Why Locals Are Quietly Telling Their Neighbors About This Shop</h2>

<p>What you're really getting at Bobcats Automotive is something that's gotten harder and harder to find: a mechanic who treats your money like it's his own, who explains what's wrong in plain language, and who would rather build a long term relationship than squeeze every dollar out of a single visit. Lahcen takes pride in the fact that when a car leaves his shop, he does not think twice about it. That's the standard. If you've been searching for an honest, fair, no nonsense auto repair shop in Celina, this is definitely the shop for you.</p>`,
    phone: '(469) 202-3018',
    website: 'https://bobcatsautomotive.com/',
    address: '1922 Choate Pkwy #146, Celina, TX 75009',
    hours: 'Mon–Fri 8am–5pm, Sat 8am–12pm, Sun Closed',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6669.98507200561!2d-96.75442592294156!3d33.29285825744343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4175f59bd74d%3A0x7be8f79477cb77ab!2sBobcats%20Automotive!5e0!3m2!1sen!2sus!4v1777668348164!5m2!1sen!2sus',
    image: '/images/bobcats-automotive.jpg',
    verified: true,
  },
  {
    name: 'Puddle Pools Prosper McKinney',
    slug: 'puddle-pool-services',
    category: 'trades',
    shortDescription: 'Family-operated pool and hot tub service in Prosper, TX. Certified Pool Professionals offering weekly maintenance, equipment repair, remodels, and renovations across Prosper, McKinney, Frisco, and Celina.',
    longDescription: 'Puddle Pools Prosper McKinney is a locally owned pool and hot tub service company serving Prosper, McKinney, Frisco, and Celina. Founded by Marla and Gary Burns, both Certified Pool Professionals, the company offers weekly maintenance, chemical balancing, equipment repair, and full pool remodels. With over 40 years of combined business and landscape architecture experience, Marla and Gary bring a personal, knowledgeable approach to every backyard they service.',
    htmlDescription: `<h2>Local Pool Service in Prosper and McKinney With a Personal Touch</h2>

<p>If you've ever owned a pool or hot tub in North Texas, you already know the struggle. Keeping it clean, balanced, and running right is a full time job all on its own. Between the different seasons and weather, your backyard can quickly start feeling like a chore. That is exactly the gap Marla and Gary Burns set out to fill when they launched Puddle Pools Prosper McKinney to serve the Prosper, McKinney, and Frisco area. After Marla spent more than forty years in the business world, including time at JCPenney that brought her to Frisco back in 2009, and Gary spent over thirty years as a landscape architect designing and building backyards across North Dallas, the two of them put their experience together and built something that feels less like a service company and more like having a knowledgeable friend ready to help you.</p>

<h2>What to Expect From the Owners Behind Puddle Pools</h2>

<p>The first thing you notice when you reach out is how easy it is to actually talk to a real person. Marla answers the phone herself a lot of the time, and she genuinely loves it. Every conversation feels like a chance to figure out what you actually need, whether that is weekly maintenance, a hot tub that just will not heat right, or a bigger renovation project. Both Marla and Gary are Certified Pool Professionals, which means when something complicated comes up, they are not calling some random subcontractor. Our senior technician Bradley has 15-16 years of experience, so often he can handle complex issues himself, sometimes even resolving problems over the phone with the customer at no charge. For anything bigger, Gary himself comes out to take a look. Marla and Gary now make their home in the historic Rail District of Frisco, which means the people running this business actually live in the community they serve.</p>

<h2>Meet the Team Keeping Your Pool in Top Shape</h2>

<p>Once you start service, you will most likely meet Bradley, the senior pool technician with more than fifteen years of hands on experience. If you read through the reviews on Google, his name appears in nearly every single one for a reason. Customers describe him as professional, friendly, and the kind of person who actually takes time to explain what he is doing and why. Anna Bennett mentioned how he proactively addresses small issues before they turn into expensive repairs. Marcey Davie called working with him a blessing because of how clearly he communicates the small details. Mercedes Smith pointed out that her pool and spa look fantastic after every visit, and that Bradley happily answers questions about what to do on the days he is not there. Daniel Camacho noted how he walked through the whole maintenance process without ever pushing a sale or trying to sneak in upgrades. Working alongside Bradley is Noah, the second technician on the team who brings the same care and friendliness to every visit. Together they handle chemical balancing, equipment repair, water management, and every small detail that keeps a pool sparkling through a North Texas summer.</p>

<h2>Pool Remodels and Renovations With Decades of Experience</h2>

<p>Where Puddle Pools really stands apart from the average pool company in the area is on the remodel and renovation side. Most pool service companies that get a renovation request have to call around to find someone who can handle it. Here, Gary himself has spent more than 30 years doing exactly that work. Trained as a landscape architect with a long career in fences, patio construction, outdoor living spaces, and pool design, he brings a level of expertise to backyard projects which is honestly hard to find anywhere else. Whether you want to refresh your existing pool, redesign the whole backyard, or finally tackle that water feature that has been on your wish list, the answer comes from one of the people who actually owns the company.</p>

<h2>Why Prosper and McKinney Homeowners Trust Puddle Pools</h2>

<p>What you really get when you hire Puddle Pools is the feeling that someone genuinely cares whether your summer goes well. Marla often says her favorite part of every day is the moment a customer reaches out and she gets to figure out how to set them up for a happy, fun summer with a pool that is in great shape. The trucks are clean and easy to spot, the technicians are uniformed and friendly, and every visit ends with a detailed report that shows exactly what was done, what chemicals were used, and where your levels stand. If you have been looking for a pool service in the Prosper, McKinney, Celina, or Frisco area that treats your backyard the way you would, this is the team to call.</p>`,
    phone: '(888) 282-2590',
    website: 'https://puddlepools.com/locations/mckinney-tx/',
    address: 'Serves Prosper, McKinney, Frisco area',
    hours: 'Daily 7am–7pm',
    image: '/images/puddle-pool-services.webp',
    imageAspect: '16/9',
    verified: true,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.1179673547786!2d-96.73858552289711!3d33.132265265744074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f1f7c444f97653f%3A0x337e543056c70c71!2sPuddle%20Pools%20Prosper%20McKinney!5e0!3m2!1sen!2sus!4v1778173008030!5m2!1sen!2sus',
    socials: {
      facebook: 'https://www.facebook.com/people/Puddle-Pool-Services/61579789027182/',
      instagram: 'https://www.instagram.com/puddlepoolsprospermckinney',
    },
  },
  {
    name: 'Chosen Appliance Repair',
    slug: 'chosen-appliance-repair',
    category: 'trades',
    shortDescription: 'Owner-operated appliance repair serving Celina, Prosper, Aubrey, and surrounding North Texas. 700+ Facebook recommendations, 1,000+ Nextdoor reviews, and 2 years running Neighborhood Favorite (2024, 2025).',
    longDescription: 'Chosen Appliance Repair is a family-run appliance repair business serving Celina, Prosper, Aubrey, Oak Point, Little Elm, Allen, Plano, Denton, and Pilot Point. Owner Mina Samuel is an electrical engineer by training with about 13 years of hands-on appliance repair experience. He services refrigerators, freezers, ranges, ovens, cooktops, microwaves, dishwashers, washers, dryers, garbage disposals, kitchen sinks, and dryer vent cleaning across all major brands including Samsung, Whirlpool, Frigidaire, and LG.',
    htmlDescription: `<h2>Chosen Appliance Repair: Honest, Skilled Appliance Service in Prosper, TX</h2>

<p>Mina Samuel has become a familiar name across Celina, Prosper, Aubrey, and the surrounding North Texas communities. As the owner of Chosen Appliance Repair, he has spent years building one of the most trusted appliance repair businesses in the area, earning over 700 Facebook recommendations, more than 1,000 Nextdoor reviews and 1,200+ Nextdoor Faves, plus 2 years running Neighborhood Favorite recognition in 2024 and 2025.</p>

<h2>What to Expect When You Call This Local Celina Appliance Repair Pro</h2>

<p>The first thing you notice about working with Chosen Appliance Repair is how quickly Mina responds. Most service calls are handled the same day or the next day, even when you reach out on a Sunday morning about a fridge that isn't working. Send a text, and you usually get a fast reply with a clear plan for the visit. There is no automated system, no dispatcher, and no guessing about when someone might actually arrive. You get to talk directly to the person who is actually going to fix the appliance.</p>

<p>All of this is possible because Mina is a one man show, with his wife helping behind the scenes on parts, invoices, and scheduling. Together, they run the entire operation as a true family business. When you book a repair, you are not getting a rotating cast of technicians. You are getting the same skilled hands every single time.</p>

<h2>A Background That Sets Chosen Appliance Repair Apart</h2>

<p>Mina is originally from Egypt, where he trained as an electrical engineer before moving to the United States. He spent three to four years working for an established appliance repair company, then launched Chosen Appliance Repair on his own. With roughly 13 years of hands on experience and an engineering background, you get someone who understands appliances from the inside out. He does not guess. He diagnoses, explains, and fixes. Customers on Nextdoor constantly describe him as knowledgeable, thorough, and genuinely interested in solving the problem rather than upselling a new appliance.</p>

<h2>Honest Diagnostics and Fair Pricing You Can Trust</h2>

<p>One of the most common themes in the reviews is honesty. Mina has a reputation for repairing rather than replacing whenever possible, often saving customers hundreds of dollars on Samsung, Whirlpool, Frigidaire, LG, and other major brands. He explains what is actually wrong, walks you through your options, and gives you the information you need to make a smart decision for your home. If a repair does not make financial sense, he will tell you. If a part is still under warranty, he will track down the manual and the manufacturer phone number for you so you can save money.</p>

<h2>Quality Work That Gets Done Right the First Time</h2>

<p>Mina takes a one and done approach to every repair. He has been known to stay until 10 or 11 at night to make sure the job is finished correctly, because he would rather invest the extra time on the front end than have a customer call back in a month with the same issue. He documents everything along the way, sending before and after photos when you are not home, especially helpful for the families who leave a key under the mat or share a door code while they are at work. The integrity behind Chosen Appliance Repair is something customers continue to mention.</p>

<h2>Full Service Appliance Repair for Kitchen and Laundry</h2>

<p>Chosen Appliance Repair handles all major kitchen and laundry appliances, including refrigerators, freezers, ranges, ovens, cooktops, microwaves, dishwashers, washers, dryers, garbage disposals, and kitchen sink repairs. Dryer vent cleaning is another important service Mina offers, and it is one he takes seriously because a backed up dryer vent is a real fire hazard. He will take photos, show you exactly what is going on inside, and make sure you understand what needs to happen to keep your home safe.</p>

<h2>The Person Behind Chosen Appliance Repair</h2>

<p>Outside of work, Mina is a serious pickleball player who plays once or twice a week at Raymond Park in Celina, Finch Park in McKinney, and around downtown Celina. His wife threw him a pickleball birthday party at Raymond Park last March that pulled in 35 of friends and family for an all day session. He also loves soccer, volleyball, and ping pong. That same passion carries directly into how he approaches his work.</p>

<h2>Why Celina and Prosper Neighbors Choose Chosen Appliance Repair</h2>

<p>When your washer floods the laundry room or the freezer stops freezing the night before guests arrive, you do not want a giant national chain. You want someone local, someone who shows up when they say they will, and most importantly someone who actually cares whether the job gets done right. That is exactly what you get from Mina at Chosen Appliance Repair. Call or text (469) 614-9538 and you will see why so many neighbors across Celina, Prosper, Aubrey, Oak Point, Little Elm, Allen, Plano, Denton, and Pilot Point keep his number saved in their phones.</p>`,
    phone: '(469) 614-9538',
    address: 'Serving Prosper, TX and surrounding areas',
    logo: '/images/chosen-appliance-repair-logo.webp',
    image: '/images/chosen-appliance-repair.webp',
    imageAspect: '16/9',
    verified: true,
    socials: {
      facebook: 'https://www.facebook.com/p/Chosen-Appliance-Repair-61558736296338/',
      instagram: 'https://www.instagram.com/chosenappliancerepair',
      nextdoor: 'https://nextdoor.com/page/mina-soliman-wylie-tx',
    },
  },
  {
    name: 'Clear Services Appliance Repair',
    slug: 'clear-services-appliance-repair',
    category: 'trades',
    published: true,
    verified: true,
    shortDescription: 'Family-owned, factory-certified appliance repair serving Prosper, Celina, McKinney, Frisco, Plano, Allen, and the surrounding Collin County area. Owner-operated by Fabio with nearly 15 years of experience, same-day service, honest pricing, and warrantied work.',
    longDescription: 'Clear Services Appliance Repair is a family-owned business led by owner and lead technician Fabio, serving Prosper, Celina, McKinney, Frisco, Plano, Allen, and the surrounding Collin County area. With nearly 15 years in the trade, Fabio is factory certified, licensed, and insured, holding certifications with high-end brands like Dacor, commercial refrigeration through Cool Summit, Speed Queen, and more. When you call, you reach a real person, and more often than not the owner himself answers the phone. Customers consistently describe the experience as honest and low-pressure. Fabio starts with the least costly path first, walks you through original versus universal parts, and will tell you when replacing an appliance makes more sense than repairing it. Same-day and weekend service is common, and his wife handles dispatching so he arrives prepared.',
    htmlDescription: `<h2>Meet Fabio: The Appliance Repair Expert Behind Clear Services in Collin County</h2>
<p>When something breaks down in your kitchen or laundry room, the last thing you want is a stranger in your home who you cannot trust. That stress is real, and Fabio knows it. He is the owner and lead technician at Clear Services Appliance Repair, a family owned business serving Prosper, Celina, McKinney, Frisco, Plano, Allen, and the surrounding Collin County area. When you call, you reach a real person who actually listens, usually Fabio's wife, who handles dispatching and takes the time to understand your problem before a technician is ever sent out.</p>

<h2>15 Years of Factory Certified Appliance Repair</h2>
<p>Fabio is not someone who picked up a YouTube video last week and decided to call himself a technician. He has spent nearly 15 years in this trade, and he is factory certified, licensed, and insured. He holds certifications with high end brands like Dacor, with commercial refrigeration through Cool Summit, with Speed Queen, and more. This means the person walking through your door actually understands what is happening inside your appliance, not just what the manual says. He sees the parts and the build quality that most people never get to look at, and he uses that knowledge to steer you in the right direction.</p>

<h2>Honest Pricing With No Pressure to Overspend</h2>
<p>One thing customers mention again and again is how honest the experience feels. Fabio does not push unnecessary repairs or rush to sell you a brand new appliance when a simpler fix will do. He starts with the least costly path first, checking whether a part can be cleaned or repaired before he ever orders a replacement. If a repair does make sense, he walks you through your options, original parts versus more affordable universal ones, so you are never stuck with a single take it or leave it price. And if you are better off replacing the appliance, he will tell you that too, along with which brands to avoid and where to find a quality unit for less. People trust him so much that some call just to ask what he recommends buying.</p>

<h2>Same Day Service When You Need It Most</h2>
<p>Appliance failures rarely happen at convenient times. A fridge going out, a washer flooding the laundry closet, a dryer dying right before a busy week. Customers describe calling Clear Services and getting a technician out within hours, sometimes the same day, even on a Friday afternoon or over the weekend. Fabio and his team show up on time, diagnose the issue quickly, and often have the right part already on the truck. When a part needs to be ordered, he is back the next day to finish the job. For families who simply cannot afford to be down for a week waiting on a big name company, that responsiveness is a genuine relief.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/clear-services-dryer-vent-before-after.jpg" alt="Before and after of a dryer vent line repair completed by Clear Services Appliance Repair in Collin County, TX" loading="lazy" width="1080" height="1080" class="w-full rounded-2xl shadow-md" /><figcaption class="mt-2 text-center text-sm text-text-muted">Before and after: a dryer vent line repaired and properly secured by Clear Services Appliance Repair</figcaption></figure>

<h2>A Repair Experience Built on Trust and Education</h2>
<p>What truly sets Fabio apart is how he treats the visit itself. He is not there only to fix the appliance, take payment, and disappear. He explains what went wrong, why it happened, and how to keep it from happening again. He breaks the tension the moment he walks in, and by the time he leaves, you understand your appliance better than you did before. This is why his customers stick with him for years, refer their friends and family, and treat him less like a contractor and more like someone they are glad to know. Reviewers describe him as friendly, honest, dependable, and reasonable, and they consistently say he has become their go to for anything that breaks.</p>

<h2>A Family Business That Cares About the Community</h2>
<p>Clear Services is run by Fabio alongside his wife, who handles dispatching and gathers the details of your problem ahead of time so he arrives prepared. This is a small, dedicated operation that genuinely cares about the people it serves. Fabio has been known to help customers in tough situations, fixing what needs fixing and working with them on payment when life is hard, because he remembers what it is like to need a hand. That heart, combined with real expertise, is what you can expect when you call.</p>

<h2>What You Can Expect When You Call Clear Services Appliance Repair</h2>
<p>From the first phone call to the finished repair, Clear Services makes a frustrating situation feel manageable. A certified technician arrives at your door, often the same day, and gets to work understanding the problem rather than rushing to the most expensive fix. You get honest options, fair pricing, clear explanations of what went wrong, and a warranty that stands behind the work. More than that, you get someone you will be glad to call the next time something breaks. In a field where it is hard to know who to trust, Fabio has built a reputation on doing things the right way, and that is exactly what you can expect when you work with Clear Services Appliance Repair.</p>`,
    phone: '(469) 318-9918',
    website: 'https://clearservicesappliancerepair.com/',
    address: 'Serving Prosper, Celina, McKinney, Frisco, Plano, Allen, and the surrounding Collin County area',
    image: '/images/clear-services-appliance-repair.jpg',
    imageAspect: '7/15',
  },
  {
    name: 'New Look Remodeling',
    slug: 'new-look-remodeling',
    category: 'trades',
    published: true,
    verified: true,
    shortDescription: 'Family-owned kitchen, bathroom, and full-home remodeling serving Prosper, Celina, Frisco, Plano, Allen, and the DFW Metroplex. Run by Sevario and Michelle Campobasso with 30+ years of craftsmanship since 1999.',
    longDescription: 'New Look Remodeling is a family-owned remodeling company founded by Sevario and Michelle Campobasso, based in Celina and serving Prosper, Frisco, Plano, Allen, and the broader Dallas–Fort Worth Metroplex since 1999. With more than thirty years of craftsmanship, the team handles kitchens, bathrooms, custom cabinets and countertops, painting, tile, flooring, plumbing, electrical, roofing, home additions, and outdoor living spaces including patios, outdoor kitchens, pergolas, and custom pools. Homeowners describe them as honest, communicative, respectful, and reliable — a full-service team that keeps every part of the project in-house and treats your home like their own.',
    htmlDescription: `<h2>Meet the Family Behind New Look Remodeling in Prosper and the DFW Area</h2>
<p>When you call New Look Remodeling, you are not getting a faceless company or a crew that disappears after the deposit clears. You are getting a family owned business built on more than thirty years of craftsmanship, run by Sevario and Michelle Campobasso, a husband and wife who treat this work as personal. It started when Sevario came to this country, learned the language on his own, earned his citizenship, and built something real from the ground up. That story matters because it shows up in the work. You can expect someone who knows what it means to do things the right way, to show up when he says he will, and to treat your home the way he would treat his own.</p>

<h2>Trusted Kitchen and Bathroom Remodeling Built on Real Experience</h2>
<p>This is a team that has been remodeling homes since 1999 and serving the Dallas Fort Worth area ever since. Based in Celina and proudly serving Prosper, Frisco, Plano, Allen, and the broader Metroplex, they offer the kind of longevity that is rare in an industry full of overnight operations that vanish the moment something goes wrong. What you will notice right away is the depth of experience. Whether you are dreaming about a modern kitchen with smart functionality, a fresh bathroom, new flooring, or a full home transformation, you are working with people who have done it countless times and still care about getting every detail right. One homeowner shared how the team took a dated 1990 kitchen and turned it into something that felt completely current, with quality work that left them so pleased they came right back for a new patio.</p>

<h2>A Full Service Remodeling Team That Covers Every Project</h2>
<p>One of the things you will appreciate most is that you do not have to juggle five different contractors. From custom cabinets and countertops to painting, tile, flooring, plumbing, electrical, roofing, home additions, and outdoor living spaces like patios, outdoor kitchens, pergolas, and even custom pools, this team keeps its hands in every part of the project so you do not have to chase down anyone else. Customers describe craftsmanship that is top tier and painting that looks crisp and clean. When one family was left stranded by their original general contractor, New Look Remodeling stepped in, installed all of their custom cabinetry, and delivered results they called absolutely stunning. They said the difference was night and day, and that the team truly saved their project.</p>

<h2>Honest, Communicative, and Respectful From Start to Finish</h2>
<p>If you have ever been burned by a contractor before, you will understand why this matters so much. Expect clear communication, fair pricing without gouging, and a process that keeps you informed every step of the way. This is a team that walks you through your options, explains what is cost effective for what you actually need, and follows up in a timely manner. Homeowners consistently use the same words to describe the experience: respectful, efficient, kind, mindful, competent, and trustworthy. They show up reliably and treat your home with genuine care. One customer marveled that the entire job was finished in a single day and the house was left as clean as they found it.</p>

<h2>Creative Vision That Brings Your Ideas to Life</h2>
<p>What sets this work apart is Sevario's eye for design. Expect someone who can look at a blank wall and see the finished space, then work alongside skilled local designers to find the perfect balance between what you envision and what fits your budget and your life. The process starts with understanding what you want, moves into a concept, and often includes renderings so you can see your project before a single tool comes out. From framing and tiling to the final installation, the attention to detail comes through. One homeowner described a fireplace project where the team handled everything from the framing to the tile to the mantle and left them thrilled with the final product. This personalized approach, refusing the one size fits all shortcut, is exactly why the company earned recognition as the best in the McKinney area.</p>

<h2>A Local Business That Truly Gives Back to the Prosper Community</h2>
<p>This is a family that is woven into the fabric of Prosper and the surrounding communities. They sponsor youth sports, support community events, and partner with other local businesses because they believe in lifting up the place they call home. When you work with New Look Remodeling, you are supporting neighbors who show up for the community, not a distant corporation. That local presence also means accountability. They have built their reputation one satisfied homeowner at a time, and they intend to keep it that way.</p>

<h2>What You Can Expect When You Work With New Look Remodeling</h2>
<p>You can expect a team that is honest, dependable, on time, and easy to talk to. You can expect quality work that holds up and a crew that respects your space and your investment. You can expect to be treated like a person rather than a transaction, with the patience to walk you through every decision or the confidence to handle it all if you would rather just hand over the keys and trust the process. After more than three decades, this is a family business that has figured out the right combination of skill, integrity, and genuine care. When you are ready to transform your house into a home that truly reflects you, you will be glad you called.</p>`,
    phone: '(469) 688-3498',
    website: 'https://www.nlremodeling.com/',
    address: 'Serving Prosper, Celina, Frisco, Plano, Allen, and the DFW Metroplex',
    image: '/images/new-look-remodeling.webp',
    imageAspect: '2/3',
    logo: '/images/new-look-remodeling-logo.webp',
  },
  {
    name: 'Zero Streaks Window Cleaning',
    slug: 'zero-streaks-window-cleaning',
    category: 'trades',
    published: true,
    verified: true,
    shortDescription: 'Family-owned window cleaning, gutter cleaning, pressure washing, and permanent outdoor lighting installation serving Celina, Prosper, and the surrounding North Texas communities.',
    longDescription: "Zero Streaks Window Cleaning is a family-owned service company based in Celina, TX, founded by Ronnie after relocating from Michigan. Services include detailed window cleaning, hand-cleared gutter cleaning, pressure washing for homes and commercial buildings, Christmas light installation, and permanent outdoor Heaven Lights. Ronnie is known for treating every property like his own, supporting local causes, and delivering one job at a time without ever cutting corners.",
    htmlDescription: `<h2>What Working with Zero Streaks Window Cleaning Feels Like</h2>

<p>Ronnie and his family relocated to the Celina area from Michigan, where he ran a similar business for years. The values he brings to every job come from a simple order of priorities: faith, family, and business. The way Ronnie treats his clients shows the same values he believes in. Zero Streaks supports the Cancer Tumor Foundation based in Prosper, sponsors Field Day at Vasquez Elementary School, and backs the Celina ISD Cheerleading Team. Choosing this company means working with someone who cares about the experience just as much as the result, and someone who loves giving back to the community his customers live in.</p>

<h2>A Celina TX Window Cleaner Who Treats Your Home Like His Own</h2>

<p>When Ronnie shows up to your property, the first thing you notice is how careful he is with everything. Ladders never rest on gutters because he knows the damage it can cost homeowners years down the road. Shoes come off at the door or shoe covers go on. The crew works the same way because that is the standard he sets. You will see in your own home something most companies skip past, which is respecting someone else's property just like it's your own.</p>

<h2>Detailed Window Cleaning That Actually Removes the Grime</h2>

<p>You would be surprised by how much builds up on glass in a single year. Construction dust, silicone residue, hard water spots, caulk remnants, all of it adds up to a fog you stop noticing until it is gone. Once Ronnie finishes, your windows are spotless and look brand new all over again. Tracks and screens get cleaned too, which makes a noticeable difference in how the whole home feels.</p>

<h2>Gutter Cleaning Done with Care and Full Transparency</h2>

<p>If your gutters have not been cleared in years, you are in good hands. Ronnie walks the entire roofline, digs out the buildup by hand, clears the downspouts, and often records video so you can see exactly what was done while he was up there. Water flows the way it is supposed to, debris is gone, and you get to avoid the bigger repair bills that come from neglected gutters.</p>

<h2>Pressure Washing and Christmas Lighting for North Texas Homes</h2>

<p>Beyond windows and gutters, Zero Streaks also handles pressure washing for homes and commercial buildings, including algae and moss removal. Christmas light installation and permanent outdoor lighting using Heaven Lights are part of the lineup as well. Heaven Lights can be configured for game day colors when your team wins, holiday themes throughout the year, awareness colors for causes like cancer support, and everyday security lighting. They blend into your home so cleanly that HOA communities rarely even notice they are installed.</p>

<h2>Why Local Homeowners Keep Coming Back to Zero Streaks</h2>

<p>Talk to anyone who has booked Zero Streaks and a pattern is consistent. Customers in reviews use words like professional, kind, and perfectionist. They say the results are spotless and mention how Ronnie does whatever it takes to finish a job right and never rushes through it. One house at a time, one window at a time, is the approach of the business. Even if 3 or 4 jobs could be done in a day, that would mean cutting corners somewhere… and that is not how this company runs.</p>

<h2>Booking Zero Streaks Window Cleaning</h2>

<p>If you want clean windows, gutters that actually drain, and a service provider who treats your home like his own, Ronnie is your guy. Expect a calm, no pressure conversation up front, a service appointment that runs on time, and a finished result that makes you happy.</p>`,
    phone: '(469) 202-7388',
    website: 'https://zerostreakswindowcleaning.com/contact/',
    image: '/images/zero-streaks-window-cleaning.webp',
    imageAspect: '1/1',
    cardImage: '/images/zero-streaks-window-cleaning-card.webp',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427979.2227528253!2d-97.17264951300217!3d33.06732048744239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x242d341d16bd2085%3A0xb9dd6fa6c943a43b!2sZero%20Streaks%20Window%20Cleaning!5e0!3m2!1sen!2sus!4v1778265181393!5m2!1sen!2sus',
    socials: {
      facebook: 'https://www.facebook.com/people/Zero-Streaks-Window-Cleaning/61574114001491/',
      instagram: 'https://www.instagram.com/zeros_treaks?igsh=eTcwbXJzcm1ra2dy',
      youtube: 'https://www.youtube.com/@ZeroStreaksWindowCleaning',
    },
  },
  {
    name: '360 IV Infusion and Wellness',
    slug: '360-iv-infusion-wellness',
    category: 'health-fitness',
    published: true,
    shortDescription: '360 IV Infusion and Wellness is a premier IV Hydration and Wellness Lounge in Prosper, TX offering physician supervised IV therapy, Hydrafacial, massage with red light therapy, and compression therapy under the care of Oge Ogundu, DNP, MSN, RN.',
    longDescription: '360 IV Infusion and Wellness is an IV Hydration and Wellness Lounge in Prosper, TX, owned by Oge Ogundu, DNP, MSN, RN, who brings a background in optometry and nursing to every detail of the experience. Services include physician-supervised IV hydration therapy with bags sourced from FDA-registered 503A and 503B compounding pharmacies, Hydrafacial with red light therapy, massage paired with red light cell rejuvenation, and compression therapy in a calm, modern, boutique space designed to feel less like a clinic and more like a quiet retreat.',
    htmlDescription: `<h2>A Calm, IV Hydration and Wellness Lounge in the Heart of Prosper TX</h2>

<p>360 IV Infusion and Wellness does not look or feel like the IV bars you have probably scrolled past on Instagram. It does not feel like a clinic, and it does not feel like a typical day spa either. Instead there is a calm, modern, boutique space that was intentionally built around what someone actually wants when they walk in tired, run down, or just needing to feel refreshed. Clients keep mentioning one word in their online reviews, and that word is welcomed. Even the chairs are the kind that make you forget you came in for a treatment in the first place.</p>

<h2>Meet Oge Ogundu, DNP, MSN, RN — The Heart Behind 360 IV Infusion and Wellness</h2>

<p>This IV Hydration and Wellness Lounge is owned by Oge Ogundu, DNP, MSN, RN, who brings her background in both optometry and nursing into every detail of the experience. Originally from Nigeria, she built her career in healthcare across the country before planting roots in Prosper. Her approach is shaped by something she noticed during years of bedside and insurance work: that people often think about their health only after something has already gone wrong. 360 IV Infusion and Wellness was created so you can be proactive with your wellness inside a space that feels safe, supervised, and personal. Oge is also a mother of two, a wife, and a traveler at heart, with a vision of one day using a portion of the proceeds to support scholarships for young girls.</p>

<h2>IV Hydration Therapy You Can Actually Trust in Prosper</h2>

<p>IV hydration is everywhere right now, and that is exactly why where you choose to get it matters more than ever. The team behind 360 IV Infusion and Wellness has been delivering IV infusions across DFW and East Texas long before the boutique opened its doors. Every bag is sourced from FDA-registered 503A and 503B compounding pharmacies, every treatment is physician supervised, and nothing is rushed or improvised. Clients who arrive feeling depleted often describe leaving with the kind of energy that makes the rest of the day feel possible again. The team here proudly calls themselves vein whisperers, so even clients with tricky veins tend to be surprised by how easy the whole process feels.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/360-iv-iv-chairs.webp" alt="IV infusion chairs at 360 IV Infusion and Wellness in Prosper, TX" loading="lazy" width="1600" height="2844" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Hydrafacial and Esthetician Services for Glowing, Healthy Skin</h2>

<p>The skincare side of the boutique runs through a powerful Hydrafacial machine with multiple treatment heads, paired with red light therapy for the face. The esthetician walks you through every step of the process, which is one of the most common compliments in the reviews. People describe leaving brighter, smoother, and noticeably more refreshed, with helpful recommendations for what to keep using at home. It is the kind of facial where the results show up not only instantly, but days after you walk out the door too.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/360-iv-hydrafacial.webp" alt="Hydrafacial treatment room with branded blanket at 360 IV Infusion and Wellness" loading="lazy" width="1600" height="2844" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Massage Therapy Combined With Red Light Cell Rejuvenation</h2>

<p>The massage experience here does something a little different. Each session is paired with red light therapy, which supports cell rejuvenation and helps soften the look of fine lines. So you are not just decompressing, your skin is also working on itself at the same time. Clients consistently mention in reviews how warm and attentive the team is, and how easy it is to actually relax in this space rather than counting down the minutes until your session ends.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/360-iv-massage-redlight.webp" alt="Massage room with red light therapy equipment at 360 IV Infusion and Wellness" loading="lazy" width="1600" height="2844" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Compression Therapy and the Art of Slowing Down</h2>

<p>The compression therapy room has become one of the most loved services 360 IV Infusion and Wellness offers. Most people who book it end up falling asleep mid session, which is the entire point. It's not common to work with a wellness business that wants you to leave restored rather than upsold. You will not be flipped out of your chair to make room for the next appointment here. Every guest is treated as the only guest in the building, even when the schedule is full.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/360-iv-compression.webp" alt="Compression therapy recliners with blue compression suits at 360 IV Infusion and Wellness" loading="lazy" width="1600" height="2844" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Compliance, Safety, and Why It Matters in Wellness</h2>

<p>One of the strongest themes you will hear from Oge is compliance. In an industry that has exploded in popularity, she has chosen to protect quality rather than chase numbers. Supplies are sourced carefully, expirations are tracked, and protocols are followed exactly the way they should be. You are getting your IV from skilled nurses who treat your safety as the first priority, not a footnote. That alone separates this boutique from many of the pop up wellness options across North Texas.</p>

<h2>What to Expect On Your First Visit to 360 IV Infusion and Wellness</h2>

<p>When you walk in, you can expect to be greeted, listened to, and guided through every service before anything begins. You can expect a space that is clean, equipment that is new and comfortable, and a team that is happy to answer every question without making you feel rushed. You can expect to leave lighter, brighter, and feeling a little more like yourself. If you have been looking for a place in Prosper that takes wellness seriously without making you feel like just another appointment on a calendar, <a href="https://www.360ivinfusionandwellness.com/" target="_blank" rel="noopener noreferrer">360 IV Infusion and Wellness</a> is definitely your answer.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/360-iv-hero.webp" alt="360 IV Infusion and Wellness reception desk in Prosper, TX" loading="lazy" width="1600" height="2844" class="w-full rounded-2xl shadow-md" /></figure>`,
    phone: '(469) 762-9411',
    website: 'https://www.360ivinfusionandwellness.com/',
    address: '1630 W Prosper Trail #110, Prosper, TX 75078',
    image: '/images/360-iv-storefront.webp',
    imageAspect: '1600/2844',
    cardImage: '/images/360-iv-card.webp',
    verified: true,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.9220278022713!2d-96.8251628272779!3d33.2491611670489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3fd1b65944b7%3A0x319e13b57a4e73a9!2s360%20IV%20Infusion%20and%20Wellness!5e0!3m2!1sen!2sus!4v1778694033209!5m2!1sen!2sus',
    socials: {
      facebook: 'https://www.facebook.com/p/360-IV-Infusion-and-Wellness-61585533975561/',
      instagram: 'https://www.instagram.com/360_ivinfusionandwellness/',
    },
  },
  {
    name: 'Lucky Nails & Spa',
    slug: 'lucky-nails-spa',
    category: 'health-fitness',
    published: true,
    locationLabel: 'Frisco, TX',
    shortDescription: 'Lucky Nails & Spa is a brand new family-friendly nail salon in Frisco, TX serving the Prosper community. Owner Holly Nguyen brings 30 years of acrylic artistry, a calm sanitary space, and a focus on healthy nails.',
    longDescription: "Lucky Nails & Spa is a family-friendly nail salon in Frisco, TX, just a short drive from Prosper. Owner Holly Nguyen has 30 years of experience and is known for hand-shaped acrylics, strict sanitation, mommy and me appointments, and a calm welcoming atmosphere designed with neurodivergent families in mind. Students, teachers, veterans, and cancer patients receive a discount.",
    htmlDescription: `<h2>A Warm Welcome at Frisco's Newest Nail Spa</h2>

<p>Holly Nguyen has spent most of her life around nails, and Lucky Nails & Spa is the salon she has been building toward for years. Located in Frisco, just a short drive from our Prosper community, the salon opened very recently (April 3rd, 2026) and already feels like a salon that has been part of the community for years. Guests notice it right away. The salon is clean, calm, beautifully designed, and free of the harsh chemical smell that most salons have.</p>

<h2>Three Decades of Nail Artistry in Frisco</h2>

<p>Holly has been working with nails since she was around 15 years old, helping out in her parents' salon back in the mid 1990s. 30 years later, acrylic work is still the part of her craft that feels most personal to her. While the rest of the industry has shifted toward gel and dip powder, Holly genuinely loves the craft of shaping acrylics by hand, because it gives her complete control over the final look. Clients consistently mention that she takes one look at their hands and already knows the shape that will suit them best, even when they have a hard time describing what they want.</p>

<h2>A Clean and Comfortable Nail Salon Experience</h2>

<p>Cleanliness is something Holly refuses to outsource. Pedicure stations are scrubbed and disinfected with disposable liners for every guest, tools are sanitized in an autoclave, and at the end of each day she goes back over the chairs herself rather than leaving that step to anyone else. She keeps written records of the disinfection process because she takes it that seriously. Guests have written about how the salon feels noticeably fresh and clean, and that comes directly from how strict Holly is about sanitation. If you have ever walked out of a nail appointment worrying about your nail health, this is the kind of salon that will take that worry away.</p>

<h2>Healthy Nails Are the Priority</h2>

<p>One of the things that sets Holly apart is the way she treats your nails as something that needs to stay healthy long after you walk out the door. She avoids drilling too deeply into the nail bed, works carefully with clients who have brittle nails or a history of biting, and takes time to explain what to look for between visits. She will even show you the simple trick of running your nail through your hair to check whether the polish is still bonded properly. This kind of education is not common at most nail salons, and is part of the reason why so many first time clients make Lucky Nails & Spa their go to salon.</p>

<h2>A Family Friendly Nail Spa for Every Generation</h2>

<p>The salon is set up for mommy and me appointments, with kids' pedicure chairs designed for the little ones who want their own moment to feel grown up. Families raising a child with autism will find a particularly thoughtful welcome here. Holly has a child with autism herself, and she built this salon with those families in mind, creating a calm and quiet atmosphere where everyone can relax. The vibe inside is warm rather than overly luxurious, which is exactly the point. It feels like home.</p>

<h2>Giving Back to the Frisco Community</h2>

<p>Holly believes that life is about giving before you receive, and she has built that philosophy directly into how the salon operates. Students, teachers, veterans, and cancer patients all receive a discount because Holly wants beautiful nails to be within reach for the people she most admires. As the business grows, her goal is to expand into charity work and help even more people in the Frisco, Prosper, and McKinney area. This goes to show the reason so many reviewers describe Holly as genuine, sweet, and someone who clearly cares.</p>

<h2>What to Expect on Your First Visit</h2>

<p>Expect to be greeted warmly, seated in a beautiful chair, and treated like the most important person in the room. Expect honest advice about what will look best and what will keep your nails strong. Most of all, expect to leave thinking about when you can come back again in the future.</p>`,
    phone: '(214) 407-7406',
    address: '10710 Eldorado Pkwy #120, Frisco, TX 75035',
    image: '/images/lucky-nails-spa.webp',
    imageAspect: '1/1',
    cardImage: '/images/lucky-nails-spa-card.webp',
    verified: true,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.487475977397!2d-96.78956082289623!3d33.17507976353443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3f00543f7bbd%3A0xa98492df7f661e4e!2sLucky%20Nails%20%26%20Spa!5e0!3m2!1sen!2sus!4v1778735558317!5m2!1sen!2sus',
    socials: {
      facebook: 'https://www.facebook.com/people/Lucky-Nails-and-Spa/61583992166163/',
      instagram: 'https://www.instagram.com/luckynails_and_spa_frisco',
    },
  },
  {
    name: 'Backyard Movie Theater',
    slug: 'backyard-movie-theater',
    category: 'food-fun',
    published: true,
    shortDescription: 'Backyard Movie Theater turns Prosper, TX yards into cinematic experiences with a 20-ft industrial-grade screen, custom pre-show reels, indoor inflatable theater, LED dance floor, and gaming lounge options. Owned by Derek Sharp.',
    longDescription: "Backyard Movie Theater is a full-service movie night and party experience company serving Prosper and the surrounding North Texas area. Founded by Derek Sharp after a Christmas gift to his own family turned into a community favorite, Backyard Movie Theater offers a 20-foot industrial-grade outdoor screen, an air-conditioned indoor inflatable theater, an inflatable nightclub setup, a gaming lounge with multiple TV screens, and an LED dance floor — all paired with custom pre-show reels that turn any event into a real theater experience.",
    htmlDescription: `<h2>A Backyard Movie Theater Experience in Prosper, TX That Goes Beyond a Simple Movie Night</h2>

<p>If you have ever wondered what it would feel like to turn your own backyard into a memory you will talk about for years, Derek Sharp and his Backyard Movie Theater setup are exactly what you are looking for. What started as a Christmas gift for his own family quickly grew into a full service experience after neighbors caught on to how special a good movie night can really feel. Now Derek brings that same energy to families, schools, and groups all across Prosper and the surrounding North Texas area.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-derek-sharp.webp" alt="Derek Sharp, owner of Backyard Movie Theater in Prosper, TX" loading="lazy" width="600" height="800" class="w-full rounded-2xl shadow-md" /></figure>

<h2>What to Expect When You Book Derek for Your Backyard Movie Night</h2>

<p>The first thing you notice when you reach out to Derek is how easy he makes the whole process. Communication is quick, his questions are thoughtful, and he genuinely wants to understand what you are trying to create before he ever shows up with equipment. Whether it is a kid's birthday party, a wedding reception, a Super Bowl gathering, or a Father's Day surprise, he treats your event like it matters, because it really does to him.</p>

<p>On the day of your event, Derek arrives early. Not just on time, but early enough that everything is tested, dialed in, and ready well before your guests start showing up. He brings a 20 foot industrial grade screen built to handle Texas wind, crisp sound that fills the entire yard, and the attention to detail that makes the difference between a rented projector and an actual cinematic experience.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-setup-ready.webp" alt="Backyard Movie Theater outdoor setup with rows of inflatable couches ready for a Prosper, TX event" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>A Custom Movie Reel That Makes the Whole Night Feel Like a Real Theater</h2>

<p>One of the things that sets this service apart is the pre show experience Derek puts together for you. Instead of just pressing play on a movie, he builds a custom reel ahead of time. That can include your child's favorite YouTube videos, a music playlist that matches the vibe of the night, and coming attractions that roll right into the main feature. By the time the movie starts, your guests are already settled in and feeling like they walked into a private theater under the stars.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-indoor-theater.webp" alt="Indoor inflatable theater interior with movie playing — Backyard Movie Theater" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Indoor Movie Theater, LED Dance Floor, and Gaming Lounge Options</h2>

<p>Derek has expanded what is possible far beyond the traditional outdoor setup. For families with younger kids who need an earlier start time, there is a fully air conditioned indoor inflatable theater complete with carpeting, LED perimeter lighting, and four AC units to keep things cool. That same space transforms into an inflatable nightclub with fog machines, lights, velvet ropes, and a red carpet, or into a gaming lounge with multiple TV screens for tournaments and group play. The newest addition is an LED dance floor that pairs perfectly with the big screen, turning the back half of any party into a full on concert once the movie wraps up.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-nightclub.webp" alt="Inflatable nightclub setup with red lighting and projection screen — Backyard Movie Theater" loading="lazy" width="1000" height="1333" class="w-full rounded-2xl shadow-md" /></figure>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-gaming-lounge.webp" alt="Gaming lounge with multiple TV screens and arcade machines at Backyard Movie Theater" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-led-dance-floor.webp" alt="Indoor LED dance floor with movie projection — Backyard Movie Theater" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Why Families and Schools in Prosper Keep Coming Back</h2>

<p>If you read through the reviews about Backyard Movie Rental, you'll see a clear pattern showing up over and over again. Parents talk about how their kids called it the best birthday ever. PTA organizers describe the smoothest school movie night they have ever hosted. Couples mention how Derek made their wedding reception unforgettable by playing their elopement video on the big screen. The common thread is that Derek does not just deliver equipment. He shows up, takes ownership of the experience, makes adjustments when weather or logistics throw a curveball, and quietly disappears so your event feels completely yours.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-outdoor-led.webp" alt="Outdoor rainbow LED dance floor under the movie screen — Backyard Movie Theater" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Booking Backyard Movie Theater for Your Next Event</h2>

<p>If you are planning a birthday, a school function, a holiday gathering, a corporate event, or any celebration where you want guests walking away saying they have never seen anything like it, this is the setup to book. Derek puts real care into every event he takes on, from the picture quality to the way he interacts with your guests. You are not booking a rental. You are booking a night that turns into a core memory for the people you love.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/backyard-movie-outdoor-setup.webp" alt="Outdoor inflatable theater setup with lounge seating and red carpet — Backyard Movie Theater" loading="lazy" width="1000" height="1333" class="w-full rounded-2xl shadow-md" /></figure>`,
    phone: '(424) 209-9087',
    website: 'https://backyardmovietheater.com/',
    address: 'Serving Prosper and surrounding areas',
    image: '/images/backyard-movie-hero.webp',
    imageAspect: '4/3',
    verified: true,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428260.1916730566!2d-97.18138828742497!3d33.00950275324331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa8b663bd528c74ab%3A0x9dde517a1e557b2b!2sBackyard%20Movie%20Theater!5e0!3m2!1sen!2sus!4v1778735187002!5m2!1sen!2sus',
    socials: {
      facebook: 'https://www.facebook.com/backyardmovietheater/',
      instagram: 'https://www.instagram.com/backyardmovietheatertexas',
      youtube: 'https://www.youtube.com/@backyardmovietheater',
    },
  },
  // Trades — Garage Door Repair
  {
    name: 'Close Automatic Garage Door',
    slug: 'close-automatic-garage-door',
    category: 'trades',
    published: true,
    locationLabel: 'Little Elm, TX',
    shortDescription: 'Close Automatic Garage Door is a husband-and-wife-owned garage door repair and installation company serving Little Elm, Frisco, Prosper, and McKinney. Owner Darrell Close brings 25 years of experience handling residential and commercial garage door service, repairs, and installations.',
    longDescription: 'Close Automatic Garage Door is owned and operated by Darrell and Leah Close, serving the Little Elm, Frisco, Prosper, and McKinney area. Darrell has over 25 years of garage door experience spanning installation, service, technician work, and electrical, with roots in Washington DC. Services include broken spring repair, off-track doors, opener replacements, sensor issues, full door installations, high lift conversions, commercial roll-up doors, dock doors, and more.',
    htmlDescription: `<h2>Meet Darrell and Leah Close of Close Automatic Garage Door</h2>

<p>Darrell and Leah Close are the husband and wife team behind Close Automatic Garage Door, running the company together out of the corner where Little Elm, Frisco, and Prosper all meet. Darrell has been working on garage doors since 1991. He started out as a carpenter in the 90s and spent roughly 25 years in the garage door industry out of Washington DC before relocating to Texas. He has done installation, service, technician work, and even handled the electrical side, which means he has touched just about every corner of the garage door industry over the course of his career.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/close-garage-door-wood-door.webp" alt="Beautiful wood garage door installation by Close Automatic Garage Door in the Prosper, TX area" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>What to Expect From Their Garage Door Repair Service</h2>

<p>The first thing most people notice is how quickly Darrell picks up the phone. Customers consistently describe him as responsive, fast to schedule, and willing to come out the same day, even late in the evening or in the middle of a winter storm. One family reached out on Christmas Day with a broken door and Darrell responded that same evening and arrived the next morning. Another customer had a spring snap late at night and was up and running by the following morning. If you have an urgent issue, you are not going to sit around waiting three days for a callback.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/close-garage-door-residential.webp" alt="Residential garage door repair completed by Close Automatic Garage Door" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Honest, Upfront Pricing and Free Estimates</h2>

<p>Once Darrell arrives, his process is straightforward. He looks at the system, gives you a free estimate, and walks you through exactly what he sees. He explains how the parts work, why something broke, and what your options are. Plenty of reviews mention this specifically, and it is the kind of thing you only really appreciate after you have been burned by a different company. You leave the appointment understanding your garage door better than you did before he showed up.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/close-garage-door-carriage-style.webp" alt="Carriage style garage door with decorative hardware installed by Close Automatic Garage Door" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Quality Workmanship Backed by 25 Years of Experience</h2>

<p>Darrell takes safety seriously, and for good reason. Garage doors carry enormous tension in their springs, and he has watched people get badly hurt trying to fix things themselves. So when he repairs a door, he is also checking the rest of the system, making adjustments, and making sure the door is operating safely and quietly before he leaves. Several customers mention that he checked their other doors too, even when only one was broken, just to make sure everything was in good shape. He is OSHA certified, fire door safety certified, and carries full commercial liability insurance.</p>

<h2>Residential and Commercial Garage Door Services</h2>

<p>Close Automatic Garage Door is genuinely a one stop shop. On the residential side, Darrell handles broken springs, off track doors, opener repairs and replacements, sensor issues, full door installations, and high lift conversions with jackshaft openers. On the commercial side, he works on roll up doors, dock doors, dock levelers, scissor lifts, automatic sliding gates, automatic sliding doors, and freezer doors. He even works on wood doors, which a surprising number of service technicians in this area will not touch. If it opens and closes automatically, Darrell can fix it.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/close-garage-door-commercial-repair.webp" alt="Commercial garage door repair by Close Automatic Garage Door" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<figure class="my-8 mx-auto max-w-md"><img src="/images/close-garage-door-modern-install.webp" alt="Modern garage doors with glass panels installed by Close Automatic Garage Door" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /></figure>

<h2>Trusted by Local Roofing Companies and Property Managers</h2>

<p>Darrell has built strong working relationships with local roofing companies in the area who regularly refer him when their clients need garage door work done right. He also works with numerous property management companies in the area, handling garage door service across their portfolios of properties. Close Automatic Garage Door offers preventative maintenance services for apartment complexes, rental properties, and warehouses, keeping doors running safely and reliably so property managers are not fielding emergency calls down the road.</p>

<h2>The Kind of Local Business You Want to Support</h2>

<p>What really sets Darrell and Leah apart is how they treat people. Leah loves networking and bringing people together, and Darrell is the friendly, easygoing type who builds real relationships with the customers he serves. Two of their customers actually ended up joining Darrell on a recent fishing trip. When you hire <a href="https://closeautomaticgaragedoortx.com/" target="_blank" rel="noopener noreferrer">Close Automatic Garage Door</a>, you are not just getting a quick fix. You are getting someone you can call for the next 10 years, who remembers your name, who shows up when he says he will, and who treats your home like it matters. For anyone in Little Elm, Frisco, Prosper, or McKinney who has been waiting for a garage door company they can actually trust, this is the one.</p>

<figure class="my-8 mx-auto max-w-md"><img src="/images/close-garage-door-commercial.webp" alt="Commercial glass garage doors installed by Close Automatic Garage Door at The Gin in Prosper, TX" loading="lazy" width="1000" height="750" class="w-full rounded-2xl shadow-md" /><figcaption class="mt-2 text-center text-sm text-text-muted">Commercial garage doors installed at The Gin, a popular restaurant in Prosper, TX</figcaption></figure>`,
    phone: '(972) 992-8644',
    website: 'https://closeautomaticgaragedoortx.com/',
    address: 'Serving Little Elm, Frisco, Prosper, and McKinney, TX',
    image: '/images/close-garage-door-hero.webp',
    imageAspect: '4/3',
    verified: true,
  },
];

// ── Helper functions ──

/** Only businesses that are published (published is undefined or true) */
export const publishedBusinesses = businesses.filter((b) => b.published !== false);

export function getBusinessesByCategory(categorySlug: string): Business[] {
  return publishedBusinesses.filter((b) => b.category === categorySlug);
}

export function getRecentBusinesses(count: number = 6): Business[] {
  return businesses.slice(0, count);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByUrlPath(urlPath: string): Category | undefined {
  return categories.find((c) => c.urlPath === urlPath);
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function getCategoryUrl(category: Category): string {
  return `/${category.urlPath}/`;
}

export function getBusinessUrl(business: Business): string {
  const category = getCategoryBySlug(business.category);
  return `/${category?.urlPath || business.category}/${business.slug}/`;
}

export function getCategoryDisplayName(slug: string): string {
  const cat = getCategoryBySlug(slug);
  return cat?.name || slug;
}

/** Map category slug to schema.org @type for individual business pages */
export function getSchemaType(categorySlug: string, businessSlug?: string): string {
  // Special overrides for specific businesses
  if (businessSlug === 'the-red-roofer') return 'RoofingContractor';
  if (businessSlug === 'prosper-painting') return 'HousePainter';
  if (businessSlug === 'impact-landscapes') return 'LandscapingBusiness';
  if (businessSlug === 'puddle-pool-services') return 'HomeAndConstructionBusiness';

  const map: Record<string, string> = {
    'food-fun': 'Restaurant',
    'health-fitness': 'HealthAndBeautyBusiness',
    'professionals': 'ProfessionalService',
    'shop': 'Store',
    'trades': 'HomeAndConstructionBusiness',
  };
  return map[categorySlug] || 'LocalBusiness';
}
