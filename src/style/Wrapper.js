import styled from "styled-components"

export default styled.div`
div.left {
    width: 100px;
    float:left
    height:95px;
}

p.asset {
    font-weight: 600;
    font-size: 18px;

}

p.open {
    line-height: 0.2;
    font-weight: 400;
}

p.high {
    font-weight: 400;
    line-height: 0.2;
}

p.low { 
    font-weight: 400;
    line-height: 0.2;
}

div.right {
    width: 80px;
    float:left
    height:95px;
}

p.price {
    float: right;
    font-weight: 600;
}

p.change {
    float: right;
    vertical-align: text-bottom;
    font-weight: 00;
    line-height: 1;
    padding-top: 35px;
}

    border-style: ridge;
    font-size: 14px;
    width:200px;
    float: left;
    padding-right: 5px;
    padding-left: 5px;

    background-color: "#4caf50";
    background-color: ${props => 
        props.dailyChange >= 1.5 ? "#00FF00" :
        props.dailyChange >= 1.4 & props.dailyChange < 1.5 ? "#12FF00" : 
        props.dailyChange >= 1.3 & props.dailyChange < 1.4 ? "#24FF00" : 
        props.dailyChange >= 1.2 & props.dailyChange < 1.3 ? "#35FF00" : 
        props.dailyChange >= 1.1 & props.dailyChange < 1.2 ? "#47FF00" : 
        props.dailyChange >= 1.0 & props.dailyChange < 1.1 ? "#58FF00" : 
        props.dailyChange >= 0.9 & props.dailyChange < 1.0 ? "#6AFF00" : 
        props.dailyChange >= 0.8 & props.dailyChange < 0.9 ? "#7CFF00" : 
        props.dailyChange >= 0.7 & props.dailyChange < 0.8 ? "#8DFF00" : 
        props.dailyChange >= 0.6 & props.dailyChange < 0.7 ? "#9FFF00" : 
        props.dailyChange >= 0.5 & props.dailyChange < 0.6 ? "#B0FF00" : 
        props.dailyChange >= 0.4 & props.dailyChange < 0.5 ? "#C2FF00" : 
        props.dailyChange >= 0.3 & props.dailyChange < 0.4 ? "#B0FF00" : 
        props.dailyChange >= 0.2 & props.dailyChange < 0.3 ? "#C2FF00" : 
        props.dailyChange >= 0.1 & props.dailyChange < 0.2 ? "#D4FF00" : 
        props.dailyChange >= 0.0 & props.dailyChange < 0.1 ? "#E5FF00" : 
        props.dailyChange >= -0.1 & props.dailyChange < 0.0 ? "#F7FF00" : 
        props.dailyChange >= -0.2 & props.dailyChange < -0.1 ? "#E5FF00" : 
        props.dailyChange >= -0.3 & props.dailyChange < -0.2 ? "#FFD300" : 
        props.dailyChange >= -0.4 & props.dailyChange < -0.3 ? "#FFC100" : 
        props.dailyChange >= -0.5 & props.dailyChange < -0.4 ? "#FFAF00" : 
        props.dailyChange >= -0.6 & props.dailyChange < -0.5 ? "#FF9E00" : 
        props.dailyChange >= -0.7 & props.dailyChange < -0.6 ? "#FF8C00" : 
        props.dailyChange >= -0.8 & props.dailyChange < -0.7 ? "#FF7B00" : 
        props.dailyChange >= -0.9 & props.dailyChange < -0.8 ? "#FF6900" : 
        props.dailyChange >= -1.0 & props.dailyChange < -0.9 ? "#FF5700" : 
        props.dailyChange >= -1.1 & props.dailyChange < -1.0 ? "#FF4600" : 
        props.dailyChange >= -1.2 & props.dailyChange < -1.1 ? "#FF3400" : 
        props.dailyChange >= -1.3 & props.dailyChange < 1.2 ? "#FF2300" : 
        props.dailyChange >= -1.4 & props.dailyChange < 1.3 ? "#FF1100" :
        "#FF0000"
    };
`;