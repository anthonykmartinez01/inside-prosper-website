export const siteConfig = {
  name: 'Inside Prosper',
  description: 'Discover the best local businesses in Prosper, Texas.',
  siteUrl: 'https://insideprosper.com',
  email: 'anthony@insideprosper.com',
  phone: '(469) 481-1395',
  phoneRaw: '+14694811395',
  location: 'Prosper, Texas',
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
  website?: string;
  address?: string;
  hours?: string;
  image: string;
  imagePosition?: string;
  imageAspect?: string;
  verified?: boolean;
  published?: boolean;
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
    published: false,
    shortDescription: 'Professional painting company in Prosper, TX offering interior and exterior painting, cabinet refinishing, and water damage restoration. Over 12 years serving the community.',
    longDescription: 'Prosper Painting is a locally owned painting company led by Sean Henry, a lifelong craftsman who brought Northeast trade standards to Texas over 12 years ago. From interior and exterior painting to cabinet refinishing and water damage restoration, Sean and his team deliver flawless results with transparent communication and a three-step quality control process.',
    htmlDescription: `<h2>A Prosper, TX Painting Company Built on Craftsmanship, Not Shortcuts</h2>

<p>When you call <a href="https://prosperpainting.com/" target="_blank" rel="noopener noreferrer">Prosper Painting</a>, you're not getting some random crew with a truck and a couple of rollers. You're getting Sean Henry, a guy who grew up around painting and carpentry his entire life. His dad and uncles were all painters and carpenters back in Connecticut, where the trade actually requires licensing and certifications. Sean brought that whole Northeast craftsman mentality down to Texas when he started Prosper Painting over 12 years ago, and it shows in every single job his team touches.</p>

<p>Sean lives right here in Prosper. This is his community. He's not some franchise operator managing things from a call center somewhere. He's personally involved in every project, whether that's giving you an honest estimate, checking in on the crew, or doing a final walkthrough to make sure everything meets his standard. His guys are trained to work the way he would, and he holds them to it. That's the kind of accountability you feel from the very first conversation.</p>

<h2>Interior and Exterior Painting in Prosper That Gets Done Right the First Time</h2>

<p>One thing you'll notice almost immediately is the communication. From the very first estimate, Sean and his team are upfront about everything. If painting your baseboards is going to make that door next to them look worn out, they'll tell you before the job starts. No surprises, no sneaky change orders tacked on at the end. They plant the seed early so you can make the decision on your own terms. Customers rave about this. People talk about getting updates throughout the entire process and never feeling left in the dark about what's happening in their own home.</p>

<p>The crew shows up on time. That might sound basic, but if you've ever hired a contractor who ghosted you for three days or showed up whenever they felt like it, you know how rare punctuality actually is. Sean is obsessive about scheduling. The only things that shift a timeline are weather, illness, or something you request as the homeowner. Everything else stays locked in.</p>

<h2>Cabinet Refinishing and Custom Finishes in Prosper, TX</h2>

<p>If you need cabinet refinishing, this is where Prosper Painting really shines. Sean's cabinet system involves a minimum of two coats of primer and two to three coats of paint, with sanding between every single coat. The goal is a factory finish that looks and feels like glass. Customers who have had their cabinets done talk about the results being "incredible" and looking brand new. This is not a slap and go operation. This is meticulous, patient work that produces a finish you'll run your hand across and wonder how they got it so smooth.</p>

<p>Beyond cabinets, the team handles metallic finishes, Venetian plaster, wallpaper, carpentry, and all kinds of custom work that most painting companies won't even attempt. Sean works with custom builders on high end projects regularly, so the standard of quality never drops whether it's an accent wall in your living room or a full interior repaint of a two story home.</p>

<h2>Prosper Painters Who Actually Clean Up After Themselves</h2>

<p>Something that comes up again and again in reviews is how clean the crew leaves your home. Multiple homeowners have said the work area was cleaner when the team left than when they arrived. That's not an exaggeration. Sean trains his crews to treat your space with respect, and cleanliness is a non-negotiable part of every single project. You're not going to come home to paint drips on your floor or tape residue stuck to your trim. The team takes pride in leaving your home looking like they were never there, except for the beautiful new paint on your walls.</p>

<h2>A Three-Step Quality Control Process You Won't Find Anywhere Else</h2>

<p>Here's something that sets Prosper Painting apart from just about every other painter in the DFW area. They run a three-step closeout process on every job. First, a crew member goes through the entire project with tape, marking every spot that needs a touch-up. Once those are handled, the crew leader does his own walkthrough and marks anything else. Then Sean or his project lead does a final walkthrough with you, the homeowner, to make sure everything meets your expectations before they pack up.</p>

<p>The result? They almost never have to come back for touch-ups. The job is done right before they leave your driveway. Customers talk about walking their entire house after the crew finished and not being able to find a single missed spot. That kind of thoroughness is rare, and it comes from a system Sean built specifically because he refuses to leave a homeowner hanging.</p>

<h2>Water Damage Repair and Restoration Painting in Prosper</h2>

<p>Prosper Painting isn't just about fresh coats of color. Sean and his team handle some serious restoration work too. Homeowners dealing with hailstorm damage, water leaks, ceiling repairs, and moisture issues have turned to Prosper Painting to make their homes whole again. One homeowner had severe water damage across two floors and got quotes from three different companies. Sean was the most detailed and honest of all of them, walking through the entire inspection process and explaining exactly what needed to happen. Another family dealing with a mystery moisture issue in their new build called Sean's team, and they not only fixed the damage but helped identify the source of the problem.</p>

<p>When your home has been through something rough, you want someone who's going to be straight with you about what's going on and what it's going to take to fix it. That's exactly what you get here.</p>

<h2>Why Prosper Homeowners Trust Sean Henry With Their Homes</h2>

<p>At the end of the day, what makes Prosper Painting different is Sean himself. He's a craftsman in an industry flooded with people who picked up a brush last Tuesday. He grew up learning the trade the right way, with real standards and real accountability. He trains every crew member to his standard, and the guys who stick around are the ones willing to learn the craft and take pride in the work.</p>

<p>Sean will tell you straight up: don't just go with the cheapest bid. There's a reason someone quotes you $200 when the job should cost $500. You get what you pay for, and with Prosper Painting, what you get is a team that communicates clearly, shows up when they say they will, delivers a finish that looks flawless, and stands behind their work with a 100% guarantee.</p>

<p>Whether you need your whole house painted inside and out, cabinets refinished to a factory smooth finish, storm damage repaired, or a custom metallic accent wall that makes your guests stop and stare, Prosper Painting is the call to make. Sean and his team have been doing this in the Prosper community for over a decade, and they're not slowing down anytime soon.</p>

<h2>Find Prosper Painting on Google</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53376.97668700452!2d-96.81242424803946!3d33.26489419149891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3fc0da786dc9%3A0x3f48777f6007d3d!2sProsper%20Painting!5e0!3m2!1sen!2sus!4v1775757141625!5m2!1sen!2sus" width="100%" height="450" style="border:0;border-radius:12px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<p>Looking for more trusted tradespeople in Prosper? Check out our full <a href="/trades/">Prosper trades directory</a> to find <a href="/trades/the-red-roofer/">roofers</a>, <a href="/trades/impact-landscapes/">landscapers</a>, <a href="/blog/best-plumbers-prosper-tx/">plumbers</a>, and other contractors recommended by your neighbors.</p>`,
    phone: '(972) 591-8936',
    website: 'https://prosperpainting.com/',
    address: '1912 Univ Business Dr #415, McKinney, TX 75071',
    hours: 'Mon\u2013Fri 8am\u20135pm',
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80',
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
    website: 'https://theplaygroundstandard.com/',
    address: 'Serving Prosper, TX and surrounding areas',
    image: '/images/the-playground-standard.webp',
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

  const map: Record<string, string> = {
    'food-fun': 'Restaurant',
    'health-fitness': 'HealthAndBeautyBusiness',
    'professionals': 'ProfessionalService',
    'shop': 'Store',
    'trades': 'HomeAndConstructionBusiness',
  };
  return map[categorySlug] || 'LocalBusiness';
}
