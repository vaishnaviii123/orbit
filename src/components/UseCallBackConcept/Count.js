import React from 'react'

function Count({text,count}) {
    console.log('rendering counter function')
  return {text}-{count}
  
}

export default React.memo(Count)
