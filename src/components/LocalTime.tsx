export const LocalTime = () => {
  const today = new Date()
  const date = today.getDate()
  const month = today.toLocaleString([], {
    month: 'short'
  })
  const year = today.getFullYear()
  const time = today.getHours() + ':' + today.getMinutes()

  return (
    <aside className="border-y border-l-transparent border-r-transparent border-solid border-primary pb-6">
      <p className="font-rokkitt text-right text-xs lg:text-xl pr-2 pt-1 hover:cursor-pointer hover:scale-x-110 hover:-translate-x-12 duration-300">
        Mandy Thorel
      </p>
      <p className="font-rokkitt text-3xl lg:text-6xl">
        {date} {month}. {year} {time}
      </p>
    </aside>
  )
}
