export const LocalTime = () => {
  const today = new Date()
  const date = today.getDate()
  const month = today.toLocaleString([], {
    month: 'short'
  })
  const year = today.getFullYear()
  const time = today.getHours() + ':' + today.getMinutes()

  return (
    <aside className="border border-l-transparent border-r-transparent border-solid border-primary py-4">
      <p className="font-soria text-6xl">
        {date} {month} {year} {time}
      </p>
    </aside>
  )
}
