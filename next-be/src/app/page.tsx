import {Bebas_Neue} from "next/font/google"

const bebasFont=Bebas_Neue({
  subsets:["latin"],
  weight:"400"
})

const Home = () => {
  return (
    <div>
      <h1>Bebas Neue</h1>
      <p className={`${bebasFont.className}`}>This is random text in Bebas neue font</p>
    </div>
  )
}

export default Home