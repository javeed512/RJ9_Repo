




import React from 'react'

 function Student({text,count}) {

        console.log("Student rendering ",text)

  return (
    <div>
      Student: {text} - {count}

    </div>
  )
}


export default  React.memo(Student);
