function hasCycle(graph) {
    
    function find(parent, node) {
        if (parent[node] === node) {
            return node;
        }
        parent[node] = find(parent, parent[node]);
        return parent[node];
    }

    function union(parent, rank, nodeA, nodeB) {
        let rootA = find(parent, nodeA);
        let rootB = find(parent, nodeB);

        if (rootA === rootB) {
            return false; 
        }
        if (rank[rootA] > rank[rootB]) {
            parent[rootB] = rootA;
        } else if (rank[rootA] < rank[rootB]) {
            parent[rootA] = rootB;
        } else {
            parent[rootB] = rootA;
            rank[rootA]++;
        }

        return true;
    }

    const numNodes = graph.length;
    const parent = Array.from({ length: numNodes }, (_, i) => i);
    const rank = Array(numNodes).fill(0);
    const visitedEdges = new Set();

    for (let currentNode = 0; currentNode < graph.length; currentNode++) {
        for (const neighbor of graph[currentNode]) {
            const edge = [Math.min(currentNode, neighbor), Math.max(currentNode, neighbor)].toString();
            if (!visitedEdges.has(edge)) {
                visitedEdges.add(edge); 
                if (!union(parent, rank, currentNode, neighbor)) {
                    return true; 
                }
            }
        }
    }

    return false;
}
module.exports = { hasCycle };

