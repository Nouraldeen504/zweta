import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ReactLoading type="spin" color="#0000FF" height={100} width={100} />
    </div>
  );
  
  export default Loading;