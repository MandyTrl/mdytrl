export const LocalTime = () => {
  const today = new Date()
  const date = today.getDate()
  const month = today.toLocaleString([], {
    month: 'short'
  })
  const year = today.getFullYear()
  const time = today.getHours() + ':' + today.getMinutes()

  return (
    <aside className="border-y border-l-transparent border-r-transparent border-solid border-primary pb-4">
      <p className="text-right pr-2 pt-1 hover:cursor-pointer hover:scale-x-110 hover:-translate-x-12 duration-300 font-sans">
        ¡ plɹoʍ ollǝɥ
      </p>
      <p className="font-soria text-6xl">
        {date} {month}. {year} {time}
      </p>
    </aside>
  )
}
