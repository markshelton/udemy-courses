import java.util.Iterator;
import java.util.NoSuchElementException; 
import edu.princeton.cs.algs4.StdRandom;
import edu.princeton.cs.algs4.StdOut;

// Array 

public class RandomizedQueue<Item> implements Iterable<Item> {
  private Item[] array;
  private int size;

  // construct an empty randomized queue
  public RandomizedQueue() {
    array = (Item[]) new Object[2];
    size = 0;
  }

  private void resize(int capacity) {
    Item[] temp = (Item[]) new Object[capacity];
    for (int i = 0; i < size; i++) {
        temp[i] = array[i];
    }
    array = temp;
  }

  // is the queue empty?
  public boolean isEmpty() {
    return (size == 0);
  }

  // return the number of items on the queue
  public int size() {
    return size;
  }

  // add the item
  public void enqueue(Item item) {
    if(item == null) throw new IllegalArgumentException();
    if (size == array.length) resize(2*array.length);
    array[size++] = item;
  }

  // remove and return a random item
  public Item dequeue() {
    if(isEmpty()) throw new NoSuchElementException();    
    int index = StdRandom.uniform(size);
    Item item = array[index];
    array[index] = array[size-1];
    array[size-1] = null;
    size--;
    if(size > 0 && size == array.length / 4) resize(array.length/2);
    return item;
  }

  // return (but do not remove) a random item
  public Item sample() {
    if(isEmpty()) throw new NoSuchElementException();
    return array[StdRandom.uniform(size)];
  }

  // return an independent iterator over items in random order
  public Iterator<Item> iterator() {
    return new ArrayIterator();
  }

  private class ArrayIterator implements Iterator<Item> {
    public ArrayIterator() {}
    public boolean hasNext() { return size() > 0; }
    public void remove() { throw new UnsupportedOperationException(); }
    public Item next() { 
      if (!hasNext()) throw new NoSuchElementException();

      }
  }

  // unit testing (optional)
  public static void main(String[] args) { /* not implemented */ }
  
}