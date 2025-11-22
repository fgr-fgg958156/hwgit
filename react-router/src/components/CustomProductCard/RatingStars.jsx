import "bootstrap-icons/font/bootstrap-icons.css";

const RatingStars = ({rate, maxRate, id}) => {
    const flRate = Math.floor(rate);
    const rndRate = Math.round(rate);

    const stars = [];

    for (let i = 0; i < maxRate; i++) {
        const key = `${id}-${i}`;
        if(i<flRate){
            stars.push(<i key={key} className="bi bi-star-fill" style={{fontSize: "1.4rem"}}></i>);
        }
        else if(i === flRate){
            if(flRate < rndRate){
                stars.push(<i key={key} className="bi bi-star-half" style={{fontSize: "1.4rem"}}></i>);
            }
            else{
                stars.push(<i key={key} className="bi bi-star" style={{fontSize: "1.4rem"}}></i>);
            }
        }
        else{
            stars.push(<i key={key} className="bi bi-star" style={{fontSize: "1.4rem"}}></i>);
        }
    }
    return (
        <>{stars}</>
    )
}

export default RatingStars;