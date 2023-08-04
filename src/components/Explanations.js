import React, { memo } from "react";

/* eslint-disable react/no-unescaped-entities */
function Explanation({ type }) {

    switch (type) {
        case "bubble":
            return (
                <>
                    <ul className="explanation-list">
                        <li>First, <span className="bg-red">swapped</span> is set to false inside of the while loop.</li>
                        <li>The for loop checks if each number <span className="bg-blue">arr[i]</span>, is less than the number to its right <span className="bg-green">arr[i+1].</span></li>
                        <li>If <span className="bg-blue">arr[i]</span> is less than <span className="bg-green">arr[i+1]</span> it moves to the next number.</li>
                        <li>If <span className="bg-blue">arr[i]</span> is greater than <span className="bg-green">arr[i+1]</span>  they swap places.</li>
                        <li>Each time a swap is made, <span className="bg-red">swapped</span> is set to true. </li>
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
                        <li>The while loop compares the <span className="bg-green">current</span> element to the elements in the <span className="bg-orange">sorted array.</span></li>
                        <li>If it is less than the last element in the <span className="bg-orange">sorted array</span> it swaps places with that element.</li>
                        <li>Then it is compared to the next element in the <span className="bg-orange">sorted array.</span></li>
                        <li>This repeats until it is greater than the next element in the <span className="bg-orange">sorted array.</span></li>
                        <li>If it is greater than the next element in the <span className="bg-orange">sorted array</span> it stays where it is.</li>
                        <li>Then the for loop starts over with the next element in the unsorted array and repeats the process.</li>
                        <li>Once the for loop has gone through the whole unsorted array, it will be completely <span className="bg-orange">sorted.</span></li>
                    </ul>
                </>
            )

        case "selection":
            return (
                <>
                    <ul className="explanation-list">
                    <li> You can think of <span className="bg-blue">arr[i]</span> as the last element in the <span className="bg-orange">sorted array.</span></li>
                        <li> On each pass you are adding the lowest value left to the <span className="bg-orange">sorted array.</span></li>
                        <li> On each pass through the array, the index with the lowest value will be set to the variable <span className="bg-green">min.</span></li>
                        <li> When each pass is finished <span className="bg-green">min</span> will swap places with <span className="bg-blue">arr[i].</span></li>
                        
                        <li> By default <span className="bg-blue">arr[i]</span> will start off as the <span className="bg-green">min </span> on each pass.</li>
                        <li> Then each element is compared to <span className="bg-green">min</span> and if its value is lower it will be set to <span className="bg-green">min.</span></li>
                        <li> If <span className="bg-blue">arr[i]</span> is the lowest value it will stay where it is, otherwise <span className="bg-blue">arr[i]</span> and <span className="bg-green">min</span> swap places.</li>
                        
                        <li> The <span className="bg-orange">sorted array</span> is returned after the next to last index because the last index will already be sorted.</li>
                    </ul>
                </>
            )

        case "quick":
            return (
                <>
                    <ul className="explanation-list">
                        <li>The first step is to set a condition that will break out of the loop once the array is sorted.</li>
                        <li>Next it calls the partition function and passes in the array with the first and last indexes.</li>
                        <li>The partition function moves all values less than the pivot value to its left.</li>
                        <li>The values greater than the pivot value move to its right.</li>
                        <li>Inside the Partition function, the element in the start index will start as the <span className="bg-orange">Pivot index</span>.</li>
                        <li>While the element in the end index will always be the <span className="bg-blue">Pivot value</span>.</li>
                        <li>Then it loops through the array checking if each element is less than the <span className="bg-blue">Pivot value</span>.</li>
                        <li>If the element is greater than the <span className="bg-blue">Pivot value</span>, nothing changes and it moves to the next element.</li>
                        <li>If the element is less than the <span className="bg-blue">Pivot value</span> it swaps places with the current <span className="bg-orange">pivot index</span>.</li>
                        <li>If the element is already in the <span className="bg-orange">pivot index</span> it will stay where it is.</li>
                        <li>Then it moves the <span className="bg-orange">pivot index</span> one index to the right by adding 1 to it.</li>
                        {/* <li>To clarify, if an element is less than the <span className="bg-blue">Pivot value</span> it will swap places with the value of the <span className="bg-orange">pivot index</span>,
                            if the element was already in the pivot index it will just stay where it is. Then the <span className="bg-orange">pivot index</span> will move one spot to the right, meaning
                            the element that was on the right of the <span className="bg-orange">pivot index</span> will now be the new <span className="bg-orange">pivot index</span>.</li> */}
                        <li>This keeps the values less than the <span className="bg-blue">Pivot value</span> on the left side of the <span className="bg-orange">pivot index</span>.</li>
                        <li>When the loop reaches the <span className="bg-blue">Pivot value</span>, it's value is swapped with the value of the <span className="bg-orange">pivot index</span>.</li>
                        <li>Now the <span className="bg-blue">Pivot value</span> is in its correct index and the process is repeated with the remaing elements.</li>
                        <li>Then quicksort calls itself two times-</li>
                        <li>Once to sort the elements on the left side of the <span className="bg-orange">pivot index</span>.</li>
                        <li>And once again to sort the elements on the right side of the <span className="bg-orange">pivot index</span>.</li>
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




