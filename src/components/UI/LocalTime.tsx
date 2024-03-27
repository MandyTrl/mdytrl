export const LocalTime = () => {
  const today = new Date()
  const date = today.getDate()
  const month = today.toLocaleString([], {
    month: 'short'
  })
  const year = today.getFullYear()
  const time = today.getHours() + ':' + today.getMinutes()

  return (
    <aside className="w-full border-y-[0.5px] border-primary">
      <p className="font-rokkitt font-light text-lg md:text-3xl my-1 md:my-4 lg:my-6 pl-4 md:pl-0">
        {date} {month}. {year} {time}
      </p>
    </aside>
  )
}
