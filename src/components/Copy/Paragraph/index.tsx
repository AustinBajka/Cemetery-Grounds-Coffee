import React from 'react'


const ParagraphCopy = ({text, textColor }: {text: string, textColor: string}) => {
  return (
    <p className={`text-md text-${textColor} leading-8`}>{text}</p>
  )
}

export default ParagraphCopy