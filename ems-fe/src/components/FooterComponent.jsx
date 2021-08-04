import React, { Component } from 'react'

export default class FooterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Tüm hakları saklıdır 2021 <a href="https://github.com/nizsimsek" className="text-muted text-decoration-none">@nizsimsek</a></span>
                </footer>
            </div>
        )
    }
}
