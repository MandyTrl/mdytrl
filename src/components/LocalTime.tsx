export const LocalTime = () => {
  const today = new Date()
  const date = today.getDate()
  const month = today.toLocaleString([], {
    month: 'short'
  })
  const year = today.getFullYear()
  const time = today.getHours() + ':' + today.getMinutes()

  return (
    <aside className="w-full px-8 border-y-[0.5px] border-primary">
      <p className="font-rokkitt font-thin text-xl lg:text-3xl my-4 lg:my-6">
        {date} {month}. {year} {time}
      </p>
    </aside>
  )
}
