import React from 'react';
const DJProvider = (props) => {
  return (
    <div className='dj-component-void-decorator'>
      <>
      { props.children }
      </>
    </div>
  )
}
 
export default DJProvider;
