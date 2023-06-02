import { useState,useEffect } from "react"
import { Container,Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerimg from "../assets/img/headerimg.svg"
import 'animate.css';
export const Banner = () => {
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [" Developer ", " UX/UI Designer ", " Video Editor "];
    const[text,SetText] = useState ('');
    const period = 200;
    const [delta, setDelta] = useState(300-Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return()=> {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length + 1);
        SetText( updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(1000);
        }
    }
    return (
        <section className = "banner" id = "home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>
                            {`Hi I'm Moe`}
                            <span className="wrap">{text}</span>
                             </h1>
                             <p>Welcome to my portfolio!
                                I'm Moe, a passionate developer constantly learning and building new apps and websites. Here, you'll find a collection of my work, showcasing my dedication to creating exceptional digital experiences. From intuitive web applications to captivating websites, each project reflects my commitment to excellence. Let's collaborate and embark on a journey of innovation together! Welcome</p>
                             <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size = {25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerimg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}