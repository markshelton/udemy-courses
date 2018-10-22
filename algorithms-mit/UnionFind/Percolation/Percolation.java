// import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {

  private static final int OFFSET = 2;
  private static final int START = 0;
  private static final int END = 1;

  private final WeightedQuickUnionUF grid;
  private final int size;
  private int open = 0;
  private boolean[][] opened;

  // create n-by-n grid, with all sites blocked
  public Percolation(int n) {
    if (n <= 0) throw new IllegalArgumentException();
    size = n;
    grid = new WeightedQuickUnionUF(n * n + OFFSET);
    opened = new boolean[size][size];
  }
  
  private int fromCoord(int row, int col) {
    return ((row - 1) * size + (col - 1) + OFFSET);
  }

  private void tryUnion(int x, int row, int col) {
    try {
      if (isOpen(row, col)) grid.union(x, fromCoord(row, col));
    } catch (IllegalArgumentException e) {return;}
  }

  private void checkBounds(int row, int col) {
    if (row < 1 || col < 1 || row > size || col > size) {
      throw new IllegalArgumentException();
    }
  }

  // open site (row, col) if it is not open already
  public void open(int row, int col) {
    if (isOpen(row, col)) return;
    else {
        open++;
        opened[row - 1][col - 1] = true;
        int x = fromCoord(row, col);
        if(row == 1) grid.union(x, START);
        if (row == size) grid.union(x, END);
        tryUnion(x, row - 1, col);
        tryUnion(x, row + 1, col);
        tryUnion(x, row, col - 1);
        tryUnion(x, row, col + 1);
    }
  }

  // is site (row, col) open?
  public boolean isOpen(int row, int col) {
    checkBounds(row, col);
    return opened[row - 1][col - 1];
  }

  // is site (row, col) full?
  public boolean isFull(int row, int col) {
    checkBounds(row, col);
    return (grid.connected(START, fromCoord(row, col)));
  }
  
  // number of open sites
  public int numberOfOpenSites() {
    return open;
  }

  // does the system percolate?
  public boolean percolates() {
    return (grid.connected(START, END));
  }

  // test client (optional)
  public static void main(String[] args) {}
}