import React from 'react'

const CodeOutput = ({shadow}) => {
  return (
    <div className='paneChild'>
        <div className='label'>
            <span>CSS output</span>
        </div>
        <div className="codeOutput">
            box-shadow: {
                shadow.map((element)=>{
                    if (typeof element === 'number'){
                        return element + 'px';
                    }
                    return `${element}`
                }).join(" ")
            };
        </div>
    </div>

  )
}

export default CodeOutput