import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import "./InfographicComponent.css"

interface State {
  isSlideVisible: boolean
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class InfographicComponent extends StreamlitComponentBase<State> {
  public state = { isSlideVisible: false }

  toggleText = () => {
    this.setState({ isSlideVisible: !this.state.isSlideVisible })
    console.log("toggleText = " + this.state.isSlideVisible)
  }

  public render = (): React.ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`
    const infoLabel = this.props.args["label"]
    const text = this.props.args["text"]

    return (
      < div className="slide-toggle-container">
        <button
          className="toggle-button"
          onClick={this.toggleText}>{infoLabel}</button>
        <div className={`slide-content ${this.state.isSlideVisible ? 'visible' : 'hidden'}`}>
          {text}
        </div>
      </div >
    )
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(InfographicComponent)
