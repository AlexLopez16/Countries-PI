import GitHub from "../../assets/github.svg";
import Linkedin from "../../assets/linkedin.svg";
import Express from "../../assets/express.svg";
import Node from "../../assets/node.svg";
import Postgres from "../../assets/postgres.svg";
import ReactIcon from "../../assets/react.svg";
import Sequelize from "../../assets/sequelize.svg";

import "../../styles/ui/footer.css";

export const Footer = () => {

    const logos = [
        {
            name: Express,
            class: 'express',
            url: "https://expressjs.com/"
        },
        {
            name: Node,
            class: 'node',
            url: "https://nodejs.org/en/"
        },
        {
            name: Postgres,
            class: 'postgres',
            url: "https://www.postgresql.org/"
        },
        {
            name: ReactIcon,
            class: 'reactIcon',
            url: "https://reactjs.org/"
        },
        {
            name: Sequelize,
            class: 'sequelize',
            url: "https://sequelize.org/"
        }
    ]

    const year = new Date().getFullYear();
    return (
        <footer className="footer-page">
            <div className="group-1">
                <div className="box1">
                    <h2>MADE WITH</h2>
                    {
                        logos.map(logo => (
                            <a href={logo.url} target='_blank' key={logo.name}>
                                <img className={logo.class} src={logo.name} alt={`${logo.name} Logo`} />
                            </a>
                        ))
                    }
                </div>

                <div className="box2">
                    <h2>ABOUT ME</h2>
                    <p>I'm a Web FullStack Student at Henry</p>
                    <p>My skills: HTML, CSS, JavaScript, TypeScript, React, NextJs, NodeJs, ExpressJs, MongoDB, PostgreSQL, MySQL, Sequelize</p>
                </div>

                <div className="box3">
                    <h2>FOLLOW ME</h2>
                    <div className="social-media">
                        <a href="https://github.com/AlexLopez16" target='_blank'>
                            <img src={GitHub} alt='GitHub Image' />
                        </a>
                        <a href="https://www.linkedin.com/in/alexlopzr/" target='_blank'>
                            <img src={Linkedin} alt='Linkedin Image' />
                        </a>
                    </div>
                </div>

            </div>

            <div className="group-2">
                <small>&copy; {year} <b>Alejandro Lopez</b> - All Rights Reserved.</small>
            </div>

        </footer>
    )
}
