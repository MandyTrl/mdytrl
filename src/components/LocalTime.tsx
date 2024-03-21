export const LocalTime = () => {
  const today = new Date()
  const date = today.getDate()
  const month = today.toLocaleString([], {
    month: 'short'
  })
  const year = today.getFullYear()
  const time = today.getHours() + ':' + today.getMinutes()

  return (
    <aside className="w-full border-y border-l-transparent border-r-transparent border-solid border-primary">
      <p className="font-rokkitt font-thin text-3xl lg:text-5xl my-4 lg:my-10">
        {date} {month}. {year} {time}
      </p>
    </aside>
  )
}
