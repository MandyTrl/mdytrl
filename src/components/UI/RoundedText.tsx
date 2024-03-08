'use client'
import ReactCurvedText from 'react-curved-text'

export const RoundedText = () => {
  return (
    <div className="lg:absolute lg:top-16 lg:-left-20 my-4 lg:my-0">
      <ReactCurvedText
        width={200}
        height={200}
        cx={100}
        cy={100}
        rx={85}
        ry={85}
        startOffset={0}
        reversed={false}
        text="Les  choses  qui  m'enthousiasment ⁓ "
        textProps={{
          style: {
            fontSize: 20,
            textTransform: 'uppercase',
            letterSpacing: '4px'
          }
        }}
      />
    </div>
  )
}
