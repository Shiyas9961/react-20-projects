import React from 'react'

const Model = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id ? id : 'model'} className="model">
        <div className="content">
            {
                header ? (
                    header
                ) : (
                    <header>
                        <span onClick={onClose}>&times;</span>
                        <h2>This is header element</h2>
                    </header>
                )
            }
            {
                body ? (
                    body
                ) : (
                    <main>
                        <p>This is body element</p>
                    </main>
                )
            }
            {
                footer ? (
                    footer
                ) : (
                    <footer>
                        <h3>This is footer element</h3>
                    </footer>
                )
            }
        </div>
    </div>
  )
}

export default Model