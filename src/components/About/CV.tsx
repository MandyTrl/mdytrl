import Image from 'next/image'

export const CV = () => {
  return (
    <section id="CV" className="w-[500px] rounded-xl py-4 px-6 border-[0.5px] border-gray-primary my-4">
      <div className="divide-y-[0.3px] divide-gray-primary">
        <div className="group flex items-center justify-between py-3 hover:cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/icons/list.svg"
              alt="dérouler cette ligne du CV"
              width={20}
              height={20}
              className="mr-4 duration-300 group-active:rotate-45"
            />
            <p className="duration-300 group-hover:bg-yel-primary px-2 py-1 rounded-md">Test ligne de CV poste année</p>
          </div>

          <p className="font-rokkitt">2023</p>
        </div>

        <div className="group flex items-center justify-between py-3 hover:cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/icons/list.svg"
              alt="dérouler cette ligne du CV"
              width={20}
              height={20}
              className="mr-4 duration-300 group-active:rotate-45"
            />
            <p className="duration-300 group-hover:bg-yel-primary px-2 py-1 rounded-md">Test ligne de CV poste année</p>
          </div>

          <p className="font-rokkitt">2023</p>
        </div>

        <div className="group flex items-center justify-between py-3 hover:cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/icons/list.svg"
              alt="dérouler cette ligne du CV"
              width={20}
              height={20}
              className="mr-4 duration-300 group-active:rotate-45"
            />
            <p className="duration-300 group-hover:bg-yel-primary px-2 py-1 rounded-md">Test ligne de CV poste année</p>
          </div>

          <p className="font-rokkitt">2023</p>
        </div>
      </div>
    </section>
  )
}
