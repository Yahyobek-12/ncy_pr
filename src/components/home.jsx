import { useState } from "react"
import { assetImages } from '../constants/index'

const Home = () => {
  const [sayNumber, setSayNumber] = useState('');

  const sayNumberChange = (e) => {
    setSayNumber(e.target.value)
  }

  const getSayNumberValue = (e) => {
    e.preventDefault()
    console.log(sayNumber);
    setSayNumber('')
  }

  return (
    <div className="w-full h-[90vh] bg-white dark:bg-slate-900">

      <main className="w-full h-full flex justify-center items-center">
        <h1 id="numbers" className="text-2xl font-bold dark:text-white mt-[-8rem]">{sayNumber.length === 0 ? 'Raqam Yozing' : (
          <>
            {sayNumber%2 ? <img src={assetImages.OddImage} alt="odd-img" className="w-[250px]" /> : <img src={assetImages.EvenImage} alt="even-img" className="w-[250px]" />}
          </>
        )}</h1>
      </main>

      <div className="absolute left-0 bottom-0 w-full h-[80px] bg-slate-900 dark:bg-slate-700 py-4 px-3">
        <form onSubmit={getSayNumberValue} className="w-full h-full">
          <input type="number" className="w-full h-full px-2 rounded-md dark:bg-slate-900 dark:text-white" placeholder="Write number..." value={sayNumber} onChange={sayNumberChange} />
        </form>
      </div>
    </div>
  )
}

export default Home
