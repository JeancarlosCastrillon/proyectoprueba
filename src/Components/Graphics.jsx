import React from "react";
import { GrapTitle, GraphDocumentation, Graphic, GraphicImg, GraphicTitle, GraphicsCont, GraphicsContain } from "./Styled/StyledGraphics";
import Gráfica1 from '../Images/Graphic1.png'
import Gráfica2 from '../Images/Graphic2.png'

export const Graphics = () => {
    return(
        <GraphicsContain>
            <GraphDocumentation>
                <GrapTitle>Read our documentation with code samples.</GrapTitle>
                <GraphicsCont>
                    <Graph Title = "Gráfica 1" Img={Gráfica1}/>
                    <Graph Title = "Gráfica 2" Img={Gráfica2}/>
                </GraphicsCont>
            </GraphDocumentation>
        </GraphicsContain>
    )
}

const Graph = ({Title, Img}) => {
    return(
        <Graphic>
            <GraphicTitle>{Title}</GraphicTitle>
            <GraphicImg src={Img}/>
        </Graphic>
    )
}

