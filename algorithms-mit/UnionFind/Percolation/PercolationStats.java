import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdStats;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.Stopwatch;

public class PercolationStats {

  private static final double NINETY_FIVE = 1.960;
  private final double[] score;
  private final int size;
  private final int total;

  // perform trials independent experiments on an n-by-n grid
  public PercolationStats(int n, int trials) {
    if (n <= 0 || trials <= 0) throw new IllegalArgumentException();
    size = n;
    total = n*n;
    score = new double[trials];
    for(int i = 0; i < trials; i++) {
      Percolation p = new Percolation(n);
      int counter = 0;
      while(!p.percolates()) {
        int row = StdRandom.uniform(size) + 1;
        int col = StdRandom.uniform(size) + 1;
        if(!p.isOpen(row, col)) {
          counter++;
          p.open(row, col);
        }
      }
      score[i] = (double) counter / total;
    }
  }
  
  // sample mean of percolation threshold
  public double mean() {
    return StdStats.mean(score);
  }

  // sample standard deviation of percolation threshold
  public double stddev() {
    return StdStats.stddev(score);
  }

  // low  endpoint of 95% confidence interval
  public double confidenceLo() {
    return mean() - NINETY_FIVE * stddev() / Math.sqrt(total);
  }

  // high endpoint of 95% confidence interval
  public double confidenceHi() {
    return mean() + NINETY_FIVE * stddev() / Math.sqrt(total);
  }

  // test client (described below)
  public static void main(String[] args) {
    int n = Integer.parseInt(args[0]);
    int trials = Integer.parseInt(args[1]);
    Stopwatch timer = new Stopwatch();
    PercolationStats ps = new PercolationStats(n, trials);
    StdOut.println(String.format("%-23s = %s", "time taken", timer.elapsedTime()));        
    StdOut.println(String.format("%-23s = %s", "mean", ps.mean()));
    StdOut.println(String.format("%-23s = %s", "stddev", ps.stddev()));
    StdOut.println(String.format("%-23s = [%s, %s]", "95% confidence interval", ps.confidenceLo(), ps.confidenceHi()));
  }
}