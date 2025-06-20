import AdventureImage, { ImageTile } from "@/components/AdventureImage";
import Footer from "@/components/Footer";

export default async function Adventures() {
  const images: ImageTile[] = [
    {
      src: "jackson_lake_dam",
      alt: "Jackson Lake Dam, Teton Mountains behind",
      location: "Jackson Lake Dam",
      locationHref: "https://maps.app.goo.gl/GUkrUXrV4z8ZqFQB7",
      caption: "Driving through Grand Teton National Park, this dam controls the flow of water out of the lake."
    },
    {
      src: "white_gold",
      alt: "White Gold, sailboat",
      location: "Pilot's Point Marina",
      locationHref: "https://maps.app.goo.gl/jurfHE3AmDrRZMHJ7",
      caption: ""
    },
    {
      src: "rumor",
      alt: "Sailboat in fog",
      location: "Essex Harbor",
      locationHref: "https://maps.app.goo.gl/DzWrEAUsKkcV2kY28",
      caption: "A small sailboat at her mooring on a foggy morning."
    },
    {
      src: "costa_rica_mountains",
      alt: "Sunset in Monteverde, Costa Rica",
      location: "Monteverde, Costa Rica",
      locationHref: "https://maps.app.goo.gl/r4gUHUJiQgXohuLb8",
      caption: "Sunset in the Cloud Forest mountains. On my IQP, we would come here to watch the sunset all the time since it was only a short walk from our cabins. It was one of the most beautiful sunsets I've ever seen."
    },
    {
      src: "naval_academy",
      alt: "Bancroft Hall at the US Naval Academy in Annapolis, MD",
      location: "US Naval Academy",
      locationHref: "https://maps.app.goo.gl/HLh9Wu855Wv7HL1SA",
      caption: "The inside of Bancroft Hall."
    },
    {
      src: "riverside_park",
      alt: "View of a remnant of Miller Highway from Riverside Park, NYC",
      location: "Riverside Park - NYC",
      locationHref: "https://maps.app.goo.gl/fPnAyFVS64rkdqBq6",
      caption: "A view of a remnant of Miller Highway, an elevated section of New York State Route 9A, from Riverside Park."
    },
    {
      src: "jalen_brunson",
      alt: "Jalen Brunson taking a midrange jumpshot",
      location: "Madison Square Garden",
      locationHref: "https://maps.app.goo.gl/QzV1uMDM1uc6CdN88",
      caption: "Courtside seats at a Knicks home game versus the Chicago Bulls. You could hear the squeaks from their shoes."
    },
    {
      src: "kirby_moran",
      alt: "Tugboat, Kirby Moran",
      location: "Upper New York Bay",
      locationHref: "https://maps.app.goo.gl/hfKuqYZVSmGsyDFA9",
      caption: "Tugboat Kirby Moran from above."
    },
    {
      src: "saemad",
      alt: "Rooftop view of park",
      location: "Institute Park - Worcester, MA",
      locationHref: "https://maps.app.goo.gl/E9qQvAD7JaszAw3c8",
      caption: "View from the roof of the Sigma Alpha Epsilon Massachusetts Delta Chapter House at Worcester Polytechnic Institute."
    },
    {
      src: "cliffs_of_moher",
      alt: "Cliffs of Moher",
      location: "Cliffs of Moher",
      locationHref: "https://maps.app.goo.gl/7Tp4a7tbkAdCrk8DA",
      caption: "Got to visit my younger brother in Ireland during his Northeastern semester abroad and visit these beautiful cliffs at sunset. Truly breathtaking."
    },
    {
      src: "marys_nipple",
      alt: "Mary's Nipple Peak",
      location: "Grand Targhee Ski Area",
      locationHref: "https://maps.app.goo.gl/E4LcNZNgkKaGtUP7A",
      caption: "Boot packed to the top of this bowl, opposite Mary's Nipple peak. It was hard work but I was rewarded with some of the best skiing of my life."
    },
    {
      src: "tetons",
      alt: "Teton Mountain Range",
      location: "Grand Teton National Park",
      locationHref: "https://maps.app.goo.gl/oL7bvfbc3NSd9kzf7",
      caption: "The Tetons as seen from nearby my dispersed campground. Pictures don't nearly do the sheer scale justice."
    },
    {
      src: "cerro_amigos",
      alt: "Radio tower buildings",
      location: "Cerro Amigos Summit",
      locationHref: "https://maps.app.goo.gl/MKTfQ4NMLyNu6ixe8",
      caption: "After 7.4 mile hike with 1,900 feet of elevation gain in Monteverde CR, we encountered these buildings with radio towers."
    },
    {
      src: "yankees",
      alt: "Yankee Stadium from left center field bleachers",
      location: "Yankee Stadium",
      locationHref: "https://maps.app.goo.gl/SABKEz12Hj4Huug28",
      caption: "I love baseball and I love the Yankees. I've been a Yankees fan since before I could walk and I'm convinced this year is our year."
    },
    {
      src: "robin",
      alt: "European Robin",
      location: "Ireland",
      locationHref: "https://maps.app.goo.gl/Coc2vjd5Gqw21zyRA",
      caption: "Saw this European Robin while I was in Ireland and it's one of my favorite pictures. I've been getting into bird watching a bit recently thanks to the Merlin BirdID app and it's a little addicting..."
    },
    {
      src: "ski_tracks",
      alt: "Ski tracks in the snow from a distance",
      location: "Grand Targhee Ski Area",
      locationHref: "https://maps.app.goo.gl/hSAaqLY64mNMkfHp9",
      caption: ""
    },
    {
      src: "devils_head",
      alt: "Mountain view",
      location: "Devil's Head Fire Lookout",
      locationHref: "https://maps.app.goo.gl/z2AzrzcvmkY4zc32A",
      caption: ""
    },
    {
      src: "la_fortuna",
      alt: "La Fortuna Waterfall",
      location: "La Fortuna Waterfall",
      locationHref: "",
      caption: "Crazy waterfall, we went swimming in the pool below and the water was very very cold 🥶."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="lg:ml-64 lg:py-10 lg:px-32 lg:mt-0 mt-24 p-6 min-h-screen">
        <h1 className="lg:text-5xl text-3xl font-semibold">Adventures</h1>
        <h2 className="lg:text-xl text-sm text-neutral-400">
          Check out some of the places I&apos;ve been and things I&apos;ve seen
        </h2>
        <div className="columns-1 sm:columns-2 gap-4 mt-8 mb-16">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <AdventureImage
                src={`/images/adventures/${image.src}.webp`}
                alt={image.alt}
                location={image.location}
                locationHref={image.locationHref}
                caption={image.caption}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-neutral-400 italic">Hey there :)</p>
      </div>
    </div>
  );
}