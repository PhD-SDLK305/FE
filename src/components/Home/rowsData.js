// Fake dataset for several carousel sections used on Home
const rows = [
  {
    id: 'hot-now',
    title: 'Đề xuất hot',
    viewMorePosition: 'right',
    items: Array.from({ length: 9 }).map((_, i) => {
      const episodesCount = 8 + ((i * 3) % 32)
      return {
        id: `hot-${i + 1}`,
        title: `Đề cử ${i + 1}`,
        subtitle: `Trọn bộ • ${episodesCount} tập`,
        img: `https://picsum.photos/320/460?random=${i + 10}`,
        tag: i % 3 === 0 ? 'Miễn Phí' : null,
        top: i < 3 ? 'TOP 10' : null,
        episodes: Array.from({ length: episodesCount }).map((__, idx) => ({
          id: `hot-${i + 1}-ep-${idx + 1}`,
          number: idx + 1,
          title: `Tập ${idx + 1}`,
          duration: `${25 + (idx % 5)} phút`,
          thumbnail: `https://picsum.photos/240/140?random=${i + idx + 20}`
        }))
      }
    })
  },

  {
    id: 'thuyet-minh',
    title: 'Phim Thuyết minh & Lồng tiếng',
    viewMorePosition: 'left',
    items: Array.from({ length: 7 }).map((_, i) => {
      const episodesCount = 12 + ((i * 2) % 32)
      return {
        id: `dub-${i + 1}`,
        title: `Thuyết minh ${i + 1}`,
        subtitle: `Trọn bộ • ${episodesCount} tập`,
        img: `https://picsum.photos/320/460?random=${i + 20}`,
        tag: i % 2 === 0 ? 'Thuyết Minh' : null,
        top: null,
        episodes: Array.from({ length: episodesCount }).map((__, idx) => ({
          id: `dub-${i + 1}-ep-${idx + 1}`,
          number: idx + 1,
          title: `Tập ${idx + 1}`,
          duration: `${20 + (idx % 6)} phút`,
          thumbnail: `https://picsum.photos/240/140?random=${i + idx + 40}`
        }))
      }
    })
  },

  {
    id: 'vip-only',
    title: 'Dành Riêng Cho VIP',
    viewMorePosition: 'right',
    items: Array.from({ length: 6 }).map((_, i) => {
      const episodesCount = 10 + i
      return {
        id: `vip-${i + 1}`,
        title: `VIP ${i + 1}`,
        subtitle: `Trọn bộ • ${episodesCount} tập`,
        img: `https://picsum.photos/320/460?random=${i + 40}`,
        tag: 'VIP',
        top: i === 0 ? 'HOT' : null,
        episodes: Array.from({ length: episodesCount }).map((__, idx) => ({
          id: `vip-${i + 1}-ep-${idx + 1}`,
          number: idx + 1,
          title: `Tập ${idx + 1}`,
          duration: `${22 + (idx % 7)} phút`,
          thumbnail: `https://picsum.photos/240/140?random=${i + idx + 70}`
        }))
      }
    })
  }
]

export default rows
