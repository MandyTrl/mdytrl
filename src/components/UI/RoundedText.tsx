'use client'
import ReactCurvedText from 'react-curved-text'

export const RoundedText = () => {
  return (
    <div className="lg:absolute lg:-top-20 lg:-right-28 my-4 lg:my-0">
      <ReactCurvedText
        width={165}
        height={165}
        cx={80}
        cy={80}
        rx={73}
        ry={73}
        startOffset={0}
        reversed={false}
        text="Les choses qui m'enthousiasme ⁓"
        textProps={{
          style: { fontSize: 18, textTransform: 'uppercase', letterSpacing: '4px', border: 'solid 0.5px black' }
        }}
      />
    </div>
  )
}
