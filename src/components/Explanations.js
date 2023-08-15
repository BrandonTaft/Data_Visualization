import React, { memo } from "react";

/* eslint-disable react/no-unescaped-entities */
function Explanation({ type }) {

    switch (type) {
        case "bubble":
            return (
                <>
                    <ul className="explanation-list">
                        <li>First, <span className="bg-red">swapped</span> is set to false inside of the while loop.</li>
                        <li>The for loop checks if each number - <span className="bg-blue">arr[i]</span>, is less than the number to its right <span className="bg-green">arr[i+1].</span></li>
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
                        <li>The first element of the array will by default be the first element in the <span className="bg-orange">sorted array.</span></li>
                        <li>The rest of the array will be considered the unsorted array.</li>
                        <li>The for loop starts at the second element which is assigned the identifier <span className="bg-green">current.</span></li>
                        <li>The while loop compares the <span className="bg-green">current</span> element to the element to its left <span className="bg-blue">arr[j].</span></li>
                        <li>If <span className="bg-green">current</span> is less than the number to its left it swaps places with that element.</li>
                        <li>Then <span className="bg-green">current</span> is compared to the next element that is on its left.</li>
                        <li>This repeats as long as there is an element to the left of <span className="bg-green">current</span> that has a greater value.</li>
                        <li>If <span className="bg-green">current</span> is greater than the element to its left, it stays where it is.</li>
                        <li>Then the for loop starts over with the next element in the unsorted array and repeats the process.</li>
                        <li>Once the for loop has gone through the whole unsorted array, the <span className="bg-orange">sorted array</span> is returned.</li>
                    </ul>
                </>
            )

        case "selection":
            return (
                <>
                    <ul className="explanation-list">
                    <li> On each pass of the main for loop, <span className="bg-blue">arr[i]</span> is the last index of the <span className="bg-orange">sorted array.</span></li>
                        {/* <li> The second for loop looks for the smallest value left and puts it in the <span className="bg-blue">arr[i]</span> index.</li>
                        <li> On each pass through the array, the index with the lowest value will be set to the variable <span className="bg-green">min.</span></li> */}
                        <li> By default, the element that is already in <span className="bg-blue">arr[i]</span> will start as <span className="bg-green">min.</span></li>
                        <li> The second loop compares each element to <span className="bg-green">min</span> and if its value is lower it will be set to <span className="bg-green">min.</span></li>
                        <li> When each pass is finished <span className="bg-green">min</span> will swap places with <span className="bg-blue">arr[i].</span></li>
                        
                     
                        
                        <li> If <span className="bg-blue">arr[i]</span> already had the lowest value it will stay where it is.</li>
                        
                        <li> The <span className="bg-orange">sorted array</span> is returned after the next to last index because the last index will already be sorted.</li>
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
                        <li>Inside the Partition function, the first index will start as the <span className="bg-orange">PivotIndex</span> and the last index will always be the <span className="bg-blue">PivotValue.</span></li>
                        <li>The for loop checks if each element is less than the <span className="bg-blue">PivotValue</span>.</li>
                        <li>If the element is less than the <span className="bg-blue">PivotValue</span> it swaps places with the <span className="bg-orange">pivotIndex</span>, then the <span className="bg-orange">pivotIndex</span> moves up one index to the right
                        to keep the lesser values to its left.</li>
                        <li>If the element is greater than the <span className="bg-blue">PivotValue</span>, nothing changes.</li>
                        {/* <li>To clarify, if an element is less than the <span className="bg-blue">PivotValue</span> it will swap places with the value of the <span className="bg-orange">pivotIndex</span>,
                            if the element was already in the pivotIndex it will just stay where it is. Then the <span className="bg-orange">pivotIndex</span> will move one spot to the right, meaning
                            the element that was on the right of the <span className="bg-orange">pivotIndex</span> will now be the new <span className="bg-orange">pivotIndex</span>.</li> */}
                        <li>When the loop reaches the <span className="bg-blue">PivotValue</span>, it's value is swapped with the value of the <span className="bg-orange">pivotIndex</span>.</li>
                        <li>Now all values less than the <span className="bg-blue">PivotValue</span> are on its left and all larger values are on its right.</li>
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




