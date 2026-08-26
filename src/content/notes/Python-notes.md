---
title: Python Notes
summary: Python 基礎語法、資料型態、物件導向與模組套件的學習筆記。
date: 2026-06-12
tags: [Python, 學習筆記]
notionUrl: https://app.notion.com/p/1db83f385f3a8014b0e7c5ca2f2cb4b2
draft: false
---

# 目錄

[‣](https://app.notion.com/p/30411d016dcc4fafa82559fe6d9259ea?pvs=21) 

[practice ANS](practice%20ANS%2037d83f385f3a801193dfd700d6a0b299.md)

# Python data type

| **Name** | **Type** | **Description** | **Copy By Reference (可以看list→copy的註解)** |
| --- | --- | --- | --- |
| Integer | int | whole numbers | NO → Copy by value |
| Float | float | 小數 | NO → Copy by value |
| String | str | 字串 | NO → Copy by value |
| Boolean | bool | True or False | NO → Copy by value |
| List | list | ordered sequence of data, such as [12, “Hello”, True] | YES |
| Dictionaries | dict 字典 | key-value, such as {”name”:”Wilson”} | YES |
| Tuples | tup | ordered immutable sequence of objects, such as (10, “100”, “Hello”) | YES |
| Sets | set | Unordered collection of unique objects {”a”, “b”} | YES |

## ✅ Python 常見基本資料型態一覽表：

| 資料型態 | 說明 | 範例 |
| --- | --- | --- |
| `int` | 整數 | `1`, `-100`, `0` |
| `float` | 浮點數（小數） | `3.14`, `-2.5` |
| `bool` | 布林值（真/假） | `True`, `False` |
| `str` | 字串 | `"Hello"`, `'123'` |
| `list` | 清單，可變動、有順序 | `[1, 2, 3]`, `["a", "b"]` |
| `tuple` | 元組，**不可變**、有順序 | `(1, 2)`, `("a", "b")` |
| `set` | 集合，無順序、不重複 | `{1, 2, 3}`, `{"a", "b"}` |
| `dict` | 字典，鍵值對 | `{"name": "Amy", "age": 20}` |

# built-in methods for number in Python

function→

abs() 絕對值 absolute volume

pow() 次方 exponent operator → pow(2, 10)→2 ^ 10

max()

min()

round() 四捨五入，但x.5 ，如果x是偶數的話不進位

*str() 字串

*int() 整數

*float() 小數

*typecasting → 型態轉換

# Math Module

Some common constants(常數) and methods in the math module are:

1. e
2. pi
3. floor() 無條件捨去
4. ceil() 無條件進位
5. sqrt() → sqare root

# Variable and Assignment(指定)

Variable is like a **container(容器)** where we store values in.

In Python, the equal sign is “assignment” , mean that you want to put the data on the right-hand side od the equals sign to the  left-hand side of the equal sign.

x = 5, x = x + 1, print(x)

now, x = 6

*syntax sugar is to change x = x + 1 to x += 1

# Strings

A string is  an ordered sequence of characters, such “Aloha”

## rules:

1. string is ordered, which means we can use indexing(索引) and slicing(切割).
Indexing starts from 0!
Indexing: 
“hello” → 01234 
reverse index:
”hello” → 0 -4 -3 -2 -1 or -5 -4 -3 -2 -1
slicing:
str[start(inclusive), end(exclusive), stepsize(optional)]
*前後對調→ str[ : : -1 ]
2. Single quote ’ and double quote “ are the same in python, as they can be used in wrapping a string in a string.
3. In python, the new line character “\n” ( backslash n )is used to create a new line.
4. In Python, if we put an addition( + ) operator between strings, that means we are concatenation( 串接 ) 2 strings.
5. In Python, we cannot make concatenation on strings and number.
如果想要將數字型態和字串串接的話，要先做型態轉換。 
6. string is immutable(不可改變的)，如下:

```python
mystr = "hello"
mystr[0] = "H"
print(mystr)

*TypeError: 'str' object does not support item assignment

```

## Other Rules of Strings

Immutability - String in Python is immutable, which means we cannot change it.

```python
name = "Sam Donaldson"  # 改名變成Pem Donaldson
name = 'P' + name[1:]
print(name)

result ->
Pem Donaldson

```

string multiplied(相乘) by numbers is a valid operation! This is very different from other programming languages, but this will save our life eventually.

- 不可以字串和字串相乘
- 不可以乘以非整數

```python
name = "Sam Donaldson"  # 改名變成Pem Donaldson
name = 'P' + name[1:]
print(name * 2)

result ->
Pem DonaldsonPem Donaldson
```

In Python, we can use the format method and f-string. What’s the difference between string concatenation and format method? They are the same, except that formatting is mainly used formatting is mainly used for readability.

## Python Built-in String Method I

| Name | **describe** |
| --- | --- |
| len() | length, 找到string的長度，有幾個 Character |
| int() |  |
| float() |  |
| str() |  |
| upper() | 變成大寫mystr = "hello"name = mystr.upper() → 專屬功能的寫法print(name) |
| lower() | 變成小寫 |
| isupper() | 檢查是不是所有的字都是大寫，回傳值= Ture or Falsename.isupper()mystr = "hello"print(mystr.upper().isupper()) → method chaining |
| islower() | 檢查是不是所有的字都是小寫 |
| index() | 在string裡面搜尋某一個字或是某一段字它的ˊindex是從哪裡開始mystr = " hello "print( mystr.index( " l " ) ) → 搜尋l 是從哪一個index開始出現result → 2如果去找一個不存在的值print(mystr.index("n"))~~~~~~~~~~~^^^^^*ValueError: substring not found |
| replace() | 替代，把string中的某一些值替換成其他的值，要放兩個inputdef replace(   old: str,    new: str) |
| split() | 分開並創建一個清單，create a list from a string by white spacename = "I'm a Tomboy."print(name.split(" ")) →””裡面放分開的條件result → ["I'm", 'a', 'Tomboy.'] |
| list() | create a list from a string character by character.print( list( name ) ) result → ['n', 'a', 'm', 'e'] |
| format() | 串接不同型態的值，format(list)，python 3.6以上的版本可以用fstring的寫法。print("I have a string {}".format(["water"]))print("I have a string {}".format(["water", "ice"]))print("{}, {}, {}".format(25, "have a nice day", 3.1415926))print("{age}, {name}, {address}".format(name="shelly", address="Taiwan", age=25))myname = "shelly"age = 25print(f"My name is {myname}, I'm {age} years old.")result →I have a string ['water']I have a string ['water', 'ice']25, have a nice day, 3.141592625, shelly, TaiwanMy name is shelly, I'm 25 years old. |
| count() | 計數string = "Good day is a good day."print(string.lower().count("good"))result → 2 |
| find() | 跟 index 的用法一樣差異: index() →必須要確定存在搜尋值，retuns exception否則會有ValueError: substring not found。→可以用在string、list、topos→不可以用在Conditional statementfind() →可以搜尋你不確定存在的值，retuns -1，表示該值不存在。→僅能用於string→可以用在Conditional statement |
| startswith() | 檢查開頭的字result → Ture or false |
| endswith() | 檢查結尾的字result → Ture or false |

## **format() → fstring**

```python
print("I have a string {}".format(["water"]))
print("I have a string {}".format(["water", "ice"]))
print("{}, {}, {}".format(25, "have a nice day", 3.1415926))
print("{age}, {name}, {address}".format(
    name="shelly", address="Taiwan", age=25))
myname = "shelly"
age = 25
print(f"My name is {myname}, I'm {age} years old.")

result ->
I have a string ['water']
I have a string ['water', 'ice']
25, have a nice day, 3.1415926
25, shelly, Taiwan
My name is shelly, I'm 25 years old.
```

# List

## 定義:

List is an ordered(順序性) sequence(連續性) of data, such as [12, “Hello” , True ] 

List is just like array in other programming languages.

If we have similar or associated(有關連性) data, we can store them in a list instead of putting them individually in memory.

List of list (list裡面放很多list) can be used to represent a matrix(矩陣).

```python
friendlist = ["mike", "john", "jerry"]
print(friendlist[0], friendlist[1], friendlist[2])
friendlist = ["mike", "john", "jerry"]
print(f"{friendlist[0]}, {friendlist[1]}, {friendlist[2]} are my freinds")
friendlist = ["mike", "john", "jerry"]
print(f"{friendlist[0], friendlist[1], friendlist[2]} are my freinds")

resulte ->
mike john jerry
mike, john, jerry are my freinds
('mike', 'john', 'jerry') are my freinds

```

## Rules

- len() can check the length of the list.
- Indexing rule and slicing rule from a string can be used in list as well.
- count() method can count the occurrence of elements(元素). Index() method returns the first index of the object.

*elements 表示在list中每一個index裡面的值。

- set() change list into a set
- List concatenation can be done by using “+”
- List can also be multiplied by intergers.
- List is mutable. (Remember, strings are immutable.)
    
    ```python
    friendlist = ["mike", "john", "jerry"]
    print(f"{friendlist[0], friendlist[1], friendlist[2]} are my freinds")
    print(len(friendlist))
    x = [1, 2, 3, 4, 1, 6, 1, 8]
    y = [3, 5, 9]
    print(x.count(1))
    print(x.index(1))
    print(x + y)
    y[0] = 10
    print(y)
    
    result->
    ('mike', 'john', 'jerry') are my freinds
    3
    3
    0
    [1, 2, 3, 4, 1, 6, 1, 8, 3, 5, 9]
    [10, 5, 9]
    ```
    

## Python Built-in Methods for List

| name | describe |
| --- | --- |
| insert()-插入 | insert( index , element )    |
| remove()-移除 | remove(”你要移除的element”) |
| clear()-清空 |  |
| sort()-排序 | 預設排序會依照字母的順序或是數字由小到大的順序排序 |
| reverse()-順序反轉 |  |
| append()-附加 | 在原本的清單中新增資料到原清單的最後面，append(只能放一個值) |
| pop()-移出 | 移除list中最後一個index，存到另一個記憶體。 |
| copy()-  | since list in python in not primitive, we need a way to copy a list. |

```python
studentlist = ["shelly", "anny", "cindy", "jimmy", "sunny"]
studentlist.insert(2, "candy")
print(studentlist)
studentlist.remove("anny")
# remove和insert的差異在於，remove裡面直接放你要移除的element，
# 不能移除index，而insert是新增一個index再放入element。
print(studentlist)
studentlist.sort()
print(studentlist)
studentlist.reverse()  # 反轉的寫法
# studentlist = studentlist[::-1] #slicing反轉str or list
print(studentlist)
# append裡面只能放一個element，
# 否則TypeError: list.append() takes exactly one argument (3 given)
studentlist.append("alice")
studentlist.append(15.9)
print(studentlist)
studentlist.pop()
lost_studentlist = studentlist.pop()
print(lost_studentlist)
studentlist.clear()
print(studentlist)

result ->
['shelly', 'anny', 'candy', 'cindy', 'jimmy', 'sunny']
['shelly', 'candy', 'cindy', 'jimmy', 'sunny']
['candy', 'cindy', 'jimmy', 'shelly', 'sunny']
['sunny', 'shelly', 'jimmy', 'cindy', 'candy']
['sunny', 'shelly', 'jimmy', 'cindy', 'candy', 'alice', 15.9]
alice
[]
```

## copy

- copy by value 
a = 10
b = a
b = 15
print( a, b ) → 10, 15
他的概念是在RAM裡面找到一個名為a的格子放入10，再找到一個b的格子放入15，所以改變的是兩個不同格子。
- copy by reference(RAM memory)
x = [ 1, 2, 3 ]
y = x  →  y = x = [ 1, 2, 3 ] 不是把x放進新的y格子，而是讓x有一個新的名字叫做y(讓y去指向x)。
y [ 0 ] = 15
print( x, y ) → [ 15, 2, 3 ] [ 15, 2, 3 ]

用list可以存放不同型態的資料，所以用copy by reference，不會重複多筆資料，可以有效節省記憶體空間。

所以如果我想要讓copy by reference → copy by value，就可以用copy()，改變記憶題存放的位置。

```python
#copy by reference -> copy by value
x = [1, 2, 3, 4]
y = x.copy() #reture a shallow copy of the list
y[0] = 10
print(x)
print(y)

result ->
[1, 2, 3, 4]
[10, 2, 3, 4]
```

## List of list

List of list (list裡面放很多list) can be used to represent a matrix(矩陣).

```python
x = [1, 2, [4, 5, 6], 2, 1, [4, 3, [-10, 4]], 10]
print(x[5][2][0])
print(x[len(x)-1]) #找出list中的最後一項index of element

result ->
10
```

# Dictionaries

## 定義:

Dictionary contains unordered key-value pairs(成雙成對), such as {”name”: “Wilson”, “age” : 25}. It’s just like objects in other programming languages. Dictionary is mutable.

```python
#建構基本的字典:
person = {"name": "shelly", "age": 25}
print(person["name"])

result->
shelly

#value可以放入各種型態的資料，並且可以串接搜尋
person = {"x": {"name": "shelly", "age": [10, 20, 30]}}
print(person["x"]["age"][1])

result ->
20

#用人工的方式新增字典資料
Y = {}
Y["name"] = "shelly"
Y["age"] = 25
print(Y)

result ->
{"name": "shelly", "age": 25}
```

## Built-in Methods

Some commonly used Python built-in methods for dictionaries are:

- keys() → 可以找到Dictionary中的所有keys.
- values() → 可以找到Dictionary中的所有values
- items() → 可以找到Dictionary中的所有key-value pairs

```python
#keys() -> 可以用在loop
#Return a set-like object providing a view on the dict's keys.

person = {"name": "shelly", "age": 25}
print(person.keys())

result ->
dict_keys(['name', 'age'])

#values() ->

person = {"name": "shelly", "age": 25}
print(person.values())

result ->
dict_values(['shelly', 25])

#items() -> something like a list of tuples.

person = {"name": "shelly", "age": 25}
print(person.items())

result ->
ict_items([('name', 'shelly'), ('age', 25)])
```

*Advanced Information: dictionaries in Python are hashed(轉換步驟) which means they are implemented as a hash table, and taking out key-value pairs in a dictionary has constant time complexity O(1) regardless of the size of the dictionary.
*O(1) → 
O(1) 意思是：「**不管資料量多大，運算所需的時間（或步驟數量）都是固定的，不會隨著資料量變多而變慢**。」
**Hash Table 是一種特別的資料結構，讓你可以**：

- **快速找到**你要的資料（通常是 O(1) 的速度！）
- **快速新增或刪除**資料

它的概念就像是：

> 一個超級厲害的櫃子，每個抽屜都有標籤（key），可以直接找到東西（value）的位置，不需要一個一個翻。
> 
> - **Key（鑰匙）**：你給它一個關鍵字，例如 "apple"。
> - **Hash function（哈希函數）**：系統把這個 "apple" 經過一個公式，變成一個數字，比如 123。
> - **存進去**：然後把 "apple" 的資料存到櫃子的第 123 個位置。
> - **查找資料**

## What can be a key?

### What can we use as a key for a dictionary? The restriction(限制) is:

### 1.The key has to be immutable.

**Integers, float, Boolean, string, tuples** are immutable and hashable; therefore, they can be used as dictionary keys. Sometimes it would be very convenient to use list as a dictionary key; for example, the latitude(經度) and longitude(緯度) of a map could be a key in dictionary. Python used tuples to solve this problem. (Tuple is an immutable list, which will be discussed later.) →經緯度 {(經度:緯度) : 地名} 小括號是tuples，因為list 是 mutable，所以不能當作dict的key，tuple是immutable list，所以可以用tuple 來取代 list 作為key。

### 2.The key has to be hashable.

Python dictionary implements a data structure called hashtable; therefore, if the key cannot be hashed, we cannot get the corresponding value.

(In fact, we can implement the __hash__() method to create hashed value of our own defined class.)

Therefore, it’s essential to use immutable objects as a key to ensure the hashed value of the key never changes.

# Tuples

## 定義:

Tuples are ordered immutable sequence of object, such as (10, “100”, “Hello”). In short, tuples are just immutable list; also, tuples use parenthesis. Therefore,

- len() cna check the length of tuples.
- Indexing rule and slicing rule from string can be used in tuple as well.
- count() method can count the occurrences. index() method returns the first index of the object.
- set() work with tuples as well.
- Since tuples are immutable, some list methods don’t work with tuples, such as pop, append, sort, and so on.
*會改變list的method都不行用在tuples

```python
mytuple = (10, "100", "hello")
print(len(mytuple))
print(mytuple[0:2])
print(mytuple.count("100"))
print(mytuple.index("100"))

result ->
3
(10, '100')
1
1
```

## Tuples Packing and Unpacking

Tuples is such a common data type in Python supports 2 features for a tuple:

### Tuple Packing

Tuple packing means Python will automatically pack data that are separated by comma into a tuple. 

```python
x = 10, 20, 30, "anny"  # tuple packing
print(x)
print(type(x))

result ->
(10, 20, 30, 'anny')
<class 'tuple'>
```

### Tuple Unpacking

Tuple unpacking means assigning individual elements (separated by comma) of a tuple to multiple variables.

```python
x = ("wilson", 20)
name, age = x
print(name)
print(age) #variable name have meanings

result ->
wilson
20

#互換變數中的值
x = 25
y = 45

x, y = y, x
#先做 tuple packing 把 y, x 變成tuple
#再做 tuple unpacking 讓x, y可以接y, x的值
print(x)
print(y)

```

Tuple unpacking is an extremely commo tool to use in machine learning and data science. Make sure you remember this skill.

## tips!

If an element in a tuple is mutable, them we can just select the element, and then change it.

```python
a = ([1, 2, 3], "wilson") #Can be dictionary key? nope!!
#a[0] = 100 
#因為a是immutable，所以不可以改變tuple的值
a[0][0] = 100 #可以! 因為這裡指的是a裡面的list[0]的位置，list is mutable，所以可以被改變。

result ->
([100, 2, 3], "wilson")
```

If  we want to use a tuple as a dictionary key, then all elements in the tuple has to be immutable. 

# Sets

## 定義:

Set is an unordered collection(集合) unique objects, such as {”a”, “b”, 20}.
sets V.S dictionary
Sets: 裡面放的都是獨立的物件。

dictionary: 裡面是key-value pairs

Any hashable object can be an element in a set. People who built Python learned discrete(離散數學) math and implemented the concept into Python: therefore, the set concept that you learned form discrete math applies to the Python set as well. For example, {1, 2, 1} set is the same set as {1, 2}.

```python
# 如何創建一個set?
# 區分 set 和 dictionary 的差異
# 創建一個dict
mydict = {"name": "shelly", "age": 25}
# 創建一個set
mysets = set({1, 2, 3})
print(mydict, mysets)
print(type(mydict), type(mysets))
# Set基本用法
mylist = [1, 3, 4, 3, 5, 1, 4, 2, 5]
myset = set(mylist)
print(myset)

result ->
{'name': 'shelly', 'age': 25} {1, 2, 3}
<class 'dict'> <class 'set'>
{1, 2, 3, 4, 5}
```

## Some built-in methods for sets are:

- add()
- clear()
- copy()
- discard()

```python
s = set({1, 2})
# 在集合中新增一個元素
s.add(3)
print(s)
# 在集合中刪除一個元素
s.discard(2)
print(s)
# 在清空集合中的所有元素
s.clear()
print(s)

result ->
{1, 2, 3}
{1, 3}
set()

```

## Sets Methods

Since this set idea is form discrete math, there are methods like:

- difference() - returns the difference of two of more sets.
- intersection() - returns the intersection(交集) of two or more sets as a new set. (i.e. elements that are common to all of the sets)
- isdisjoint() - This method will return True if  teo sets have a null intersection.  沒有交集 → 空集合
- issubbset(), isuuperset() 子集合 母集合
- union() → 聯集

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a.difference(b))  # a-b
print(b.difference(a))  # b-a
print(a.intersection(b))  # 交集
print(b.intersection(a))
print(a.union(b))  # 聯集
print(b.union(a))
print(a.issubset(b))
print(a.issuperset(b))
False
False

result ->
{1, 2}
{5, 6}
{3, 4}
{3, 4}
{1, 2, 3, 4, 5, 6}
{1, 2, 3, 4, 5, 6}
```

## 補充說明

```python
#刪除重複的資料
dup_set = {1, 2, 2, 3}
print(dup_set)  # 會輸出 {1, 2, 3}

#集合運算（交集、聯集、差集）
a = {1, 2, 3}
b = {3, 4, 5}

print(a & b)  # 交集：{3}
print(a | b)  # 聯集：{1, 2, 3, 4, 5}
print(a - b)  # 差集：{1, 2}

#快速檢查某個東西有沒有出現過
visited = set()
visited.add("Page1")

if "Page1" in visited:
    print("已拜訪")

```

### 注意：

- 集合裡不能放「可變」的東西（像 list）
- 集合是無序的，不能用索引去抓元素（不能用 `my_set[0]`）

### 📘 Python 資料結構比較表：

| 特性 | **List（清單）** | **Set（集合）** | **Dict（字典）** |
| --- | --- | --- | --- |
| ✅ 是否有順序 | ✅ 有 | ❌ 無 | ✅ 有（Python 3.7 起保留插入順序） |
| 🔁 是否允許重複 | ✅ 允許 | ❌ 不允許 | ❌ Key 不允許重複（Value 可） |
| 🔍 能否用索引存取 | ✅ 可以 `list[0]` | ❌ 不行 | ❌ 不行，但可用 key 取值 `dict[key]` |
| ➕ 新增元素 | `.append()` | `.add()` | `dict[key] = value` |
| ➖ 移除元素 | `.remove()` | `.remove()` / `.discard()` | `.pop(key)` / `del dict[key]` |
| 🧮 用途舉例 | 排隊、順序儲存資料 | 去重、集合運算 | 儲存配對資料（像名稱→電話號碼） |

# Boolean

In programming, we often need to know if something is True or False.
For example, supposed we are building a ticketing system for a movie theater. If the customer’s age is less then 8, it’s free; else, the price is $300.

In Python, a Boolean is a data type with possible values: True or False. Make sure they start with an uppercase letter!

Why do they have to start with a n uppercase letter? Most reviewers agree that consistency within  Python is more important than consistency with other languages. Therefore, almost all built-in constants in Python are capitalized. That’s why. Read   for more details.

# Comments(#) in Python

It’s always a good practice to leave comments in your code. The reasons are:

1. It helps you understand what your code deos. (You might know it pretty well right now, but you will probably forget it after a few months.)
2. It helps your coworker understand your code. Programmers usually work with a team, instead of building something on their own.
3. It helps anyone else on the internet understand your code. (If you push them to GitHub)

In VS Code, just select codes, and do press Ctrl + / .

# Type Checking

When declaring(宣告)  variables in Python, we don’t have to specify the types (In Java or C, you must declare the data type when you declare a variable); therfore, it might be hard to know the current data type of a variable.

In Python, there’s a built-in type checking function called type() that the data type of the input.

# Additional Information - 附加訊息

- Python uses “nj” to represent the imaginary part of a complex number(複數), where n is an arbitrary real integer of float, and j = √−1. For example, 3 + 2j - 5j + 8 = (11 - 3j)
- Besides the basic data types, there’s one special data type called None. (It;a capitalized) It’s similar to null in other programming languages. None means there’s nothing in there. If a Python method doesn’t return anything,  the default return value is None.
- If your method name is hello, make sure you don’t do “print(hello)”; otherwise, you will see something like <funtion hello at  0x7f93f80ce280> which is the hexadecimal(16進位) memory address of the function in you memory.
- What’s the value of 0.1 + 0.2 - 0.3? You might think it’s 0, but it’s actually 5.55111512312578e-17. It’s because of the **floating binary problem**, which is out of the scope of this course.

因為電腦用 **二進位（binary）** 儲存所有資料，而 **某些小數（像 0.1, 0.2）在二進位裡是無限循環小數**，不能精確表示。

這就像你在十進位裡寫 1/3，變成 0.3333… 一樣。
電腦在用二進位儲存浮點數時，無法完全精確表示某些小數，導致計算結果出現微小誤差。

- Python is an object-oriedt4ed programming language, meaning that objects control everuthing. An object can have some behavior in real life, such as a car can go, a dog can bark, or a phone can ring. The came concept applies to Python data. Numbers, strings, list, dictionaries, and other data types are all objects in Python.
- The Python String join() mehtod takes all items in an iterable and joins them into one string. This method is  helpful to generate strings from a list tuples, and sets.

```python
#join的用法
mylist = ["a", "b", "c", "d"]
mystring = "|".join(mylist)
print(mystring)
mylist = ["a", "b", "c", "d"]
mystring = " and ".join(mylist)
print(mystring)
mylist = ["a", "b", "c", "d"]
mystring = ", ".join(mylist)
print(mystring)

result ->
a|b|c|d
a and b and c and d
a, b, c, d

```

# Copy by Value or  Reference

In Python, the value assigned to a variable is either copied by value or by referece.

Copy by value means copying the value and getting a whole mew object; then, the object is put into the variable. On the other side, copy by reference means we copy the reference of the object in the memory, and the reference is put into the variable.

| 類型 | 意思 |
| --- | --- |
| **Copy by Value**（值複製） | 複製的是**資料本身**，之後改其中一份**不影響另一份**。 |
| **Copy by Reference**（參考複製） | 複製的是**資料的記憶體位置（指向同一份資料）**，改其中一份會**一起變**。 |

Integers, floats, booleans and strings are copied by value.

Sets, tuple, list and dictionaries are copied by reference.

The copy() function of dict, set, list can be used to create a new data in memory.
However, tuple is immutable; therefore, we must use deepcopy() function to copy a tuple.

# Sort and Sorted

How can we sort immutable data types in Python? We only know that list has a built-in method called “sort” that sorts the list (and it will modify the list in memory directly, since list is mutable).

However, how can we sort dictionaries, sets, tuples or even string?
There’s no built-in method to sort all these data tyoes. Traditionally, we have to sort all those data type manually(自製的) (sorting algorithms are taught in algorithm and data structure class).

Python introduced a now built-in method called “sorted()” that builds a new sorted list from an iterable without modifying the original data.

If you want to sort a list without modifying the original one, use sorted() method.

`sorted()` 是一個 **通用排序函數**，它的設計目的就是：

**無論輸入是 list、tuple、set，只要能排序，它都會回傳一個新的排序後的 list。**

- `sorted()` 是個 **函數**，不是原地改變的。
- 它會「**創造一個新的 list**」，來承載排序後的結果。
- 因為不是所有輸入資料型別（例如 `tuple`, `set`）都可以就地排序，回傳 list 是最通用的做法。

```python
#List
x = [4, 2, 3, 1]
y = sorted(x)  # 預設的排序方式，正序排列
print("The list x is: ", x, "Also, The list y is:", y)
x = [4, 2, 3, 1]
y = sorted(x, reverse=True)  # 倒序排列 # keyword arguments
print("The list x is: ", x, "Also, The list y is:", y)

result ->
he list x is:  [4, 2, 3, 1] Also, The list y is: [1, 2, 3, 4]
The list x is:  [4, 2, 3, 1] Also, The list y is: [4, 3, 2, 1]

#Tuple
x = (4, 2, 3, 1)
y = sorted(x)  # 正序排列
print("The list x is: ", x, "Also, The list y is:", y)
x = (4, 2, 3, 1)
y = sorted(x, reverse=True)  # 倒序排列
print("The list x is: ", x, "Also, The list y is:", y)

result ->
he list x is:  (4, 2, 3, 1) Also, The list y is: [1, 2, 3, 4]
The list x is:  (4, 2, 3, 1) Also, The list y is: [4, 3, 2, 1]

#dict keys
x = {"name": "Wilson", "age": 25}
y = sorted(x)
print(x)
print(y)

result ->
{'name': 'Wilson', 'age': 25}
['age', 'name']

#set
x = {4, 5, 3, 1, 2}
y = sorted(x)
print(x)
print(y)

result ->
{1, 2, 3, 4, 5}
[1, 2, 3, 4, 5]

#string
x = "How are you ding today?"
y = sorted(x)
print(x)
print(y)

result->
How are you ding today?
[' ', ' ', ' ', ' ', '?', 'H', 'a', 'a', 'd', 'd', 'e', 'g', 'i', 'n', 'o', 'o', 'o', 'r', 't', 'u', 'w', 'y', 'y']
```

### ✅ 易混淆：

| 方法 | 是否改原本資料？ | 回傳型別 |
| --- | --- | --- |
| `sorted()` | ❌ 不會 | `list` |
| `.sort()`（只能用在 list） | ✅ 原地排序 | `None` |

# Membership Operator in Python

Python’s membership operators test for membership in a sequence, such as strings, lists, tuples, dictionaries and sets.

| Name | Description |
| --- | --- |
| in | Evaluates to true if it finds a variable in the specified sequence and false otherwise. |
| not in | Evaluates to true if it does not find a variable in the specified sequence and false otherwise. |

Without the membership operator, you might have to use some algorithm to know if an element is in a sequence, which is more tedious.

```python
myString = "Today is a good day."

if "t" in myString:
    print("Today is a good day.")
else:
    print("Today is not my day.")
    
result ->
Today is not my day.
```

# Python Arithmetic Operators

Operators are the constructs that can manipulate the value of operands. Consider the expression 4+5 = 9. Here, 4 and 5 are operands, and + is called operator.

Python language supports the following types of operators:

- Arithmetic Operators
- Assignment Operators
- Membership Operators
- Comparison Operators
- Logical Operators
- Bitwise Operators
- Identity Operators (We won’t discuss it here)

## 1. Arithmetic Operators（**算術運算子**）

用來進行基本數學計算。

| 運算子 | 說明 | 範例 |
| --- | --- | --- |
| `+` | 加法
Assigns values from right side operands to left side operand. | `3 + 2 → 5` |
| `-` | 減法
Shortcut of x = x + k | `5 - 2 → 3` |
| `*` | 乘法 | `2 * 3 → 6` |
| `/` | 除法 | `6 / 2 → 3.0` |
| `//` | 整除 | `7 // 2 → 3` |
| `%` | 取餘數 | `7 % 2 → 1` |
| `**` | 次方 | `2 ** 3 → 8` |

*Suppose a = 10 and b = 20, then:

*For all rows of example in this table, b is still 20 after using assignment operator.

---

## 2. Assignment Operators（**賦值運算子**）

將值指派給變數。

| 運算子 | 說明 | 範例 |
| --- | --- | --- |
| `=` | 指派 | `x = 5` |
| `+=` | 加後指派 | `x += 1` 等於 `x = x + 1` |
| `-=` | 減後指派 | `x -= 1` |
| `*=` | 乘後指派 | `x *= 2` |
| `/=` | 除後指派 | `x /= 3` |
| `//=`, `%=`, `**=` 等也類似 |  |  |

---

## 3. Membership Operators（**成員運算子**）

判斷某值是否在某集合中。

| 運算子 | 說明 | 範例 |
| --- | --- | --- |
| `in` | 在裡面 | `'a' in 'cat' → True` |
| `not in` | 不在裡面 | `'x' not in 'hello' → True` |

---

## 4. Comparison Operators（**比較運算子**）

用來比較值，結果為布林值。

| 運算子 | 說明 | 範例 |
| --- | --- | --- |
| `==` | 等於
Returns a boolean value indicating if 2 operators are equal. | `3 == 3 → True` |
| `!=` | 不等於
Returns true if 2 operators are not equal. | `5 != 4 → True` |
| `>` | 大於
Return true if the first operand is greater | `6 > 2 → True` |
| `<` | 小於
Return true if the second operand is greater | `3 < 5 → True` |
| `>=` | 大於等於
Return true if the first operand is greater or equal to the second operand. | `5 >= 5 → True` |
| `<=` | 小於等於
Return true if the second operand is greater or equal to the second operand. | `4 <= 6 → True` |

*= is an assignment operator, and == is a comparison operator.

---

## 5. Logical Operators（**邏輯運算子**）

結合多個條件判斷。

| 運算子 | 說明 | 範例 |
| --- | --- | --- |
| `and` | 且（都為真）
If both the operands are true, then condition returns true. | `True and False → False` |
| `or` | 或（任一為真）
If any of the two operands are true, then condition returns true. | `True or False → True` |
| `not` | 非（取反）
Returns the reversed logical state of its operand.
把True換成False 把False換成True | `not True → False` |

Logical operator returns a boolean value.

---

## 6. Bitwise Operators（**位元運算子**）

對數值的**二進位位元(binary)**進行操作（進階用法）。
a in binary is 00111100, b in binary is 00001101. 
當a & b，只有都是1 的時候才是1，其他都是0 

| 運算子 | 說明 | 範例（以 5: 0101 舉例） |
| --- | --- | --- |
| `&` | AND
當a & b，只有都是1 的時候才是1，其他都是0 | `5 & 3 → 1`（0101 & 0011） |
| | | OR
當a & b，只要有1 的時候就是1，其他都是0 | OR |
| `^` | XOR
當a & b，只有一個1的時候，才是1，其他都是0 | `5 ^ 3 → 6` |
| `~` | NOT
當a & b，把0換成1，把1換成0 | `~5 → -6`（補數） |
| `<<` | 左移
把binary往左移兩格
00111100 → 11110000 | `5 << 1 → 10` |
| `>>` | 右移
把binary往右移兩格
00111100 → 00001111 | `5 >> 1 → 2` |

---

## 7. Identity Operators（**身分運算子**）

用來檢查兩個變數是否**指向同一個記憶體位置**（不是值相同，而是是不是同一個東西）。

| 運算子 | 說明 | 範例 |
| --- | --- | --- |
| `is` | 是否為同一個物件 | `a is b` |
| `is not` | 是否不是同一個物件 | `a is not b` |

📌 注意：`is` 和 `==` 不一樣，`==` 比較值，`is` 比較記憶體位置。

# Truthy and Falsy Values in Python

## 解釋:

In a Boolean context, almost all python objects con be evaluated(評估) to be either True of False. Those object that will be evaluated to True is Called the Truthy values; whereas those that will be evaluated to False is called the Falsy values.

You only need to memorize the Falsy values; other objects that are not Falsy are Truthy.

## The following Collections and Sequences are Falsy:

- Empty lists[]
- Empty tuples()
- Empty dictionaries{}
- Empty sets set()
- Empty srting “”
- Empty ranges range(0)

## The following numbers are Falsy:

- Zero of any numeric type (int and float)
- integer: 0
- Float: 0.0
- Complex: 0j j = 根號負一

## The following constants are Falsy:

- None
- False (The Boolean)

## Truthy values include:

- Non-empty sequences or collections (list, tuple, strings, dictionaries, sets).
- Numeric values that are not zero.
- True (The Boolean)

you can check if a value is either truthy or falsy with the built-in bool() function.

## Short-Circuit Evaluation短路求值

Short-Circuiting (ecaluation) is where an expression is stopped being evaluated as soon as its outcome is determind. This is commonly implemented in programming languages; some programming languages provide both short-circuit evaluation and standard Boolean evaluation (such as Java).
short-circuit evaluation → 當我檢查 A or B 發現A值為True 就不再檢查B，因為已經知道結果為True
standard Boolean evaluation → 當我檢查 A or B 發現A值為True 仍繼續檢查B值。

Why doing Short-Circuit Evaluation？ Well, It can be helpful in avoiding(避免) computationally(計算中) expensive tasks under certain circumstances. It provides a check for the first argument without which the second argument may result in a runtime error.

# Python Control Flow

## 定義:

A program’s control flow is the order in which the program’s code executes(執行). The control flow of a Python program is regulated by conditional statement(If statements), loops, and function calls.

In this chapter, we will discuss some core concepts in Python programming:

## If statements

Python if statement is used for decision-making operations. It contains a body of code that runs only when the condition given in the if statement is true. If the condition is False, then the optional ese statement runs which contains some code for the else condition. For example, we can do :

if (True):

　　print(”This is so true.”)

The parenthesis contains a condition; if the condition is True, then we execute print(”This is so true.”)

Besides True, we can also put other codes in the parenthesis of if statement; recall from previous lecture, we learned that

1. Comparison Operator
2. Logic Operator
3. Truth and Falsy Value

return a boolean value; therefore, they can be used in “if-statement conditions”.

```python
age = 65

if age <= 8:
    print("Movie is free for you!")
elif age > 8 and age <= 64:
    print("You need to pay $300.")
else:
    print("You only need to pay $150")
```

```python
# program asks user's name
# cash
# Y/N
# program checks is the user has more then or equal to $30
name = input("Enter your name: ")  # string
money = input("Enter you cash amount: ")  # string
hungry = input("Are you hungry? (Y/N)")  # string
print("your name is: " + name)

if hungry == "Y":
    if int(money) >= 30:
        print(f"{name} should go get breakfast.")
    else:
        print(f"{name} is hungry but might not have enough money to buy breakfast")
    print("You are hungry.")
elif hungry == "N":
    if int(money) >= 30:
        print(f"{name} has budget but doesn't want to eat breakfast. ")
    else:
        print(f"{name} has no money but is not hungry...")
    print("You are not hungry.")
else:
    print("Please make sure that you enter either Y or N.")

```

```python
# Structural Pattern Matching
# switch statement ==
lang = input("你希望學什麼程式語言?")

if lang == "JavaScript":
    print("你會成為網頁前端開發人員")
elif lang == "PHP":
    print("你會成為網頁後端開發人員")
elif lang == "Python":
    print("你會成為資料科學家!")
elif lang == "Kotlin":
    print("你會成為Android應用程式開發人員")
elif lang == "Switch":
    print("你會成為ios應用程式開發人員")
else:
    print("你會成為其他開發人員!")

# Match subject:
#     case <pattern_1>:
#         <action_1>
#     case <pattern_2>:
#         <action_2>
#     case <pattern_3>:
#         <action_3>
#     case _:
#         <action_wildcard>

match lang:
    case "JavaScript":
        print("你會成為網頁前端開發人員")
    case "PHP":
        print("你會成為網頁後端開發人員")
    case "Python":
        print("你會成為資料科學家")
    case "Katlin":
        print("你會成為Android應用程式開發人員")
    case "Swift":
        print("你會成為ios應用程式開發人員")
    case _:
        print("你會成為其他開發人員!")

```

```python
day = input("今天星期幾?")

match day:
    case "星期日" | "星期一": #vertical bar 跟 or 一樣意思
        print("今日公休!")
    case "星期六":
        print("今天營業半天")
    case _:
        print("今日正常營業")

```

```python
command = input("Where do you wanna go?")
print(command.split(" "))

match command.split(" "):
    case ["go", "home"]:
        print("You wanna go home.")
    case _:
        print("The system cannot determine where you wanna go.")

```

## For and While Loop

### for loop

Python for loop is used to loop through an iterable(iterate循環) object (like a list, tuple, set, etc.) and perform the same action for each entry.

```python
for latter in "Hello World":
    if latter == latter.upper():
        print(latter)

```

```python
for tuple in [(1, 2), (3, 4), (5, 6)]:
    print(tuple)

for a, b in [(1, 2), (3, 4), (5, 6)]:
    print(a + b)
    
    
result ->
(1, 2)
(3, 4)
(5, 6)
3
7
11
```

```python
mydictionary = {"name": "shelly", "age": 25}
for key, value in mydictionary.items():
    print(f"The key is {key}")
    print(f"The value is {value}")

result ->
The key is name
The value is shelly
The key is age
The value is 25
```

### while loop

Python while loop is used to execute a block of statements repeatedly until a given condition is satisfied. And when the condition becomes false, the line immediately after the loop in the program is excuted.

```python
x = 0

while x < 5:
    print(x)
    x += 1

result ->
0
1
2
3
4

```

When to choose for loop or while loop in general? It would be best if we used a for loop when we know how many times the loop should ren. If we want the loop to break based on a condition other than the number of times it runs, we should use a while loop.

## Nested Loop 巢狀迴圈

A nested loop is a loop inside the body of the outer loop. The inner or outer loop can be any type, such as a while loop or for loop. The “inner loop” will be executed one time for each iteration of the “outer loop”.

Make sure you memorize how nested loop works!!

## Pass, Break, Continue, Range, Zip, Enumerate

### Pass

As the name suggests, the pass statement does nothing. The pass statement in Python is used when a statement is required syntactically, but we do not want any command or code to execute.

It is like the null operation, as nothing will happen if executed. Pass statements can also be used for writing empty loops. Pass is also used for empty control statements, functions, and classes.

### Break

The break statement is used to terminate a loop or statement in which it is present. After that, the control will pass to the statements that are present after the break statement, if available.

If  the break statement is present in the nested loop, it terminates only those loop containing the break statment.

```python
for i in "12345678":
    for j in "abcdefg":
        if j == "c":
            break
        print(i, j)

result:
1 a
1 b
2 a
2 b
3 a
3 b
4 a
4 b
5 a
5 b
6 a
6 b
7 a
7 b
8 a
8 b
```

### Continue

Continue is also a loop control statement, just like the break statement.

Continue statement is opposite to that of the break statement; instead of terminating the loop, it forces to execute the next iteration of the loop.

As the name suggests, the continue statement forces the loop to continue or execute the next iteration(循環). When the continue statement is executed in the loop, the code inside the loop following the continue statement will be skipped, and the next iteration of the loop will begin.
 

continue 被執行就會跳到下一個iteration!

```python
for i in "abcde":
    if i == "b":
        continue
    print(i)

result:
a
c
d
e

for i in "abcde":
    print("Now the current i is " + i)
    continue
    print("Here is the line after continue")
    
result:
Now the current i is a
Now the current i is b
Now the current i is c
Now the current i is d
Now the current i is e
```

### Range Function

The range() function returns a sequence of numbers, starting from 0 by default, increment by 1 (by default), and stops before a specified number. The syntax of the rage function is:

**range(start, stop, step)**

| Parameter | Description |
| --- | --- |
| start | Optional. An integer number specifying at which position to start. Default is 0 |
| stop | Required. An integer number specifying at which position to stop (not included). |
| step | Optional. An integer number specifying the incrementation. Default is 1 |

```python
for i in range(10, 100, 10):
    print(i)
    
result:
10
20
30
40
50
60
70
80
90

# typecasting to list
mylist = list(range(0, 100, 10))
print(mylist)

result:
10
20
30
40
50
60
70
80
90
```

**Why Using Range()?**

In Python 2, the range(n) function returns a list [0, 1, 2, 3, …,  n-1].

In Python 3, range() returns a special range object, and the elements in this range object are created when we loop through elements (instead of pre-created like a list); therefore, the range object only keeps track of the boundary of integers and the current position we are at.

This change improves efficiency(效率) and memory usage. For example, range(1000000) in Python 2 will construct a list of 1 million element; we have to spend time building the list; in addition, this list occupies a considerable part of computer memory, In Python 3, no matter what n we put in range(n), it only takes a constantly tiny time to build the range object, and the rage object only takes a tiny part of our memory.

Python 3的range() 是要執行loop後，才會把range的值製作出來，好處是不用先製作list就可以節省電腦的記憶體空間，增加運作的效率。

### Enumerate(枚舉) and Zip Function

The Python enumerate() function adds a counter to an iterable object and makes them into a tuple of 2 elements. The counter lets you keep track of how many iterations have occurred.

The Python zip() function accepts iterable items and merges them into  tuples. You can pass lists, tuples, sets or dictionaries through the zip() function. Zip function is the opposite of tuple unpacking. It’s doing tuple packing.

```python
#enumerate
for item in enumerate("How are you today?"):
    print(item)

result:
(0, 'H')
(1, 'o')
(2, 'w')
(3, ' ')
(4, 'a')
(5, 'r')
(6, 'e')
(7, ' ')
(8, 'y')
(9, 'o')
(10, 'u')
(11, ' ')
(12, 't')
(13, 'o')
(14, 'd')
(15, 'a')
(16, 'y')
(17, '?')

#利用tuple unpacking的性質來限制你要找的數量

for counter, char in enumerate("How are you today?"):
    if counter < 10:
        print(char)
        
result:
H
o
w
 
a
r
e
 
y
o
```

```python
#zip function
x = [1, 2, 3]
y = ['a', 'b', 'c']
for tuple in zip(x, y):
    print(tuple)

result:
(1, 'a')
(2, 'b')
(3, 'c')

```

## Comprehension and Generator

### Comprehension(理解)

Comprehensions in Python provide us with a short and concise way to construct new sequences (such as lists, set dictionary etc.) using sequences which have been already defined. Python supports the following 4 types of comprehensions:

### List Comprehensions

The general syntax of list comprehension is 

new_list = [operation for variable in original_list if condition]

For example, we do:

x = [1, 2, 3, 4]
squared_x = [item ** 2 for item in x]

print(squared_x)

```python
x = [1, 2, 3]

squared_x = [item ** 2 for item in x if item > 2]

print(squared_x)

result:
[9]
```

### Dictionary Comprehensions

The general syntax of dictionary comprehension is 

new_dict = {key: value(operation) for variable in original_dict if condition}

For example, we do:

x = [1, 2, 3, 4]

x_squared_dict = {item: item ** 2 for item in x if item >2}

print(x_squared_dict)

```python
x = [1, 2, 3, 4]

squared_x_dict = {item: item ** 2 for item in x if item > 2}

print(squared_x_dict)

result:
{3: 9, 4: 16}
```

### Set Comprehensions

The general syntax of set comprehension is

new_set = {operation for variable in original_set if condition}

For example, we do:

x = [1, 2, 3, 4]

x_squared_set = {item ** 2 for item in x if item >2}

print(x_squared_set)

```python
x = [1, 2, 3, 4]

squared_x_set = {item ** 2 for item in x if item > 2}

print(squared_x_set)

result:
{16, 9}
```

### Generator Comprehensions

Python generator syntax is similar to List Comprehension; instead of using [], generator uses (). The generator syntax returns a generator object, whereas the list comprehension syntax returns a new list.

The major difference between list comprehension and generator is that generators don’t allocate memory for the whole list; therefor. it’s more memory efficient compared to list comprehension. (Same concept as range() method) 

#There is no tuple comprehension in Python. Comprehension works by looping or iterating over items and assigning them into a container, a Tuple is unable to receive assingments.

```python
x = [1, 2, 3, 4]

x_generator_squared = (item ** 2 for item in x if item > 2)

print(x_generator_squared)

for i in x_generator_squared:
    print(i)
    
    
result:
<generator object <genexpr> at 0x0000027C85CAB510>
9
16
```

# Comprehension is very common, and it makes your code Pythonic!

## Coding Lesson - Word Count

wc (short for word count) is a command in Unix and Unix-like operating systems (such as MacOS). The program reads computer files and generates one or more of the following statistics: newline count, word count, and byte count.

Write a Python program that takes in one command line parameter (a file) and does the same thing as the wc command-print line count, word count, and letter count.

`from sys import argv` 是一行 Python 代碼，用來從 Python 的 `sys` 模組中引入 `argv` 這個變量。

- `sys` 是 Python 的內建模組，提供了對系統參數和一些功能的訪問。
- `argv` 是一個列表，它存儲了命令行中傳遞給 Python 腳本的參數。`argv` 的第一個元素（`argv[0]`）是腳本的名稱，後面的元素是傳遞給腳本的其他參數。

```python
from sys import argv

if len(argv) < 2:
    print("Please provide a filename.")
else:
    file = open(argv[1]) #打開文件
    lines = file.read() #讀取檔案存到lines

    lines = lines.split("\n") #ystring以換航為切割標準後回傳list值

    word_count = 0
    letter_count = 0
    
    
#對 lines 這個列表（list）中的每一個元素，依序取出來，並把它指定給變數 line，然後執行縮排區塊中的程式碼。
    for line in lines: 
        words = line.split(" ") #把每一行的字串用空格為切割標準回傳list值
        word_count += len(words) #將每一個word計數 a = a + 1 
        letter_count += len(line) #將每一個字母計數
    line_count = len(lines) - 1 #-1是因為有一個空list
    print(f"The line count is {line_count}") 
    #.format or f-stringf 前綴的字串，允許你直接在字串中嵌入變數或表達式，並在執行時自動轉換為字串的一部分。 
    print(f"The word count is {word_count}")
    print(f"The letter count is {letter_count}")
    
    
C:\Users\林君璇\Desktop\python codes>python  try.py myfile.txt
The line count is 3
The word count is 12
The letter count is 45
```

# Functions and Methods

## What is the difference between function and method?

What is the difference between function and method in Python with an example program? Methods are associated with the objects of the class they belong to. Functions are not associated with any object. We can invoke a function just by its name.

For example, string. split(””) is method of string, and range() is a function in Python.

What can you do if you come across a method or function that you have never seen before?

1. Use the help() function; the input is the name of the method or function.
2. Read the documentation online.

## The def keyword

To define a function in Python, we need to use the key word “def”. The basic syntax of defining a function is:

def functionName(input1, inout2, …):

function code here

Input are optional; if we don’t need inputs, then we just keep the empty parenthesis. Input are the local variables in the function; they are either copy by value or reference (read chapter 1.)

You can also use doctring (or documentation string) to give explanation or comments for a function.

```python
def sayHI(): #定義一個叫sayHI的function

    print("How are you today?")

# function execution, invokation
sayHI()#執行sayHI這個function

result:
How are you today?

# x, y are the parameters(參數) 定義函數時設定的變數

a = 30
b = 20
def addition(x, y):
    print(x + y)

# 35, 15 are the arguments(參數) 呼叫函數時傳遞的資料
addition(a, b) #這裡會執行定義的function
#argument can be variables as well
result:
50
```

global variables(全域變數), local variables(區域變數)

| 分類 | 定義位置 | 使用範圍 | 修改方式 |
| --- | --- | --- | --- |
| Global | 函式外部 | 全程式可讀取 | 使用 `global` 關鍵字 |
| Local | 函式內部 | 只在函式內有效 | 直接定義與使用 |

```python

#global variables, local variables

a = 5 #global variable

def f1():
	x = 2 # f1 function's local variable
	y = 3 # f1 function's local variable
	print(x + y)
	
	
def f2():
	x = 2 # f2 function's local variable
	y = 3 # f2 function's local variable
	print(x + y)
	
	
	
f1() #執行function
```

**copy by value or copy by reference**

```python
# copy by value -> 不可變
a = 10

def change(num):
		#會先做copy by valur 把a放進num -> num = a = 10
		num = 25 #然後num的值再變成25
		
		
change(a) #改變的變數是num不是a
print(a) # a 值不變

result:
10

# copy by reference -> 可變

a = [1, 2, 3]

def change(let):
		# copy by reference -> let = a 
		# 這裡指的是 let 指向跟 a 一樣的list 
		# 所以是共用一個清單 而不是把a存入 let 複製新的lest
		# 要複製一個新的list 要用copy()
		let[0] = 100 # -> a = [100, 2, 3]
 

change(a)
print(a)

result:
[100, 2, 3]

		
```

當我們想改變 copy by value的情況時，可以用global來抓取

```python
a = 10

def change(num):
		global a
		a = 25
		
change(a)
print(a)
```

幫你的function 加上教義 可增加可讀性

```python
def myAddition(a, b):
		"""This function does addtion for inputs a and b"""
		print(a + b)
		
help(myAddition) # 解釋funtion的工具

result:

Help on function myAddition in module __main__:

myAddition(a, b)
    This function does addtion for inputs a and b
```

## The return Keyword

The Python return keyword exits a function and instructs Python to continue executing the main program. The return keyword can send a value form a function or method, back to the main program; the returned value could be a string, a tuple, or any other object.

Python function default return value is 
None, and it’s always optional to return something from a functon.

*執行return會終止整個loop

*If the return keyword is placed in a loop, it will terminate the loop.

```python
def myAddition(a, b):
    print(a + b)

result1 = myAddition(10, 20) # ->這是nonetype所以無法直接相加
result2 = myAddition(20, 30)
result3 = myAddition(30, 40)
print(result1 + result2 + result3)

def myAddition(a, b):
    return a + b  # 用return會回傳一個value

result1 = myAddition(10, 20)  # ->這是value所以可以直接相加
result2 = myAddition(20, 30)
result3 = myAddition(30, 40)
print(result1 + result2 + result3)

result:

error

150
```

## Import Functions

Some useful functions require you to import them before you start using them. For example, we did

form sys import argv

This is a function from the standard Python library, but we cannot use this function if we don’t import it.

Some other common modules include:

- requests, bs4 (for web scraping)
- NumPy, pandas, matplotlib, seaborn (data visualization)
- random, Sklenar, TensorFlow (machine learning, deep learning)

### Why is Python designed in this way?

- There is less to compile and run by default(預設). Your program will load faster, because it only knows about the parts of Python that it actually needs.
- It keeps the global namespace clean and allows functionality to be grouped logically into modules.
- different modules can have identically-named functions without clashes (file and socket class would probably both have open and close functions, for example). It makes sure we don’t mess up the names.

## Positional and Keyword Arguments

Python functions can contain two types of arguments: positional arguments and keyword arguments.

Positional arguments must be included in the correct order.

Keyword arguments are included with a keyword and equal sign.

```python
mylist = [4, 2, 1, 3, 5]

print(sorted(mylist, reverse = False))

# mylise -> positional argument
# reverse -> keyword argument
```

## Default Arguments in Python (預設引數)

Python allows function arguments to have default values. If the function is called without the argument, the argument gets its default value.

When we define default arguments, we have to put all of them at the end; otherwise, we will see:

SyntaxError: non-default argument follows default argument

When we define functions, we can give default arguments; when we invoke functions, we can give keyword arguments. (They both look alike, but they are different !)

```python
# default argument such as n2 = 0
def sum(n1, n2 = 0) #n1沒有預設值 所以後面要給他一個值
		return n1 + n2
		
print(sum(10, 10))  #n1=10 n2=10 代入 得到回傳值 20

def sum(n1, n2 = 0)
		return n1 + n2

# keyword argument
print(sum(n1 = 10, n2 = 10))

```

## Arbitrary(任意的) Number of Arguments

- *args is used when we want to send an arbitrary number of non-keyworded inputs to the function. The input are packed into a tuple inside the function.
- **Kwargs is used when we want to send an arbitrary number of keyworded input to function. The inputs are packed into a dictionary inside the function.

They can be used in one function at the same time as well.

#Function input definition order should be (1) normal parameters, (2) default parameter, (3) *arg, (4) **kwargs

```python

#args
def sum(*args):
    result = 0
    for number in range(0, len(args)):
        result += args[number]
    return result

print(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
# args 會用tuple的資料型態

#kwargs
def myfunction(**kwargs):
    print("{} is now {} years old." .format(kwargs["name"], kwargs["age"]))

myfunction(name="shelly", age=26, address="Taiwan")

# kwargs 會用dictionary的資料型態

#args & kwargs 混合用法:
def myfunc(*args, **kwargs):
    print("I would like to eat {} {}" .format(args[0], kwargs["food"]))

myfunc(10, 2, 15, 8, "hello", name="shelly", age="30", food="cakes")

#順序!!
#1. normal argument
#2. default argument
#3. *args
#4. **kwargs

def func(p1, p2, p3="three", *args, **kwargs):
		print("--------------------------------")
		print(p1, p2, p3, args, kwargs)
		
		
		
func(1, 2, 3, 4, 5, x=1, y=3)
func(1, 2, 3, 4, x=4)
func(1, 2, 3, 4)
func(1, 2, 3)
func(1, 2)
#func(1)  因為p2沒有給定參數，所以會有bug

result:
--------------------------------
1 2 3 (4, 5) {'x': 1, 'y': 3}
--------------------------------
1 2 3 (4,) {'x': 4}
--------------------------------
1 2 3 (4,) {}
--------------------------------
1 2 3 () {}
--------------------------------
1 2 three () {}

```

## Higher-Order Function

Higher-order functions are the functions that take other functions as argument. This is extremely common in calculus and math. In Python, we can define or use higher-order functions as well.

For Example, the Python map() function is a higher-order function. The map() function takes two parameters, function and iterable (such as a list), and returns a map object (which we can iterate through).
Also, the Python filter()(過濾) function returns a filter object that consists of the numbers on which the first parameter function returns True.

```python
#先定義一個function 再把另一個function放進去
def higherorder(fn):
    fn()

def smallfunc():
    print("hello from small function")

higherorder(smallfunc) 
#裡面如果打smallfunc()就會變成執行smallfunc而非higherOrder

#做平方的function
def square(num):
    return num ** 2

mylist = [3, 5, 10, -2, 18]

#將mylist的每一個元素放進Square裡面執行
#但map只會給你map object 所以我們要將執行後的值存到item裡面，然後印出來
#map(function, iterable)
for item in map(square, mylist):
    print(item)
    
    
 result:
 
25
100
4
324
hello form small function

#filter的用法，過濾掉false

# == 是比較 所以return出來的結果是boolen
# % 取餘數
def even(num):
    return num % 2 == 0

mylist = [83983, 12038, -13489280, 2934]

for item in filter(even, mylist):
    print(item)

result:
12038
-13489280
2934

```

## Lambda Expression

Lambda expression is also know as an anonymous function, which means that we don’t give a function name.

We used lambda functions when we require a nameless function for a short period of time. In Python we generally use it as argument for higher-order function. Lambda functions are used along with built-in functions like filter(), map() etc.

The value computed by lambda expression will be returned automatically.

*It’s named after lambda calculus, which is way outside the scope of this course. For your information, Lambda calculus is Turing complete; that is, it is a universal model of computation that can be used to simulate any Turing  machine.

```python
# Lambda variable: operation
# (lambda function: return)(input)
result = (lambda x: x**2)(5)
print(result)

mytuple = (lambda x, y: (x+y, x-y))(10, 2)
print(mytuple[0])
print(mytuple[1])

#lambda 結合 map and filter 的用法

for item in map(lambda x: x**2, [17, 29, 32, 3, 4]):
    print(item)

for item in filter(lambda x: x % 2 == 0, [17, 29, 32, 3, 4]):
    print(item)
```

## Scope(範圍)

In computer programming, the scope of a name binding— an association of a value to a variable— is the part of a program where the name binding is valid; that is, variable can be referred to the specific value.

In short, the scope is the area within which the variable is active.

How does python determine the scope of variables? It uses LEGB rules.

### LEGB rule

The LEGN rule is a kind of name lookup procedure that determines the order in which Python looks up names. If the name exists, we’ll get the first occurrence of it.

- Local: names are assigned in any way within a function and not declared global in that function.
- Enclosing function locals: check from inner to outer if the variable name exists.
- Global: names assigned at the top level of a module file or declared globally in a def within the file.
- Built-in: Python built-in names.

## Assignment and Local Variable

Inside the function definition (no matter where it happens), Python will automatically create that local variable if we do an assignment to a variable (and if we are not using the global keyword.)

## Functions are Objects!!

In Python, functions are object as well!! Therefore, we can assignment functions to another function.

By knowing this ,we should prevent variable assignment to the reserved words in Python. (Python won’t complain about this, but we will se bugs in our code.)

# Python Naming Restriction(限制) and Convention(習慣)

## Restriction

The following are the rules of naming variables that we must follow:

- The variable name should begin with a letter or an underscore. So, _*player_1 is okay, and so is player_1 but Not 1_player*
- The variable name can only consist of letters, numbers and underscore, with the first rule above being a prerequisite.
- Variable names are case-sensitive.
- Cannot use any of these symbols, such as :””/?|\()!@+#, as these symbols are reserved in Python.
- Cannot use reserved words, such as int, list, etc. Reserved words mean that these word have special meaning in Python.

## Convention

Convention in English means a way in which something is usually done, especially within a particular(特定) area or activity. In Python, there are also some naming conventions for variable names.

- Module name: all lowercase, use _  if necessary (instead of camelCase)
- Function name: all lowercase, use _ if necessary
- Variable name: all lowercase, use _ if necessary
- Class name: Capitalized, CamelCase
- Constants(常數): ALL CAOUTALIZED, use_if necessary
- Comparison: No need for ==, just do if my_var:. if not my_var:

## Pythonic

Pythonic is an adjective that describes an approach to computer programming that agrees with the founding philosophy of the Python programming language. There are many ways to accomplish the same task in Python, but there is usually one preferred way to do it. This preferred way is called “pythonic”

A code is pythonic or not is very subjective. We just need to constantly check if our code is readable, clean easy clear and if our code uses Python features and built-in functions, we can naturally write very Pythonic codes.

## Zen of Python (python之禪)

The Zen of Python is a collection of 19 “guiding principles” for writhing computer programs that influence the design of the Python programming language. Software engineer Tim Peters wrote this set of principles and posted it on the Python mailing list in 1999.

It is also included as an Easter egg in the Python interpreter, where it can be displayed by entering import this.

# Coding practice

## Simple Exercise

```python
# 1.Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.
def printMany():
    for i in range(1, 101):
        print(i)

printMany()

# 2.Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
def printEvery3():
    for i in range(1, 89, 3):
        print(i)
    return i #return後 會直接結束for迴圈

printEvery3()

# 3.Write a function called "position" that returns a tuple of the first uppercase letter and its index location. If not found, returns -1.
def position(string):
    for index, char in enumerate(string):
        if char == char.upper():
            print((char, index))
            return (char, index)
    print(-1)
    return -1

position("abcd")
position("AbcD")
position("abCD")

# 4.Write a function called "findSmallCount" that takes one list of integers and one integer as input, and returns an integer indicating how many elements in the list is smaller than the input integer.
def findSmallCount(lis, num):
    count = 0
    for x in lis:
        if x < num:
            count += 1
    print(count)
    return count

findSmallCount([1, 2, 3], 2)
findSmallCount([1, 2, 3, 4, 5], 0)

# 5.Write a function called "findSmallerTotal" that takes one list of integers and one integer as input, and returns the sum of all elements in the list that are smaller than the input integer. 

def findSmallerTotal(lis, num):
    Total = 0
    for x in lis:
        if x < num:
            Total += x
    print(Total)
    return Total

findSmallerTotal([1, 2, 3], 3)  # returns 3
findSmallerTotal([1, 2, 3], 1)  # returns 0
findSmallerTotal([3, 2, 5, 8, 7], 999)  # returns 25
findSmallerTotal([3, 2, 5, 8, 7], 0)  # returns 0

# 6.Write a function called "findAllSmall" that takes one list of integers and another integer as input, and returns an list of integers that contains all elements that are smaller than the input integer.

def findAllSmall(lis, target):
    result = [x for x in lis if x < target]
    print(result)
    return result

findAllSmall([1, 2, 3], 10)  # returns [1, 2, 3]
findAllSmall([1, 2, 3], 2)  # returns [1]
findAllSmall([1, 3, 5, 4, 2], 4)  # returns [1, 3, 2]

# 7.Write a function called "summ" that takes one list of numbers, and return the sum of all elements in the input list.

def summ(lis):
    total = 0
    for i in lis:
        total += i
    print(total)
    return total

summ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  # returns 55
summ([])  # return 0
summ([-10, -20, -30])  # return -60

# 1.Write a function called "stars" which prints out layers of stars in the following pattern:

def stars(n):
    for i in range(1, 10):
        print("*" * (i))
    return i

stars(1)
stars(4)

# 2.Write a function called "stars2" which prints out layers of stars in the following pattern:

def stars2(n):
    for i in range(1, n):
        print("*" * (i))
    for i in range(n, 0, -1):
        print("*" * (i))

stars2(1)
stars2(2)
stars2(3)
stars2(4)

# 3.Write a function called "table" which takes an input n, and prints out n x 1 to n x 9

def table(n):
    for i in range(1, 10):
        print(f"{n} X {i}")
    return i

table(3)

# 4.Write a function called "table9to9" that prints out the multiplication table:

def table9to9():
    for x in range(1, 10):
        for y in range(1, 10):
            print(f"{x} X {y}")
    return x, y

table9to9()

# 5.Write a function called "swap" that takes a string as input, and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.

def swap(string):
    new_list = []
    for i in string:
        if i == i.upper():
            i = i.lower()
        else:
            i = i.upper()
        new_list.append(i)
    print(''.join(new_list))
    return new_list

swap("Aloha")
swap("Love you.")

#better
def swap(string):
    newword = ""
    for i in string:
        if i == i.upper():
            newword += i.lower()
        else:
            newword += i.upper()
    print(newword)
    return i

swap("Aloha")
swap("Love you.")

# 6.Write a function called "findMin" which takes an list as input, and returns the minimum element in the input list.

def findMin(lis):
    if lis != []:
        new_list = sorted(lis)
        print(new_list[0])
    else:
        print("undefined")

findMin([1, 2, 5, 6, 99, 4, 5])  # returns 1
findMin([])  # returns undefined
findMin([1, 6, 0, 33, 44, 88, -10])  # returns -10

# min()的寫法:
def findMin(lis):
    if lis != []:
        new_list = min(lis)
        print(new_list)
    else:
        print("undefined")

findMin([1, 2, 5, 6, 99, 4, 5])  # returns 1
findMin([])  # returns undefined
findMin([1, 6, 0, 33, 44, 88, -10])  # returns -10

# 老師的寫法:
def findMin(lis):
    if len(lis) == 0:
        print("undefined")
        return "undefined"
    min_element = lis[0]
    for i in lis:
        if i < min_element:
            min_element = i

    print(min_element)
    return min_element

findMin([1, 2, 5, 6, 99, 4, 5])  # returns 1
findMin([])  # returns undefined
findMin([1, 6, 0, 33, 44, 88, -10])  # returns -10

```

## Intermediate Exercise

```python
# 1.Write a function called "mySort" that takes an list of integers as input, and returns the sorted version of the input list. You are not allowed to use the built-in sorted() function.

def mySort(lis):
    for i in range(len(lis)):
        change = ""
        for n in range(len(lis)):
            if lis[i] < lis[n]: #這個意思是當我的lis[i] < lis[n]時才交換，表示我要找的值是比較大的值，存入lis[i]裡面
                change = lis[i]
                lis[i] = lis[n]
                lis[n] = change
    print(lis)
    return lis

mySort([17, 0, -3, 2, 1, 0.5])

# Right!
def mySort(lis):
    for i in range(len(lis)):
        change = ""
        for n in range(i+1, len(lis)):
            if lis[i] > lis[n]:
                lis[i], lis[n] = lis[n], lis[i]
    print(lis)
    return lis

mySort([17, 0, -3, 2, 1, 0.5])

# 老師的作法，用資料演算法的方式，逐一對比找到最小的從清單中刪除再存到新的清單。

def findMin(lis):
    if len(lis) == 0:

        return "undefined"
    min_element = lis[0]
    for i in lis:
        if i < min_element:
            min_element = i

    return min_element

def mySort(mylis):
    resultList = []
    while len(mylis) > 0:
        min_element = findMin(mylis)
        resultList.append(min_element)
        mylis.remove(min_element)
    print(resultList)
    return resultList

mySort([17, 0, -3, 2, 1, 0.5])

# 2.Write a function called "isPrime" that takes an integer as input, and returns a boolean value that indicates if the input number is prime.

def isPrime(n):
    # 找質數:只能整除自己和 1 其他都不能
    if n == 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(isPrime(11))

# better! 只找一半就好! 
import math
def isPrime(n):
    if n <= 1:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

# 老師
def prime(n):
    if n == 1:
        print("False")
        return False
    starter = 2
    while starter < n:
        if n % starter == 0:
            print("False")
            return False
        starter += 1
    print("True")
    return True

prime(13)

# 3.Write a function called "palindrome" that checks if the input string is a palindrome. (Search on google if you don't know what a palindrome is.)
# palindrome就是回文

def palindrome(string):
    if string == reversed(string):
        return
    else:
        return False

#老師做
import math

def palindrome(string):
    for i in range(0, math.floor((len(string)/2))):
        if string[i] != string[len(string)-1-i]:

            return False

    return True

def palindrome(string):
    left = 0
    right = len(string) - 1
    while left < right:

        if string[left] != string[right]:
            print("False")
            return False
        left += 1
        right -= 1
    print("True")
    return True

print(palindrome("bearaeb"))  # true
palindrome("Whatever revetahW")  # true
palindrome("Aloha, how are you today?")  # fal

# 4.Write a function called "pyramid" that takes an integer as input, and prints a pyramid in the following pattern:
def pyramid(n):
    y = 1
    for x in range(0, n):
        print(" " * (n - x - 1), "*" * (x * 2 + 1))

pyramid(10)

#老師
def pyramid(n):
		space = n - 1
		start = 1
		for i in range(n):
				print(space * ' ' + start * "*")
				space -= 1
				start += 2

# 5.Write a function called "inversePyramid" that draws pyramid upside down.
def pyramid(n):
    for x in range(n, 0, -1):
        print(" " * (n - x), "*" * (x * 2 - 1))

pyramid(10)

#老師
def inverse_pyramid(n):
		space = 0
		start = n * 2 - 1
		for i in range(n):
				print(space * ' ' + start * "*")
				space += 1
				start -= 2

# 6.Given a list of ints, return True if the list contains a 3 next to a 3.
def has_33(lis):
    if lis == []:
        return False
    for i in range(len(lis) - 1):
        if lis[i] == lis[i+1] == 3:
            return True
    return False

print(has_33([1, 5, 7, 3, 3]))
print(has_33([]))
print(has_33([4, 3, 2, 1, 0]))

#老師

def has(lis):
	result = False
	for i in range(len(lis)-1)
			if lst[i] == 3 and lis[i+1] == 3:
					return True
	return False
	

# 7.Write a function that check if a list contains a subsequence of 007
def spyGame(lis):
    code = [0, 0, 7]
    for num in lis:
        if num == code[0]:
            code.pop(0)
            if code == []:
                return True
    return False

print(spyGame([1, 2, 4, 0, 3, 0, 7]))  # True
print(spyGame([1, 2, 5, 0, 3, 1, 7]))  # False

# 老師
def spy_game(lis):
		string = "007"
		pointer_for_lis = 0
		pointr_for_string = 0
		
		while pointer_for_lis < len(lis):
				if lis[pointer_for_lis] == int(string[pointer_for_string]):
						pointer_for_string += 1
						if pointer_for_string == len(string):
							return True
						pointer_for_lis += 1
		return False		

# 1.Write a function called "factorPrime" that takes an integer as input, and returns the prime factorization of the input.

def factorPrime(n):
    factor = []
    f = 2
    while n > 1:
        if n % f == 0:
            factor.append(str(f))
            n //= f
        else:
            f += 1
    return " x ".join(factor)

print(factorPrime(120))

#老師
def factor_prime(n):
    answer = str(n) + " = "
    p = 2
    while (p <= n):
        if n % p == 0:
            answer += str(p) + " X "
            n //= p
        else:
            p += 1
    return answer[:len(answer)-3]

print(factor_prime(2344))

# 2.Write a function called "intersection" that takes 2 lists, and returns an list of elements that are in the intersection of 2 list.

def intersection(lis1, lis2):
    target = []
    for i in range(len(lis1)):
        for x in range(len(lis2)):
            if lis1[i] == lis2[x] and lis1[i] not in target:
                target.append(lis1[i])
    return target

# AI的寫法

def intersection(lis1, lis2):
    target = []
    for i in lis1:
          if i in lis2 and i not in target:
              target.append(i)
    return target
    
#老師--交集的方式

def my_intersection(lis1, lis2):
    return list(set(lis1).intersection(set(lis2)))

# returns [3, 4]
print(my_intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]))

# 3.Write a function called "flatten" that flattens an list.
#寫不出來!!用遞迴演算法
def flatten(lst):  #定義函數
    for i in lst:  #用FOR迴圈抓取LST裡面的全部資料
        if type(i) == type([]):  #如果抓取的I是LIST型態
            flatten(i)   #我就執行函數I，直到找到不是LIST的值
        else:
            result.append(i)
    return result

print(flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]))
# returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]

#flatten([1, [1, 2, 3, 4], [1, [1, 2, 3, [1, 2]]])

```

# I/O with Files in Python

## What’s I/O?

I/O means input and output. We can make a file as an input for Python and  out put a file from Python. In programming, it’s very common to work with different file types, such as . csv, .txt, .html files, etc. In this chapter, we will learn how to work with . txt files.

Some common functions to know:

1. file = open(filename) - opens a file and returns it as a file object.
2. file.read() - returns the specified number of bytes from the file.
3. file.readline() - returns a line of text of our current position.
4. file.readlines() - returns a list containing each in the file as a list item.
5. file.seek(offset) - sets the file’s current position at the offset.
6. file.close()

Why do we need to close the file? If we don’t close the files for small programs, it won’t cause trouble. However, opening too many file objects might fill up the memory for large programs. No matter how small your program is, keep a  good habit of closing your file object!

```python
file = open("myfile.txt")
while True:
    line = file.readline()
    if not line:
        break
    else:
        print(line)
file.close()
```

## Encoding

Character encoding is the process of assigning numbers to graphical characters, especially the written characters of human language, allowing them to be stored, transmitted, and transformed using digital computers.

Some common encoding ways include utf-8 (this is the standard of HTML), cp950 and ASCII.

The open() function in python open the file based on the OS default encoding. That means, if we are in traditional Chinese Windows, the default encoding might be cp950; if we are trying to open a utf-8 file, then we must write open(fliename, encoding=”utf-8”)

## With Statement and Open() Function

With statement in python is used in exception handling to make the code cleaner and much more readable. By using the with statement, we don’t need to worry about closing the file, as python will handle it for us.

When opening a file, we can set different modes of the file. Here are some common modes to choose:

- “r” - Read - Default value. Opens a file for reading, error if the file does not exist.
- “a” - Append - Opens a file for appending, creates the file if it does not exist
- “w” - Write - Opens a file for writing, creates the file if it does not exist.
- “x” - Create- Creates the specified file, returns an error if the file exists.
    
    There are a lot more choices! Make sure you quickly read through each on of them and have a good idea of what they are!
    
    ```python
    with open("myfile.txt", mode="w", encoding="utf-8") as my_file:
        my_file.write(
            "Leanring python is so  fun. \n Leaning JavaScript is so fun as well.\n")
    
    ```
    

## Deleting Files and Folders

If we want to delete files or folders, then we have to use the OS module in Python.(OS stands for operating system)

1. os.remove(filename)
2. os.rmdir(foldername)   (remove directory(folder))

Notice that we can only delete an empty folder!!

what if we have to delete a non-empty folder? Well, we can use the shutil module, which we will talk about later.

```python
import os

os.rmdir("newfolder")

```

## User Input

Python allows for user input. When asking for user input, OS would put the program into a blocked stage (since OS wants to make sure the CPU is as busy as possible); then, the program won’t run until we get input from the user. 

If the input function argument is present, it   is written to standard output. The function then reads a line from input, converts it to a string, and returns that.

To stop a program in terminal, we just need to do  ctrl + c

## Coding Lesson - Secret

write a program that takes input from users and makes them guess what secret number is.

The secret number ranges from 1 to 100; each time the user gives their guess, the program should update the range.

```python
import random
secret = random.randint(1, 100)  # generate a random integer from 1 to 100
min_value = 1
max_value = 100
print(secret)
while True:
    guess = input(f"Make your guess (between {min_value} and {max_value}): ")
    if int(guess) < min_value or int(guess) > max_value:
        print("Your guess is not within the range!!")
        continue
    if int(guess) == secret:
        print(f"The secret is {secret}")
        break
    elif int(guess) > secret:
        max_value = int(guess)
    elif int(guess) < secret:
        min_value = int(guess)
```

## Project - Tic Tac Toe Game

New, we will write a Tic Tac Toe Game that will ask for user input from the terminal and check if someone wins the game each time we give user input. You can (probably) follow the steps:

1. Display the grid
2. Accept user input
3. Update the game grid (Based on user input)
4. Game win-checking algorithm
5. Improving game mechanism 

```python

# 1. Display the grid
counter = 0
row1 = [' ', ' ', ' ']
row2 = [' ', ' ', ' ']
row3 = [' ', ' ', ' ']

def display(row1, row2, row3):
    print(row1)
    print(row2)
    print(row3)

# 2. Accept user input
def user_choice():
    choice = input("Please enter a number (1-9): ")
    while not choice.isdigit() or (int(choice) not in range(1, 10)):
        if not choice.isdigit():
            print("Sorry, your choice is not valid.")
        else:
            print("Your choice is not within the range of 1 - 9.")
        choice = input("Please enter a number (1-9): ")
    return int(choice)

# 3. Update the game grid (Based on user input)
def getCurrentSymbol():
    global counter
    symbol_list = ['X', 'O']
    counter += 1
    return symbol_list[counter % 2]

def update_table(index):
    global row1, row2, row3
    if index in range(1, 4):
        if row1[index - 1] == ' ':
            row1[index - 1] = getCurrentSymbol()
            return True
        else:
            return False
    elif index in range(4, 7):
        if row2[index % 3 - 1] == ' ':
            row2[index % 3 - 1] = getCurrentSymbol()
            return True
        else:
            return False
    elif index in range(7, 10):
        if row3[index % 3 - 1] == ' ':
            row3[index % 3 - 1] = getCurrentSymbol()
            return True
        else:
            return False

# 4. Game win-checking algorithm

def check_winning():
    player_1_wins = False
    player_2_wins = False
    if (row1[0] == row1[1] and row1[1] == row1[2] and (row1[0] != " " and row1[1] != " " and row1[2] != " ")):
        if (row1[0] == "X"):
            player_2_wins = True
        else:
            player_1_wins = True
    elif (row2[0] == row2[1] and row2[1] == row2[2] and (row2[0] != " " and row2[1] != " " and row2[2] != " ")):
        if (row2[0] == "X"):
            player_2_wins = True
        elif (row2[0] == "O"):
            player_1_wins = True
    elif (row3[0] == row3[1] and row3[1] == row3[2] and (row3[0] != " " and row3[1] != " " and row3[2] != " ")):
        if (row3[0] == "X"):
            player_2_wins = True
        elif (row3[0] == "O"):
            player_1_wins = True
    elif (row1[0] == row2[0] and row2[0] == row3[0] and (row1[0] != " " and row2[0] != " " and row3[0] != " ")):
        if (row1[0] == "X"):
            player_2_wins = True
        elif (row1[0] == "O"):
            player_1_wins = True
    elif (row1[1] == row2[1] and row2[1] == row3[1] and (row1[1] != " " and row2[1] != " " and row3[1] != " ")):
        if (row1[1] == "X"):
            player_2_wins = True
        elif (row1[1] == "O"):
            player_1_wins = True
    elif (row1[2] == row2[2] and row2[2] == row3[2] and (row1[2] != " " and row2[2] != " " and row3[2] != " ")):
        if (row1[2] == "X"):
            player_2_wins = True
        elif (row1[2] == "O"):
            player_1_wins = True
    elif (row1[0] == row2[1] and row2[1] == row3[2] and (row1[0] != " " and row2[1] != " " and row3[2] != " ")):
        if (row1[0] == "X"):
            player_2_wins = True
        elif row1[0] == "O":
            player_1_wins = True
    elif (row1[2] == row2[1] and row2[1] == row3[0] and (row1[2] != " " and row2[1] != " " and row3[0] != " ")):
        if (row1[2] == "X"):
            player_2_wins = True
        elif (row1[2] == "O"):
            player_1_wins = True

    if player_1_wins:
        return "player 1 wins"
    elif player_2_wins:
        return "player 2 wins"
    else:
        return "no one wins"
# 5. Improving game mechanism

# start_game
def start_game():
    while True:
        display(row1, row2, row3)
        while True:
            choice = user_choice()
            if update_table(choice):
                break
            else:
                print("Wrong position to put your choice!")

        result = check_winning()
        if result == "player 1 wins":
            display(row1, row2, row3)
            print("player 1 wins!! Congrats!")
            return
        elif result == "player 2 wins":
            display(row1, row2, row3)
            print("player 2 wins!! Congrats!")
            return
        elif result == "no one wins" and counter == 9:
            display(row1, row2, row3)
            print("Tie Game!")
            return

start_game()

```

## Serialize and Deserialize

Supposedly we have two applications that run on two different physical machines. Both applications need to exchange data that is commonly used by both applications. These applications talk to each other to share the data with come mediums; these mediums could be a file-system, TCP, or UDP connections.

Any of these mediums would only understand data described in the form of a series of bits. So when one application needs to send a value 10 to another, the value ten would be sent as its binary representation 1010, and you would also pass some information that describes 1010. This information will also be a series of bits that the other application can easily understand.

Take another example, wherein these two apps need to exchange a more complex, nonprimitive data type. Let’s say they need to exchange the objects of type Book where Book is custom defined class in your application, and both the application have the definition of type Book.

How will you exchange the objects of type book between the two applications? To share the thing between two apps, you will need to convert the Book objects into a binary representation. This is where serialization comes into the picture.

With Serialization’s help, you can define how an object can be converted into its binary representation(二進位數 EX:10011). The receiving application would do the reverse process, De-Serialization, that constructs a Book object from its binary representation.

### 🔹 Serialize（序列化）

把**資料結構或物件轉換成一個格式化字串（通常是 JSON、XML、二進位）**的過程，這樣可以：

- 存到檔案中
- 傳送到網路另一端
- 存進資料庫

### 🔹 Deserialize（反序列化）

把**格式化字串（像 JSON）轉回原本的資料結構或物件**。

## Pickle and Shelve in Python

### Pickle

The Python build-in pickle module allows us to serialize and deserialize our objects and data!

In pickle, we are working with binary files; therefore, we should use open() function with rb(read binary) and wb(write binary) mode.

```python
#創建檔案
import pickle

x = 10
y = [1, 2, 3, 4]

with open("pickle_file", "wb") as p_file:
		pickle.dump(x, p_file)
		pickle.dump(y, p_file)

#讀檔案
import pickle

with open("pickle_file", "rb") as p_file:
		print(pickle.load(p_file))
		print(pickle.load(p_file))
```

Here are some common use cases of  pickle:

- Saving a program’s state date or variable to disk so that it can carry on where it left off when restarted (persistence)
- Sending python data over a TCP connection in a multi-core or distributed system.
- Storing python objects in a database. For example, since SQL database doesn’t support python dictionary data type; therefore, we can pickle it before we save it into SQL database.

What can be pickled?

Almost everything can!! String, number, dictionary, list, set nay self-made data type can be pickled. Only socket or byte code cannot.

Problems with pickle:

- Pickle is not super fast, an it doesn’t make the data size smaller. even JSON is smaller and faster than pickle.
- Pickle has a security problem. If we load a pickle file containing malicious code, then it will cause problems in our computer. Make sure you only load the pickle files from trustworthy sources.

### Shelve

Shelve builds on top of pickle and implements a serialization dictionary where objects are pickled put associated with a key (must be a string).

You can load your shelved data file and access your pickled objects via keys.

This could be more convenient were you to be serializing many objects.

Suppose we have 30000 tuples of data, then if we save those data in a single pickle file and load it, it will fill up our memory. By using shelve, we can only take out necessary data instead of loading the whole 30000 tuples into memory.

```python
#創建shelve

import shelve

integers1 = [1, 2, 3, 4, 5, 6]
integers2 = [6, 7, 8, 9, 10]
integers3 = [100, 101, 102, 103]

with shelve.open("shelve-example", 'c') as shelve:
		shelve['ints1'] = integers1
		shelve['ints2'] = integers2
		shelve['ints3'] = integers3

#讀取shelve
import shelve

with shelve.open("shelve-example", 'r') as shelve:
    for key in shelve.keys():
        print(key)
    print(shelve['ints2'])
```

Therefore, the shelve module can be used as simple persistent storage for Python objects when a relational database is an overkill. (You can consider shelve as a simple python database.)

Since everything in shelve is pickled; therefore, any object that can be pickle can be stored in shelved.

Warning!! Because the shelve module is backed by pickle, it is insecure to load a shelf from an untrusted source. Like with pickle, loading a shelf can execute arbitrary code.

# Object-Oriented Programming 物件導向的程式設計

Object-oriented programming (OOP) is a method of structuring a program by bundling related properties and behaviors into individual objects. Just like many other programming languages, Python has OOP features as well. Ther ate many built-in classes in Python, and we can create our own types as well.

A class is a code template for creating objects. Objects have properties and have behavior associated with them.  Basically, we can consider “class” as a new data type that we can create on our own, just like the built-in Python number, string, set list, dictionary, and many other data types.

The naming convention of class name is - always capitalize the first letter!

## __init__() and Method

In an object-oriented approach, the __init__() method is the Python equivalent of the C++, Java, and JavaScript constructor. The __init__() founction is called every time an object is created from a class. The __init__() method lets the class initialize the object’s attributes and serves no other purpose. It is only used within classes.

A method is a function that “belongs to” an object; the method’s first parameter will be called self (by convention). In other programming

languages, this word is called this.

```python

class Robot:
    # in classes, we can also define doctring
    """Robot class is for creating robots""" #告訴別人你的class在幹嘛
    # contructor

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        print(f"{self.name} is walking...")

    def sleep(self, hours):
        print(f"{self.name} is going to sleep for {hours} hours.")

my_robot_1 = Robot("Wilson", 25)
my_robot_2 = Robot("Grace", 26)
print(my_robot_1.__doc__) #會印出""""""裡面的字
my_robot_1.walk()
my_robot_2.sleep(15)

#result:
Wilson is walking...
Grace is going to sleep for 15 hours.
```

## Class Attribute, Static Method and Class Method

### Class Attribute

A class attribute is a Python variable that belongs to a class rather than a particular object. It is shared between all the objects of this class, and it is defined outside the constructor function (This is just like the static attribute in other programming languages.)

Class attribute belongs to the class so that we can get the attribute directly from the class itself. Class attributes can be accessed by either:

1. self.__class__.attribute ( inside method definition)
2. objectname.atrribute (outside method definition)
3. classname.attribute (try not to use this in method definition)

inside a method, when referring to the class itself, try to use self.__class__ as much as possible. Avoid hard code the class name.

```python

class Robot:
    # in classes, we can also define doctring
    """Robot class is for creating robots"""
    # contructor
    ingredient = "matal"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        print(f"{self.name} is walking...")

    def sleep(self, hours):
        print(f"{self.name} is going to sleep for {hours} hours.")

    def greet(self):
        print(
            f"Hi, my name is {self.name}, and I am made of {self.__class__.ingredient}. ")

my_robot_1 = Robot("Wilson", 25)
my_robot_2 = Robot("Grace", 26)
my_robot_1.walk()
my_robot_2.sleep(15)

print(my_robot_1.ingredient)
print(Robot.ingredient)
print(my_robot_1.__class__.ingredient)

my_robot_1.greet()

```

### Static Method and Class Method

Similarly, a static method is also a method that is bound to the class and not the object of the class; however, a static method doesn’t need self to be its first parameter.

Python also has another method called the “class method”, we give cls (stands for class) as the method’s first parameter.

What’s the benefit of using the class method over the static method? Well, if we ever change the class name, then the hard-coded classname inside the function will not work anymore. We will have to manually change all the class name inside the methods’ code if we hardcode class name.

```python
class Robot:
    # in classes, we can also define doctring
    """Robot class is for creating robots"""
    # contructor
    ingredient = "matal"

    def __init__(self, name, age):
        self.name = name
        self.age = age

    @staticmethod
    def greet():
        print("A robot say hi...")

my_robot_1 = Robot("Wilson", 25)
my_robot_2 = Robot("Grace", 26)

Robot.greet()
my_robot_1.__class__.greet()
```

```python
class Circle:
    """This class creates circle"""
    pi = 3.14159
    all_circles = []

    def __init__(self, radius):
        self.radius = radius
        self.__class__.all_circles.append(self)

    def area(self):
        return self.__class__.pi * (self.radius ** 2)

    @staticmethod
    def total_area():
        total = 0
        for circle in Circle.all_circles:
            total += circle.area()
        return total

    @classmethod
    def total_area2(cls):
        total = 0
        for circle in cls.all_circles:
            total += circle.area()
        return total

c1 = Circle(1)
print(c1.area())

c1 = Circle(10)
c2 = Circle(15)
print(c1.__class__.tatal_area())
print(c1.__class__.total_area2())

```

## Inheritance 繼承

Inheritance allows us to define a class that inherits all the methods and properties from another class. The parent class is the class being inherited from, also called the base class. The child class is the class that inherits from another class, also called the derived class.

The super() method returns a proxy object (temporary object of the superclass) that allows us to access methods of the vase class.

```python
#hardcode
class People:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sleep(self):
        print(f"{self.name} is sleeping...")

    def eat(self):
        print(f"{self.name} is eating food")

class Student(People):  # 繼承people這個class
    def __init__(self, name, age, student_ID):
        People.__init__(self, name, age)
        self.student_ID = student_ID

    def eat(self, food):  # 繼承後，可以覆蓋原本內容，這樣eat就會印出我複寫後的內容
        print(f"{self.name} is now eating {food}.")

student_one = Student("wilson", 25, 100)
student_one.eat("beaf")

```

```python
#super()
class People:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sleep(self):
        print(f"{self.name} is sleeping...")

    def eat(self):
        print(f"{self.name} is eating food")

class Student(People):  # 繼承people這個class
    def __init__(self, name, age, student_ID):
        super().__init__(name, age)
        self.student_ID = student_ID

    def eat(self, food):  # 繼承後，可以覆蓋原本內容，這樣eat就會印出我複寫後的內容
        print(f"{self.name} is now eating {food}.")

student_one = Student("wilson", 25, 100)
student_one.eat("beaf")

```

## Multiple Inheritance

In Java and JavaScript, multiple inheritances are not allowed. In C++, multiple inheritances are permitted, but it’s incredibly complicated; people avoid using it as much as possible.

Python supports multiple inheritances!! This is not special. That just means we van inherit from more than one parent class.

```python
class C:
    def do_stuff(self):
        print("hello from class C")

class D:
    def do_another_stuff(self):
        print("hello from class D")

class A(C, D):  # 多重繼承C跟D
    pass

a = A()
a.do_stuff()
a.do_another_stuff()

retrun:
hello from class C
hello from class D
```

Things become complicated if the inheritance graph is huge. For example, if we have:

The basic principle of method resolution order (MRO) uses a depth-first graph traversal algorithm. By applying the algorithm, we would get:

 A, B, C, D, E, F, G

This is the order of where a method should be looked up.

If you cannot determine the MRO, we can us the Python built-in:

- classname.mro()    #return list
- classname.__mro__   #return tuple

To figure out the order.

```python
class E:
    pass

class F:
    def do_stuff(self):
        print("doing stuff from F")

class G:
    def do_stuff(self):
        print("doing stuff from G")

class B(E, F):
    pass

class C:
    def do_stuff(self):
        print("hello from class C")

class D(G):
    pass

class A(B, C, D):
    pass

a = A()
a.do_stuff()

print(A.__mro__)
print(A.mro())

```

Why do we use this kind of algorithm to do MRO? Well, the algorithm just makes sure that each class is visited once. However, this logic doesn’t make your code easier to read or maintain.

Some people insist that multiple inheritances are a bad idea. Many tasks can be done without multiple inheritances aw well (such as Java).

However, we do get some benefits by using multiple inheritances - it allows us to avoid building profound inheritance rekations.

## C3 Linearization

Traditionally, diamond problem occurs when we do multiple inheritance. Consider this:

By applying depth first traversal, we know that the method resolution order will be:

                    D, B, A, C, A

However, we are getting duplicate A in the order; it’s very intuitive that A comes before C. Python 3 uses a new algorithm called the “C3 Linearization Algorithm.”

We won’t spend time learning what this is (since this is way out of the scope of our course); however, this C3 linearization does solve both problems; we don’t have duplicate A and C comes before A.

With C3 Linearization, the MRO of the diamond problem will be:

             D, B, C, A

## Private Attributes and Method 私有屬性和方法

In the context of class, private means the attributes or methods are only available for the class members, not for the outside of the class.

When defining private attributes and methods, we just need to add a double underscore at the front no underscore at the end; then, that attribute or method would become private.

```python
class Robot:
    def __init__(self, name):
        self.name = name
        self.__age = 25

    # private method
    def __this_is_private(self):  # 雙底線就是加密的意思
        print("Hello from private method.")

    def greet(self):
        print("Hi, I am a robot.")
        self.__this_is_private()  # 在另一個函數中才能被提取出來

my_robot = Robot("Wilson")
my_robot.greet()
my_robot.__this_is_private() #無法直接執行private method!

```

In Python, by convention, any attribute or method started with a single underscore is also provate. This is not regulated by Python, which means they are still public. This is just a comvention. (If we read the source code of Keras, then we can see this.)

However, even though we can access the attribute directly, we should still consider it as a private variable; try not to access it as mush as possible.

## OOP Style in Python

Traditionally, OOP design emphasizes information hiding; this is known as “encapsulation.” All attributes of an object should be as private as possible. The purpose of encapsulation is to prevent changing attributes of an object as that might cause an unexpected error.

When we really have to access attributes of an object, we usually define public methods called getter and setter. Traditionally, getters and setter access attributes and do some middleware work, such as changing units or checking the max and min value.

However, in Python, getter and setter are not considered Pythonic!!

```python
class Robot:
    def __init__(self, name):
        self.name = name
        self.__age = 25

    def age_setter(self, new_age):
        if new_age > 0 and new_age < 100:
            self.__age = new_age
        else:
            print("New age setting is invalid.")

    def age_getter(self):
        print(self.__age)

my_robot = Robot("Wilson")
my_robot.age_setter(59)
my_robot.age_getter()  # 無法直接執行private method!

```

Then, we might have a question - how do we prevent outsiders from randomly accessing and changing the inner attributes of  objects? In the Python community, a famous saying is , “We are all consenting adults” That means we trust each other; is someone wants to make chaos, they have to be responsible for their decision.

That’s why we see both single and double underscore can be used for private attributes.

The difference between Python OOP and traditional OOP highlights the concepts of Python and other programming languages. Traditional OOP emphasizes error prevention and information hiding; in the other hand, Python focuses on readability.

## @property decorator

Sometimes, when we are accessing or assigning an attribute of an object, we don’t want to access or assign it directly. For example, 

- When we have to change the unit from Celsius to Fahrenheit.
- When we need to check if the value assignment is within a certain range.

Traditionally, this done by getters and setters in other programming languages.

@property decorator is a built-in decorator in Python, which is helpful in defining virtual properties effortlessly.

```python
class Employee:
    def __init__(self):
        self.income = 0

    def earn_money(self, money):
        self.income += money

    @property
    def tax_amount(self):
        return self.income * 0.05

    @tax_amount.setter
    def tax_amount(self, tax_number):
        self.income = tax_number * 20

wilson = Employee()
wilson.tax_amount = 200
print(wilson.income)

```

## The Mighty Hash Function

A hash is a function that converts one value to another. In Python, there’s a built-in hash() function. For example, we can do:

                hash(”How are you doing today?”)

Then it will return 6941904779894686356.(some kind of integer)

or, we can do :

                 hash(”hello”)

Then it will return 8027212646858338501.(another integer)

In Python, the hash function basically returns a fixed-sixed integer.

```python
a = 100
b = "This is just a string."
c = 1.0
d = True
e = None

print(hash(a), hash(b), hash(c), hash(d), hash(e))

```

What can be hashed in Python? The Python hashable data types are integers, float, string, boolean, tuple, and None. All elements in the tuple need to be hashable so that the tuple can be hashable.

Most of Python’s immutable built-in objects are hashable; mutable containers (such as lists or dictionaries) are not; immutable containers (such as tuples) are only hashable if their elements are hashable.

Objects which are instances of user-defined classes are hashable by default.(But we can define the hash value by implementing the __hash__() method.)

The following data types are not hashable: set. list, dictionary.

The two ideas, hashable and immutable, are related because objects which are used as hash keys must typically be immutable, so their hash value doesn’t change.

If it were allowed to change, then the location of that object in a data structure such as a hashtable would change, and then the whole purpose of hashing for efficiency is defeated.

Here are some key features of a good hash function:

1. Consistent - each time we give the same input to the hash() function, we need to get the same output.
2. Distributed Evenly - a small change in input should result in a huge difference in ooutput. This will reduce the number of hash collisions.(Hash collision means 2 different input gives the same output.)
3. Not invertible - this function should not be invertible for security purposes.

We won’t learn how to create our own hash function in this course. This in not the main focus here. If interested, you can learn more about hash function in algorithms and data structure class.

Note that the hash of a value only needs to be the same for one run of Python. In Python 3.3, they will, in fact, change for every new run of Python.

This is to make it harder to guess what hash value a particular string will have, which is an important security feature for web applications etc.

Hash values should therefore not be stored permanently. If we need to use hash values in a permanent way, we can take a look at the more “serious” types of hashes, cryptographic hash Elliptic Curve Cryptography.

The idea of hash function is widely used in the real world. For example, 

- Passwords are hashed before they stored in the database. By that, even someone hacks into the system, they cannot see the password. Also, they cannot do any reverse engineering since the hash function is not invertible.
- Hashtable uses hash function. In Python, dictionary and set both implements hashtable. Therefore, when doing value look-up (by using the membership operator in) in dictionary and set the speed is constantly fast regardless of the size of dictionary or set. (However, list look-up time depends on the size of the list. The bigger the list is, the longer it takes.)

## __hash__() function

As we mentioned before, any object that implements the __hash__() function can be used as a key for dictionary.

An easy, correct way to implement __hash__() is to use a key tuple. We can just return the hashed value of the key.

Also, Python automatically calls the __eq__() method of a class when you use the == operator to compare the instances of the class.

Therefore, in our class, we should implement this __eq__() method by:

1. Check if the type matches
2. Check if the key() matches

```python
class Robot:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address

    # define a private method __key()
    def __key(self):
        return (self.name, self.age, self.address)

    # implement __hash__() function
    def __hash__(self):
        return hash(self.__key())

    def __eq__(self, other):
        if isinstance(other, Robot):
            return self.__key() == other.__key()
        return NotImplemented

robot1 = Robot("wilson", 25, "Taiwan")
robot2 = Robot("wilson", 25, "Taiwan")
print(robot1 == robot2)

```

## 補充

我很快補充一下，__hash__以及__eq__兩者的關係。在Python當中，如果有寫__eq__，則一定要寫__hash__。詳細規則可以參考：[https://docs.python.org/3.5/reference/datamodel.html#object.__hash__](https://docs.python.org/3.5/reference/datamodel.html#object.__hash__)

在之前的課程有提過，User-defined Class has __hash__ by default。意思是指，如果我們不寫__hash__，我們自製的class所製作出的物件，也可以當作dictionary的key：

[](https://assets.f5ezcode.in/temps/rn78hj708lxjwly)

然而，如果我們直接寫__eq__，則會發生問題：

1. 
    
    [](https://assets.f5ezcode.in/temps/lxca1j2izbqydcn)
    

這裡會出現錯誤：

1. 
    
    [](https://assets.f5ezcode.in/temps/nzhqif6werxnp6s)
    

之所以有錯誤的原因是因為，如果只有寫__eq__而沒有寫__hash__，Python會把__hash__() 設定成 None，所以我們的物件變成unshashable，再也無法當作dictionary的key使用。

綜合以上原因，我們知道，單純的情況下，不寫__hash__，物件還是可以當作dictionary的key來使用。但在有寫__eq__的情況下，寫__hash__其必要性。至於__hash__的撰寫方式，在Python的documentation也有說明，通常是將屬性放入tuple內部，用內建的hash()去預算數值。如同上支影片的內容：

1. 
    
    [](https://assets.f5ezcode.in/temps/mp69evga8crqjdc)
    

這樣程式碼就不會出問題了。

## Dunder or Magic Methods

Dunder or magic methods in Python are the methods having two prefixes and suffix underscores in the method name. Dunder here means “Double Under (Underscores)”. These are commonly used for operator oberloading.

Besides the __init__, __eq__, __hash__ we learned, the following list is some dunder methods we can implement in Python classes:

- __len__
- __str__ (user-readable string)
- __repr__ (stands for representation)
- __add__
- __gt__ (great than)
- __ge__ (great than or equal to)
- __It__ (less than)
- __Ie__ (less than or equal to)

__str__() is used for creating output for end user while __repr__() is mainly used for debugging and development. __repr__() goal is to be unambiguous and __str__() is to be readable.

The python built-in print method looks for the string method of the object.

```python
class Robot:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address

    # define a private method __key()
    def __key(self):
        return (self.name, self.age, self.address)

    # implement __hash__() function
    def __hash__(self):
        return hash(self.__key())

    def __eq__(self, other):
        if isinstance(other, Robot):
            return self.__key() == other.__key()
        return NotImplemented

    def __len__(self):
        # return len(self.name) #name的長度
        return self.age  # 它的長度就是他有多老

    # 不定義str function的話 就會回傳這個函數的記憶體位置
    def __str__(self):
        return f"{self.name} is now {self.age} years old, living in {self.address}."

    # debug
    def __repr__(self):
        return f"name: {self.name}, age: {self.age}, address: {self.address}"

    # 定義兩個機器人相加
    def __add__(self, other):
        if isinstance(other, Robot):
            return self.age + other.age
        return NotImplemented

    # 定義比較運算子
    def __gt__(self, other):
        if isinstance(other, Robot):
            return self.age > other.age
        return NotImplemented

robot1 = Robot("wilson", 25, "Taiwan")
robot2 = Robot("shelly", 27, "Taiwan")
print(robot1 > robot2)

```

# Modules and Packages

## Modules

For small programs, it’s okay to put all codes in a single .py file.

However, if we put al codes together for large programs, it will be hard to write and maintain the codes. It would also be hard for a team to work together.

Python allows us to divide codes into many different files (the file is called a module). The benefits of doing this include:

- Modules are reusable.
- We can have neat and shorter codes in each module.
- Files ate more organized.
- Easier to maintain codes.

```python
try.py
from another_module import one_func, two_func

def hello():
    print("this is a hello")

one_func()
two_func()
hello()

```

```python
another_module
def one_func():
    print("Hello from another module.")

def two_func():
    print("Here's another fuction from another module.")

```

```python
from myPackage import some_code, some_more_code
from myPackage.sub_package import hello

some_code.some_code()
some_more_code.some_more_code()
hello.small_hello()

```

## Different Ways of Import

Python supports different syntax import.

1. import moduleName
2. import moduleName as something (把module的名稱簡寫成something)
3. from moduleName import * (星號表示涵蓋這個module全部的內容)
4. from moduleName import one Function, anotherFunction, ……

There are some advantages and disadvantages for each syntax:

1. It’s a good way to import but might clutter the code further down with the long module name and decrease readability in those places.
2. This is usually the most common way to import modules and packages in Python. (Highly Recommended!!)
3. It give us no chance to see the relations between functions in our code. For example, form module import * and from module import functionA, functionB, if we choose the first one, and use functionA and functionB in our code, then we won’t be able to see the relations between those 2 functions.
Also, the names of an import may shadow names from earlier imports. This is another problem.
4. This overloads our short-term memory. Also, we get the shadow problem above.

*The shadow problem can be solved by from… import …as … syntax. 

## Module Searching

When we start executing a Python code, one of the things it creates automatically is a list that contains all of the directories it will use to search for modules when importing. This list is available in a variable named sys.path .

Where should we put our self-defined modules? Well, we could do:

1. Put modules in one of the directories of sys.path
2. Put modules in the main program.
3. Change sys.path so that it contains the directory of our self-made module.

Approach 1 is the simplest. According to the Anaconda forum, we can put our modules in C;/somepathhere/anaconda/lib/pythonX.X/site-packages since it’s always on sys.path.

Approach 2 is also very simple, but modules are not shared between different programs.

Approach 3 can be done by:

1. use sys.path.append() method each time when we need to import the code. This is not very convenient, since we might need to go back to all codes and change the argument of the append() method.
2. Change the PYTHONPATH environment variable in our computer. Not hard, just google how to do it according to the OS you have.
3. Go to anywhere in sys.path and create a [sitecustomize.py](http://sitecustomize.py) in that directory.

## Namespace 命名空間

We learned about the LEGB scoping rules in Python. After learning the concepts of modules, we can understand scopes in Python with deeper meanings.

A namespace is a collection of currently defined names along with information about the object that each name references.

A scope defines which namespaces will be looked in and in what order.

The scope of any reference always starts in the local namespace and moves outwards until it reaches the module’s global namespace, before moving on to the bulletins, which is the end of the search.

There are 3 main types of namespace in Python:

1. built-in namespace
2. global namespace
3. local namespace

Each time we execute our Python code, the Python interpreter will automatically import a __builtins__module. This module contains Python built-in functions, such as len(), int(), range(), str(), and so on.

```python
#找出這個module有什麼function
print(dir(__builtins__))

```

Therefore, the reason why we can use all those built-in methods is because, Python import the __builtins__ behind the scene.

If we need any Python functions that’s not in the __builtins__module, then we just need to import it, since Python only import this module for us. For example, we have to import sys to get the argv and path.

The benefits of to compile and run default.

1. There is less to compile and run by default.
2. Clean and neat namespace.

The global namespace contains any names defined at the level of the main program, and all modules that we import.

The local namespace includes localnames inside a function. Local namespace is created when a function is called, and it only lasts until the function returns or terminates.

Python provides built-in functions called globals() and locals() that allow you to access global and local namespace dictionaries.

*The built-in namespace doesn’t behave like a dictionary. Python implements it a module.

*Python global and local namespaces are dictionaries.

The LEGB rules in Python is:

1. Check the local namespace.
2. Check the global namespace.
3. Check the built-in namespace.
4. Nothing found, throw NameError exception.

## If __name__ == ”__main__”:

In real life Python codes, it’s very often to see

          if __name__ == “__main__”:

People use if __name__ == “__name__” block to allow or prevent parts of code from being run when modules are imported. Also, this is very convenient for development purposes.

When the Python interpreter reads a file, the __name__ variable in the global nem

espace dictionary is set as 

1. “__main__” if the code is being run directly.
2. the module’s name if it is imported.

```python
one.py
print("We are running codes in one.py now!!")

def get_name():
    print(__name__)

# 在two.py 如果沒有用one.another_function就不會被執行

def another_function():
    print("HI! This is another function.")

if __name__ == '__main__':
    print("We are running one.py directly.")
    get_name()
else:
    print("one.py is veing imported")
    get_name()

```

```python
two.py
import one
print("We are running codes in two.py now!!")

def get_name():
    print(__name__)

if __name__ == '__main__':
    print("We are running two.py directly.")
    get_name()
    one.get_name()

one.another_function()

```

## PyPI and Pip

A Package is a directory that can contain multiple Python modules.

There are tons of Python packages written by people worldwide; the exciting fact about this is - we can freely download them online!!

PyPI (stands for Python Package Index) is an online software repository that deals with python packages. PyPI is hosted by Python Software Foundation.

Pip is a package-management software installed in your computer (with Python) that is connected to PyPl; we can use the pip command to download and install packages directly from PyPl. For example, if we want to install numpy(numeric Python), then we do:

          pip install numpy

Later, if numpy publish a new version, we can do:

        pip install - upgrade numpy

Or, if we want to install a specific version of numpy, we can do:

        pip install numpy == 1.22.2

Or, if we want to install numpy that is greater than a specific version, we can do:

        pip install numpy >= 1.22.2

If we want to check version of python modules, we can do:

        pip freeze
