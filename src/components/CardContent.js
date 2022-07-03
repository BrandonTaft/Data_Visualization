
import CardContent from '@mui/material/CardContent';

export function BubbleCardContent() {
    return (
        <CardContent className='red'>
            <span>Bubble Sort</span>
            <p>While its not suitable for large data sets the bubble sort algorithm is a reliable sorting algorithm.
                The number of swaps in bubble sort equals the number of inversion pairs in the given array.
                When dealing with small lists, bubble sort is simple, effective, efficient, and a good place to start learning.</p>
            <span className="complexity">Space Complexity:</span> <span className="times">O(1)</span> <br/>
            <span className="complexity">Best Time Complexity:</span> <span className="times">O(n)</span> <br/>
            <span className="complexity">Average Time Complexity:</span> <span className="times"> 0(n^2)</span><br/>
            <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> 0(n^2)</span>
        </CardContent>
    )
}

export function InsertionCardContent() {
    return (
        <CardContent className="white">
            <span>Insertion Sort</span>
            <p>Insertion Sort is arguably the most intuitive sorting algorithm. It sorts exactly like you would when drawing cards from the top of a deck.
            While it does have a high time complexity, it is still considered a useful algorithm because it is very efficient with smaller lists.
            </p>
            <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br/>
            <span className="complexity">Best Time Complexity:</span> <span className="times">0(log N)</span> <br/>
            <span className="complexity">Average Time Complexity:</span> <span className="times"> 0(n^2)</span><br/>
            <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> 0(n^2)</span>
        </CardContent>
    )
}

export function SelectionCardContent() {
    return (
        <CardContent className='selection-content'>
            <span>Selection Sort</span>
            <p> Even though Selection Sort is inefficient with large data sets, it works well with small lists and is another great place to start learning. 
            It sorts in-place, meaning no temporary storage is necessary beyond the size of the original list.
            It takes an unsorted array of numbers and at each iteration places the smallest number at the beginning of an unsorted list.</p>
            <span className="space-complexity">Space Complexity:</span> <span className="times">0(1)</span> <br/>
            <span className="complexity">Best Time Complexity:</span> <span className="times">O(n^2)</span> <br/>
            <span className="complexity">Average Time Complexity:</span> <span className="times"> O(n^2)</span><br/>
            <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> O(n^2)</span>
        </CardContent>
    )
}

export function QuickCardContent() {
    return (
        <CardContent className='light-blue'>
            <span>Quick Sort</span>
            <p> Even though Selection Sort is inefficient with large data sets, it works well with small lists and is another great place to start learning. 
            It sorts in-place, meaning no temporary storage is necessary beyond the size of the original list.
            It takes an unsorted array of numbers and at each iteration places the smallest number at the beginning of an unsorted list.</p>
            <span className="space-complexity">Space Complexity:</span> <span className="times">0(log N)</span> <br/>
            <span className="complexity">Best Time Complexity:</span> <span className="times">0(log N)</span> <br/>
            <span className="complexity">Average Time Complexity:</span> <span className="times"> 0(n^2)</span><br/>
            <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> 0(n^2)</span>
        </CardContent>
    )
}

export function BucketCardContent() {
    return (
        <CardContent className='light-blue'>
            <span>Bucket Sort</span>
            <p> Even though Selection Sort is inefficient with large data sets, it works well with small lists and is another great place to start learning. 
            It sorts in-place, meaning no temporary storage is necessary beyond the size of the original list.
            It takes an unsorted array of numbers and at each iteration places the smallest number at the beginning of an unsorted list.</p>
            <span className="space-complexity">Space Complexity:</span> <span className="times">0(N)</span> <br/>
            <span className="complexity">Best Time Complexity:</span> <span className="times">0(log N)</span> <br/>
            <span className="complexity">Average Time Complexity:</span> <span className="times"> 0(n^2)</span><br/>
            <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> 0(n^2)</span>
        </CardContent>
    )
}

export function MergeCardContent() {
    return (
        <CardContent className='light-blue'>
            <span>Merge Sort</span>
            <p> Even though Selection Sort is inefficient with large data sets, it works well with small lists and is another great place to start learning. 
            It sorts in-place, meaning no temporary storage is necessary beyond the size of the original list.
            It takes an unsorted array of numbers and at each iteration places the smallest number at the beginning of an unsorted list.</p>
            <span className="space-complexity">Space Complexity:</span> <span className="times">0(N)</span> <br/>
            <span className="complexity">Best Time Complexity:</span> <span className="times">0(log N)</span> <br/>
            <span className="complexity">Average Time Complexity:</span> <span className="times"> 0(n^2)</span><br/>
            <span className="complexity">Worst Case Time Complexity:</span> <span className="times"> 0(n^2)</span>
        </CardContent>
    )
}