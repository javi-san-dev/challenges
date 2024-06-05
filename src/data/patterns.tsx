import { Button } from "@nextui-org/react";
import { algorithmList, dataStructureList } from "../helpers/constants";

/*
 *****************************************************************************************************
 ********************************************* Help Info *********************************************
 *****************************************************************************************************
 */

export function HelpInfo({ updateComponent }) {
	return (
		<>
			<h4>Help</h4>
			<p className="font-extralight dark:text-neutral-400 m-0 p-0">
				In order to solve any code challenge effectively, base knowledge about data structures, algorithms patterns, and
				algorithms analysis is required. They enable you to approach problems strategically, write efficient code, and
				demonstrate strong problem-solving skills.
			</p>
			<p className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
				Check those resources to help you understand and resolve all the challenges
			</p>
			<div className="grid grid-cols-1 gap-2">
				<Button
					variant="flat"
					aria-label="render data structure patterns"
					size="md"
					radius="sm"
					className=""
					onClick={() => updateComponent("DataStructure")}
				>
					Data structures
				</Button>
				<Button
					variant="flat"
					aria-label="render data structure patterns"
					size="md"
					radius="sm"
					className=""
					onClick={() => updateComponent("AlgorithmsPatterns")}
				>
					Algorithms patterns
				</Button>
				<Button
					variant="flat"
					aria-label="Zoom in"
					size="md"
					radius="sm"
					className=""
					onClick={() => updateComponent("AlgorithmsAnalysis")}
				>
					Algorithms analysis
				</Button>
			</div>
		</>
	);
}

/*
 *****************************************************************************************************
 **************************************** Algorithms Analysis ****************************************
 *****************************************************************************************************
 */

export function AlgorithmsAnalysis({ updateComponent }) {
	return (
		<>
			<p className="font-extralight dark:text-neutral-400 m-0 p-0">
				Understanding how much memory an algorithm uses and how fast it runs is crucial to writing efficient and
				scalable code.
			</p>
			<p className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
				Check those resources to help you understand the efficiency of an algorithm
			</p>
			<div className="grid grid-cols-2 gap-2">
				<Button
					variant="flat"
					aria-label="render data structure patterns"
					size="md"
					radius="sm"
					className=""
					onClick={() => updateComponent("ComplexityAnalysis")}
				>
					Complexity analysis
				</Button>
				<Button
					variant="flat"
					aria-label="Zoom in"
					size="md"
					radius="sm"
					className=""
					onClick={() => updateComponent("BigONotation")}
				>
					Big O notation
				</Button>
			</div>
		</>
	);
}

export function BigONotation() {
	return (
		<div>
			<h3 id="big-o-notation">Big O Notation</h3>
			<p>The notation used to describe the time complexity and space complexity of algorithms.</p>
			<p>
				Variables used in Big O notation denote the sizes of inputs to algorithms. For example, O(n) might be the time
				complexity of an algorithm that traverses through an array of length n; similarly, O(n + m) might be the time
				complexity of an algorithm that traverses through an array of length n and through a string of length m.
			</p>
			<p>
				The following are examples of common complexities and their Big O notations, ordered from fastest to slowest
			</p>
			<ul>
				<li className="list">Constant O(1)</li>
				<li className="list">Logarithmic O(log(n))</li>
				<li className="list">Linear O(n)</li>
				<li className="list">Log-linear O(nlog(n))</li>
				<li className="list">Quadratic O(n2)</li>
				<li className="list">Cubic O(n3)</li>
				<li className="list">Exponential O(2n)</li>
				<li className="list">Factorial O(n!)</li>
			</ul>
			<p>
				Note that in the context of coding interviews, Big O notation is usually understood to describe the worst-case
				complexity of an algorithm, even though the worst-case complexity might differ from the average-case complexity.
			</p>
		</div>
	);
}

export function ComplexityAnalysis() {
	return (
		<div>
			<h3 id="complexity-analysis">Complexity Analysis</h3>
			<p>
				The process of determining how efficient an algorithm is. Complexity analysis usually involves finding both the
				time complexity and the space complexity of an algorithm.
			</p>
			<h3 id="time-complexity">Time Complexity</h3>
			<p>
				A measure of how fast an algorithm runs, time complexity is a central concept in the field of algorithms and in
				coding interviews.
			</p>
			<p>It&#39;s expressed using Big O notation.</p>
			<h3 id="space-complexity">Space Complexity</h3>
			<p>
				A measure of how much auxiliary memory an algorithm takes up, space complexity is a central concept in the field
				of algorithms and in coding interviews.
			</p>
			<p>It&#39;s expressed using Big O notation.</p>
		</div>
	);
}

/*
 *****************************************************************************************************
 **************************************** Algorithms Patterns ****************************************
 *****************************************************************************************************
 */

export function AlgorithmsPatterns({ updateComponent }) {
	return (
		<>
			<p className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
				Algorithms patterns are step-by-step instructions to solve a specific problem. They define the logic and
				sequence of operations to achieve a desired outcome. Some common patterns include
			</p>
			<div className="grid grid-cols-2 gap-2">
				{algorithmList.map((structure, i) => {
					return (
						<Button
							key={structure}
							variant="flat"
							aria-label="Zoom in"
							size="md"
							radius="sm"
							className=""
							onClick={() => updateComponent(structure)}
						>
							{structure}
						</Button>
					);
				})}
			</div>
		</>
	);
}

export function SlidingWindow() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				The Sliding Window pattern is an algorithmic technique for processing sequential data (arrays, strings, linked
				lists) in a time-efficient manner. It achieves this by:
			</p>
			<ul>
				<li className="list">
					Defining a window of a fixed size: This window represents the portion of the data you'll analyze at any given
					time.
				</li>
				<li className="list">
					Iterating over the data: The window slides one element at a time (either to the right or left depending on the
					problem) across the entire data set.
				</li>
				<li className="list">
					Performing an operation on the elements within the window: This operation depends on the specific problem
					you're trying to solve. It could involve calculating a sum, finding a maximum value, or identifying specific
					patterns within the window.
				</li>
				<li className="list">
					Updating the window: As the window slides, elements might enter or exit the window. You need to adjust the
					window's contents accordingly to reflect the new data segment being analyzed.
				</li>
				<li className="list">
					Repeating steps 2-4: This process continues until the entire data set has been processed by the sliding
					window.
				</li>
			</ul>
			<p className="mt-3 text-white">
				<strong>problem might require a sliding window</strong>
			</p>
			<ul>
				<li className="list">The problem input is a linear data structure such as a linked list, array, or string</li>
				<li className="list">You’re asked to find the longest/shortest substring, subarray, or a desired value</li>
				<li className="list">Maximum sum subarray of size ‘K’ (easy)</li>
				<li className="list">Longest substring with ‘K’ distinct characters (medium)</li>
				<li className="list">String anagrams (hard)</li>
			</ul>
		</div>
	);
}

export function TwoPointers() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				Two Pointers is a pattern where two pointers iterate through the data structure in tandem until one or both of
				the pointers hit a certain condition.Two Pointers is often useful when searching pairs in a sorted array or
				linked list; for example, when you have to compare each element of an array to its other elements.
			</p>
			<p>
				Two pointers are needed because with just pointer, you would have to continually loop back through the array to
				find the answer. This back and forth with a single iterator is inefficient for time and space complexity — a
				concept referred to as asymptotic analysis. While the brute force or naive solution with 1 pointer would work,
				it will produce something along the lines of O(n²). In many cases, two pointers can help you find a solution
				with better space or runtime complexity.
			</p>
			<ul>
				<li className="list">
					{" "}
					It will feature problems where you deal with sorted arrays (or Linked Lists) and need to find a set of
					elements that fulfill certain constraints
				</li>
				<li className="list"> The set of elements in the array is a pair, a triplet, or even a subarray</li>
			</ul>
		</div>
	);
}

export function FastSlowPointers() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				The Fast and Slow pointer approach, also known as the Hare & Tortoise algorithm, is a pointer algorithm that
				uses two pointers which move through the array (or sequence/linked list) at different speeds. This approach is
				quite useful when dealing with cyclic linked lists or arrays.
			</p>
			<p>
				By moving at different speeds (say, in a cyclic linked list), the algorithm proves that the two pointers are
				bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.
			</p>
			<p>How do you identify when to use the Fast and Slow pattern?</p>
			<ul>
				<li className="list">The problem will deal with a loop in a linked list or array</li>
				<li className="list">
					When you need to know the position of a certain element or the overall length of the linked list.
				</li>
			</ul>
			<p>
				There are some cases where you shouldn’t use the Two Pointer approach such as in a singly linked list where you
				can’t move in a backwards direction. An example of when to use the Fast and Slow pattern is when you’re trying
				to determine if a linked list is a palindrome.
			</p>
		</div>
	);
}

export function MergeIntervals() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				The Merge Intervals pattern is a technique used in various programming problems that involve manipulating or
				analyzing ranges represented as intervals. Here's a breakdown of the concept:
			</p>
			<p className="mt-3 text-white">
				<strong>Concept</strong>
			</p>
			<p>
				Imagine you have a list of intervals, where each interval is defined by a starting point and an ending point.
				These intervals represent a range of values or elements. The Merge Intervals pattern aims to process this list
				in a specific way, typically by:
			</p>
			<ul>
				<li className="list">
					Sorting the intervals: This is often the first step to ensure a consistent comparison order when merging or
					analyzing the intervals. Sorting is usually done based on the starting points of the intervals.
				</li>
				<li className="list">
					Iterating through the sorted intervals: You process each interval in the list, considering its relationship
					with the previous interval(s).
				</li>
				<li className="list">
					Merging overlapping intervals: If the current interval overlaps with the previous interval(s), you combine
					them into a single interval that represents the entire merged range. This merging process depends on how
					overlaps are defined (e.g., any overlap, only if one completely overlaps the other).
				</li>
				<li className="list">
					Building the resulting list: As you iterate and potentially merge intervals, you create a new list containing
					the non-overlapping intervals after processing.
				</li>
			</ul>
		</div>
	);
}

export function CyclicSort() {
	return (
		<div>
			<p>
				This pattern describes an interesting approach to deal with problems involving arrays containing numbers in a
				given range. The Cyclic Sort pattern iterates over the array one number at a time, and if the current number you
				are iterating is not at the correct index, you swap it with the number at its correct index. You could try
				placing the number in its correct index, but this will produce a complexity of O(n^2) which is not optimal,
				hence the Cyclic Sort pattern.
			</p>
			<img src="/images/CyclicSort.png" alt="cycle short" width={200} height={600} />
			<p>How do I identify this pattern?</p>
			<ul>
				<li className="list">They will be problems involving a sorted array with numbers in a given range</li>
				<li className="list">
					If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array
				</li>
			</ul>
		</div>
	);
}

export function InPlaceReversalOfLinkedList() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				In a lot of problems, you may be asked to reverse the links between a set of nodes of a linked list. Often, the
				constraint is that you need to do this in-place, i.e., using the existing node objects and without using extra
				memory. This is where the above mentioned pattern is useful.
			</p>
			<p>
				This pattern reverses one node at a time starting with one variable (current) pointing to the head of the linked
				list, and one variable (previous) will point to the previous node that you have processed. In a lock-step
				manner, you will reverse the current node by pointing it to the previous before moving on to the next node.
				Also, you will update the variable “previous” to always point to the previous node that you have processed.
			</p>
			<p>How do I identify when to use this pattern</p>
			<ul>
				<li className="list">If you’re asked to reverse a linked list without using extra memory</li>
			</ul>
		</div>
	);
}

export function BFS() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It
				explores all the neighbor nodes at the current level (depth) before moving on to the next level. Here's a
				breakdown of BFS:
			</p>
			<p>
				Imagine you're searching for something in a maze. BFS explores the maze in a level-by-level manner. You start at
				the starting point (root node in a tree or graph) and visit all its directly connected neighbors (child nodes).
				Then, you move to the neighbors of those neighbors, and so on, until you find your target or exhaust all
				possibilities.
			</p>
			<p>
				<strong className="text-white">How it Works:</strong>
			</p>
			<ul>
				<li className="list">
					Queue: BFS uses a Queue data structure, which operates on a First-In-First-Out (FIFO) principle. Nodes are
					added to the back of the queue and removed from the front.
				</li>
				<li className="list">Start Node: Begin by adding the starting node to the queue and marking it as visited.</li>
				<li className="list">
					Iteration
					<ul>
						<li className="list">Dequeue (remove) the first node from the queue.</li>
						<li className="list">If it's the target node, you've found what you're looking for (goal achieved).</li>
						<li className="list">If not, explore all its unvisited neighbors.</li>
						<li className="list">Add these unvisited neighbors to the back of the queue.</li>
						<li className="list">Mark the explored neighbor nodes as visited to avoid revisiting them.</li>
					</ul>
				</li>
				<li className="list">Repeat steps 3a-3d until the queue is empty or the target node is found.</li>
			</ul>
			<p>
				<strong className="text-white">Key points</strong>
			</p>
			<ul>
				<li className="list">
					BFS guarantees that you'll find the shortest path between the starting node and the target node if the graph
					is unweighted (all edges have the same cost).
				</li>
				<li className="list">
					It's a good choice for finding the minimum spanning tree of an unweighted graph (a tree connecting all nodes
					with minimal total edge weight).
				</li>
				<li className="list">
					BFS can be used for various applications like social network analysis, finding connected components in graphs,
					and pathfinding in mazes or games.
				</li>
			</ul>
		</div>
	);
}

export function DFS() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				Depth-First Search (DFS) is another fundamental algorithm for traversing or searching tree or graph data
				structures. Unlike Breadth-First Search (BFS) that explores all neighbors at a level, DFS delves as deep as
				possible along a single path before backtracking and exploring alternative branches. Here's a breakdown of DFS:
			</p>
			<p>
				<strong className="text-white">Concept</strong>
			</p>
			<p>
				Imagine exploring a branching cave system. DFS is like following a single tunnel as far as it goes, looking for
				your way out. If you hit a dead end, you backtrack and explore another branch that you haven't visited yet. This
				process continues until you find the exit or exhaust all possibilities.
			</p>
			<p>
				<strong className="text-white">How it Works</strong>
			</p>
			<ul>
				<li className="list">
					Stack: DFS uses a Stack data structure, which operates on a Last-In-First-Out (LIFO) principle. Nodes are
					pushed (added) onto the top of the stack and popped (removed) from the top.
				</li>
				<li className="list">
					Start Node: Begin by pushing the starting node onto the stack and marking it as visited.
				</li>
				<li className="list">
					{" "}
					Iteration
					<ul>
						<li className="list">Pop the top node from the stack.</li>
						<li className="list">If it's the target node, you've found what you're looking for (goal achieved).</li>
						<li className="list">If not, explore any unvisited neighbors of the popped node.</li>
						<li className="list">Push these unvisited neighbors onto the top of the stack.</li>
						<li className="list">Mark the explored neighbor nodes as visited to avoid revisiting them.</li>
					</ul>
				</li>
				<li className="list">Repeat steps 3a-3d until the stack is empty or the target node is found.</li>
			</ul>
			<p>
				<strong className="text-white">Key Points</strong>
			</p>
			<ul>
				<li className="list">
					DFS doesn't necessarily find the shortest path between the starting node and the target node.
				</li>
				<li className="list">
					It's a good choice for finding cycles in graphs or checking if a graph is connected (all nodes are reachable
					from the starting node).
				</li>
				<li className="list">
					DFS can be used for various applications like topological sorting (ordering tasks with dependencies), finding
					connected components in undirected graphs, and maze solving algorithms.
				</li>
			</ul>
		</div>
	);
}

export function TwoHeaps() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				Heaps are specialized tree-based data structures used for efficient retrieval of specific elements based on a
				defined order. There are two main types of heaps with distinct functionalities:
			</p>
			<p>1. Min Heap:</p>
			<ul>
				<li className="list">
					Ordering: A min heap maintains the property that the value at the root node is always the minimum value
					compared to all its children (nodes below it) in the tree.
				</li>
				<li className="list">
					Operations
					<ul>
						<li className="list">
							Extract-Min: This operation efficiently removes and returns the minimum element from the heap (the root
							node). Since the root has the minimum value, removing it maintains the heap property. The remaining
							elements are then rearranged to ensure the new root remains the minimum.
						</li>
						<li className="list">
							Insert: When inserting a new element, you compare it with its parent node. If the new element is smaller,
							it gets swapped with the parent, and the process continues recursively up the tree until the heap property
							(minimum at root) is restored.
						</li>
					</ul>
				</li>
				<li className="list">
					Applications:
					<ul>
						<li className="list">
							Finding the minimum element in a collection of data (e.g., finding the closest available job in a priority
							queue).
						</li>
						<li className="list">Implementing efficient sorting algorithms like Heapsort.</li>
						<li className="list">Huffman coding for data compression.</li>
					</ul>
				</li>
			</ul>
			<p>2. Max Heap:</p>
			<ul>
				<li className="list">
					Ordering: A max heap operates in the opposite way. The value at the root node is always the maximum value
					compared to all its children in the tree.
				</li>
				<li className="list">
					Operations
					<ul>
						<li className="list">
							Extract-Max: This operation removes and returns the maximum element from the heap (the root node). Similar
							to the min heap, the remaining elements are rearranged to ensure the new root remains the maximum.
						</li>
						<li className="list">
							Insert: When inserting a new element, you compare it with its parent node. If the new element is larger,
							it gets swapped with the parent, and the process continues recursively up the tree until the heap property
							(maximum at root) is restored.
						</li>
					</ul>
				</li>
				<li className="list">
					Applications:
					<ul>
						<li className="list">
							Finding the maximum element in a collection of data (e.g., finding the highest bid in an auction).
						</li>
						<li className="list">Implementing efficient sorting algorithms like Heapsort (modified for max values).</li>
						<li className="list">
							Maintaining priority queues where the element with the highest priority needs to be accessed first.
						</li>
					</ul>
				</li>
			</ul>
			<p>Choosing the Right Heap</p>
			<p>
				The choice between a min heap and a max heap depends on your specific needs. If you need to efficiently find the
				minimum element, use a min heap. Conversely, if you need to find the maximum element or prioritize elements
				based on their highest value, use a max heap.
			</p>
		</div>
	);
}

export function Subsets() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				The subset algorithm pattern is a technique to find all possible subsets of a given set. It's particularly
				useful when you want to explore every combination of elements within a set.
			</p>
			<p>Description</p>
			<p>
				The subset pattern involves generating all possible subsets of a given set. For a set of size n, there are 2n
				possible subsets, including the empty set and the set itself. This pattern is typically used in problems where
				you need to:
			</p>
			<ul>
				<li className="list">Enumerate all possible combinations of elements.</li>
				<li className="list">
					Solve problems related to sets, such as finding all subsets that satisfy certain conditions.
				</li>
				<li className="list">Explore different configurations or selections of elements.</li>
			</ul>
			<p>
				The subset pattern can be implemented using various approaches, such as backtracking, iterative methods, and bit
				manipulation. Here, we’ll discuss the backtracking (recursive) approach, which is one of the most intuitive ways
				to generate all subsets.
			</p>
			<ul>
				<li className="list">Initialize an empty list to store all subsets.</li>
				<li className="list">
					Define a recursive function that takes the current index and the current subset as arguments.
				</li>
				<li className="list">
					If the current index is equal to the length of the input set, add the current subset to the list of all
					subsets and return.
				</li>
				<li className="list">
					Otherwise, recursively call the function twice:
					<ul>
						<li className="list">Once including the current element in the subset.</li>
						<li className="list">Once excluding the current element from the subset.</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export function ModifiedBinarySearch() {
	return (
		<div>
			<p>
				Whenever you are given a sorted array, linked list, or matrix, and are asked to find a certain element, the best
				algorithm you can use is the Binary Search. This pattern describes an efficient way to handle all problems
				involving Binary Search.
			</p>
			<p>The patterns looks like this for an ascending order set</p>
			<ul>
				<li className="list">
					First, find the middle of start and end. An easy way to find the middle would be middle = (start + end) / 2.
					But this has a good chance of producing an integer overflow so it’s recommended that you represent the middle
					as middle = start + (end — start) / 2
				</li>
				<li className="list">If the key is equal to the number at index middle then return middle</li>
				<li className="list">If ‘key’ isn’t equal to the index middle</li>
				<ul>
					<li className="list">Check if key {"<"} arr[middle]. If it is reduce your search to end = middle — 1</li>
					<li className="list">Check if key {">"} arr[middle]. If it is reduce your search to end = middle + 1</li>
				</ul>
			</ul>
			<p>Here is a visual representation of the Modified Binary Search pattern</p>
			<img src="/images/binarySearch.png" alt="binary search" width={600} height={300} />
		</div>
	);
}

export function TopKElements() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				The "Top K Elements" pattern is used to solve problems where you need to find the top K largest or smallest
				elements in a dataset. This pattern is common in scenarios like finding the highest scores, the most frequent
				items, or the closest points. The key idea is to efficiently maintain and retrieve the top K elements using
				appropriate data structures.
			</p>
			<p>Description</p>
			<p>
				The Top K Elements pattern involves using a data structure that allows for efficient insertion, deletion, and
				retrieval of the K largest or smallest elements. The most common data structure used for this purpose is a heap
				(priority queue). Depending on whether you are looking for the largest or smallest elements, you can use a
				min-heap or max-heap.
			</p>
			<p>Applications</p>
			<ul>
				<li className="list">Finding Top Scores: Identifying the top K scores in a competition.</li>
				<li className="list">Most Frequent Items: Finding the K most frequent elements in a list.</li>
				<li className="list">Closest Points: Finding the K points closest to a given point in a set of points.</li>
				<li className="list">Streaming Data: Continuously identifying the top K elements in a stream of data.</li>
			</ul>
		</div>
	);
}

export function KwayMerge() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				The "K-way Merge" pattern is used to merge multiple sorted arrays (or lists) into a single sorted array. This
				pattern is particularly useful in scenarios like merging results from different sources, sorting large datasets
				that have been divided into smaller sorted chunks, and in algorithms like the merge step of merge sort and
				external sorting algorithms.
			</p>
			<p>Description</p>
			<p>
				The K-way Merge pattern involves using a data structure that allows for efficiently retrieving and managing the
				smallest (or largest) elements from multiple sorted arrays. The most common data structure for this purpose is a
				min-heap (priority queue). The idea is to initialize the heap with the first element of each array, and then
				repeatedly extract the smallest element from the heap, adding the next element from the same array to the heap,
				until all elements have been processed.
			</p>
			<p>Applications</p>
			<ul>
				<li className="list">External Sorting: Merging sorted runs in external merge sort.</li>
				<li className="list">Merge K Sorted Lists: Merge K sorted linked lists into one sorted linked list.</li>
				<li className="list">
					Find K Smallest Elements in N Sorted Arrays: Given N sorted arrays, find the K smallest elements among them.
				</li>
				<li className="list">Multilevel Sorting: Merging sorted subarrays in multi-pass sorting algorithms.</li>
			</ul>
		</div>
	);
}

export function TopologicalSort() {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>
				Topological sort is a fundamental algorithm in computer science used to order the vertices of a directed acyclic
				graph (DAG) such that for every directed edge � → � u→v, vertex � u comes before vertex � v in the ordering.
				This type of sorting is particularly useful in scenarios involving dependency resolution, such as task
				scheduling, course prerequisite planning, and compilation processes.
			</p>
			<p>Description</p>
			<p>
				Topological sorting provides a linear ordering of vertices in a DAG, which respects the precedence constraints
				imposed by the directed edges. Unlike typical sorting algorithms used for lists or arrays, topological sort
				applies to graph structures, specifically those that are acyclic and directed.
			</p>
		</div>
	);
}

/*
 *****************************************************************************************************
 ************************************** Data structure Patterns **************************************
 *****************************************************************************************************
 */

export function DataStructure({ updateComponent }) {
	return (
		<div className="font-extralight dark:text-neutral-400 m-0 p-0 mb-4">
			<p>Data structures are organized ways to store and access data efficiently. enabling programs to:</p>
			<ul>
				<li className="list">Manage and manipulate data effectively.</li>
				<li className="list">Optimize access times, storage usage, and overall program performance.</li>
				<li className="list">Represent relationships between different pieces of data.</li>
			</ul>
			<p>
				Different data structures have different strengths and weaknesses, making them suitable for specific tasks.
				Common data structures include:
			</p>
			<div className="grid grid-cols-2 gap-2 mt-4">
				{dataStructureList.map((structure, i) => {
					return (
						<Button
							key={structure}
							variant="flat"
							aria-label="Zoom in"
							size="md"
							radius="sm"
							className=""
							onClick={() => updateComponent(structure)}
						>
							{structure}
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export function Arrays() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p>A linear collection of data values that are accessible at numbered indices, starting at index 0.</p>
			<p className="mt-3">
				<p className="mt-3">
					<strong className="text-white">Pros</strong>
				</p>
			</p>
			<ul>
				<li className="list">Efficient for random access but less efficient for insertions/removals in the middle.</li>
			</ul>
			<p className="mt-3">
				<p className="mt-3">
					<strong className="text-white">Cons</strong>
				</p>
			</p>
			<ul>
				<li className="list">
					Fixed size (static arrays): Requires setting initial capacity and cannot be expanded. (This applies to static
					arrays; dynamic arrays can resize but with some cost.)
				</li>
				<li className="list">
					Inserting or removing elements, especially in the middle, can be inefficient O(n), because you need to
					traverse elements based on the index.
				</li>
			</ul>
			<p className="mt-3">
				<p className="mt-3">
					<strong className="text-white">Notable uses</strong>
				</p>
			</p>
			<ul>
				<li className="list">Implementation of stacks, queues, and graphs.</li>
			</ul>

			<p className="mt-3">
				<p className="mt-3">
					<strong className="text-white">Arrays standard operations (time complexity)</strong>
				</p>
			</p>
			<ul>
				<li className="list">Accessing to a given index O(1)</li>
				<li className="list">Updating to a given index O(1)</li>
				<li className="list">Inserting at the beginning O(n)</li>
				<li className="list">Inserting in the middle O(n)</li>
				<li className="list">
					Inserting at the end
					<ul>
						<li className="list">amortized O(1) when dealing with a dynamic array</li>
						<li className="list">O(n) when dealing with a static array</li>
					</ul>
				</li>
				<li className="list">Removing at the beginning O(n)</li>
				<li className="list">Removing in the middle O(n)</li>
				<li className="list">Removing at the end O(1)</li>
				<li className="list">Copying the array O(n)</li>
			</ul>
		</div>
	);
}

export function LinkedList() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p className="mt-3">
				<strong className="text-white">Quick summary</strong>
			</p>
			<ul>
				<li className="list">
					a linear collection of elements ordered by links instead of physical placement in memory.
				</li>
				<li className="list">
					Each element is called a <em>node</em>.
					<ul>
						<li className="list">
							The first node is called the <em>head</em>.
						</li>
						<li className="list">
							The last node is called the <em>tail</em>.
						</li>
					</ul>
				</li>
				<li className="list">
					Nodes are sequential. Each node stores a reference (pointer) to one or more adjacent nodes
					<ul>
						<li className="list">In a singly linked list, each node stores a reference to the next node.</li>
						<li className="list">
							In a doubly linked list, each node stores references to both the next and the previous nodes. This enables
							traversing a list backwards.
						</li>
						<li className="list">In a circularly linked list, the tail stores a reference to the head.</li>
					</ul>
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Pros</strong>
			</p>
			<ul>
				<li className="list">
					Optimized for fast operations on both ends, which ensures constant time insertion and deletion.
				</li>
				<li className="list">
					Flexible capacity. Doesn't require setting initial capacity, can be expanded indefinitely.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Cons</strong>
			</p>
			<ul>
				<li className="list">
					Costly access and search. Accessing or searching for an element is O(n) since traversal from the head is
					necessary.
				</li>
				<li className="list">
					Nodes don't occupy continuous memory locations, making iteration slower compared to arrays.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Notable uses</strong>
			</p>
			<ul>
				<li className="list">Implementation of stacks, queues, and graphs.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>
			<p>The following are a singly linked list&#39;s standard operations and their corresponding time complexities</p>
			<ul>
				<li className="list">Accessing the head O(1)</li>
				<li className="list">Accessing the tail O(n)</li>
				<li className="list">Accessing a middle node O(n)</li>
				<li className="list">Inserting / Removing the head O(1)</li>
				<li className="list">Inserting / Removing the tail O(n) to access + O(1)</li>
				<li className="list">Inserting / Removing a middle node O(n) to access + O(1) Searching for a value O(n)</li>
			</ul>
			<p>The following are a doubly linked list&#39;s standard operations and their corresponding time complexities</p>
			<ul>
				<li className="list">Accessing the head O(1)</li>
				<li className="list">Accessing the tail O(1)</li>
				<li className="list">Accessing a middle node O(n)</li>
				<li className="list">Inserting / Removing the head O(1)</li>
				<li className="list">Inserting / Removing the tail O(1)</li>
				<li className="list">Inserting / Removing a middle node O(n) to access + O(1)</li>
				<li className="list">Searching for a value O(n)</li>
			</ul>
		</div>
	);
}

export function Queue() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p className="mt-3">
				<strong className="text-white">Quick summary</strong>
			</p>
			<ul>
				<li className="list">
					a sequential collection where elements are added at one end and removed from the other end.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Important facts</strong>
			</p>
			<ul>
				<li className="list">Modeled after a real-life queue first come, first served.</li>
				<li className="list">First in, first out (FIFO) data structure.</li>
				<li className="list">
					Two fundamental operations are enqueuing and dequeuing
					<ul>
						<li className="list">
							To <em>enqueue</em>, insert at the tail of the linked list.
						</li>
						<li className="list">
							To <em>dequeue</em>, remove at the head of the linked list.
						</li>
					</ul>
				</li>
				<li className="list">
					Usually implemented on top of linked lists because they're optimized for insertion and deletion, which are
					used to enqueue and dequeue elements.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Pros</strong>
			</p>
			<ul>
				<li className="list">Constant-time insertion and deletion.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Cons</strong>
			</p>
			<ul>
				<li className="list">
					Access and search are <code>O(n)</code>.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Notable uses</strong>
			</p>
			<ul>
				<li className="list">CPU and disk scheduling, interrupt handling and buffering. </li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>
			<ul>
				<li className="list">
					Access <code>O(n)</code>
				</li>
				<li className="list">
					Search <code>O(n)</code>
				</li>
				<li className="list">
					Insertion (enqueuing) <code>O(1)</code>
				</li>
				<li className="list">
					Deletion (dequeuing) <code>O(1)</code>
				</li>
			</ul>
		</div>
	);
}

export function Stack() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p className="mt-3">
				<strong className="text-white">Quick summary</strong>
			</p>
			<ul>
				<li className="list">a sequential collection where elements are added to and removed from the same end.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Important facts</strong>
			</p>
			<ul>
				<li className="list">First-in, last-out (FILO) data structure.</li>
				<li className="list">Equivalent of a real-life pile of papers on desk.</li>
				<li className="list">
					In stack terms, to insert is to <em>push</em>, and to remove is to <em>pop</em>.
				</li>
				<li className="list">
					Often implemented on top of a linked list where the head is used for both insertion and removal. Can also be
					implemented using dynamic arrays.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Pros</strong>
			</p>
			<ul>
				<li className="list">
					Fast insertions and deletions <code>O(1)</code>.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Cons</strong>
			</p>
			<ul>
				<li className="list">
					Access and search are <code>O(n)</code>.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Notable uses</strong>
			</p>
			<ul>
				<li className="list">Maintaining undo history.</li>
				<li className="list">Tracking execution of program functions via a call stack.</li>
				<li className="list">Reversing order of items.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>{" "}
			(worst case)
			<ul>
				<li className="list">
					Access <code>O(n)</code>
				</li>
				<li className="list">
					Search <code>O(n)</code>
				</li>
				<li className="list">
					Insertion (pushing) <code>O(1)</code>
				</li>
				<li className="list">
					Deletion (popping) <code>O(1)</code>
				</li>
			</ul>
		</div>
	);
}

export function HashTable() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p className="mt-3">
				<strong className="text-white">Quick summary</strong>
			</p>
			<ul>
				<li className="list">unordered collection that maps keys to values using hashing.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Also known as</strong>
			</p>{" "}
			hash, hash map, map, unordered map, dictionary, associative array.
			<p className="mt-3">
				<strong className="text-white">Important facts</strong>
			</p>
			<ul>
				<li className="list">Stores data as key-value pairs.</li>
				<li className="list">
					Can be seen as an evolution of arrays that removes the limitation of sequential numerical indices and allows
					using flexible keys instead.
				</li>
				<li className="list">
					For any given non-numeric key, <em>hashing</em> helps get a numeric index to look up in the underlying array.
				</li>
				<li className="list">
					If hashing two or more keys returns the same value, this is called a <em>hash collision</em>. To mitigate
					this, instead of storing actual values, the underlying array may hold references to linked lists that, in
					turn, contain all values with the same hash.
				</li>
				<li className="list">
					A <em>set</em> is a variation of a hash table that stores keys but not values.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Pros</strong>
			</p>
			<ul>
				<li className="list">
					Keys can be of many data types. The only requirement is that these data types are hashable.
				</li>
				<li className="list">
					Average search, insertion and deletion are <code>O(1)</code>.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Cons</strong>
			</p>
			<ul>
				<li className="list">
					Worst-case lookups are <code>O(n) due to collisions</code>.
				</li>
				<li className="list">No ordering means looking up minimum and maximum values is expensive.</li>
				<li className="list">
					Looking up the value for a given key can be done in constant time, but looking up the keys for a given value
					is <code>O(n)</code>.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Notable uses</strong>
			</p>
			<ul>
				<li className="list">Caching.</li>
				<li className="list">Database partitioning.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>{" "}
			(worst case)
			<ul>
				<li className="list">
					Access <code> O(1) on average; O(n) in the worse case.</code>
				</li>
				<li className="list">
					Search <code> O(1) on average; O(n) in the worse case.</code>
				</li>
				<li className="list">
					Insertion <code> O(1) on average; O(n) in the worse case.</code>
				</li>
				<li className="list">
					Deletion <code> O(1) on average; O(n) in the worse case.</code>
				</li>
			</ul>
		</div>
	);
}

export function Graphs() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p className="mt-3">
				<strong className="text-white">Quick summary</strong>
			</p>
			<ul>
				<li className="list">a data structure that stores items in a connected, non-hierarchical network.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Important facts</strong>
			</p>
			<ul>
				<li className="list">
					Each graph element is called a <em>node</em>, or <em>vertex</em>.
				</li>
				<li className="list">
					Graph nodes are connected by <em>edges</em>.
				</li>
				<li className="list">
					Graphs can be <em>directed</em> or <em>undirected</em>.
				</li>
				<li className="list">
					Graphs can be <em>cyclic</em> or <em>acyclic</em>. A cyclic graph contains a path from at least one node back
					to itself.
				</li>
				<li className="list">
					Graphs can be <em>weighted</em> or <em>unweighted</em>. In a weighted graph, each edge has a certain numerical
					weight.
				</li>
				<li className="list">
					Graphs can be <em>traversed</em>. See important facts under <em>Tree</em> for an overview of traversal
					algorithms.
				</li>
				<li className="list">
					Data structures used to represent graphs
					<ul>
						<li className="list">
							<em>Edge list</em> a list of all graph edges represented by pairs of nodes that these edges connect.
						</li>
						<li className="list">
							<em>Adjacency list</em> a list or hash table where a key represents a node and its value represents the
							list of this node's neighbors.
						</li>
						<li className="list">
							<em>Adjacency matrix</em> a matrix of binary values indicating whether any two nodes are connected.
						</li>
					</ul>
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Pros</strong>
			</p>
			<ul>
				<li className="list">Ideal for representing entities interconnected with links.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Cons</strong>
			</p>
			<ul>
				<li className="list">Low performance makes scaling hard. </li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Notable uses</strong>
			</p>
			<ul>
				<li className="list">Social media networks.</li>
				<li className="list">Recommendations in ecommerce websites.</li>
				<li className="list">Mapping services.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>{" "}
			(worst case) varies depending on the choice of algorithm. <code>O(n*lg(n))</code> or slower for most graph
			algorithms.
		</div>
	);
}

export function Tree() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p className="mt-3">
				<strong className="text-white">Quick summary</strong>
			</p>
			<ul>
				<li className="list">a data structure that stores a hierarchy of values.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Important facts</strong>
			</p>
			<ul>
				<li className="list">Organizes values hierarchically.</li>
				<li className="list">
					A tree item is called a <em>node</em>, and every node is connected to 0 or more child nodes using{" "}
					<em>links</em>.
				</li>
				<li className="list">
					A tree is a kind of graph where between any two nodes, there is only one possible path.{" "}
				</li>
				<li className="list">
					The top node in a tree that has no parent nodes is called the <em>root</em>.
				</li>
				<li className="list">
					Nodes that have no children are called <em>leaves</em>.
				</li>
				<li className="list">
					The number of links from the root to a node is called that node's <em>depth</em>.
				</li>
				<li className="list">The height of a tree is the number of links from its root to the furthest leaf.</li>
				<li className="list">
					In a <em>binary tree</em>, nodes cannot have more than two children.
					<ul>
						<li className="list">Any node can have one left and one right child node.</li>
						<li className="list">
							Used to make <em>binary search trees</em>.
						</li>
						<li className="list">
							In an unbalanced binary tree, there is a significant difference in height between subtrees.
						</li>
						<li className="list">
							An completely one-sided tree is called a <em>degenerate tree</em> and becomes equivalent to a linked list.
						</li>
					</ul>
				</li>
				<li className="list">
					Trees (and graphs in general) can be <em>traversed</em> in several ways
					<ul>
						<li className="list">
							<em>Breadth first search</em> (BFS) nodes one link away from the root are visited first, then nodes two
							links away, etc. BFS finds the shortest path between the starting node and any other reachable node.
						</li>
						<li className="list">
							<em>Depth first search</em> (DFS) nodes are visited as deep as possible down the leftmost path, then by
							the next path to the right, etc. This method is less memory intensive than BFS. It comes in several
							flavors, including
							<ul>
								<li className="list">
									<em>Pre order traversal</em> (similar to DFS) after the current node, the left subtree is visited,
									then the right subtree.
								</li>
								<li className="list">
									<em>In order traversal</em> the left subtree is visited first, then the current node, then the right
									subtree.
								</li>
								<li className="list">
									<em>Post order traversal</em>. the left subtree is visited first, then the right subtree, and finally
									the current node.
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Pros</strong>
			</p>
			<ul>
				<li className="list">
					For most operations, the average time complexity is <code>O(log(n))</code>, which enables solid scalability.
					Worst time complexity varies between <code>O(log(n))</code> and <code>O(n)</code>.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Cons</strong>
			</p>
			<ul>
				<li className="list">Performance degrades as trees lose balance, and re-balancing requires effort.</li>
				<li className="list">
					No constant time operations trees are <em>moderately</em> fast at everything they do.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Notable uses</strong>
			</p>
			<ul>
				<li className="list">File systems.</li>
				<li className="list">Database indexing.</li>
				<li className="list">Syntax trees.</li>
				<li className="list">Comment threads.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>{" "}
			varies for different kinds of trees.
		</div>
	);
}

export function BinarySearch() {
	return (
		<div className="font-extralight dark:text-neutral-400">
			<p className="mt-3">
				<strong className="text-white">Quick summary</strong>
			</p>
			<ul>
				<li className="list">
					a kind of binary tree where nodes to the left are smaller, and nodes to the right are larger than the current
					node.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Important facts</strong>
			</p>
			<ul>
				<li className="list">
					Nodes of a binary search tree (BST) are ordered in a specific way
					<ul>
						<li className="list">
							All nodes to the left of the current node are smaller (or sometimes smaller or equal) than the current
							node.
						</li>
						<li className="list">All nodes to the right of the current node are larger than the current node.</li>
					</ul>
				</li>
				<li className="list">Duplicate nodes are usually not allowed.</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Pros</strong>
			</p>
			<ul>
				<li className="list">Balanced BSTs are moderately performant for all operations.</li>
				<li className="list">
					Since BST is sorted, reading its nodes in sorted order can be done in <code>O(n)</code>, and search for a node
					closest to a value can be done in <code>O(log(n))</code>
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Cons</strong>
			</p>
			<ul>
				<li className="list">
					Same as trees in general no constant time operations, performance degradation in unbalanced trees.
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>{" "}
			(worst case)
			<ul>
				<li className="list">
					Access <code>O(n)</code>
				</li>
				<li className="list">
					Search <code>O(n)</code>
				</li>
				<li className="list">
					Insertion <code>O(n)</code>
				</li>
				<li className="list">
					Deletion <code>O(n)</code>
				</li>
			</ul>
			<p className="mt-3">
				<strong className="text-white">Time complexity</strong>
			</p>{" "}
			(average case)
			<ul>
				<li className="list">
					Access <code>O(log(n))</code>
				</li>
				<li className="list">
					Search <code>O(log(n))</code>
				</li>
				<li className="list">
					Insertion <code>O(log(n))</code>
				</li>
				<li className="list">
					Deletion <code>O(log(n))</code>
				</li>
			</ul>
		</div>
	);
}
