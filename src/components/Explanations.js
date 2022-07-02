import Highlighter from "react-highlight-words";

export function BubbleExplanation() {
    return (
        <>
            <h2 className="explanation-title">Bubble Sort</h2>
            <p className="explanation-heading">Bubble sort is a simple comparison-based sorting algorithm, in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.</p>
            <ul className="explanation-list">
                <li>First, <span className="checked-variable">checked</span> is initialized, then <span className="checked-variable">checked</span> is set to false once inside the while loop.</li>
                <li>The for loop determines if each pair of adjacent elements are in the correct order.</li>
                <li>If <span className="array-index">arr[i]</span> is less than <span className="adjacent-element">arr[i+1]</span> the pair is already in order so it moves to the next pair.</li>
                <li>If <span className="array-index">arr[i]</span> is greater than <span className="adjacent-element">arr[i+1]</span> they swap places before the loop moves to the next pair.</li>
                <li>Each time a swap is made, the variable <span className="checked-variable">checked</span> is set to true. </li>
                <li>Once the for loop is completed, the while statement evaluates the <span className="checked-variable">checked</span> variable.</li>
                <li>If the value of <span className="checked-variable">checked</span> is true, the loop will start again from the top.</li>
                <li>Once the array is sorted, a swap is not made and the value of <span className="checked-variable">checked</span> stays false.</li>
                <li>Now the condition set by the while statement isn't met which will end the loop.</li>
            </ul>

        </>
    )
}

export function InsertionExplanation() {
    return (
        <>
            <h3 className="explanation-title">Insertion Sort</h3>
            <p className="insertion-explanation-heading">Insertion is compared to sorting a hand of cards as you draw from the top of the deck. The array is the deck and the first element is the first card.
            It will go in your sorted hand. Each subsequent element is a new card that you draw from the top of the deck and add to your sorted hand. Then put your sorted hand in the correct order before drawing another 
            card/element from the deck/original array.  </p>
            <ul className="insertion-explanation-list">
                <li>The first element will be the first element in the sorted array.</li>
                <li>The loop starts at the second element which is assigned the identifier current.</li>
                <li>current is the first element in the unsorted array (a.k.a the top card of the deck).</li>
                <li>The element in front of current is the last element in the sorted array and is tracked with j.</li>
                <li>The while loop runs as long as current is less than the element in front of it ( j ).</li>
                <li>It shifts larger elements to the right, leaving a space for current to be INSERTED in front.</li>
                <li>The for loop starts over with the new current element and repeats the process.</li>
                <li>Once the for loop completes its last iteration the  array will be completely sorted.</li>
            </ul>
        </>
    )
}  