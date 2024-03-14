export const LocalTime = () => {
  const today = new Date()
  const date = today.getDate()
  const month = today.toLocaleString([], {
    month: 'short'
  })
  const year = today.getFullYear()
  const time = today.getHours() + ':' + today.getMinutes()

  return (
    <aside className="border-y border-l-transparent border-r-transparent border-solid border-primary">
      <p className="font-rokkitt text-right text-xs lg:text-xl pr-2 -pt-1">Hey !</p>
      <p className="font-rokkitt text-3xl lg:text-5xl mt-6 mb-12">
        {date} {month}. {year} {time}
      </p>
    </aside>
  )
}
