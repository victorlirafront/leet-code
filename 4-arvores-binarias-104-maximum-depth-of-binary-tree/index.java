class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTreeSolution {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        return dfs(root, 0);
    }

    private int dfs(TreeNode node, int depth) {
        if (node == null) return depth;
        return Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1));
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3)
        );

        BinaryTreeSolution solution = new BinaryTreeSolution();
        int depth = solution.maxDepth(root);

        System.out.println("Profundidade máxima da árvore: " + depth);
    }
}
