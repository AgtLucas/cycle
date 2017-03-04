import xs from 'xstream'
import { html } from 'snabbdom-jsx'

export function App (sources) {
  const vtree$ = xs.of(
    <div className='container'>
      <p className='text'>OK!</p>
    </div>
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
