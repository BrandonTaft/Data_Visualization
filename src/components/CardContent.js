
import CardContent from '@mui/material/CardContent';

export function BubbleCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Bubble Sort</span>
            <p className="content-description">While its not suitable for large data sets the bubble sort algorithm is a reliable sorting algorithm.
                The number of swaps in bubble sort equals the number of inversion pairs in the given array.
                When dealing with small lists, bubble sort is simple, effective, efficient, and a good place to start learning.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">O(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n^2)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}

export function InsertionCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Insertion Sort</span>
            <p className="content-description">Insertion Sort is arguably the most intuitive sorting algorithm. It sorts exactly like you would when drawing cards from the top of a deck.
                While it does have a high time complexity, it is still considered a useful algorithm because it is very efficient with smaller lists.
            </p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">O(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n^2)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}

export function SelectionCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Selection Sort</span>
            <p className="content-description"> Despite Selection Sort's inefficiency with large data sets, it works well with small lists.
                It sorts in-place, using no storage beyond what is needed for the original list.
                It takes the smallest number and places it at the front of the array.
                Then it takes the next smallest number and places it behind that one and repeats until the array is sorted.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">O(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n^2)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n^2)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}

export function QuickCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Quick Sort</span>
            <p className="content-description"> Quick sort is a recursive algorithm that is commonly used due to its speed and efficiency.
            It is technically an in place sorting method that uses a divide and conquer method to divide the array at a specified pivot point into subarrays.
            It then recursively sorts the subarrays of these subarrays until the array is completely sorted.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">O(n) - O(log n)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n log n)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n log n)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}

export function BucketCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Bucket Sort</span>
            <p className="content-description">Bucket sort divides the elements of an array into groups called buckets. Each bucket is then sorted using any appropriate sorting algorithm.
            It then gathers the elements from the buckets in sequential order. Once this is completed the result is a completely sorted array.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">O(n^2)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n + k)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n + k)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}

export function MergeCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Merge Sort</span>
            <p className="content-description"> Merge sort is an all around efficient comparison based algorithm that utilizes a divide and conquer method.
            It first divides the array into equal subarrays. Then it continues dividing the subarrays until each one can no longer be divided. Next it combines the subarrays back together in the same manner they were divided, except 
            the elements are put in sequential order as they are combined. </p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">O(n)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n log n)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n log n)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n log n)</span>
            </div>
        </CardContent>
    )
}