
import React from 'react'

import Articles from '../component/Articles'
import Background from '../component/Background'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Slider from '../component/Slider'

export default class Landing extends React.Component {
    handleScrollTo = top => window.scrollTo({ behavior: 'smooth', top })

    render() {
        return [
            <Background key="background" />,
            <div key="content" className="content">
                <div className="section section-1">
                    <Hero
                        buttonOnClick={ () => this.handleScrollTo(840) }
                        buttonTitle="Learn More"
                        subtitle="A state-of-the-art, user friendly, powerful distributed blockchain-powered asset management system.."
                        title="Discover Grama — Asset Management" />
                </div>
                <div className="section section-2">
                    <Hero
                        buttonOnClick={ () => this.handleScrollTo(1680) }
                        buttonTitle="Learn More"
                        icon="arrow-down"
                        subtitle="Grama Network is a decentralized ecosystem that bridges the gap between entities desiring to track and trace movement across supply lines while safely storing relevant data. Stored data can be used for inventory management, logistics, analytics, marketing, sales, research, scheduling, accounting, and oversight. Grama Network is open-source with a comprehensive API making development easily accessible to third parties and Grama Foundation."
                        title="Supply Chain — At your fingertips!" />
                </div>
                <div className="section section-3">
                    <Slider
                        buttonOnClick={ () => this.handleScrollTo(2520) }
                        icon="arrow-down" />
                </div>
                <div className="section section-4">
                    <Hero
                        buttonOnClick={ () => alert('CLICKED') }
                        buttonTitle="Download"
                        subtitle="Download the Grama dashboard and create your account within seconds!"
                        title="Get Grama" />
                </div>
                <div className="section section-5">
                    <Articles />
                </div>
                <Footer />
            </div>,
        ]
    }
}
