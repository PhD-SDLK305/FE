import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import rows from '../../components/Home/rowsData'
import { Card } from '../../components/ui/card'
import { Button } from '../../components/ui/button'

function findShowById(id) {
  for (const row of rows) {
    const match = row.items.find((i) => i.id === id)
    if (match) return { ...match, section: row.title }
  }
  return null
}

export default function Show() {
  const { id } = useParams()
  const navigate = useNavigate()
  const show = findShowById(id)

  if (!show) {
    // if not found, go to 404
    navigate('/404', { replace: true })
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <img src={show.img} alt={show.title} className="w-full rounded-3xl shadow-lg object-cover h-[360px]" />
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-start justify-between gap-4 mb-4 flex-col sm:flex-row">
              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold mb-2">{show.title}</h1>
                <div className="text-sm text-neutral-400 mb-2">{show.subtitle} • {show.episodes?.length || 0} tập • {show.tag || show.top || '—'}</div>
              </div>

              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => navigate(-1)}>Back</Button>
                <Button className="bg-emerald-400 text-black px-4">Play</Button>
              </div>
            </div>

            <Card className="mb-6">
              <div className="px-6 py-4">
                <h3 className="font-semibold mb-2">Overview</h3>
                <p className="text-sm text-neutral-400">This is sample content for <strong>{show.title}</strong>. Replace with real description from your API. It currently contains {show.episodes?.length} episodes — click any to play.</p>
              </div>
            </Card>

            <h2 className="text-lg font-semibold mb-3">Episodes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {show.episodes?.map((ep) => (
                <Link key={ep.id} to={`#`} className="block rounded-xl overflow-hidden bg-card border border-white/6 transition hover:scale-[1.02]" aria-label={`Play ${ep.title}`}>
                  <div className="w-full h-36 bg-cover bg-center" style={{ backgroundImage: `url(${ep.thumbnail})` }} />
                  <div className="p-3">
                    <div className="text-sm font-semibold">{ep.title}</div>
                    <div className="text-xs text-neutral-400 mt-1">{ep.duration}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
