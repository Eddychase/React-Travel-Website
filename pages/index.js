
import Banner from '../components/Banner'
import FirstCard from '../components/FirstCard'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'


export default function Home({cardData,exploreData}) {
  return (
    <div>
    
      <Header/>
      <Banner/>
      <FirstCard/>
      <main className="max-w-7xl mx-auto  px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold text-red-900 pb-5">Nearby Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl text-red-900  font-semibold py-8">Highlights</h2>

          <div className="flex 0 space-x-4 overflow-scroll scrollbar-hide overflow-y-hidden p-3 -ml-3">
            {cardData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      
      </main>
</div>
      )}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then(
      (res) => res.json()
    );
  const cardData = await fetch("https://links.papareact.com/zp1")
    .then(
      (res) => res.json()
    )
  return {
    props: {
      exploreData,
      cardData
    }
  }
}
