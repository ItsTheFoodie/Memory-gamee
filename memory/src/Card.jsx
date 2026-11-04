import './App.css'

export default function Card({ image, onClick, isFlipped, isMatched }) {
 return (
    <div className={`card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt="Card Front" />
        </div>
        <div className="card-back">
            <img src="src/assets/sea.jpg" alt="sea"/>
        </div>
      </div>
    </div>
  )
}