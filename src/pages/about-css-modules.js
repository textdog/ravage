import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
return (
    <Container>
        <h1>We're about this.</h1>
        <p>Connecting is substantial.</p>
        <User 
            username="Tiff Gum"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuRp2qZkuJKQX9ERbb9zstJT3Wz-Z_V0DIFA&usqp=CAU"
            excerpt="I'm not a peasant, people used to tell me I look like Kathy Chow."
            />
    
    </Container>    
)
}