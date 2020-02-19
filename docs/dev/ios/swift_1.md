---
layout: Post
title: Swift 기초 [Type과 Optional 이해하기]
category: Swift
date: '2020-02-04'
sidebar: auto
tags: ['swift', 'iOS']
---

## (1) Constant & Variable

- Contant 상수 : 한 번 값이 대입되면 바꿀 수 없는 값

```swift
let name = "Yongtae"
```

- Variable 변수

```swift
var age = 27
```

- 가급적 var보다는 __let의 사용을 권장한다.__

- Why? 
	- 고려해야할 변수가 적다.
	- 코드의 가독성이 좋다.

## (2) Type Annotation / Type Interface

- Type Annotation

```swift
var message: String // String 타입임을 명시
let age: Int // Int 타입임을 명시
```

- Swift는 Type-Safe Language다!
	- Compile 단계에서 type checking 수행
- Type Interface 
	- type을 명시하지 않아도 처음 대입되는 값을 compiler가 분석하여 type을 추론한다.

```swift
var message = "hello" // String 타입임을 추론
```

## (3) Console 출력

- print 함수

```swift
let msg1 = "Hello,"
let msg2 = "World!"
print(msg1) // Hello,
print(msg1, msg2) // Hello, World!
print("\(msg1) Yongtae!") // Hello, Yongtae!
```

- Foundation의 NSLog : objective-c에서 쓰이던 문법으로 레거시 코드에서 흔히 발견 가능

```swift
NSLog("Hello, \(msg2)")
```

## (4) 여러가지 Type들


* __Value Type vs Reference Type__

	- 모든 타입을 크게 Value Type / Reference Type 두 가지로 나눌 수 있다.
	- 각각이 다른 언어의 Call by Value / Call by Refernce에 대응된다고 이해했다.

||Value Type|Reference Type|
|:---:|:---|:---|
||- 선언 시 사용한 상수, 변수 외엔 참조 불가<br>- 함수, 메소드 인자로 넘어가거나 return되면 복사됨<br>- 사본을 수정해도 원본에 영향없음|- 선언 시 사용한 상수, 변수 외에도 참조가 가능<br><br>- 사본을 변경하면 원본이 한꺼번에 변경|
|복사|값 자체가 복사 각각의 instance 생성|reference가 대입, 같은 instance 가리킴|
|대입|새로운 변수나 상수에 대입되면 복사됨|새로운 상수, 변수에 대입되면 참조|
|member값 변경| let인 경우는 불가 | let,var 둘 다 가능 |
|해당 요소| enum / struct | class / function |
|대표적인 것| String, Array, Dictionary | Class로 선언된 객체|

- let으로 reference type의 instance를 선언하더라도 멤버 변수들은 수정이 가능하다!
- __Copy on Write__ 란?
	- 복사를 매번 하는 것이 아니라 복사본의 변경 유무를 판단하여 기존 값을 재사용하거나 필요하다면 그 때 복사를 하는 것
- Value Type의 장점
	- Dereference과정이 필요가 없기 때문에 속도 면에서 더 빠르다.
	- __Mutability 제어__가 강력하다. let으로 선언하면 절대 못 바꾼다! ==> 함수형 언어에 더 적합하게 사용 가능하다.
- Integers
	- Int8, Int16, Int32, Int64
	- UInt8, UInt16, UInt32, UInt64
- Floating Point Numbers
	- __Float__ : 32bit
	- __Double__ : 64bit

* Type Inference : 타입유추가 가능하지만 명시하면 compile time에 도움이 된다.
* Numberic Type Conversion : Type Casting (x) type이 다른 경우에 새로운 value를 생성해서 계산해주어야 한다.
* Boolean
	- 1과 true가 다른 점이 큰 차이! (다른 언어와 달리..)

> 잘못된 예시

```swift
let i = 1 
if i {
	// i가 Int로 추론되기 때문에 사용 불가!
}
```

* Tuple


## (5) Optionals란?

- Optional의 의미: 값이 존재하지 않을 수도 있다!
	- 즉, nil값을 가질 수도 있다. 


- var x: Int? ( var x: Int | nil )
- optional 변수는 값을 명시적으로 초기화해주지 않으면 nil로 초기화된다.

- __의미적으로 특정 type의 값을 저장하는 상자라고 이해할 수 있다.__

- Optional 변수를 그대로 사용해서는 안되며, __unwrapping 과정이 항상 필요하다.__

::: tip Unwrapping이란?
- 상자의 포장을 벗겨 실제 데이터를 가져오는 것!
:::

::: tip Swift는 어떻게 코딩하는 게 좋을까?   	

- 매우 강력한 Type Checking 기능을 가지고 있다. 그러므로 항상 Type에 신경써야한다.
- var는 최소한! let을 늘리자!
- 값의 부재가능성이 없다면 Optional 사용하는 것은 자제하자.
:::