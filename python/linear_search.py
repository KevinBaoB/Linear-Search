def linear(word) :
  arrayToSearchThrough = [];
  for l in word:
    arrayToSearchThrough.append(l);
  
  return arrayToSearchThrough;


banana_phone = linear("banana");

print(banana_phone)

def linear_search(value_to_find, array_to_search_through):
    arr = []
    for i, l in enumerate(array_to_search_through):
        if l == value_to_find:
            arr.append(i)
    return arr
    # your code here

print(linear_search('a', banana_phone))