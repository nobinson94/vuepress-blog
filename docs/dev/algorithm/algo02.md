---
layout: post
title: Trie 알고리즘 - BOJ 5052. <전화번호 목록>
category: dev/algorithm
date: '2019-09-26'
tags: ['trie', '백준']
---

백준 온라인 저지에 올라온 [5052번 문제 <전화번호 목록>](https://www.acmicpc.net/problem/5052)을 풀어보면서 Trie 알고리즘에 대해서 알아보도록 하겠습니다.

먼저 Trie 알고리즘에 대해서 설명하겠습니다.

### Trie 알고리즘

가장 단순한 문자열 비교를 먼저 생각해 보겠습니다.
N개의 원소를 가지는 최대 길이 M의 문자열들의 집합 X 에서 M 이하의 길이를 가지는 문자열 A가 X의 부분집합이 되는지를 검사하려면 최악의 경우 O(NM)의 시간이 걸립니다.

시간 복잡도를 줄이기 위해서 생각할 수 있는 방법 중 하나는 문자열 집합 X의 문자열들을 정렬한 뒤 이진탐색을 사용하는 것입니다. 정수형 자료형의 경우 이진탐색을 사용하면 log(N)의 시간에 검색

여기서 Trie 알고리즘을 사용해서 획기적으로 시간 복잡도를 단축시킬 수 있습니다.
Trie는 문자열 검색을 빠르게 돕습니다.

### 문제풀이 : 5052번 <전화번호 목록>
---
