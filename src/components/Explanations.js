import React, { memo } from "react";

/* eslint-disable react/no-unescaped-entities */
function Explanation({ type }) {

    switch (type) {
        case "bubble":
            return (
                <>
                    <ul className="explanation-list">
                        <li>First, <span className="bg-red">swapped</span> is set to false inside of the while loop.</li>
                        <li>The for loop checks if each element <span className="bg-blue">arr[i]</span> is less than the element to its right <span className="bg-green">arr[i+1].</span></li>
                        <li>If <span className="bg-blue">arr[i]</span> is less than <span className="bg-green">arr[i+1]</span>, nothing changes and the loop moves to the next index.</li>
                        <li>If <span className="bg-blue">arr[i]</span> is greater than <span className="bg-green">arr[i+1]</span>,  the two elements swap places.</li>
                        <li><span className="bg-red">swapped</span> is set to true each time a swap is made. </li>
                        <li>Once the for loop is completed, the while statement checks the value of <span className="bg-red">swapped.</span></li>
                        <li>If it is true, the while loop will start again from the top.</li>
                        <li>If it's false, then it went through the array without a swap and the array is <span className="bg-orange">sorted.</span></li>
                    </ul>
                </>
            )

        case "insertion":
            return (
                <>
                    <ul className="explanation-list">
                        <div>
                            The for loop passes each element to the while loop and the while loop creates
                            the sorted array by sorting each element with only the elements to its left.
                        </div>
                        <li>The first element of the array will be the first element in the <span className="bg-orange">sorted array.</span></li>
                        <li>The rest of the array will be considered the <span className="bg-purple">unsorted array.</span></li>
                        <li>The for loop starts at the second index which is assigned the identifier <span className="bg-green">current.</span></li>
                        <li>The while loop then compares <span className="bg-green">arr[current]</span> the element to its left <span className="bg-blue">arr[j].</span></li>
                        <li>If <span className="bg-green">arr[current]</span> is less than the element to its left, it swaps places with that element.</li>
                        <li>Then <span className="bg-green">arr[current]</span> is compared to the new element that is now on its left.</li>
                        <li>This repeats as long as there is an element to the left of <span className="bg-green">arr[current]</span> that has a greater value.</li>
                        <li>If <span className="bg-green">arr[current]</span> is greater than the element to its left, it stays where it is.</li>
                        <li>Then the for loop starts over with the next element in the unsorted array and repeats the process.</li>
                        <li>Once the for loop has gone through the whole unsorted array, the <span className="bg-orange">sorted array</span> is returned.</li>
                    </ul>
                </>
            )

        case "selection":
            return (
                <>
                    <ul className="explanation-list">
                        <li> On each pass of the outer for loop, <span className="bg-blue">arr[i]</span> is the last index of the <span className="bg-orange">sorted array.</span></li>
                        <li> <span className="bg-blue">arr[i]</span> will always start as <span className="bg-green">minIndex</span> and all elements to the right of <span className="bg-blue">arr[i]</span> make up the <span className="bg-purple">unsorted array.</span></li>
                        <li> The nested loop compares each element in the <span className="bg-purple">unsorted array</span> to the value of <span className="bg-green">arr[minIndex].</span></li>
                        <li> If its value is lower than <span className="bg-green">arr[minIndex]</span> then its index will now be set to <span className="bg-green">minIndex.</span></li>
                        <li> When each pass of the nested for loop is finished, <span className="bg-green">arr[minIndex]</span> will swap places with <span className="bg-blue">arr[i].</span></li>
                        <li> If <span className="bg-blue">arr[i]</span> already had the lowest value it will stay where it is.</li>
                        <li> Then the outer loop moves to the next index and the process is repeated.</li>
                        <li> The outer loop returns the array after the next to last index because the last index will already be sorted.</li>
                    </ul>
                </>
            )

        case "quick":
            return (
                <>
                    <ul className="explanation-list">
                        <li>If the array has fewer than 2 elements it is returned immediately.</li>
                        <li>Next it calls the partition function which moves all values less than the pivot value to its left
                            and all values greater than the pivot value move to its right.</li>
                        <li>Inside the Partition function, the <span className="bg-orange">pivotIndex</span> will start as the first index and move right one spot for every element that is less than the <span className="bg-blue">pivotValue.</span></li>
                        <li> The value in the last index will always be the <span className="bg-blue">pivotValue.</span></li>
                        <li>The for loop checks if each element is less than the <span className="bg-blue">pivotValue.</span></li>
                        <li>If the element is less than the <span className="bg-blue">pivotValue</span> it swaps places with the element in the <span className="bg-orange">pivotIndex</span>, then the <span className="bg-orange">pivotIndex</span> moves up one index to the right
                            to keep the lesser values to its left.</li>
                        <li>If the element is greater than the <span className="bg-blue">pivotValue,</span> nothing changes.</li>
                        <li>When the loop reaches the <span className="bg-blue">pivotValue,</span> it's value is swapped with the value of the <span className="bg-orange">pivotIndex</span>.</li>
                        <li>Now the <span className="bg-blue">pivotValue</span> is in the <span className="bg-orange">pivotIndex</span> and all values less than the <span className="bg-blue">pivotValue</span> are on its left and all larger values are on its right.</li>
                        <li>The Partition function returns the <span className="bg-orange">pivotIndex</span> and quicksort calls itself two times.</li>
                        <li>Once with the elements on the left side of the <span className="bg-orange">pivotIndex</span> and once with the elements on the right side.</li>
                        <li>This process repeats until the subarrays are broken down to one element.</li>
                        <li>Now the original condition can't be met which allows the function to stop running.</li>
                        <li>Since the subarrays have been sorted in place, the array is now completely sorted.</li>
                    </ul>
                </>
            )

        default: break;
    }

}

export default memo(Explanation)




