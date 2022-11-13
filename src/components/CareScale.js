import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'


function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

        return (
            <div>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem && (
                        <span key={rangeElem.toString()} onClick={() => handleClick(careType, scaleValue)}>{scaleType}</span>
                    )
                )}
            </div>
        )
}

function handleClick(careType, scaleValue) {
    const type = careType === 'light' ? 'lumière' : 'd\'arrosage';
    let frequence;
    if (scaleValue === 1) {
        frequence = 'peu';
    } else if (scaleValue === 2) { 
        frequence = 'modérement';
    } else {
        frequence = 'beaucoup';
    }

    alert(`Cette plante a besoin de ${frequence} de ${type}`);
}

export default CareScale