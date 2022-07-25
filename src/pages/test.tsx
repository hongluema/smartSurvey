import React from 'react';
import { action, observable, observe, autorun, reaction, batch } from '@formily/reactive';
import { observer } from '@formily/reactive-react'

function Test() {

  const obs = observable({
    aa: {
      bb: 123,
    },
    cc: 1,
    dd: 2,
    name: 'formily'
  })

  autorun(() => {
    console.log('>batch:', obs.aa, obs.bb, obs.cc, obs.dd, obs.name)
  })

  observe(obs, (change) => {
    console.log('observe:', change)
  })
  
  batch(() => {
    batch.scope(() => {
      obs.aa = { bb: 666 }
    })
    batch.scope(() => {
      obs.cc = 'ccccc'
    })
    obs.bb = 321
    obs.dd = 'dddd'
  })

  const method = action.bound(() => {
    obs.aa = { bb: '哈哈哈' }
    obs.bb = '呜呜';
    obs.name = 'formily react'
  })

  const dispose =  autorun(() => {
    console.log(obs.aa.bb);
    console.log('cc:', obs.cc)
  })

  reaction(() => {
    return obs.cc + obs.dd
  }, (r) => console.log('>r:', r))

  batch(() => { 
    obs.cc = 2;
    obs.dd = 1;
  })

  obs.aa.bb = 321
  // dispose()

  autorun(() => {
    autorun.effect(() => {
      console.log('>>>>>effect')
    }, [])
  })

  return (
    <div >
      Test
      <div onClick={() => method()}>点击</div>
      <div>{ obs.name }</div>
    </div>
  );
}

export default observer(Test);
