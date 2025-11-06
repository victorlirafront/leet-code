class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}

class BinaryTreeSolution {
  maxDepth(root: TreeNode | null): number {
    if (!root) return 0

    const dfs = (node: TreeNode | null, depth: number): number => {
      if (!node) return depth
      return Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1))
    }

    return dfs(root, 0)
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
)

const solution = new BinaryTreeSolution()
const depth = solution.maxDepth(root)

console.log("Profundidade máxima da árvore:", depth)
