/* eslint-disable react/no-unescaped-entities */

export function BubbleExplanation() {
    return (
        <>
            <div>
            <p className="explanation-heading">Bubble sort is a simple comparison-based algorithm, in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.</p>
            </div>
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
            <p className="explanation-heading">Insertion can be compared to sorting a hand of cards as you draw from the top of a deck. The unsorted array is the deck and the sorted array is your hand.
                The first element will be the first card in your hand and each subsequent element is a new card that you draw and add to your hand. You then sort your hand before drawing another
                card from the deck.  </p>
            <ul className="explanation-list">
                <li>The first element of the array will by default be the first element in the <span className="sorted-array">sorted array</span>.</li>
                <li>The loop starts at the second element which is assigned the identifier <span className="current-explanation">current</span>.</li>
                <li><span className="current-explanation">Current</span> is the first element in the <span className="unsorted-array">unsorted array</span> ( a.k.a the top card of the deck&nbsp;).</li>
                <li>The element before <span className="current-explanation">current</span> is the last element in the <span className="sorted-array">sorted array</span> and is tracked with&nbsp;<span className="j-element">j</span>.</li>
                <li>The while loop runs as long as <span className="current-explanation">current</span> is less than the element in front of it (&nbsp;<span className="j-element">arr[&nbsp;j&nbsp;]</span>&nbsp;).</li>
                <li>It shifts larger elements to the right, leaving a space for <span className="current-explanation">current</span> to be inserted in front.</li>
                <li>The for loop starts over with the new  <span className="current-explanation">current</span> element and repeats the process.</li>
                <li>Once the for loop completes its last iteration the  array will be completely sorted.</li>
            </ul>
        </>
    )
}

export function SelectionExplanation() {
    return (
        <>
            <p className="explanation-heading">In selection sort you will divide an array into two parts, sorted and unsorted. The sorted part will be on the left side and it will start off empty.
                On each pass throught the unsorted array you take the smallest element and add it to end of the sorted side. Then repeat untill you have gone through the whole array.  </p>
            <ul className="explanation-list">
                <li>The first pass will select the smallest value and move it to the left side of the array.</li>
                <li>This is now the first element in the <span className="sorted-array">sorted array</span>.</li>
                <li>On the second pass we look from the second position through the end of the array.</li>
                <li>Select the smallest value and move it to the end of the <span className="sorted-array">sorted array</span>.</li>
                <li>So on each pass we move to a new index and find the smallest value to right of it.</li>
                <li>When we find the smallest value we put it in the index position the loop is currently on.</li>
                <li>This is repeated until we have moved all of the elements to our <span className="sorted-array">sorted array</span>.</li>
            </ul>
        </>
    )
}

export function QuickExplanation() {
    return (
        <>
            <p className="explanation-heading">Quick sort utilizes a divide and conquer method. It divides a list at a pivot point, breaking it into smaller parts to 
             perform sorting opereations on them. This is where the recursion comes in, quicksort is a function that calls itself to sort the smaller lists after they are split at the pivot point.
             There are multiple ways to write this algorithm. I've decided to use this one because it makes the most sense to me. It was used in a tutorial on a Youtube channel called 
              <a className="referral" href="https://www.youtube.com/c/TheCodingTrain">&nbsp; The Coding Train.</a>  He has many great videos and I can't recommend them enough. </p>
              <ul className="insertion-explanation-list">
                <li>The first line is a condition that will break out of the loop once the array is sorted.</li>
                <li>The first step is to determine the pivot in the array.</li>
                <li><span className="j-element">Pivot value</span> will always be the last element and referred to as end.</li>
                <li><span className="sorted-array">Pivot index</span> will always start at the first element and referred to as start to begin with.</li>
                <li>Next we call the partition function and pass in the array , start and end.</li>
                <li>The partition function does all of the hard work.</li>
                <li>It loops through the array checking if each element is less than the <span className="j-element">Pivot value</span>.</li>
                <li>If it's less, the swap function swaps the places of that element with the <span className="sorted-array">pivot index</span>.</li>
                <li>If the current element is the <span className="sorted-array">pivot index</span> it will just stay where it is.</li>
                <li>Then it moves the <span className="sorted-array">pivot index</span> one spot to the right by adding 1 to it.</li>
                <li>If it's not less than the <span className="j-element">Pivot value</span> nothing happens and it moves to the next element.</li>
                <li>Once the loop is done, the swap function swaps the <span className="sorted-array">pivot index</span> with the <span className="j-element">Pivot value</span>.</li>
                <li>Then quicksort calls itself two times:</li>
                <li>Once to sort the elements on the left side of new <span className="sorted-array">pivot index</span>.</li>
                <li>And once again to sort the elements on the right side of the new <span className="sorted-array">pivot index</span>.</li>
                <li>When the subarrays are down to fewer than two elements it will not pass the condition.</li>
                <li>This breaks the loop and since the subarrays are sorted in place, the array is sorted.</li>
            </ul>
        </>
    )
}