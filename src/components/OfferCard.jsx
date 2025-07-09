

function OfferCard(props) {
    console.log("Props mil gya..", props)
  return (
         <div class="special-card">
                    <img src={props.imageUrl} alt="Spicy Arrabiata Pasta"/>
                    <div class="card-content">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div class="card-price">Rs. {props.price}</div>
                        <a href="#" class="card-button">{props.btnText || "View Details"}</a>
                    </div>
                </div>
  )
}

export default OfferCard