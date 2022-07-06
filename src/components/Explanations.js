import Highlighter from "react-highlight-words";

export function BubbleExplanation() {
    return (
        <>  
            <p className="explanation-heading">Bubble sort is a simple comparison-based sorting algorithm, in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.</p>
            <ul className="explanation-list">
                <li>First, <span className="checked-variable">checked</span> is initialized, then it is set to false once inside the while loop.</li>
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
            <p className="insertion-explanation-heading">Insertion can be compared to sorting a hand of cards as you draw from the top of a deck. The unsorted array is the deck and the sorted array is your hand.
            The first element will be the first card in your hand and each subsequent element is a new card that you draw and add to your hand. You then sort your hand before drawing another 
            card from the deck.  </p>
            <ul className="insertion-explanation-list">
                <li>The first element of the array will by default be the first element in the <span className="sorted-array">sorted array</span>.</li>
                <li>The loop starts at the second element which is assigned the identifier <span className="current-explanation">current</span>.</li>
                <li><span className="current-explanation">Current</span> is the first element in the <span className="unsorted-array">unsorted array</span> ( a.k.a the top card of the deck ).</li>
                <li>The element before <span className="current-explanation">current</span> is the last element in the <span className="sorted-array">sorted array</span> and is tracked with <span className="j-element">j</span>.</li>
                <li>The while loop runs as long as <span className="current-explanation">current</span> is less than the element in front of it ( <span className="j-element">arr[ j ]</span> ).</li>
                <li>It shifts larger elements to the right, leaving a space for <span className="current-explanation">current</span> to be inserted in front.</li>
                <li>The for loop starts over with the new  <span className="current-explanation">current</span> element and repeats the process.</li>
                <li>Once the for loop completes its last iteration the  array will be completely sorted.</li>
            </ul>
        </>
    )
}  