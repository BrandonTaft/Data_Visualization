import dynamic from 'next/dynamic';

function Bars() {
    const arr = [];
            for (let i = 0; i < 7;) {
                let num = Math.floor(Math.random() * 7) + 1
                while (arr.includes(num) === false) {
                    arr.push(num)
                    i++
                }
            }

    const display = arr.map((bar, index) => {
        return(
        <div className="equalizer-bar" key={index}>
                <span style={{ height: (bar * 15) }}></span>
            </div>
        )
    })

   
    return (
        <div className="equalizer">
            {display}
        </div>
    )
}

export default dynamic(()=> Promise.resolve(Bars), {ssr: false});
