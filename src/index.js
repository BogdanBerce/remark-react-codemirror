import React from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-codemirror-runmode'

export default function (CodeMirror, opts = {}) {
  opts = { theme: 'default', ...opts }
  class Code extends React.Component {
    static propTypes = {
      className: PropTypes.string,
      children: PropTypes.node
    }

    render () {
      const { className, children } = this.props
      const language = (className || '').split('-')[1] || ''
      const value = children[0] || ''
      const props = { value, inline: true, language, theme: opts.theme, codeMirror: CodeMirror }

      return <Highlighter {...props} />
    }
  }

  return Code
}
