# Proje 1

**[22,27,16,2,18,6]**  -> Insertion Sort

1.  Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
2.  Big-O gösterimini yazınız.
3.  Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
4.  Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

  

**[7,3,5,8,2,9,4,15,6]** dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

---
1)   **[22,27,16,2,18,6]**
		**[2,27,16,22,18,6]**
		**[2,6,16,22,18,27]**
		**[2,6,16,18,22,27]**<-- Final Stage

2) **O(n<sup>2</sup>)**
3) *Best Case:* **O(n)**
	*Average Case:* **O(n<sup>2</sup>)**
	*Worst Case:*  **O(n<sup>2</sup>)**
4) **Since 18 is in the middle of the array, searching it would be an average case.**

5) **[7,3,5,8,2,9,4,15,6]**
	**[2,3,5,8,7,9,4,15,6]**
	**[2,3,4,8,7,9,5,15,6]**
	**[2,3,4,5,7,9,8,15,6]**