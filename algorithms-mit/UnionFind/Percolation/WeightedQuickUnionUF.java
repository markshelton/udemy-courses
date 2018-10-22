public class WeightedQuickUnionUF {
  
    private int[] id;
    private int[] sz;
  
    public WeightedQuickUnionUF(int N) {
      id = new int[N];
      sz = new int[N];
      for(int i = 0; i < N; i++) {
        id[i] = i;
      }
    }
  
    int root(int x){
      while(id[x] != x) {
        x = id[x];
        sz[x]++;
      }
      return x;
    }

    void union(int p, int q){
      int i = root(p);
      int j = root(q);
      if (sz[i] < sz[j]) {
        id[i] = j;
      } else {
        id[j] = i;
      }
    }
  
    boolean connected(int p, int q) {
      return root(p) == root(q);
    }

}