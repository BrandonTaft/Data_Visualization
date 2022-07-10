
import CardContent from '@mui/material/CardContent';

export function BubbleCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Bubble Sort</span>
            <p className="content-description">While its not suitable for large data sets the bubble sort algorithm is a reliable sorting algorithm.
                The number of swaps in bubble sort equals the number of inversion pairs in the given array.
                When dealing with small lists, bubble sort is simple, effective, efficient, and a good place to start learning.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n^2)</span> <br />
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
                <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n^2)</span> <br />
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
                <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br />
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
            <p className="content-description"> Even though Selection Sort is inefficient with large data sets, it works well with small lists and is another great place to start learning.
                It sorts in-place, meaning no temporary storage is necessary beyond the size of the original list.
                It takes an unsorted array of numbers and at each iteration places the smallest number at the beginning of an unsorted list.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n^2)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n^2)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}

export function BucketCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Bucket Sort</span>
            <p className="content-description"> Even though Selection Sort is inefficient with large data sets, it works well with small lists and is another great place to start learning.
                It sorts in-place, meaning no temporary storage is necessary beyond the size of the original list.
                It takes an unsorted array of numbers and at each iteration places the smallest number at the beginning of an unsorted list.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n^2)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n^2)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}

export function MergeCardContent() {
    return (
        <CardContent className='card-content'>
            <span className="content-header">Merge Sort</span>
            <p className="content-description"> Even though Selection Sort is inefficient with large data sets, it works well with small lists and is another great place to start learning.
                It sorts in-place, meaning no temporary storage is necessary beyond the size of the original list.
                It takes an unsorted array of numbers and at each iteration places the smallest number at the beginning of an unsorted list.</p>
            <div className='complexity-container'>
                <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br />
                <span className="complexity">Best Time Complexity:</span> <span className="times">O(n^2)</span> <br />
                <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n^2)</span><br />
                <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
            </div>
        </CardContent>
    )
}