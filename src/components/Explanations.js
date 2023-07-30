import { memo } from "react";

/* eslint-disable react/no-unescaped-entities */
function Explanation({ type }) {

    switch (type) {
        case "bubble":
            return (
                <>
                    <ul className="explanation-list">
                        <li>First, <span className="bg-red">swapped</span> is set to false inside of the while loop.</li>
                        <li>The for loop checks if each number <span className="bg-blue">arr[i]</span>, is less than the number to its right <span className="bg-green">arr[i+1]</span>.</li>
                        <li>If <span className="bg-blue">arr[i]</span> is less than <span className="bg-green">arr[i+1]</span> it moves to the next number.</li>
                        <li>If <span className="bg-blue">arr[i]</span> is greater than <span className="bg-green">arr[i+1]</span>  they swap places.</li>
                        <li>Each time a swap is made, the variable <span className="bg-red">swapped</span> is set to true. </li>
                        <li>Once the for loop is completed, the while statement checks the value of <span className="bg-red">swapped</span>.</li>
                        <li>If it is true, the while loop will start again from the top.</li>
                        <li>If it's false, then it went through the array without a swap and the array is <span className="bg-orange">sorted</span>.</li>
                    </ul>
                </>
            )

        case "insertion":
            return (
                <>
                    <ul className="explanation-list">
                        <div>
                            The for loop passes each element to the while loop and the while loop creates 
                            the sorted array by sorting each element with only the elements to its left..
                        </div>
                        <li>The first element of the array will by default be the first element in the <span className="bg-orange">sorted array</span>.</li>
                        <li>The for loop starts at the second element which is assigned the identifier <span className="bg-green">current</span>.</li>
                        <li>The while loop compares the value of <span className="bg-green">current</span> to the value of the element before it.</li>
                        <li>If it is greater than the value before it, then it stays where it is.</li>
                        <li>If it is less than the value before it, then it swaps places with that element.</li>
                        <li>Now there are two elements in the <span className="bg-orange">sorted array</span>.</li>
                        <li>Now the for loop assigns the third element to <span className="bg-green">current</span>.</li>
                        <li>Then the while loop compares it to the value of the element that comes before it.</li>
                        <li>If it is less than the value before it, then it swaps places with that element.</li>
                        <li>The while loop repeats until the element in front of <span className="bg-green">current</span> has a value less than it.</li>
                        <li>Then the for loop starts over with the next element and repeats the process.</li>
                        <li>Once the for loop has gone through the whole array, it will be completely <span className="bg-orange">sorted</span>.</li>
                    </ul>
                </>
            )

        case "selection":
            return (
                <>
                    <ul className="explanation-list">
                        <li> On each pass through the array, the index with the lowest value will be set to the variable <span className="bg-green">min</span>.</li>
                        <li> By default the first index on each iteration of the main loop - <span className="bg-blue">array[i]</span> will start off as the <span className="bg-green">min</span>.</li>
                        <li> Then the second loop moves through the rest of the array and any index with a value less than <span className="bg-green">min</span>, will become the new <span className="bg-green">min</span>.</li>
                        <li> When the second loop reaches the end of the array, if <span className="bg-green">min</span> never changed it will stay where it is.</li>
                        <li> If <span className="bg-green">min</span> did change to a different index then that index will swap places with <span className="bg-blue">array[i]</span>.</li>
                        <li> You can now think of this as the first element in the <span className="bg-orange">sorted array</span>.</li>
                        <li> On the second pass the second index will start off as the <span className="bg-green">min</span>.</li>
                        <li> Again the second loop moves through the rest of the array and if a value is less than <span className="bg-green">min</span>, its index will become the new <span className="bg-green">min</span>.</li>
                        <li> This time when the end of the array is reached, <span className="bg-green">min</span> will swap places with the second index <span className="bg-blue">array[i]</span></li>
                        <li> Now your first two indexes are sorted and can be though of as the first two values in the <span className="bg-orange">sorted array</span>.</li>
                        <li> This continues through each index, putting the lowest value left into that index. </li>
                        <li> The main loop returns the <span className="bg-orange">sorted array</span> after the next to last index because the last index will already be sorted.</li>
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
                        <li>Then quicksort calls itself two times:</li>
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




