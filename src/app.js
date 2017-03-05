import xs from 'xstream'
import { html } from 'snabbdom-jsx'

export function App (sources) {
  // const vtree$ = xs.of(
  //   <div className='container'>
  //     <p className='text'>OK!</p>
  //   </div>
  // )

  const sinks = {
    DOM: sources.DOM.select('input').events('click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        <div>
          <input type='checkbox' /> Toggle me
          <p>{toggled ? 'ON' : 'OFF'}</p>
        </div>
      )
  }
  return sinks
}
