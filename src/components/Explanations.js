import Highlighter from "react-highlight-words";

export function BubbleExplanation() {
    return (
        <>
        <h2 className="explanation-title">Bubble Sort</h2>
        <p>Bubble sort is a simple comparison-based sorting algorithm, in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.</p>
        <ul className="explanation-list">
            <li>Initialize the the <span className="checked-variable">checked</span> variable, then once inside the while loop <span className="checked-variable">checked</span> is set to false.</li>
            <li>The for loop determines if each pair of adjacent elements are in the correct order.</li>
            <li>If <span className="array-index">arr[i]</span> is less than <span className="adjacent-element">arr[i+1]</span> the pair is already in order so it moves to the next pair.</li>
            <li>If <span className="array-index">arr[i]</span> is greater <span className="adjacent-element">arr[i+1]</span> the elements are swapped and the loop moves to the next pair.</li>
            <li>Each time a swap is made, the variable <span className="checked-variable">checked</span> is set to true. </li>
            <li>Once the for loop is completed, the while statement evaluates the <span className="checked-variable">checked</span> variable.</li>
            <li>If the value of <span className="checked-variable">checked</span> is true, the loop will start again from the top.</li>
            <li>Once the array is sorted, a swap is not made and the value of <span className="checked-variable">checked</span> stays false.</li>
            <li>Now the condition set by the while statement isn't met and the while loop breaks out.</li>
        </ul>
        
            </>
    )
}

export function InsertionExplanation() {
    return (
        <>
        <h3 className="explanation-title">Insertion Sorting</h3>
        <p>The iteration starts at the second element. We consider the first element sorted by default. For each iteration, we keep track of the current element. Each current element will be the first element of the unsorted array - and each element before it will belong to the sorted array.

        Through a while loop, we go through the sorted array and shift elements to the right, opening up a space for the current element to be inserted.
        
        Once we find the proper place for it, the current element is inserted into the newly-opened slot. This process is repeated for each iteration until the array is sorted.
        
        Now, let's populate an array and call our sorting algorithm:</p>
        </>
    )
}  