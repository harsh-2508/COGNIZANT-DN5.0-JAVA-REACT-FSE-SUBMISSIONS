Q.1. Explain Big O notation and how it helps in analyzing algorithms?
Ans. it tells us that how running time of an algorithm grows as the amount of data increases. helps us compare the efficiency of different algorithms working on the same data and perform same function over it like sorting and searching.tells us which one is faster 

Q.2. Describe the best, average, and worst-case scenarios for search operations?
Ans. i. Best-case scenario:
            ->we can say that its the fastest possible to find out the item we are search in an array or other data structure .Ex. arr=[1,2,3,4,5] ,key=1, and on the first comparison only we found out 1 . only 1 comparison =best case
      
     ii. Average-case scenario:
            ->  in a normal situation where we found out the item randomly.Ex: searching for a friend in class and you found him out in between the class, not the first and not last ,few comparison and you found it.
     
     iii. worst-case scenario:
            -> it's the slowest possible search,most time consuming.example:
                you are searching your friend in class linearly one-by-one and he found him/her at last bench.


Analysis:
    Q.1.Compare the time complexity of linear and binary search algorithms?
      ->LinearSearch= a. O(n) for worst case 
                      b. O(n) for average case
                      c. O(1) for best case

        BinarySearch= a. O(logn) for worst case 
                      b. O(logn) for average case
                      c. O(1) for best case

    Q.2. Discuss which algorithm is more suitable for your platform and why?
        -> binary search is suitable for this scenario for large and sorted dataset due its logarithmic(O(logn)) time complexity
