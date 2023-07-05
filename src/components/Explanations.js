import { memo } from "react";

/* eslint-disable react/no-unescaped-entities */
function Explanation({ type }) {

    switch (type) {
        case "bubble":
            return (
                <>
                    <ul className="explanation-list">
                        <li>First, <span className="checked-variable">swapped</span> is set to false inside of the while loop.</li>
                        <li>The for loop checks if each number <span className="array-index">arr[i]</span>, is less than the number to its right <span className="adjacent-element">arr[i+1]</span>.</li>
                        <li>If <span className="array-index">arr[i]</span> is less than <span className="adjacent-element">arr[i+1]</span> it moves to the next number.</li>
                        <li>If <span className="array-index">arr[i]</span> is greater than <span className="adjacent-element">arr[i+1]</span>  they swap places.</li>
                        <li>Each time a swap is made, the variable <span className="checked-variable">swapped</span> is set to true. </li>
                        <li>Once the for loop is completed, the while statement checks the value of <span className="checked-variable">swapped</span>.</li>
                        <li>If it is true, the while loop will start again from the top.</li>
                        <li>If it's false, then it went through the array without a swap, so the array is sorted.</li>
                        <li>Also the condition set by the while statement isn't met which will end the loop.</li>
                    </ul>
                </>
            )

        case "insertion":
            return (
                <>
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

        case "selection":
            return (
                <>
                    <p className="explanation-heading">In selection sort you will divide an array into two parts, sorted and unsorted. The sorted part will be on the left side and it will start off empty.
                        On each pass throught the unsorted array you take the smallest element and add it to end of the sorted side. Then repeat until you have gone through the whole array.  </p>
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

        case "quick":
            return (
                <>
                    <p className="explanation-heading">Quick sort utilizes a divide and conquer method. It divides a list at a pivot point, breaking it into smaller parts to
                        perform sorting opereations on them. This is where the recursion comes in, quicksort is a function that calls itself to sort the smaller lists after they are split at the pivot point.
                        There are multiple ways to write this algorithm. I've decided to use this one because it makes the most sense to me.
                    </p>
                    <ul className="explanation-list">
                        <li>The first step is to set a condition that will break out of the loop once the array is sorted.</li>
                        <li>Next it calls the partition function and passes in the array with the first and last indexes.</li>
                        <li>Inside the Partition function, the element in that first index will always start as the <span className="sorted-array">Pivot index</span>.</li>
                        <li>While the element in the end index will always be the <span className="j-element">Pivot value</span>.</li>
                        <li>Then it loops through the array checking if each element is less than the <span className="j-element">Pivot value</span>.</li>
                        <li>If the element is greater than the <span className="j-element">Pivot value</span>, nothing changes and it moves to the next element.</li>
                        <li>If it's less than the <span className="j-element">Pivot value</span>, it's value and the value of the <span className="sorted-array">pivot index</span> will swap places.</li>
                        <li>If the element is already in the <span className="sorted-array">pivot index</span> it will stay where it is.</li>
                        <li>Then it moves the <span className="sorted-array">pivot index</span> one index to the right by adding 1 to it.</li>
                        <li>To clarify, if an element is less than the <span className="j-element">Pivot value</span> it will swap places with the value of the <span className="sorted-array">pivot index</span>,
                            if the element was already in the pivot index it will just stay where it is. Then the <span className="sorted-array">pivot index</span> will move one spot to the right, meaning
                            the element that was on the right of the <span className="sorted-array">pivot index</span> will now be the new <span className="sorted-array">pivot index</span>.</li>
                        <li>When the loop reaches the <span className="j-element">Pivot value</span>, it's value is swapped with the value of the <span className="sorted-array">pivot index</span>.</li>
                        <li>Then quicksort calls itself two times:</li>
                        <li>Once to sort the elements on the left side of new <span className="sorted-array">pivot index</span>.</li>
                        <li>And once again to sort the elements on the right side of the new <span className="sorted-array">pivot index</span>.</li>
                        <li>This process repeats until the subarrays are broken down to one element.</li>
                        <li>Now the original condition can't be met which allows the function to stup running.</li>
                        <li>Since the subarrays have been sorted in place, the array is now completely sorted.</li>
                    </ul>
                </>
            )

        default: break;
    }

}

export default memo(Explanation)




