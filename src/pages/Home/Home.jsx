import { Header } from '../../components/Header'
import React, { useEffect, useState } from 'react'
import Hero from '../../components/Home/Hero'
import RecommendedCarousel from '../../components/Home/RecommendedCarousel'
// import rows from '../../components/Home/rowsData'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'
import { getMovieAPI } from '../../apis/movie'
// import { useLocation } from 'react-router-dom'

export function Home() {
  const [loading, setLoading] = useState(true)
  let [rows, setRows] = useState([])
  // const location = useLocation()
  useEffect(() => {
    // simulate initial data loading — replace with real API calls
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])
  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        const res = await getMovieAPI('cartoon', 'hot')

        if (mounted) {
          setRows([...rows, {
            id: 'hot-now',
            title: 'Đề xuất hot',
            viewMorePosition: 'right',
            items: res.data[0].queryBoards
          }])
        }
      } catch (e) {
        console.log(e)
      }
    }

    load()

    return () => { mounted = false }
  }, [])

  console.log(rows)
  return (
    <>
      <Header />
      {loading ? (
        <div className="container mx-auto px-4 py-20">
          <Loading fullScreen />
        </div>
      ) : (
        <>
          <Hero />

          {/* Render several demo rows using fake data */}
          {rows.map((row) => (
            <RecommendedCarousel key={row.id} title={row.title} items={row.items} viewMorePosition={row.viewMorePosition} />
          ))}

          <Footer />
        </>
      )}
    </>
  )
}