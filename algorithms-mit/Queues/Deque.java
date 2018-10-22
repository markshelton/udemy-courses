import java.util.Iterator;
import java.util.NoSuchElementException; 

// LinkedList 

public class Deque<Item> implements Iterable<Item> {

  private Node first; // first item in deque
  private Node last; // last item in deque
  private int size; // size of deque

  // helper linked list class
  private class Node {
    private final Item item;
    private Node prev;
    private Node next;    

    private Node(Item item, Node prev, Node next) {
      this.item = item;
      this.prev = prev;
      this.next = next;
    }
  }

  // construct an empty deque
  public Deque() {
    first = null;
    last = null;
    size = 0;
  }

  // helper for adding first node to list
  private void initialize(Item item) {
    Node newItem = new Node(item, null, null);
    first = newItem;
    last = newItem;
  }

  // is the deque empty?
  public boolean isEmpty() {
    return (size == 0);
  }

  // return the number of items on the deque
  public int size() {
    return size;
  }

  // add the item to the front
  public void addFirst(Item item) {
    if (item == null) throw new IllegalArgumentException();
    if (isEmpty()) initialize(item);
    else {
      Node newItem = new Node(item, null, first);
      first.prev = newItem;
      newItem.next = first;
      first = newItem;
    }
    size++;
  }

  // add the item to the end
  public void addLast(Item item) {
    if (item == null) throw new IllegalArgumentException();    
    if (isEmpty()) initialize(item);
    else {
      Node newItem = new Node(item, last, null);
      last.next = newItem;
      newItem.prev = last;
      last = newItem;
    }
    size++;
  }

  // remove and return the item from the front
  public Item removeFirst() {
    if(isEmpty()) throw new NoSuchElementException();
    Item removedItem = first.item;
    first = first.next;
    if (--size != 0) first.prev = null;
    return removedItem;
  }

  // remove and return the item from the end
  public Item removeLast() {
    if(isEmpty()) throw new NoSuchElementException();
    Item removedItem = last.item;
    last = last.prev;
    if (--size != 0) last.next = null;
    return removedItem;
  }

  // return an iterator over items in order from front to end
  public Iterator<Item> iterator() {
    return new ListIterator();
  }

  private class ListIterator implements Iterator<Item> {

    private Node current = first;

    public boolean hasNext() { return current != null; }
    public void remove() { throw new UnsupportedOperationException(); }
    public Item next() {
      if (!hasNext()) throw new NoSuchElementException();      
      Item item = current.item;
      current = current.next;
      return item;
    }
  }

  // unit testing (optional)
  public static void main(String[] args) {
  }
}