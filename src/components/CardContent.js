
export default function CardContent({ type }) {
    switch (type) {
        case "bubble":
            return (
                <div className='card-content'>
                    <span className="content-header">BUBBLE SORT</span>
                    <p className="content-description">
                        Bubble sort is a simple, effective, and easy to understand sorting algoritm. Although it is not suitable for large data sets,
                        it is a great place to start learning about sorting algorithms.
                    </p>
                    <div className='complexity-container'>
                        <span>Memory:  <span className="times">O(1)</span></span>
                        <span>Runtime:  <span className="times"> O(n^2)</span></span>
                    </div>
                </div>
            )
        case "insertion":
            return (
                <div className='card-content'>
                    <span className="content-header">INSERTION SORT</span>
                    <p className="content-description">Insertion Sort is arguably the most intuitive sorting algorithm.
                        While it does have a high time complexity, it is still considered a useful algorithm because it is very efficient with smaller lists.
                    </p>
                    <div className='complexity-container'>
                        <span>Memory:  <span className="times">O(1)</span></span>
                        <span>Runtime:  <span className="times"> O(n^2)</span></span>
                    </div>
                </div>
            )
        case "selection":
            return (
                <div className='card-content'>
                    <span className="content-header">SELECTION SORT</span>
                    <p className="content-description"> Despite Selection Sort&apos;s inefficiency with large data sets, it works well in situations with small lists
                        and limited memory.
                        It sorts in-place, using no storage beyond what is needed for the original list.
                    </p>
                    <div className='complexity-container'>
                        <span>Memory:  <span className="times">O(1)</span></span>
                        <span>Runtime:  <span className="times"> O(n^2)</span></span>
                    </div>
                </div>
            )
        case "quick":
            return (
                <div className='card-content'>
                    <span className="content-header">QUICK SORT</span>
                    <p className="content-description"> Quick sort is a recursive algorithm noted for its speed and efficiency.
                        It divides the array into subarrays and then recursively sorts the subarrays of these subarrays until the array is sorted.</p>
                    <div className='complexity-container'>
                        <span>Memory:  <span className="times">O(n)</span></span>
                        <span>Runtime:  <span className="times"> O(n log n)</span></span>
                    </div>
                </div>
            )
        default: break;
    }
}