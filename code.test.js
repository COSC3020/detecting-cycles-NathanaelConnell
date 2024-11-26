const { hasCycle } = require('./code.js');

function runTests() {
    const testCases = [
        {
            graph: [
                [1, 2],
                [0, 2],
                [0, 1]
            ],
            expected: true // Cycle: 0 -> 1 -> 2 -> 0
        },
        {
            graph: [
                [1],      
                [0, 2],    
                [1, 3],  
                [2]        
            ],
            expected: false // No cycle
        },
        {
            graph: [
                [1, 2],
                [0],
                [0, 3],
                [2, 4],
                [3, 5],
                [4, 0]
            ],
            expected: true // Cycle: 0 -> 5 -> 4 -> 3 -> 2 -> 0
        },
        {
            graph: [[]],
            expected: false // Single node, no edges, no cycle
        },
        {
            graph: [],
            expected: false // Empty graph, no nodes
        },
    ];

    testCases.forEach((test, index) => {
        const result = hasCycle(test.graph);
        if (result === test.expected) {
            console.log(`Test case ${index + 1} passed.`);
        } else {
            console.error(`Test case ${index + 1} failed.`);
            console.error(`  - Expected: ${test.expected}`);
            console.error(`  - Received: ${result}`);
        }
    });
}

runTests();
