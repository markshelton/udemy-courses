import java.util.Arrays;
import java.util.Set;
import java.util.HashSet;
import edu.princeton.cs.algs4.StdDraw;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.In;

public class BruteCollinearPoints {

  private int count = 0;
  private LineSegment[] segments;

  // finds all line segments containing 4 points
  public BruteCollinearPoints(Point[] points) {
    int n = points.length;
    segments = new LineSegment[n];
    for(int i = 0; i < n; i++) {
      for(int j = 0; j < n; j++) {
        for(int k = 0; k < n; k++) {
          for(int l = 0; l < n; l++) {
            Point p = points[i];
            Point q = points[j];
            Point r = points[k];
            Point s = points[l];
            Point[] x = new Point[] {p, q, r, s};
            if (hasDuplicate(x)) break;
            else if (isUnsorted(x)) break;
            else if (isNotCollinear(x)) break;
            LineSegment ps = new LineSegment(p, s);
            StdOut.println(ps);
            segments[count++] = ps;
          }
        }
      }
    }
  }

  // the number of line segments
  public int numberOfSegments() {
    return count;
  }

  // the line segments
  public LineSegment[] segments() {
    return segments;
  }

  private static boolean isNotCollinear(Point[] points) {
    double pq = points[0].slopeTo(points[1]);
    double qr = points[1].slopeTo(points[2]);
    if(pq != qr) return true;
    double rs = points[2].slopeTo(points[3]);
    if(qr != rs) return true;
    return false;
  }

  private static boolean isUnsorted(Point[] points) {
    Point[] temp = points.clone();
    Arrays.sort(temp);
    return (points != temp);
  }

  private static boolean hasDuplicate(Point[] points) {
    Set<Point> set = new HashSet<Point>();
    for (Point each: points) {
      if (!set.add(each)) return true;
    }
    return false;
  }

  public static void main(String[] args) {
    
    In in = new In(args[0]);
    int n = in.readInt();
    Point[] points = new Point[n];
    for (int i = 0; i < n; i++) {
        int x = in.readInt();
        int y = in.readInt();
        points[i] = new Point(x, y);
    }

    StdDraw.enableDoubleBuffering();
    StdDraw.setXscale(0, 32768);
    StdDraw.setYscale(0, 32768);
    for (Point p : points) p.draw();
    StdDraw.show();

    BruteCollinearPoints collinear = new BruteCollinearPoints(points);
    for (LineSegment segment : collinear.segments()) {
        StdOut.println(segment);
        segment.draw();
    }
    StdDraw.show();
  } 

}
