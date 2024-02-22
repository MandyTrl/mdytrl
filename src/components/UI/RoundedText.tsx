'use client'
import ReactCurvedText from 'react-curved-text'

export const RoundedText = () => {
  return (
    <div className="absolute -top-20 -right-20">
      <ReactCurvedText
        width={200}
        height={200}
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
